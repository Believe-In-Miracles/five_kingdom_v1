import React, { useState } from "react";
import "./App.css";
import logo from "./assets/image/logo.png";
import manuBtn from "./assets/image/manuBtn.png";
import twitterIcon from "./assets/image/twitter.png";
import openseaIcon from "./assets/image/opensea.png";
import discordIcon from "./assets/image/discord.png";
import Home from "./components/Home";
import Whitepaper from "./components/Whitepaper";
import Playlobby from "./components/Playerlobby";
import BattlePrepare from "./components/BattlePrepare";
import Battle from "./components/Battle";
import HandOfTheKing from "./components/HandOfTheKing";
import Marketplace from "./components/Marketplace";
import Warroom from "./components/Warroom";
import Landing from "./components/Landing";
import Teaser from "./components/Teaser";

import home_img from "./assets/image/manu/home.png";
import submanu_img from "./assets/image/manu/submanu.png";
import analytics_img from "./assets/image/manu/analytics.png";
import mint_img from "./assets/image/manu/mint.png";
import player_img from "./assets/image/manu/player.png";
import hand_img from "./assets/image/manu/hand.png";
import whitelist_img from "./assets/image/manu/whitelist.png";
import whitepaper_img from "./assets/image/manu/whitepaper.png";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { ethers } from "ethers";
import TrainingGround from "./components/TrainingGround";
import CombatTraining from "./components/CombatTraining";
import SpellMastery from "./components/SpellMastery";

import MyContext from './components/MyContext.js';

function App() {

    const [walletAddress, setWalletAddress] = useState("0x00");
    const [walletBalance, setWalletBalance] = useState("0");
    const [displayWalletAddress, setDisplayWalletAddress] = useState("0x00");
    const [battleInfo, setBattleInfo] = useState({});
    const contextValue = { battleInfo, setBattleInfo };

    // Button handler button for handling a
    // request event for metamask
    const btnhandler = () => {

        // Asking if metamask is already present or not
        if (window.ethereum) {

            // res[0] for fetching a first wallet
            window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then((res) => accountChangeHandler(res[0]));
        } else {
            alert("install metamask extension!!");
        }
    };
    // getbalance function for getting a balance in
    // a right format with help of ethers
    const getbalance = (address) => {

        // Requesting balance method
        window.ethereum
            .request({
                method: "eth_getBalance",
                params: [address, "latest"]
            })
            .then((balance) => {
                setWalletBalance(ethers.utils.formatEther(balance));
            });
    };

    // Function for getting handling all events
    const accountChangeHandler = (account) => {
        setWalletAddress(account);
        let temp = "";
        if (account.length > 7) {
            temp = account.slice(0, 4) + " . . . " + account.slice(-3);
            setDisplayWalletAddress(temp);
        }
        // console.log("Account", account);
        // Setting a balance
        getbalance(account);
    };

    const [homeBtnClicked, setHomeBtnClicked] = useState(false);
    const homeManuBtnClick = () => {
        if (homeBtnClicked == false) {
            setHomeBtnClicked(true);
        } else {
            setHomeBtnClicked(false);
        }
    };
    const [manuBtnClicked, setManuBtnClicked] = useState(false);
    const manuBtnClick = () => {
        if (manuBtnClicked == false) {
            setManuBtnClicked(true);
        } else {
            setManuBtnClicked(false);
        }
    };

    const getWalletInfo = () => {
        btnhandler();
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };

    return (
        <Router>
            <div className="bg-black" style={{ minHeight: "100vh" }}>
                <MyContext.Provider value={contextValue}>
                    <div id="header" className="fixed top-0 w-full p-2 pl-4 bg-[#404040] z-50">
                        <div className="absolute -left-[20px] md:left-[150px] top-[45px]" style={{ zIndex: '11' }}>
                            <div className="flex items-center ml-12 cursor-pointer" onClick={() => manuBtnClick()}>
                                <img src={manuBtn} alt=""></img>
                                <span className="text-white text-[22px] ml-4">
                                    Menu
                                </span>
                            </div>
                            <div className={manuBtnClicked ? "block" : "hidden"}>
                                <div className="border bg-black border-white text-white text-[18px] mt-[30px] w-[350px] ml-7">
                                    <div>
                                        <div className={homeBtnClicked ? "flex flex-row items-center cursor-pointer bg-[#595959] hover:bg-[#595959] p-3 pl-4" : "cursor-pointer flex flex-row items-center hover:bg-[#595959] p-3 pl-4"} onClick={() => homeManuBtnClick()}>
                                            <img src={home_img} className="w-[40px]" alt=""></img>
                                            <p className="font-semibold ml-4">Home</p>
                                        </div>
                                        <div className={homeBtnClicked ? "bg-[#404040] text-[16px] block" : "bg-[#404040] text-[16px] hidden"}>
                                            <Link to="/home">
                                                <div onClick={() => manuBtnClick()} className="flex flex-row items-center cursor-pointer pt-2 pb-2 pl-6 hover:bg-[#595959]">
                                                    <img src={submanu_img} alt=""></img>
                                                    <p className="ml-4">Introduction</p>
                                                </div>
                                            </Link>
                                            <div className="flex flex-row items-center cursor-pointer pt-2 pb-2 pl-6 hover:bg-[#595959]">
                                                <img src={submanu_img} alt=""></img>
                                                <p className="ml-4">Origin</p>
                                            </div>
                                            <div className="flex flex-row items-center  cursor-pointer pt-2 pb-2 pl-6 hover:bg-[#595959]">
                                                <img src={submanu_img} alt=""></img>
                                                <p className="ml-4">Roadmap</p>
                                            </div>
                                            <div className="flex flex-row items-center cursor-pointer pt-2 pb-2 pl-6 hover:bg-[#595959]">
                                                <img src={submanu_img} alt=""></img>
                                                <p className="ml-4">Team / Artists</p>
                                            </div>
                                            <div className="flex flex-row items-center cursor-pointer pt-2 pb-2 pl-6 hover:bg-[#595959]">
                                                <img src={submanu_img} alt=""></img>
                                                <p className="ml-4">FAQs</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/whitepaper">
                                        <div onClick={() => manuBtnClick()} className="p-3 pl-4 flex flex-row items-center border-t-2 cursor-pointer border-white hover:bg-[#595959]">
                                            <img src={whitepaper_img} className="w-[40px]" alt=""></img>
                                            <p className="font-semibold ml-4">Whitepaper</p>
                                        </div>
                                    </Link>
                                    <div className="p-3 pl-4 flex flex-row items-center border-t-2 cursor-pointer border-white hover:bg-[#595959]">
                                        <img src={whitelist_img} className="w-[40px]" alt=""></img>
                                        <p className="font-semibold ml-4">Whitelist Event</p>
                                    </div>
                                    <div className="p-3 pl-4 flex flex-row items-center border-t-2 cursor-pointer border-white hover:bg-[#595959]">
                                        <img src={mint_img} className="w-[40px]" alt=""></img>
                                        <p className="font-semibold ml-4">Mint Page</p>
                                    </div>
                                    <Link to="/playlobby">
                                        <div onClick={() => manuBtnClick()} className="p-3 pl-4 flex flex-row items-center border-t-2 cursor-pointer border-white hover:bg-[#595959]">
                                            <img src={player_img} className="w-[40px]" alt=""></img>
                                            <p className="font-semibold ml-4">Player Lobby</p>
                                        </div>
                                    </Link>
                                    <Link to="/handoftheking">
                                        <div onClick={() => manuBtnClick()} className="p-3 pl-4 flex flex-row items-center border-t-2 cursor-pointer border-white hover:bg-[#595959]">
                                            <img src={hand_img} className="w-[40px]" alt=""></img>
                                            <p className="font-semibold ml-4">Hand of the King</p>
                                        </div>
                                    </Link>
                                    <div className="p-3 pl-4 flex flex-row items-center border-t-2 cursor-pointer border-white hover:bg-[#595959]">
                                        <img src={analytics_img} className="w-[40px]" alt=""></img>
                                        <p className="font-semibold ml-4">Analytics</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-end md:justify-start">
                            <img src={logo} className="cursor-pointer" alt="" onClick={() => { scrollToTop() }}></img>
                        </div>
                        <div className="absolute hidden right-12 md:flex items-center -mt-[70px] space-x-6">
                            <div className="text-right">
                                <span className="text-white">Address: {displayWalletAddress}</span>
                                <br></br>
                                <span className="text-white">Balance: {parseFloat(walletBalance).toFixed(3)} ETH</span>
                            </div>
                            <a href="https://twitter.com/fivekingdomsnf" without rel="noreferrer" target="_blank"><img src={twitterIcon} className="cursor-pointer" alt=""></img></a>
                            <img src={discordIcon} onClick={() => { alert("Our discord is currently private. Please keep an eye on our official Twitter for more information on how to access our server."); }} className="cursor-pointer" alt=""></img>
                            <img src={openseaIcon} className="cursor-pointer" alt=""></img>
                        </div>
                    </div>
                    <div id="body" className="pt-[111px]">
                        <Routes>
                            <Route path="/" element={<Landing />} />
                            <Route path="/teaser" element={<Teaser />} />
                            <Route path="/home" element={<Home getWalletInfo={getWalletInfo} />} />
                            <Route path="/whitepaper" element={<Whitepaper />} />
                            <Route path="/playlobby" element={<Playlobby />} />
                            <Route path="/trainingground" element={<TrainingGround walletAddress={walletAddress} />} />
                            <Route path="/battleprepare" element={<BattlePrepare />} />
                            <Route path="/battle" element={<Battle />} />
                            <Route path="/handoftheking" element={<HandOfTheKing walletAddress={walletAddress} />} />
                            <Route path="/marketplace" element={<Marketplace walletAddress={walletAddress} />} />
                            <Route path="/warroom" element={<Warroom walletAddress={walletAddress} />} />
                            <Route path="/combattraining" element={<CombatTraining walletAddress={walletAddress} />} />
                            <Route path="/spellMastery" element={<SpellMastery walletAddress={walletAddress} />} />
                        </Routes>
                    </div>
                </MyContext.Provider>
            </div>
        </Router>
    );
}

export default App;
