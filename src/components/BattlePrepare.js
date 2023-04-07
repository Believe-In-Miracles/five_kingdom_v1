import React, { useState, useEffect, useContext } from "react";

import map_img from "../assets/image/prepare/Full Map.png";
import dark_map_img from "../assets/image/prepare/Dark Map.png";

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

import territories_img from "../assets/image/prepare/territories.png";
import army_img from "../assets/image/prepare/army.png";
import chart_img from "../assets/image/prepare/chart.png";

import join_img from "../assets/image/prepare/join.png";
import normal_btn_img from "../assets/image/prepare/radioButton.png";
import flip_btn_img from "../assets/image/prepare/flipradioButton.png";

import { territoryData } from "../utils/territoryData";
import * as backendAPI from "../utils/backendAPI";
import TerritoryModal from "./TerritoryModal";

import { useNavigate } from 'react-router-dom';

import MyContext from './MyContext';

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const kingdomImg = [flagAnhur_img, flagAnhur_img, flagApes_img, flagAres_img, flagKnights_img, flagUndead_img];

function BattlePrepare() {
    const navigate = useNavigate();
    const [mapState, setMapState] = useState(true);
    const [liveUpcommingBattle, setLiveUpcommingBattle] = useState([]);
    const [territoryModalOpen, setTerritoryModalOpen] = useState(false);
    const [territoryType, setTerritoryType] = useState('Agasaya');

    const { battleInfo, setBattleInfo } = useContext(MyContext);

    const calculateTime = (time) => {
        let hour = Math.floor(time / 3600);
        let min = Math.floor((time - 3600 * hour) / 60);
        let second = Math.floor(time % 60);
        let final = (hour < 10 ? "0" : "") + hour + " : " + (min < 10 ? "0" : "") + min + " : " + (second < 10 ? "0" : "") + second;
        return final;
    }
    useEffect(() => {
        async function getTradeData() {
            let res = await backendAPI.getUpcomingBattle();
            let upcomingBattle = await res.json();
            console.log("upcomingBattle", upcomingBattle);
            let liveBattle = [];
            for (let i = 0; i < upcomingBattle.length; i++) {
                let date = new Date(upcomingBattle[i]['attack_time']);
                let now = new Date();
                if (date >= now) {
                    let diff_seconds = (date.getTime() - now.getTime()) / 1000;
                    upcomingBattle[i]['timeLeft'] = diff_seconds;
                    liveBattle.push(upcomingBattle[i]);
                }
            }
            setLiveUpcommingBattle(liveBattle);
            // console.log("######", liveUpcommingBattle);
        }
        getTradeData();
    }, []);

    const closeModal = () => {
        setTerritoryModalOpen(false);
    };

    const openModal = (str) => {
        setTerritoryType(str);
        setTerritoryModalOpen(true);
    };

    const joinBattle = (data) => {
        console.log(data);
        setBattleInfo(data);
        navigate('/battle');
    }

    return (
        <div className="p-[5vw] pt-12 pb-0 text-white">
            {territoryModalOpen && <TerritoryModal modalData={territoryData[territoryType]} attackEnable={false} closeModal={closeModal}/>}
            <div className=" pl-[2%] pr-[2%]">
                <p className="text-[#fe004d] text-[46px] md:text-[52px] lg:text-[60px] font-serif text-center tracking-wider">
                    Battle of Yllek
                </p>
                <div className="block lg:grid grid-cols-4 grid-flow-col mt-12">
                    <div className="col-span-3 min-h-[400px] mr-8">
                        <div className="border-4 border-[#595959] p-4">
                            <div className="-mt-[40px]">
                                <span className="text-[#fe004d] text-[20px] md:text-[22px] lg:text-[24px] font-serif bg-black p-4">
                                    country of Yllek
                                </span>
                            </div>
                            <div className="mt-1" onClick={() => { openModal('Anahita') }}>
                                <img
                                    src={mapState ? map_img : dark_map_img}
                                    className="w-full h-[37.4vw]"
                                ></img>
                            </div>
                        </div>
                        <div className="flex flex-row justify-end space-x-2 mt-2 cursor-pointer">
                            <span className="text-[18px] text-[#595959] tracking-widest font-semibold">Normal</span>
                            <img src={normal_btn_img} onClick={() => { setMapState(!mapState); }} className={mapState ? 'block' : 'hidden'}></img>
                            <img src={flip_btn_img} onClick={() => { setMapState(!mapState); }} className={mapState ? 'hidden' : 'block'}></img>
                        </div>
                    </div>
                    <div className="col-span-1 min-h-[400px]">
                        <div className="block lg:grid grid-rows-2 grid-flow-row">
                            <div className="col-row-1 min-h-[200px] border-4 border-[#595959] p-8">
                                <div className="-mt-[54px]">
                                    <span className="text-[#fe004d] text-[20px] md:text-[22px] lg:text-[24px] font-serif bg-black p-4">
                                        leaderboard
                                    </span>
                                    <div className="mt-6 p-2">
                                        <div className="flex flex-row justify-center">
                                            <img src={territories_img}></img>
                                            <img src={army_img}></img>
                                        </div>
                                        <div className="flex flex-row justify-center items-center mt-8">
                                            <img src={chart_img}></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-row-1 min-h-[200px] border-4 border-[#595959] py-8 mt-8">
                                <div className="-mt-[54px]">
                                    <span className="text-[#fe004d] text-[20px] md:text-[22px] lg:text-[24px] font-serif bg-black p-4 ml-8">
                                        upcoming battles
                                    </span>
                                    <div className="mt-2 p-2 px-4">
                                        {liveUpcommingBattle.map((luBattle, index) => (
                                            <div className="flex flex-row items-center space-x-2 justify-center mt-2">
                                                <img src={kingdomImg[luBattle['kingdom1_id']]} className="h-[50px]"></img>
                                                <span className="font-bold text-[28px]">:</span>
                                                <img src={kingdomImg[luBattle['kingdom2_id']]} className="h-[50px]"></img>
                                                <span className={(((luBattle['timeLeft'] / 3600) >= 1) ? "" : "text-[#ff004e] ") + "font-bold text-[28px]  pl-4 pr-4"}>{calculateTime(luBattle['timeLeft'])}</span>
                                                {/* <div className="w-[76px]">{(luBattle['timeLeft'] / 3600) < 1 && <Link to="/battle"><img src={join_img} onClick={()=>{joinBattle(luBattle)}}></img></Link>}</div> */}
                                                <div className="w-[76px]">{(luBattle['timeLeft'] / 3600) < 1 && <img src={join_img} onClick={()=>{joinBattle(luBattle)}}></img>}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="min-h-[400px] border-4 border-[#595959] p-4 mt-12">
                    <div className="-mt-[40px]">
                        <span className="text-[#fe004d] text-[20px] md:text-[22px] lg:text-[24px] font-serif bg-black p-4">
                            kingdom stats
                        </span>
                    </div>
                    <div className="mt-8 mr-8 mb-4">
                        <table className="table-auto text-center border-collapse w-full mt-2 leading-10">
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
                                    <th className="border border-slate-300 min-w-[40px]"></th>
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
                                        9,000
                                    </th>
                                    <th className="border border-slate-300">
                                        5,000
                                    </th>
                                    <th className="border border-slate-300">
                                        14,000
                                    </th>
                                    <th className="border border-slate-300">
                                        1,500
                                    </th>
                                    <th className="border border-slate-300">
                                        500
                                    </th>
                                    <th className="border border-slate-300">
                                        500
                                    </th>
                                    <th className="border border-slate-300">
                                        3
                                    </th>
                                    <th className="border border-slate-300">
                                        1
                                    </th>
                                    <th className="border border-slate-300">
                                        1
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
                                        11,000
                                    </th>
                                    <th className="border border-slate-300">
                                        6,500
                                    </th>
                                    <th className="border border-slate-300">
                                        17,500
                                    </th>
                                    <th className="border border-slate-300">
                                        2,000
                                    </th>
                                    <th className="border border-slate-300">
                                        50
                                    </th>
                                    <th className="border border-slate-300">
                                        250
                                    </th>
                                    <th className="border border-slate-300">
                                        5
                                    </th>
                                    <th className="border border-slate-300">
                                        3
                                    </th>
                                    <th className="border border-slate-300">
                                        2
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
                                        5,000
                                    </th>
                                    <th className="border border-slate-300">
                                        4,500
                                    </th>
                                    <th className="border border-slate-300">
                                        9,500
                                    </th>
                                    <th className="border border-slate-300">
                                        500
                                    </th>
                                    <th className="border border-slate-300">
                                        400
                                    </th>
                                    <th className="border border-slate-300">
                                        300
                                    </th>
                                    <th className="border border-slate-300">
                                        2
                                    </th>
                                    <th className="border border-slate-300">
                                        0
                                    </th>
                                    <th className="border border-slate-300">
                                        0
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
                                        10,000
                                    </th>
                                    <th className="border border-slate-300">
                                        6,000
                                    </th>
                                    <th className="border border-slate-300">
                                        16,000
                                    </th>
                                    <th className="border border-slate-300">
                                        1,000
                                    </th>
                                    <th className="border border-slate-300">
                                        1,000
                                    </th>
                                    <th className="border border-slate-300">
                                        1,000
                                    </th>
                                    <th className="border border-slate-300">
                                        3
                                    </th>
                                    <th className="border border-slate-300">
                                        1
                                    </th>
                                    <th className="border border-slate-300">
                                        1
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
                                        6,000
                                    </th>
                                    <th className="border border-slate-300">
                                        5,000
                                    </th>
                                    <th className="border border-slate-300">
                                        11,000
                                    </th>
                                    <th className="border border-slate-300">
                                        600
                                    </th>
                                    <th className="border border-slate-300">
                                        300
                                    </th>
                                    <th className="border border-slate-300">
                                        200
                                    </th>
                                    <th className="border border-slate-300">
                                        1
                                    </th>
                                    <th className="border border-slate-300">
                                        1
                                    </th>
                                    <th className="border border-slate-300">
                                        0
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="mt-[5vh] border-t-2 border-white pl-[2%] bg-black">
                <p className="text-[15px] md:text-[20px] lg:text-[22px] font-serif tracking-wider pt-8 pb-8">
                    Five Kingdoms © 2022. All rights reserved.
                </p>
            </div>
        </div>
    );
}

export default BattlePrepare;
