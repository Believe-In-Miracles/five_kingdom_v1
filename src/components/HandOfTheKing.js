import React, { useState, useEffect } from "react";

import strategyImg1 from "../assets/image/handoftheking/Picture1.png";
import strategyImg2 from "../assets/image/handoftheking/Picture2.png";
import TradeRequestModal from "./TradeRequestModal";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

import { kingAddress } from "../utils/kingAddress";
import * as backendAPI from "../utils/backendAPI";

const kingdomName = ['Kingdom of the Anhur', 'Kingdom of the Apes', 'Kingdom of the Ares', 'Kingdom of the Knights', 'Kingdom of the Undead'];

const exampleModalData = {
    title: "Trade request",
    message: "You have received a new trade request from the Kingdom of the Apes. Would you like to accept or decline the offer below?",
    trade: [
        {
            kingdomName: 'Your Kingdom',
            type: 1,
            amount: 250
        },
        {
            kingdomName: 'Your Kingdom',
            type: 2,
            amount: 50
        }
    ],
    id: 1,
    accept: true
}

function HandOfTheKing(walletAddress) {
    const [tradeRequestOpen, setTradeRequestOpen] = useState(false);
    const [message, setMessage] = useState([]);
    const [kingdomNumber, setKingdomNumber] = useState(0);
    const [modalData, setModalData] = useState(exampleModalData);
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
        if (walletAddress != "") {
            getAllMessage(temp_number);
        }
    }, [walletAddress]);

    // useEffect(async() => {
    //     if (walletAddress != "") {
    //         let res = await backendAPI.getTradeByAddress(walletAddress);
    //         let battle_data = await res.json();
    //         console.log("Battle_data", battle_data);
    //     }
    // }, [])

    const getAllMessage = async (temp_number = kingdomNumber) => {
        try {
            let res = await backendAPI.getTradeByAddress(walletAddress);
            let trade_data = await res.json();

            trade_data = trade_data.filter(trade => trade.finished < 2);
            trade_data = trade_data.sort(
                (a, b) =>
                    a.finished - b.finished
            );
            let res1 = await backendAPI.getAllianceHistoryByAddress(temp_number);
            let alliance_data = await res1.json();
            let rlt = {
                trade: trade_data,
                alliance: alliance_data
            };
            setMessage(rlt)
            console.log("trade_data", rlt);
        }
        catch (e) {
            console.log(e);
        }
    }

    const closeModal = () => {
        setTradeRequestOpen(false);
    };

    const acceptRequest = async () => {
        setTradeRequestOpen(false);
        //Have to check enough
        let res = await backendAPI.updateTradeStatus(modalData['id'], 2);
        getAllMessage(walletAddress);
        // alert("accept request");
    };

    const declineRequest = async () => {
        setTradeRequestOpen(false);
        let res = await backendAPI.updateTradeStatus(modalData['id'], 3);
        getAllMessage(walletAddress);
        // alert("decline request");
    };

    const openModal = async (item) => {
        let tempData = {
            title: "Trade request",
            message: "You have received a new trade request from the " + kingdomName[item['kingdom1_id'] - 1] + ". Would you like to accept or decline the offer below?",
            trade: [
                {
                    kingdomName: kingdomName[item['kingdom1_id'] - 1],
                    type: item['type1'],
                    amount: item['amount1']
                },
                {
                    kingdomName: kingdomName[item['kingdom2_id'] - 1],
                    type: item['type2'],
                    amount: item['amount2']
                }
            ],
            accept: true,
            id: item['id']
        }
        setModalData(tempData);
        setTradeRequestOpen(true);
        if (item['finished'] == 0) {
            let res = await backendAPI.updateTradeStatus(item['id'], 1);
            getAllMessage(walletAddress);
        }
        console.log(message);
    };



    const modalData1 = {
        title: "Alliance request",
        message: "You have received a new alliance request from the Kingdom of the Undead. Would you like to accept or decline?",
        trade: [
        ],
        accept: true
    }

    return (
        <div className="p-[5vw] pt-12 pb-0 text-white">
            {tradeRequestOpen && <TradeRequestModal modalData={modalData} closeModal={closeModal} acceptRequest={acceptRequest} declineRequest={declineRequest} />}
            <div className=" pl-[2%] pr-[2%]">
                <p className="font-Canterbury text-[#fe004d] text-[46px] md:text-[52px] lg:text-[60px] text-center tracking-wider">
                    Hand Of the King
                </p>
                <div className="block lg:grid grid-cols-2 grid-flow-col mt-12">
                    <div className="col-span-1 min-h-[400px] mr-8">
                        <div className="border-4 border-[#595959] p-4">
                            <div className="-mt-[40px]">
                                <span className="text-[#fe004d] text-[20px] md:text-[22px] lg:text-[24px] font-serif bg-black p-4">
                                    Strategy
                                </span>
                            </div>
                            <div className="mt-1">
                                <Link to="/marketplace">
                                    <img src={strategyImg1} className="w-full"></img>
                                </Link>
                                <Link to="/warroom">
                                    <img src={strategyImg2} className="w-full mt-4"></img>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 min-h-[400px] mr-8">
                        <div className="border-4 border-[#595959] p-4">
                            <div className="-mt-[40px]">
                                <span className="text-[#fe004d] text-[20px] md:text-[22px] lg:text-[24px] font-serif bg-black p-4">
                                    messages
                                </span>
                            </div>
                            <div className="mt-4">
                                <div className="space-y-4 pb-2">
                                    {/* {message &&
                                        message.map((item) => (
                                            <div className="bg-gray-600 p-4 cursor-pointer" key={item['id']} onClick={() => { openModal(item); }}>
                                                <img src={item['finished'] == 0 ? messageClosed : messageOpened} className="absolute -mt-[9px]"></img>
                                                <p className="text-center text-2xl">You have received a new trade request</p>
                                            </div>
                                        ))
                                    } */}
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
        </div>
    );
}

export default HandOfTheKing;
