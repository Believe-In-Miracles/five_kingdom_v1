import React, { useState, useEffect } from "react";


import flagAnhur_img from "../assets/image/flag_anhur.png";
import flagApes_img from "../assets/image/flag_apes.png";
import flagAres_img from "../assets/image/flag_ares.png";
import flagKnights_img from "../assets/image/flag_knights.png";
import flagUndead_img from "../assets/image/flag_undead.png";

import tree_img from "../assets/image/tree.png";
import stone_img from "../assets/image/stone.png";
import gold_img from "../assets/image/gold.png";
import tool1_img from "../assets/image/tool1.png";
import tool2_img from "../assets/image/tool2.png";
import mercenariesImg from "../assets/image/mercenaries.png";

import catapultImg from "../assets/image/tool1.png";
import ballistaImg from "../assets/image/tool2.png";
import woodenCastle from "../assets/image/handoftheking/woodenCastle.png";
import stoneKeep from "../assets/image/handoftheking/stoneKeep.png";
import stoneCastle from "../assets/image/handoftheking/stoneCastle.png";
import royalCastle from "../assets/image/handoftheking/royalCastle.png";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import MarketplaceModal from "./MarketplaceModal";
import { marketData } from "../utils/marketData";
import { kingAddress } from "../utils/kingAddress";

import { NotificationContainer, NotificationManager } from 'react-notifications';
import "react-notifications/lib/notifications.css";

import * as backendAPI from "../utils/backendAPI";
import { Tooltip } from "flowbite-react";

function Marketplace(walletAddress) {
    const [detailModalOpen, setDetailModalOpen] = useState(false);
    const [marketType, setMarketType] = useState('catapult');
    const [myResource, setMyResource] = useState({});
    const [selectKingdom, setSelectKingdom] = useState(0);
    const [allResources, setAllResources] = useState([]);
    const [kingdomNumber, setKingdomNumber] = useState(0);
    const [tradeType1, setTradeType1] = useState(0);
    const [tradeType2, setTradeType2] = useState(0);

    const [tradeAmount1, setTradeAmount1] = useState(0);
    const [tradeAmount2, setTradeAmount2] = useState(0);

    const resourceType = ['wood', 'stone', 'gold'];

    const toolType = ['catapult', 'ballista', 'mercenaries', 'woodenCastle', 'stoneKeep', 'stoneCastle', 'royalCastle'];

    const navigate = useNavigate();

    useEffect(() => {
        let flag = false;
        for (let i = 0; i < kingAddress.length; i++) {
            if (kingAddress[i].toString().toLowerCase() == walletAddress['walletAddress'].toString().toLowerCase()) {
                flag = true;
                setKingdomNumber(i + 1);
                i = kingAddress.length;
            }
        }
        if (!flag) {
            navigate("/");
        }
        if (walletAddress != "") {
            getAllResources(walletAddress);
        }
    }, [walletAddress]);

    const submitTrade = async () => {
        if (tradeAmount1 <= (allResources[kingdomNumber - 1] ? allResources[kingdomNumber - 1][resourceType[tradeType1]] : 0) && tradeAmount1 >= 0 && tradeAmount2 <= (allResources[selectKingdom - 1] ? allResources[selectKingdom - 1][resourceType[tradeType2]] : 0) && tradeAmount2 >= 0) {
            if (tradeAmount1 != 0 || tradeAmount2 != 0) {
                if (myResource[resourceType[tradeType1]] >= tradeAmount1 && allResources[selectKingdom - 1][resourceType[tradeType2]] >= tradeAmount2) {
                    if (selectKingdom >= 1) {
                        let data = {
                            kingdom1_id: kingdomNumber,
                            kingdom2_id: selectKingdom,
                            type1: tradeType1,
                            type2: tradeType2,
                            amount1: parseInt(tradeAmount1),
                            amount2: parseInt(tradeAmount2),
                            finished: 0
                        }
                        try {
                            let res = await backendAPI.createTrade(data);
                            let resource_data = await res.json();
                            console.log("Trade Data", data);
                            NotificationManager.success("Transaction created successfully!");
                        } catch (e) {
                            NotificationManager.error("Error, try again!");
                        }
                    } else {
                        NotificationManager.error('Have to select one kingdom.');
                    }
                } else {
                    NotificationManager.error('The kingdom does not have enough resources.');
                }
            } else {
                NotificationManager.error('The transaction amount must be a number between 0 and 500.');
            }
        } else {
            NotificationManager.error('The transaction amount must be equal to or less than the available resources.');
        }
    }

    const getAllResources = async (walletAddress) => {
        // console.log(walletAddress);
        let res = await backendAPI.getResourcesByAddress(null);
        let resource_data = await res.json();

        for (let i = 0; i < resource_data.length; i++) {
            if (resource_data[i]['walletAddress']) {
                if (resource_data[i]['walletAddress'].toString().toLowerCase() == walletAddress['walletAddress'].toString().toLowerCase()) {
                    setMyResource(resource_data[i]);
                }
            }
            let defenseValue_temp = 0;
            let attackValue_temp = 0;

            for (let j = 0; j < toolType.length; j++) {
                attackValue_temp += resource_data[i][toolType[j]] * marketData[toolType[j]]['attack'];
                defenseValue_temp += resource_data[i][toolType[j]] * marketData[toolType[j]]['defense'];
            }
            resource_data[i]['totalAttack'] = attackValue_temp;
            resource_data[i]['totalDefense'] = defenseValue_temp;
        }
        setAllResources(resource_data);
    };

    const closeModal = () => {
        setDetailModalOpen(false);
    };

    const buyRequest = async () => {
        setDetailModalOpen(false);
        let buy_flag = true;
        for (let i = 0; i < resourceType.length; i++) {
            if (myResource[resourceType[i]] < marketData[marketType]['buy'][resourceType[i]]) {
                buy_flag = false;
            }
        }
        if (buy_flag) {
            let data = {
                walletAddress: walletAddress['walletAddress'],
                kingdomNumber: kingdomNumber,
                type: 0,
                resources: marketData[marketType]['buy'],
                marketType: marketType
            }
            let res = await backendAPI.tradeTool(data);
            if (res.ok) {
                NotificationManager.success("Transaction created successfully!");
                getAllResources(walletAddress);
            } else {
                NotificationManager.error('Some error arised, please try again!');
            }
        } else {
            NotificationManager.error('Your kingdom does not have enough resources');
        }
        // alert("accept request");

    };

    const sellRequest = async () => {
        setDetailModalOpen(false);
        // console.log("sell", marketData[marketType]['sell']);
        if (myResource[marketType] > 0) {
            let data = {
                walletAddress: walletAddress['walletAddress'],
                kingdomNumber: kingdomNumber,
                type: 1,
                resources: marketData[marketType]['sell'],
                marketType: marketType
            }
            let res = await backendAPI.tradeTool(data);
            if (res.ok) {
                NotificationManager.success("Transaction created successfully!");
                getAllResources(walletAddress);
            } else {
                NotificationManager.error('Some error arised, please try again!');
            }
        } else {
            NotificationManager.error('Your kingdom does not have enough ' + marketData[marketType]['title']);
        }
        // alert("decline request");
    };

    const openModal = (str) => {
        setMarketType(str);
        setDetailModalOpen(true);
    };

    const changeResourceType1 = () => {
        let temp = tradeType1;
        temp++;
        if (temp > 2) {
            temp = 0;
        }
        setTradeType1(temp);
    };

    const changeResourceType2 = () => {
        let temp = tradeType2;
        temp++;
        if (temp > 2) {
            temp = 0;
        }
        setTradeType2(temp);
    };

    const modalData = {
        title: "Catapult",
        defense: 0,
        attack: 500,
        buy: {
            wood: 200,
            stone: 50,
            gold: 50
        },
        sell: {
            wood: 100,
            stone: 25,
            gold: 25
        }
    }

    return (
        <div className="p-[5vw] pt-12 pb-0 text-white">

            {detailModalOpen && <MarketplaceModal modalData={marketData[marketType]} closeModal={closeModal} buyRequest={buyRequest} sellRequest={sellRequest} />}
            <div className=" pl-[2%] pr-[2%]">
                <p className="text-[#fe004d] text-[46px] md:text-[52px] lg:text-[60px] font-serif text-center tracking-wider">
                    Marketplace
                </p>
                <div className="block lg:grid grid-cols-2 grid-flow-col mt-12">
                    <div className="col-span-1 min-h-[400px] lg:mr-8">
                        <div className="border-4 border-[#595959] p-4">
                            <div className="-mt-[40px]">
                                <span className="text-[#fe004d] text-[20px] md:text-[22px] lg:text-[24px] font-serif bg-black p-4">
                                    available resources
                                </span>
                            </div>
                            <div className="mt-1">
                                <div className="block lg:grid grid-cols-3 grid-flow-col mt-4">
                                    <div className="col-span-1 flex flex-col text-center items-center justify-center font-bold text-[24px]">
                                        <img src={tree_img} className="w-[150px]" alt=""></img>
                                        <p>{myResource['wood'] ? myResource['wood'] : '0'}</p>
                                    </div>
                                    <div className="col-span-1 flex flex-col text-center items-center justify-center font-bold text-[24px]">
                                        <img src={stone_img} className="w-[150px]" alt=""></img>
                                        <p>{myResource['stone'] ? myResource['stone'] : '0'}</p>
                                    </div>
                                    <div className="col-span-1 flex flex-col text-center items-center justify-center font-bold text-[24px]">
                                        <img src={gold_img} className="w-[150px]" alt=""></img>
                                        <p>{myResource['gold'] ? myResource['gold'] : '0'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-4 border-[#595959] p-4 mt-8">
                            <div className="-mt-[40px]">
                                <span className="text-[#fe004d] text-[20px] md:text-[22px] lg:text-[24px] font-serif bg-black p-4">
                                    buy & sell
                                </span>
                            </div>
                            <div className="mt-1">
                                <div className="block lg:grid grid-cols-3 grid-flow-col p-[5%]">
                                    <div className="col-span-1 text-center flex flex-col items-center cursor-pointer" onClick={() => openModal(toolType[0])}>
                                        <img src={catapultImg} className="w-[120px]" alt=""></img>
                                        <span className="-mt-1">{myResource[toolType[0]]}</span>
                                        <p className="text-white text-[18px]">Catapult</p>
                                    </div>
                                    <div className="col-span-1 text-center flex flex-col items-center cursor-pointer" onClick={() => openModal(toolType[1])}>
                                        <img src={ballistaImg} className="w-[120px]" alt=""></img>
                                        <span className="-mt-1">{myResource[toolType[1]]}</span>
                                        <p className="text-white text-[18px]">Ballista</p>
                                    </div>
                                    <div className="col-span-1 text-center flex flex-col items-center cursor-pointer" onClick={() => openModal(toolType[2])}>
                                        <img src={mercenariesImg} className="w-[120px]" alt=""></img>
                                        <span className="-mt-1">{myResource[toolType[2]]}</span>
                                        <p className="text-white text-[18px]">Mercenaries</p>
                                    </div>
                                </div>
                                <div className="block lg:grid grid-cols-3 grid-flow-col p-[5%] pt-[1%]">
                                    <div className="col-span-1 text-center flex flex-col items-center justify-end cursor-pointer" onClick={() => openModal(toolType[3])}>
                                        <img src={woodenCastle} className="w-[120px]" alt=""></img>
                                        <span className="-mt-1">{myResource[toolType[3]]}</span>
                                        <p className="text-white text-[18px]">Wooden Castle</p>
                                    </div>
                                    <div className="col-span-1 text-center flex flex-col items-center cursor-pointer" onClick={() => openModal(toolType[4])}>
                                        <img src={stoneKeep} className="w-[120px]" alt=""></img>
                                        <span className="-mt-1">{myResource[toolType[4]]}</span>
                                        <p className="text-white text-[18px]">Stone Keep</p>
                                    </div>
                                    <div className="col-span-1 text-center flex flex-col items-center justify-end cursor-pointer" onClick={() => openModal(toolType[5])}>
                                        <img src={stoneCastle} className="w-[120px]" alt=""></img>
                                        <span className="mt-1">{myResource[toolType[5]]}</span>
                                        <p className="text-white text-[18px]">Stone Castle</p>
                                    </div>
                                </div>
                                <div className="text-center flex flex-col items-center p-[5%] pt-[1%] cursor-pointer" onClick={() => openModal(toolType[6])}>
                                    <img src={royalCastle} className="w-[120px]" alt=""></img>
                                    <span className="mt-1">{myResource[toolType[6]]}</span>
                                    <p className="text-white text-[18px]">Royal Castle</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 min-h-[400px] lg:mr-8 mt-8 md:mt-0">
                        <div className="border-4 border-[#595959] p-4 h-full">
                            <div className="-mt-[40px]">
                                <span className="text-[#fe004d] text-[20px] md:text-[22px] lg:text-[24px] font-serif bg-black p-4">
                                    trade
                                </span>
                            </div>
                            <div className="m-4 mt-0 px-[5%] flex flex-col items-center justify-center h-full">
                                <div>
                                    <div>
                                        <p className="text-[22px] mt-8">
                                            Step 1: Select Kingdom to send trade request
                                        </p>
                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-[5%]">
                                            <img src={flagAnhur_img} onClick={() => { setSelectKingdom(1); }} className={(selectKingdom === 1 ? 'opacity-100' : 'opacity-50') + ` hover:opacity-100` + (kingdomNumber === 1 ? ' hidden' : ' block')} alt=""></img>
                                            <img src={flagApes_img} onClick={() => { setSelectKingdom(2); }} className={(selectKingdom === 2 ? 'opacity-100' : 'opacity-50') + ` hover:opacity-100` + (kingdomNumber === 2 ? ' hidden' : ' block')} alt=""></img>
                                            <img src={flagAres_img} onClick={() => { setSelectKingdom(3); }} className={(selectKingdom === 3 ? 'opacity-100' : 'opacity-50') + ` hover:opacity-100` + (kingdomNumber === 3 ? ' hidden' : ' block')} alt=""></img>
                                            <img src={flagKnights_img} onClick={() => { setSelectKingdom(4); }} className={(selectKingdom === 4 ? 'opacity-100' : 'opacity-50') + ` hover:opacity-100` + (kingdomNumber === 4 ? ' hidden' : ' block')} alt=""></img>
                                            <img src={flagUndead_img} onClick={() => { setSelectKingdom(5); }} className={(selectKingdom === 5 ? 'opacity-100' : 'opacity-50') + ` hover:opacity-100` + (kingdomNumber === 5 ? ' hidden' : ' block')} alt=""></img>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <p className="text-[22px]">Step 2: Resources to send</p>
                                        <div className="block lg:grid grid-cols-2 grid-flow-col text-center mt-4 gap-4">
                                            <div className="col-span-1 cursor-pointer" onClick={() => { changeResourceType1(); }}>
                                                <p>Resource:</p>
                                                <p className="text-[20px] bg-[#262626] border border-white mt-1 p-2">{resourceType[tradeType1]}</p>
                                            </div>
                                            <div className="col-span-1">
                                                {/* {console.log("ALL", allResources[kingdomNumber-1])} */}
                                                <p>Quantity (max {allResources[kingdomNumber - 1] ? allResources[kingdomNumber - 1][resourceType[tradeType1]] : '0'}):</p>
                                                <input type="number" id="first_name" class="text-[20px] text-center bg-[#262626] border placeholder:text-white border-white mt-1  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required onChange={(e) => setTradeAmount1(e.target.value)}></input>
                                                {/* <p className="text-[20px] bg-[#262626] border border-white mt-1">250</p> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <p className="text-[22px]">Step 3: Resources to receive</p>
                                        <div className="block lg:grid grid-cols-2 grid-flow-col text-center mt-4 gap-4">
                                            <div className="col-span-1 cursor-pointer" onClick={() => { changeResourceType2(); }}>
                                                <p>Resource:</p>
                                                <p className="text-[20px] bg-[#262626] border border-white mt-1 p-2">{resourceType[tradeType2]}</p>
                                            </div>
                                            <div className="col-span-1">
                                                <p>Quantity (max {allResources[selectKingdom - 1] ? allResources[selectKingdom - 1][resourceType[tradeType2]] : '0'}):</p>
                                                <input type="number" id="first_name" class="text-[20px] text-center bg-[#262626] border placeholder:text-white border-white mt-1  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required onChange={(e) => setTradeAmount2(e.target.value)}></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-12 flex justify-center">
                                        <span className="bg-[#ff004b] text-white text-lg p-3 px-4 font-semibold rounded-lg cursor-pointer" onClick={() => { submitTrade(); }}>Submit trade request</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="min-h-[400px] border-4 border-[#595959] p-4 mt-12 hidden lg:block">
                    <div className="-mt-[40px]">
                        <span className="text-[#fe004d] text-[20px] md:text-[22px] lg:text-[24px] font-serif bg-black p-4">
                            kingdom stats
                        </span>
                    </div>
                    <div className="mt-8 mr-8 mb-4">
                        {allResources.length > 0 && <table className="table-auto text-center border-collapse w-full mt-2 leading-10">
                            <thead>
                                <tr className="bg-[#595959]">
                                    <th className="bg-black"></th>
                                    <th className="border border-slate-300">
                                        % Staked
                                    </th>
                                    <th className="border border-slate-300">
                                        Territories
                                    </th>
                                    <th className="border border-slate-300">
                                        Attack Score
                                    </th>
                                    <th className="border border-slate-300">
                                        Defense Score
                                    </th>
                                    <th className="border border-slate-300">
                                        Total Score
                                    </th>
                                    <th className="border border-slate-300">
                                        <div className="flex justify-center">
                                            <img src={tree_img} className="h-[60px]"></img>
                                        </div>
                                    </th>
                                    <th className="border border-slate-300">
                                        <div className="flex justify-center">
                                            <img src={stone_img} className="h-[60px]"></img>
                                        </div>
                                    </th>
                                    <th className="border border-slate-300">
                                        <div className="flex justify-center">
                                            <img src={gold_img} className="h-[60px]"></img>
                                        </div>
                                    </th>
                                    <th className="border border-slate-300">
                                        <div className="flex justify-center">
                                            <img src={tool1_img} className="h-[60px]"></img>
                                        </div>
                                    </th>
                                    <th className="border border-slate-300">
                                        <div className="flex justify-center">
                                            <img src={tool2_img} className="h-[60px]"></img>
                                        </div>
                                    </th>
                                    <th className="border border-slate-300 min-w-[40px]">
                                        <div className="flex justify-center">
                                            <img src={mercenariesImg} className="h-[50px]"></img>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className="flex justify-end mr-2">
                                        <img
                                            src={flagAnhur_img}
                                            className="h-[60px]"
                                        ></img>
                                    </th>
                                    <th className="border border-slate-300">
                                        78.0%
                                    </th>
                                    <th className="border border-slate-300">
                                        5
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[0] ? allResources[0]['totalAttack'] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[0] ? allResources[0]['totalDefense'] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[0] ? allResources[0]['totalAttack'] + allResources[0]['totalDefense'] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[0] ? allResources[0]['wood'] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[0] ? allResources[0]['stone'] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[0] ? allResources[0]['gold'] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[0] ? allResources[0][toolType[0]] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[0] ? allResources[0][toolType[1]] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[0] ? allResources[0][toolType[2]] : '0'}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="flex justify-end mr-2">
                                        <img
                                            src={flagApes_img}
                                            className="h-[60px]"
                                        ></img>
                                    </th>
                                    <th className="border border-slate-300">
                                        89.0%
                                    </th>
                                    <th className="border border-slate-300">
                                        8
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[1] ? allResources[1]['totalAttack'] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[1] ? allResources[1]['totalDefense'] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[1] ? allResources[1]['totalAttack'] + allResources[1]['totalDefense'] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[1] ? allResources[1]['wood'] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[1] ? allResources[1]['stone'] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[1] ? allResources[1]['gold'] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[1] ? allResources[1][toolType[0]] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[1] ? allResources[1][toolType[1]] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[1] ? allResources[1][toolType[2]] : '0'}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="flex justify-end mr-2">
                                        <img
                                            src={flagAres_img}
                                            className="h-[60px]"
                                        ></img>
                                    </th>
                                    <th className="border border-slate-300">
                                        65.0%
                                    </th>
                                    <th className="border border-slate-300">
                                        3
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[2] ? allResources[2]['totalAttack'] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[2] ? allResources[2]['totalDefense'] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[2] ? allResources[2]['totalAttack'] + allResources[2]['totalDefense'] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[2] ? allResources[2]['wood'] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[2] ? allResources[2]['stone'] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[2] ? allResources[2]['gold'] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[2] ? allResources[2][toolType[0]] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[2] ? allResources[2][toolType[1]] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[2] ? allResources[2][toolType[2]] : '0'}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="flex justify-end mr-2">
                                        <img
                                            src={flagKnights_img}
                                            className="h-[60px]"
                                        ></img>
                                    </th>
                                    <th className="border border-slate-300">
                                        84.0%
                                    </th>
                                    <th className="border border-slate-300">
                                        6
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[3] ? allResources[3]['totalAttack'] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[3] ? allResources[3]['totalDefense'] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[3] ? allResources[3]['totalAttack'] + allResources[3]['totalDefense'] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[3] ? allResources[3]['wood'] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[3] ? allResources[3]['stone'] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[3] ? allResources[3]['gold'] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[3] ? allResources[3][toolType[0]] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[3] ? allResources[3][toolType[1]] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[3] ? allResources[3][toolType[2]] : '0'}
                                    </th>
                                </tr>
                                <tr>
                                    <th className="flex justify-end mr-2">
                                        <img
                                            src={flagUndead_img}
                                            className="h-[60px]"
                                        ></img>
                                    </th>
                                    <th className="border border-slate-300">
                                        71.0%
                                    </th>
                                    <th className="border border-slate-300">
                                        4
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[4] ? allResources[4]['totalAttack'] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[4] ? allResources[4]['totalDefense'] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[4] ? allResources[4]['totalAttack'] + allResources[4]['totalDefense'] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[4] ? allResources[4]['wood'] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[4] ? allResources[4]['stone'] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[4] ? allResources[4]['gold'] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[4] ? allResources[4][toolType[0]] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[4] ? allResources[4][toolType[1]] : '0'}
                                    </th>
                                    <th className="border border-slate-300">
                                        {allResources[4] ? allResources[4][toolType[2]] : '0'}
                                    </th>
                                </tr>
                            </tbody>
                        </table>}
                    </div>
                </div>
            </div>

            <div className="mt-[5vh] border-t-2 border-white pl-[2%] bg-black">
                <p className="text-[15px] md:text-[20px] lg:text-[22px] font-serif tracking-wider pt-8 pb-8">
                    Five Kingdoms © 2022. All rights reserved.
                </p>
            </div>
            <NotificationContainer />
        </div>
    );
}

export default Marketplace;
