import React, { useState, useEffect } from "react";

import fullMapImg from "../assets/image/2_Full Map.png";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { useNavigate, useLocation } from "react-router-dom";

import { kingAddress } from "../utils/kingAddress";

import TerritoryModal from "./TerritoryModal";
import SelectBattleTimeModal from "./SelectBattleTimeModal";
import { territoryData } from "../utils/territoryData";

import * as backendAPI from "../utils/backendAPI";

import { NotificationContainer, NotificationManager } from 'react-notifications';

import flagAnhur_img from "../assets/image/flag_anhur.png";
import flagApes_img from "../assets/image/flag_apes.png";
import flagAres_img from "../assets/image/flag_ares.png";
import flagKnights_img from "../assets/image/flag_knights.png";
import flagUndead_img from "../assets/image/flag_undead.png";

import _ from "lodash";

const flag_img = [flagAnhur_img, flagApes_img, flagAres_img, flagKnights_img, flagUndead_img];

function Warroom(walletAddress) {
    const [selectKingdom, setSelectKingdom] = useState(0);
    const [kingdomNumber, setKingdomNumber] = useState(0);
    const [territoryModalOpen, setTerritoryModalOpen] = useState(false);
    const [selectBattleTimeModalOpen, setSelectBattleTimeModalOpen] = useState(false);
    const [territoryType, setTerritoryType] = useState('Agasaya');
    const [allianceStatus, setAllianceStatus] = useState([false, false, false, false, false]);

    const navigate = useNavigate();
    useEffect(() => {
        let flag = false;
        let temp_number = 0;
        for (let i = 0; i < kingAddress.length; i++) {
            if (kingAddress[i].toString().toLowerCase() == walletAddress['walletAddress'].toString().toLowerCase()) {
                flag = true;
                setKingdomNumber(i + 1);
                temp_number = i + 1;
            }
        }
        if (!flag) {
            navigate("/");
        }
        getAllianceInfo(temp_number);
    }, [walletAddress]);

    const getAllianceInfo = async (king_number = kingdomNumber) => {
        try {
            let res = await backendAPI.getAllianceInfo(king_number);
            let alliance_data = await res.json();
            let temp_allianceStatus = [false, false, false, false, false];
            for (let i = 0; i < alliance_data.length; i++) {
                if (alliance_data[i]['kingdom1_id'] == king_number) {
                    temp_allianceStatus[alliance_data[i]['kingdom2_id'] - 1] = true;
                } else {
                    temp_allianceStatus[alliance_data[i]['kingdom1_id'] - 1] = true;
                }
            }
            setAllianceStatus(temp_allianceStatus);
        } catch (e) {
            NotificationManager.error("Error, try again!");
        }
    };

    const closeModal = () => {
        setTerritoryModalOpen(false);
    };

    const closeSelectTimeModal = () => {
        setSelectBattleTimeModalOpen(false);
    };

    const attackRequest = () => {
        setTerritoryModalOpen(false);
        setSelectBattleTimeModalOpen(true);
    };

    const submitRequest = () => {
        setSelectBattleTimeModalOpen(false);
    };

    const openModal = (str) => {
        setTerritoryType(str);
        setTerritoryModalOpen(true);
    };

    const offerAlliance = async () => {
        if (allianceStatus[selectKingdom - 1]) {
            NotificationManager.error("The two kingdoms are already allies.");
        } else {
            try {
                let data = {
                    kingdom1_id: kingdomNumber,
                    kingdom2_id: selectKingdom,
                    request: 1,
                    request_status: 0,
                    response_status: 0
                };

                console.log("offer data", data);

                let res = await backendAPI.createAllianceHistory(data);
                if (res.ok) {
                    NotificationManager.success("Affiliate offer has been successfully created!");
                } else {
                    NotificationManager.error("Error, try again!");
                }
            } catch (e) {
                NotificationManager.error("Error, try again!");
            }
        }
    };

    const endAlliance = async () => {
        if (allianceStatus[selectKingdom - 1]) {
            try {
                let data = {
                    kingdom1_id: kingdomNumber,
                    kingdom2_id: selectKingdom,
                    request: 1,
                    request_status: 1,
                    response_status: 0
                };

                let res = await backendAPI.createAllianceHistory(data);
                if (res.ok) {
                    NotificationManager.success("An alliance termination request has been made!");
                    getAllianceInfo();
                } else {
                    NotificationManager.error("Error, try again!");
                }
            } catch (e) {
                NotificationManager.error("Error, try again!");
            }
        } else {
            NotificationManager.error("The two kingdoms are not allies.");
        }
    };

    return (
        <div className="p-[5vw] pt-12 pb-0 text-white">
            {selectBattleTimeModalOpen && <SelectBattleTimeModal modalData={territoryData[territoryType]} attackEnable={true} closeSelectTimeModal={closeSelectTimeModal} submitRequest={submitRequest} />}
            {territoryModalOpen && <TerritoryModal modalData={territoryData[territoryType]} closeModal={closeModal} attackRequest={attackRequest} />}
            <div className=" pl-[2%] pr-[2%]">
                <p className="text-[#fe004d] text-[46px] md:text-[52px] lg:text-[60px] font-serif text-center tracking-wider">
                    Warroom
                </p>
                <div className="mt-12">
                    <div className="hidden lg:block lg:min-h-[400px] lg:mr-8">
                        <div className="relative border-4 border-[#595959] p-4">
                            <div className="absolute max-w-[400px] max-h-[400px] bg-black-900 left-[50%] top-[50%] -ml-[200px] -mt-[122.5px]">
                                <div></div>
                            </div>
                            <div className="-mt-[40px]">
                                <span className="text-[#fe004d] text-[20px] md:text-[22px] lg:text-[24px] font-serif bg-black p-4">
                                    country of Yllek
                                </span>
                            </div>
                            <div className="mt-1" onClick={() => { openModal('Anahita') }}>
                                <img src={fullMapImg} alt=""></img>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[400px] lg:mr-8 mt-8">
                        <div className="block lg:grid grid-cols-2 grid-flow-col lg:space-x-8">
                            <div className="col-span-1 border-4 border-[#595959] p-4">
                                <div className="-mt-[40px]">
                                    <span className="text-[#fe004d] text-[20px] md:text-[22px] lg:text-[24px] font-serif bg-black p-4">
                                        alliances
                                    </span>
                                </div>
                                <div className="m-4 px-[1%]">
                                    <div>
                                        <p className="text-[20px]">
                                            Your trusted allies. War with these Kingdoms is forbidden.
                                        </p>
                                        <div className="grid-cols-2 grid lg:grid-cols-4 mt-4 p-[4%] gap-[10%] lg:h-[228px]">
                                            {_.times(5, (i) => (
                                                <div className={(selectKingdom === (i + 1) ? 'border-opacity-100' : 'border-opacity-50') + ` hover:opacity-100 col-span-1 border border-white` + (kingdomNumber === (i + 1) || allianceStatus[i] == false ? ' hidden' : ' block')}>
                                                    <img src={flag_img[i]} onClick={() => { setSelectKingdom(i + 1); }} alt=""></img>
                                                </div>
                                            ))}
                                            {_.times(5, (i) => (
                                                <div className={'border border-white aspect-[1/1.6666] col-span-1 border-opacity-50' + (kingdomNumber === (i + 1) || allianceStatus[i] == true ? ' hidden' : ' block')}></div>
                                            ))}
                                        </div>
                                        <div className="flex justify-center items-center mt-[20%] lg:mt-2">
                                            <span className="bg-[#ff004b] text-white p-2 px-3 font-semibold rounded-lg cursor-pointer w-[200px] text-center" onClick={endAlliance}>End alliance</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 border-4 border-[#595959] p-4 mt-8 lg:mt-0">
                                <div className="-mt-[40px]">
                                    <span className="text-[#fe004d] text-[20px] md:text-[22px] lg:text-[24px] font-serif bg-black p-4">
                                        enemies
                                    </span>
                                </div>
                                <div className="m-4 px-[1%]">
                                    <div>
                                        <p className="text-[20px]">
                                            You are at war with these Kingdoms.
                                        </p>
                                        <div className="grid-cols-2 grid lg:grid-cols-4 mt-4 p-[4%] gap-[10%]">
                                            {console.log("alliance status", allianceStatus)}
                                            {_.times(5, (i) => (
                                                <div className={(selectKingdom === (i + 1) ? 'border-opacity-100' : 'border-opacity-50') + ` hover:opacity-100 col-span-1 border border-white` + (kingdomNumber === (i + 1) || allianceStatus[i] == true ? ' hidden' : ' block')}>
                                                    <img src={flag_img[i]} onClick={() => { setSelectKingdom(i + 1); }} alt=""></img>
                                                </div>
                                            ))}
                                            {_.times(5, (i) => (
                                                <div className={'border border-white col-span-1 border-opacity-50' + (kingdomNumber === (i + 1) || allianceStatus[i] == false ? ' hidden' : ' block')}></div>
                                            ))}
                                        </div>
                                        <div className="flex justify-center items-center mt-[20%] lg:mt-2">
                                            <span className="bg-[#ff004b] text-white p-2 px-3 font-semibold rounded-lg cursor-pointer w-[200px] text-center" onClick={offerAlliance}>Offer an alliance</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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

export default Warroom;
