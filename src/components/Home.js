import React, { useState } from "react";

import introImg from "../assets/image/intro.png";
import intro1Img from "../assets/image/intro1.png";
import intro2Img from "../assets/image/intro2.png";
import playBtn from "../assets/image/play.png";
import nft1_img from "../assets/image/nft_1.png";
import nft2_img from "../assets/image/nft_2.png";
import nft3_img from "../assets/image/nft_3.png";
import nft4_img from "../assets/image/nft_4.png";
import nft5_img from "../assets/image/nft_5.png";
import nft6_img from "../assets/image/nft_6.png";
import nft7_img from "../assets/image/nft_7.png";
import nft8_img from "../assets/image/nft_8.png";
import nft9_img from "../assets/image/nft_9.png";

import flagAnhur_img from "../assets/image/flag_anhur.png";
import flagApes_img from "../assets/image/flag_apes.png";
import flagAres_img from "../assets/image/flag_ares.png";
import flagKnights_img from "../assets/image/flag_knights.png";
import flagUndead_img from "../assets/image/flag_undead.png";

import alexImg from "../assets/image/team/alex.png";
import digita_dynastyImg from "../assets/image/team/digita_dynasty.png";
import emptyImg from "../assets/image/team/empty.png";
import helliosImg from "../assets/image/team/hellios.png";
import ismailImg from "../assets/image/team/ismail.png";
import ravenImg from "../assets/image/team/raven.png";
import surajImg from "../assets/image/team/suraj.png";
import dashImg from "../assets/image/dashImg.png";


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home({ getWalletInfo }) {
    const [introImgState, setIntroImgState] = useState(0);
    const introductionImgClick = (id) => {
        setIntroImgState(id);
    };
    return (
        <div>
            <div style={{ marginBottom: "7vw" }}>
                <img src={introImg} className="w-full hidden lg:block" alt=""></img>
                <img src={intro1Img} className="w-full hidden md:block lg:hidden" alt=""></img>
                <img src={intro2Img} className="w-full block md:hidden" alt=""></img>
                <div className="-mt-[10vw]">
                    <img
                        src={playBtn}
                        onClick={getWalletInfo}
                        className="cursor-pointer w-[36vw] md:w-[26vw] lg:w-[16vw] ml-[32.5vw] md:ml-[36.5vw] lg:ml-[42.5vw]"
                        style={{
                            marginTop: "-40px",
                        }}
                        alt=""></img>
                </div>
            </div>
            <div className="p-[5vw] pt-4 pb-0">
                <p className="text-[#fe004d] mt-[8vw] text-[40px] md:text-[46px] lg:text-[52px] font-serif text-center tracking-wider">
                    Introduction
                </p>
                <div className="block lg:grid grid-cols-3 grid-flow-col pt-4 md:pt-12">
                    <div className={introImgState == 0 ? "col-span-1 lg:pr-[5%]" : "col-span-1 lg:pr-[5%] hidden"}>
                        <div className=" grid grid-cols-3 grid-flow-col">
                            <div className="col-span-1 p-[5%]">
                                <div
                                    className="bg-[#404040] p-2 flex items-center justify-center rounded-2xl h-[100px] md:h-[160px] lg:h-[7.5vw]"
                                    onClick={() => introductionImgClick(1)}
                                >
                                    <img
                                        src={nft1_img}
                                        style={{ height: "100%" }}
                                        alt=""></img>
                                </div>
                            </div>
                            <div className="col-span-1 p-[5%]">
                                <div
                                    className="bg-[#404040] p-2 flex items-center justify-center rounded-2xl h-[100px] md:h-[160px] lg:h-[7.5vw]"
                                    onClick={() => introductionImgClick(2)}
                                >
                                    <img
                                        src={nft2_img}
                                        style={{ height: "100%" }}
                                        alt=""></img>
                                </div>
                            </div>
                            <div className="col-span-1 p-[5%]">
                                <div
                                    className="bg-[#404040] p-2 flex items-center justify-center rounded-2xl h-[100px] md:h-[160px] lg:h-[7.5vw]"
                                    onClick={() => introductionImgClick(3)}
                                >
                                    <img
                                        src={nft3_img}
                                        style={{ height: "100%" }}
                                        alt=""></img>
                                </div>
                            </div>
                        </div>
                        <div className=" grid grid-cols-3 grid-flow-col">
                            <div className="col-span-1 p-[5%]">
                                <div
                                    className="bg-[#404040] p-2 flex items-center justify-center rounded-2xl h-[100px] md:h-[160px] lg:h-[7.5vw]"
                                    onClick={() => introductionImgClick(4)}
                                >
                                    <img
                                        src={nft4_img}
                                        style={{ height: "100%" }}
                                        alt=""></img>
                                </div>
                            </div>
                            <div className="col-span-1 p-[5%]">
                                <div
                                    className="bg-[#404040] p-2 flex items-center justify-center rounded-2xl h-[100px] md:h-[160px] lg:h-[7.5vw]"
                                    onClick={() => introductionImgClick(5)}
                                >
                                    <img
                                        src={nft5_img}
                                        style={{ height: "100%" }}
                                        alt=""></img>
                                </div>
                            </div>
                            <div className="col-span-1 p-[5%]">
                                <div
                                    className="bg-[#404040] p-2 flex items-center justify-center rounded-2xl h-[100px] md:h-[160px] lg:h-[7.5vw]"
                                    onClick={() => introductionImgClick(6)}
                                >
                                    <img
                                        src={nft6_img}
                                        style={{ height: "100%" }}
                                        alt=""></img>
                                </div>
                            </div>
                        </div>
                        <div className=" grid grid-cols-3 grid-flow-col">
                            <div className="col-span-1 p-[5%]">
                                <div
                                    className="bg-[#404040] p-2 flex items-center justify-center rounded-2xl h-[100px] md:h-[160px] lg:h-[7.5vw]"
                                    onClick={() => introductionImgClick(7)}
                                >
                                    <img
                                        src={nft7_img}
                                        style={{ height: "100%" }}
                                        alt=""></img>
                                </div>
                            </div>
                            <div className="col-span-1 p-[5%]">
                                <div
                                    className="bg-[#404040] p-2 flex items-center justify-center rounded-2xl h-[100px] md:h-[160px] lg:h-[7.5vw]"
                                    onClick={() => introductionImgClick(8)}
                                >
                                    <img
                                        src={nft8_img}
                                        style={{ height: "100%" }}
                                        alt=""></img>
                                </div>
                            </div>
                            <div className="col-span-1 p-[5%]">
                                <div
                                    className="bg-[#404040] p-2 flex items-center justify-center rounded-2xl h-[100px] md:h-[160px] lg:h-[7.5vw]"
                                    onClick={() => introductionImgClick(9)}
                                >
                                    <img
                                        src={nft9_img}
                                        style={{ height: "100%" }}
                                        alt=""></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={introImgState > 0 ? "col-span-1 lg:pr-[5%]" : "col-span-1 lg:pr-[5%] hidden"}>
                        <div
                            className="bg-[#404040] p-2 flex items-center justify-center rounded-2xl h-[300px] md:h-[480px] lg:h-[22.5vw]"
                        >
                            <img
                                src={`./assets/image/nft_` + introImgState + `.png`}
                                style={{ height: "100%" }}
                                alt=""></img>
                        </div>
                    </div>
                    <div className="col-span-2 text-white text-[18px] md:text-[22px] lg:text-[26px] pl-4 mt-6 lg:mt-0 flex items-center">
                        <div className="space-y-8">
                            <p>
                                Five Kingdoms is an innovative and highly
                                strategic community vs community play-to-earn
                                (p2e) game that will see five sub-communities
                                doing battle for incredible rewards, and the
                                ultimate bragging rights.
                            </p>
                            <p>
                                Our genesis collection consists of 10,000
                                warrior NFTs (2,000 per kingdom), created from
                                45 unique base characters. The supply will be
                                deflationary!
                            </p>
                            <p>
                                Alliances will be formed, players betrayed,
                                spies captured, and the game will continue to
                                evolve. Only the strong will prevail.
                            </p>
                            <div className="flex">
                                <p>
                                    For further details, please check out our
                                    <Link to="/whitepaper"><span className="underline ml-2 cursor-pointer">whitepaper</span></Link>
                                </p>
                                {/* <Link to="/whitepaper">
                                    <img
                                        src={documentImg}
                                        className="ml-3 cursor-pointer"
                                     alt=""></img>
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[10vh] border-t-2 border-white">
                    <p className="text-[#fe004d] text-[40px] md:text-[46px] lg:text-[52px] font-serif text-center tracking-wider mt-8 mb-12">
                        Origins of the five kingdoms
                    </p>
                    <div className="space-y-8">
                        <div className="flex">
                            <img
                                src={flagAnhur_img}
                                style={{ width: "180px" }}
                                alt=""></img>
                            <div className="text-white text-[16px] md:text-[18px] lg:text-[22px] space-y-4 mt-2 ml-[2vw] tracking-wider">
                                <p className="text-[26px] text-blue-500">
                                    Kingdom of Anhur
                                </p>
                                <p>
                                    A highly intelligent kingdom who is led by
                                    the Egyptian god of war, king Anhur. Part
                                    man, part lion, and known by many as the
                                    "slayer of enemies".
                                </p>
                                <p>
                                    Warriors from this kingdom are known for
                                    their intelligence and innovation, often
                                    setting traps for their enemies.
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <img src={flagApes_img} className="w-[180px]" alt=""></img>
                            <div className="text-white text-[16px] md:text-[18px] lg:text-[22px] space-y-4 mt-2 ml-[2vw] tracking-wider">
                                <p className="text-[26px] text-[#ffd966]">
                                    Kingdom of the Apes
                                </p>
                                <p>A fearsely loyal and mighty kingdom.</p>
                                <p>
                                    Warriors from this kingdom are known for
                                    their brute strength, perserverance and for
                                    always taking big risks. When working
                                    together, they are a dominating force of
                                    nature.
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <img src={flagAres_img} className="w-[180px]" alt=""></img>
                            <div className="text-white text-[16px] md:text-[18px] lg:text-[22px] space-y-4 mt-2 ml-[2vw] tracking-wider">
                                <p className="text-[26px] text-[#c00000]">
                                    Kingdom of Ares
                                </p>
                                <p>
                                    A powerful kingdom who is led by the Greek
                                    god of war, king Ares.
                                </p>
                                <p>
                                    Warriors from this kingdom are known for
                                    their superior fighting skills, team work
                                    and are the descendents of king Leonidas
                                    himself.
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <img
                                src={flagKnights_img}
                                className="w-[180px]"
                                alt=""></img>
                            <div className="text-white text-[16px] md:text-[18px] lg:text-[22px] space-y-4 mt-2 ml-[2vw] tracking-wider">
                                <p className="text-[26px] text-[#00B050]">
                                    Kingdom of the Knights
                                </p>
                                <p>
                                    A noble and highly strategic kingdom who
                                    always fight with honour.
                                </p>
                                <p>
                                    Warriors from this kingdom are known for
                                    their bravery, battle tactics and archers
                                    who are feared the world over.
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <img
                                src={flagUndead_img}
                                className="w-[180px]"
                                alt=""></img>
                            <div className="text-white text-[16px] md:text-[18px] lg:text-[22px] space-y-4 mt-2 ml-[2vw] tracking-wider">
                                <p className="text-[26px] text-[#808080]">
                                    Kingdom of the Undead
                                </p>
                                <p>
                                    A fearsome kingdom whose thirst for blood
                                    cannot be quenched.
                                </p>
                                <p>
                                    Warriors from this kingdom are known for
                                    their brutality, madness and fearless
                                    approach. They are the thing of nightmares.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[10vh] border-t-2 border-white pl-[5%] pr-[5%]">
                    <p className="text-[#fe004d] text-[40px] md:text-[46px] lg:text-[52px] font-serif text-center tracking-wider mt-8 mb-12">
                        Chapter 1
                    </p>
                    <p className="text-center text-white text-[16px] md:text-[18px] lg:text-[22px]">
                        Our team is big on under promising and over delivering.
                        We like to keep things up our sleeve, ensuring our
                        competition are always a few steps behind. As such,
                        please see below our simplified roadmap.
                    </p>
                    <div className="mt-[5vh]">
                        <div className="block lg:grid grid-cols-2 grid-flow-col">
                            <div className="col-span-1 pr-[7%] pt-6 hidden lg:flex justify-end items-start ">
                                <span className="bg-[#ff004d] font-bold text-center text-white p-6 pt-3 pb-3">
                                    Phase
                                </span>
                            </div>
                            <div className="relative col-span-1 text-white lg:border-l-2 pt-4 pl-[7%] pb-4">
                                <div className="absolute -ml-[7%] hidden lg:block">
                                    <div className="bg-[#ff004d] h-8 w-8 rounded-full -ml-4 mt-4"></div>
                                </div>
                                <p className="font-bold text-[24px]">
                                    Genesis Mint
                                </p>
                                <p className="text-[16px] md:text-[18px] lg:text-[22px]">
                                    In this phase our team will focus on a
                                    successful mint, which will see 10,000
                                    warriors join the Five Kingdoms ecosystem.
                                    We are also excited to introduce our
                                    innovate approach to whitelist allocation,
                                    which will reward those that truly believe
                                    in our project and vision.
                                </p>
                            </div>
                        </div>
                        <div className="block lg:grid grid-cols-2 grid-flow-col">
                            <div className="col-span-1 pr-[7%]  text-right text-white pt-8 pb-8">
                                <p className="font-bold text-[24px]">
                                    Strengthening Your Kingdom
                                </p>
                                <p className="text-[16px] md:text-[18px] lg:text-[22px]">
                                    This phase is all about strengthening your
                                    kingdom's bond to esnure you are ready to
                                    fight as a unit. For your kingdom to
                                    prosper, you must be aligned as a community.
                                    The team will host a series of community
                                    building games and events. Winners will
                                    unlock valuable resources for their kingdom,
                                    giving them a big advantage in the next
                                    phase of gameplay.
                                </p>
                            </div>
                            <div className="relative col-span-1 hidden lg:block text-white lg:border-l-2 pl-[7%]  pt-12">
                                <div className="absolute -ml-[7%] hidden lg:block">
                                    <div className="bg-[#ff004d] h-8 w-8 rounded-full -ml-4"></div>
                                </div>
                                <span className="bg-[#ff004d] font-bold text-center text-white p-6 pt-3 pb-3">
                                    Phase
                                </span>
                            </div>
                        </div>
                        <div className="block lg:grid grid-cols-2 grid-flow-col">
                            <div className="col-span-1 pr-[7%] pt-6 hidden lg:flex justify-end items-start">
                                <span className="bg-[#ff004d] font-bold text-center text-white p-6 pt-3 pb-3">
                                    Phase
                                </span>
                            </div>
                            <div className="relative col-span-1 text-white lg:border-l-2 pt-4 pl-[7%] pb-4">
                                <div className="absolute -ml-[7%] hidden lg:block">
                                    <div className="bg-[#ff004d] h-8 w-8 rounded-full -ml-4 mt-4"></div>
                                </div>
                                <p className="font-bold text-[24px]">
                                    The Battle Of Yllek
                                </p>
                                <p className="text-[16px] md:text-[18px] lg:text-[22px]">
                                    In this phase kingdoms will battle to
                                    conquer the country of Yllek, which is made
                                    up of 30 territories. To be victorious, one
                                    kingdom must control 16 or more territories.
                                    Conquering a territory will unlock its
                                    valuable resources, which can be traded or
                                    used to strengthen your kingdom.
                                </p>
                            </div>
                        </div>
                        <div className="block lg:grid grid-cols-2 grid-flow-col">
                            <div className="col-span-1 pr-[7%]  text-right text-white pt-8 pb-8">
                                <p className="font-bold text-[24px]">
                                    The Battle of Naur
                                </p>
                                <p className="text-[16px] md:text-[18px] lg:text-[22px]">
                                    In this phase kingdoms will battle to
                                    conquer the country of Naur, which is made
                                    up of 40 territories. To be victorious in
                                    this phase, one kingdom must control 21 or
                                    more territories. However, things are taken
                                    up a notch as we introduce our utility token
                                    and a burning mechanism which will allow
                                    kingdoms to upgrade their armies by burning
                                    lower tier warriors.
                                </p>
                            </div>
                            <div className="relative col-span-1 hidden lg:block text-white border-l-2 pl-[7%]  pt-12">
                                <div className="absolute -ml-[7%]">
                                    <div className="bg-[#ff004d] h-8 w-8 rounded-full -ml-4"></div>
                                </div>
                                <span className="bg-[#ff004d] font-bold text-center text-white p-6 pt-3 pb-3">
                                    Phase
                                </span>
                            </div>
                        </div>
                        <div className="block lg:grid grid-cols-2 grid-flow-col">
                            <div className="col-span-1 pr-[7%] pt-6 hidden lg:flex justify-end items-start">
                                <span className="bg-[#ff004d] font-bold text-center text-white p-6 pt-3 pb-3">
                                    Phase
                                </span>
                            </div>
                            <div className="relative col-span-1 text-white lg:border-l-2 pt-4 pl-[7%] pb-4">
                                <div className="absolute -ml-[7%] hidden lg:block">
                                    <div className="bg-[#ff004d] h-8 w-8 rounded-full -ml-4 mt-4"></div>
                                </div>
                                <p className="font-bold text-[24px]">
                                    Chapter 2 & Beyond
                                </p>
                                <p className="text-[16px] md:text-[18px] lg:text-[22px]">
                                    To be announced at a later date. Let's not spoil all the surprises! As we mentioned earlier, we like to keep things up our sleeve in order to stay ahead of the competition. Just know that there is a lot to look forward to.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[10vh] border-t-2 border-white">
                    <p className="text-[#fe004d] text-[40px] md:text-[46px] lg:text-[52px] font-serif text-center tracking-wider mt-8 mb-12">
                        Team / Artists
                    </p>
                    <div className="text-center text-white text-[18px]">
                        <div className="block lg:grid grid-cols-3 grid-flow-col">
                            <div className="col-span-1 p-[10%] flex flex-col items-center space-y-1">
                                <img src={ravenImg} alt=""></img>
                                <p className="text-[#fe004d] text-[26px]">
                                    The Raven
                                </p>
                                <p className="text-[16px] md:text-[18px] lg:text-[22px]">Founder / CEO</p>
                                <p>
                                    Joined the NFT space in June 2021, after
                                    some success trading crypto. Has 10yrs+
                                    experience running large projects across a
                                    variety of industries. Will fully dox once
                                    his full-time transition to web3 is
                                    complete.
                                </p>
                            </div>
                            <div className="col-span-1 p-[10%] flex flex-col items-center space-y-1">
                                <img src={emptyImg} alt=""></img>
                                <p className="text-[#fe004d] text-[26px]">
                                    Nannan Wang
                                </p>
                                <p className="text-[16px] md:text-[18px] lg:text-[22px]">Lead Developer</p>
                                <p>
                                    Our very talented web3 and game developer.
                                    He is a passionate and highly skilled
                                    blockchain expert with hands-on experience
                                    building smart contracts and decentralized
                                    applications.
                                </p>
                            </div>
                            <div className="col-span-1 p-[10%] flex flex-col items-center space-y-1">
                                <img src={emptyImg} alt=""></img>
                                <p className="text-[#fe004d] text-[26px]">
                                    XXX
                                </p>
                                <p className="text-[16px] md:text-[18px] lg:text-[22px]">Community Manager</p>
                                <p>
                                    Our one of a kind community manager. He
                                    looks after our amazing discord community,
                                    runs our giveaways, manages our discord
                                    moderators, and much more.
                                </p>
                            </div>
                        </div>
                        <div className="block lg:grid grid-cols-3 grid-flow-col">
                            <div className="col-span-1 p-[10%] flex flex-col items-center space-y-1">
                                <img src={helliosImg} alt=""></img>
                                <p className="text-[#fe004d] text-[26px]">
                                    The Hellios
                                </p>
                                <p className="text-[16px] md:text-[18px] lg:text-[22px]">
                                    Digital Art Company
                                </p>
                                <p>
                                    The Helios is a digital art company
                                    specialising in pixel art, 2D game graphics,
                                    and much more. www.thehellios.com{" "}
                                </p>
                            </div>
                            <div className="col-span-1 p-[10%] flex flex-col items-center space-y-1">
                                <img src={surajImg} alt=""></img>
                                <p className="text-[#fe004d] text-[26px]">
                                    Suraj - The Hellios
                                </p>
                                <p className="text-[16px] md:text-[18px] lg:text-[22px]">Lead Artist</p>
                                <p>
                                    Our very talented lead artist. Created our
                                    base characters, traits, promotional
                                    material, twitter banner, and much more.
                                </p>
                            </div>
                            <div className="col-span-1 p-[10%] flex flex-col items-center space-y-1">
                                <img src={digita_dynastyImg} alt=""></img>
                                <p className="text-[#fe004d] text-[26px]">
                                    Digital Dynasty
                                </p>
                                <p className="text-[16px] md:text-[18px] lg:text-[22px]">Marketing</p>
                                <p>
                                    In charge of all things marketing. This team
                                    has experience in working with many
                                    successful NFT projects.
                                </p>
                            </div>
                        </div>
                        <div className="block lg:grid grid-cols-3 grid-flow-col">
                            <div className="col-span-1 p-[10%] flex flex-col items-center space-y-1">
                                <img src={alexImg} alt=""></img>
                                <p className="text-[#fe004d] text-[26px]">
                                    Alex Orlovskiy
                                </p>
                                <p className="text-[16px] md:text-[18px] lg:text-[22px]">Game Asset Design</p>
                                <p>
                                    Our talented pixel artist from war torn
                                    Ukraine. Helped create many of our in-game
                                    assets and assisted with character traits.
                                </p>
                            </div>
                            <div className="col-span-1 p-[10%] flex flex-col items-center space-y-1">
                                <img src={ismailImg} alt=""></img>
                                <p className="text-[#fe004d] text-[26px]">
                                    Ismail de Soukay
                                </p>
                                <p className="text-[16px] md:text-[18px] lg:text-[22px]">Branding</p>
                                <p>
                                    A talented french artist who designed our
                                    awesome Five Kingdoms logo and brand colour
                                    scheme.
                                </p>
                            </div>
                            <div className="col-span-1 p-[10%] flex flex-col items-center space-y-1">
                                <img src={emptyImg} alt=""></img>
                                <p className="text-[#fe004d] text-[26px]">
                                    XXX
                                </p>
                                <p className="text-[16px] md:text-[18px] lg:text-[22px]">Game Asset Design</p>
                                <p>xxx.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[10vh] border-t-2 border-white">
                    <p className="text-[#fe004d] text-[40px] md:text-[46px] lg:text-[52px] font-serif text-center tracking-wider mt-8 mb-12">
                        FAQs
                    </p>
                    <div className="text-white text-[16px] md:text-[18px] lg:text-[22px]">
                        <div className="mb-12">
                            <div className="flex flex-row items-start">
                                <img src={dashImg} className="mt-[18px]" alt=""></img>
                                <p className="text-[#fe004d] text-[28px] ml-8">
                                    What is the total supply?
                                </p>
                            </div>
                            <br></br>
                            <p className="ml-[54px]">
                                10,000 genesis warrior NFTs (2,000 NFTs per
                                kingdom). This supply will become deflationary
                                in phase 3.
                            </p>
                        </div>
                        <div className="mb-12">
                            <div className="flex flex-row  items-start">
                                <img src={dashImg} className="mt-[18px]" alt=""></img>
                                <p className="text-[#fe004d] text-[28px] ml-8">
                                    What is the mint price?
                                </p>
                            </div>
                            <br></br>
                            <p className="ml-[54px]">0.07 ETH.</p>
                        </div>
                        <div className="mb-12">
                            <div className="flex flex-row  items-start">
                                <img src={dashImg} className="mt-[18px]" alt=""></img>
                                <p className="text-[#fe004d] text-[28px] ml-8">
                                    When is the mint?
                                </p>
                            </div>
                            <br></br>
                            <p className="ml-[54px]">
                                To be announced. Please only refer to our
                                official twitter account for updates and more
                                information.
                            </p>
                        </div>
                        <div className="mb-12">
                            <div className="flex flex-row  items-start">
                                <img src={dashImg} className="mt-[18px]" alt=""></img>
                                <p className="text-[#fe004d] text-[28px] ml-8">
                                    Where do I mint?
                                </p>
                            </div>
                            <br></br>
                            <p className="ml-[54px]">
                                Exclusively on our official website. Please only
                                refer to our official twitter and discord for
                                any announcements regarding mint. We are not
                                doing a stealth mint and we will never DM you a
                                link for minting. Please stay safe!
                            </p>
                        </div>
                        <div className="mb-12">
                            <div className="flex flex-row  items-start">
                                <img src={dashImg} className="mt-[18px]" alt=""></img>
                                <p className="text-[#fe004d] text-[28px] ml-8">
                                    How many NFTs can I mint?
                                </p>
                            </div>
                            <br></br>
                            <p className="ml-[54px]">5 NFTs per wallet.</p>
                        </div>
                        <div className="mb-12">
                            <div className="flex flex-row  items-start">
                                <img src={dashImg} className="mt-[18px]" alt=""></img>
                                <p className="text-[#fe004d] text-[28px] ml-8">
                                    When reveal?
                                </p>
                            </div>
                            <br></br>
                            <p className="ml-[54px]">
                                Our reveal process will happen in two stages.
                                Your warrior's kingdom will be revealed 24 hours
                                after the public sale has ended. Your warrior
                                will be fully revealed 24 hours later.
                            </p>
                        </div>

                        <div className="mb-12">
                            <div className="flex flex-row  items-start">
                                <img src={dashImg} className="mt-[18px]" alt=""></img>
                                <p className="text-[#fe004d] text-[28px] ml-8">
                                    How do I get whitelisted?
                                </p>
                            </div>
                            <br></br>
                            <p className="ml-[54px]">
                                We want to allocate whitelist spots to those
                                that truly believe in our project and vision. As
                                such, there will be no discord grinding, no
                                invite competitions, no art submissions, and it
                                will not be based purely on luck!
                            </p>
                            <br></br>
                            <p className="ml-[54px]">
                                We have come up with an innovate solution to the
                                current whitelist meta that we believe will be
                                adopted by many projects going forward, as it:
                            </p>
                            <div className="ml-[60px] lg:ml-[84px] flex flex-row mt-2">
                                <span>- </span><p className="ml-2"> rewards true supporters of the project</p>
                            </div>
                            <div className="ml-[60px] lg:ml-[84px] flex flex-row">
                                <span>- </span><p className="ml-2">gives equal opportunity</p>
                            </div>
                            <div className="ml-[60px] lg:ml-[84px] flex flex-row"><span>- </span><p className="ml-2">eliminates bots</p></div>
                            <div className="ml-[60px] lg:ml-[84px]  flex flex-row">
                                <span>- </span><p className="ml-2">creates more meaningful community engagement
                                    by minimising those annoying and fake discord
                                    grinders</p>
                            </div>
                            <div className="ml-[60px] lg:ml-[84px]  flex flex-row">
                                <span>- </span><p className="ml-2">reduces paper hands as true supporters are
                                    more likely to hodl (or at least sell for a
                                    profit!) More details will be provided at a
                                    later date on our official twitter and discord.</p>
                            </div>
                        </div>
                        <div className="mb-12">
                            <div className="flex flex-row items-start">
                                <img src={dashImg} className="mt-[18px]" alt=""></img>
                                <p className="text-[#fe004d] text-[28px] ml-8">
                                    Will the game be ready prior to mint day?
                                </p>
                            </div>
                            <br></br>
                            <p className="ml-[54px]">
                                Yes. Our team has been hard at work and will
                                have a fully functioning game by mint day.
                                However, given that it is a community vs
                                community p2e game, our initial focus after mint
                                will be on strengthening the community bond
                                within each of the five kingdoms. For your
                                kingdom to prosper, you must be aligned and
                                fight as a unit.
                            </p>
                        </div>
                        <div className="mb-12">
                            <div className="flex flex-row items-start">
                                <img src={dashImg} className="mt-[18px]" alt=""></img>
                                <p className="text-[#fe004d] text-[28px] ml-8">
                                    Will warriors have different utility based
                                    on their rank?
                                </p>
                            </div>
                            <br></br>
                            <p className="ml-[54px]">
                                Yes. As with most things, the rarer your item
                                the greater the utility. Higher ranked warriors
                                will receive a bigger share of prizes, earn more
                                utility tokens and will unlock a range of
                                exclusive and bonus utility. If you are lucky
                                enough to mint a King or Queen warrior you will
                                be very, very happy!
                            </p>
                        </div>
                        <div className="mb-12">
                            <div className="flex flex-row  items-start">
                                <img src={dashImg} className="mt-[18px]" alt=""></img>
                                <p className="text-[#fe004d] text-[28px] ml-8">
                                    How will the genesis warrior supply become
                                    deflationary?
                                </p>
                            </div>
                            <br></br>
                            <p className="ml-[54px]">
                                In phase 3, genesis NFT holders will be able to
                                burn lower tier (lower ranked) warriors in
                                exchange for a higher tier warrior. The burning
                                of your NFTs will not only reduce the overall
                                supply, but will strengthen your kingdom's army
                                by increasing the number of more powerful
                                warriors. It will also result in additional
                                utility for those holders. We expect the total
                                supply of genesis warrior NFTs to reduce by more
                                than 50%.
                            </p>
                        </div>
                        <div className="mb-12">
                            <div className="flex flex-row items-start">
                                <img src={dashImg} className="mt-[18px]" alt=""></img>
                                <p className="text-[#fe004d] text-[28px] ml-8">
                                    What is the long term vision?
                                </p>
                            </div>
                            <br></br>
                            <p className="ml-[54px]">
                                Our long term vision is to develop a suite of innovative and fun mobile and blockchain games for the mass market, leveraging our amazing community as a decentralized focus group and feedback network. Our loyal holders will be rewarded throughout this exciting journey.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-[10vh] border-t-2  pl-[2%] pr-[2%] border-white">
                    <p className="text-white text-left mt-8 pb-8 text-[16px] md:text-[18px] lg:text-[22px]">
                        Five Kingdoms © 2022. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
