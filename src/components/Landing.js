import React, { useState } from "react";
import introImg from "../assets/image/intro.png";
import intro1Img from "../assets/image/intro1.png";
import intro2Img from "../assets/image/intro2.png";
import twitterIcon from "../assets/image/twitter.png";
import openseaIcon from "../assets/image/opensea.png";
import discordIcon from "../assets/image/discord.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function Landing() {
    return (
        <div>
            <img src={introImg} className="w-full hidden lg:block" alt=""></img>
            <img src={intro1Img} className="w-full hidden md:block lg:hidden" alt=""></img>
            <img src={intro2Img} className="w-full block md:hidden" alt=""></img>
            <div className="-mt-[7vw] absolute w-full">
                <div className="space-x-8 flex flex-row justify-center items-center">
                    <Link to="/home">
                        <div className="p-3 bg-[#ff004e] text-white rounded-[10px] text-center text-[12px] lg:text-[16px] w-[130px] lg:w-[160px] cursor-pointer">
                            Enter brave warrior
                        </div>
                    </Link>
                    <Link to="/teaser">
                        <div className="p-3 bg-[#3a3434c4] text-white rounded-[10px] text-center text-[12px] lg:text-[16px] w-[130px] lg:w-[160px] border-white border cursor-pointer">
                            Watch teaser
                        </div>
                    </Link>
                </div>
            </div>
            <div className="mt-[2vw]">
                <div className="flex space-x-4 flex-row items-center justify-center mt-[60px]">
                    <a href="https://twitter.com/fivekingdomsnf" without rel="noreferrer" target="_blank"><img src={twitterIcon} className="w-[40px] cursor-pointer"></img></a>
                    <img src={discordIcon} onClick={() => { alert("Our discord is currently private. Please keep an eye on our official Twitter for more information on how to access our server."); }} className="w-[40px] cursor-pointer"></img>
                    <img src={openseaIcon} className="w-[40px] cursor-pointer"></img>
                </div>
                <p className="mt-[20px] text-center text-white">Five Kingdoms © 2023. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Landing;