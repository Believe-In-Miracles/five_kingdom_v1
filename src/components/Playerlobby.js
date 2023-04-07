import React, { useState } from "react";
import nft_1_img from "../assets/image/nft_1.png";
import nft_2_img from "../assets/image/nft_2.png";
import nft_3_img from "../assets/image/nft_3.png";
import nft_4_img from "../assets/image/nft_4.png";
import nft_5_img from "../assets/image/nft_5.png";
import nft_6_img from "../assets/image/nft_6.png";
import nft_7_img from "../assets/image/nft_7.png";
import nft_8_img from "../assets/image/nft_8.png";
import nft_9_img from "../assets/image/nft_9.png";

import enterBtn_img from "../assets/image/playerlobby/enterBtn.png";
import leftArrow_img from "../assets/image/playerlobby/leftArrow.png";
import rightArrow_img from "../assets/image/playerlobby/rightArrow.png";
import stakeAllBtn_img from "../assets/image/playerlobby/stakeAllBtn.png";
import stakeBtn_img from "../assets/image/playerlobby/stakeBtn.png";
import unstakeAllBtn_img from "../assets/image/playerlobby/unstakeAllBtn.png";
import unstakeBtn_img from "../assets/image/playerlobby/unstakeBtn.png";
import crown_img from "../assets/image/Crown.png";
import shield_img from "../assets/image/Shield.png";
import swords_img from "../assets/image/Swords.png";


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Playerlobby() {
    const [propertyModal, setPropertyModal] = useState(false);
    return (
        <div>
            <div className="p-[5vw] pt-12 pb-0 text-white">
                <div className=" pl-[2%] pr-[2%]">
                    <p className="text-[#fe004d] text-[46px] md:text-[52px] lg:text-[60px] font-serif text-center tracking-wider">
                        Player Lobby
                    </p>
                    <div className="mt-12">
                        <div className="border-4 border-[#595959] p-8">
                            <div className="-mt-[54px]">
                                <span className="text-[#fe004d] text-[20px] md:text-[22px] lg:text-[24px] font-serif bg-black p-4">
                                    player dashboard
                                </span>
                            </div>
                            <div className="block lg:grid grid-cols-6 grid-flow-col text-center mt-4">
                                <div className="col-span-1">
                                    <p className="text-[48px] font-semibold tracking-wider">11</p>
                                    <p className="text-[#7f7f7f] text-[20px]">Warriors owner</p>
                                </div>
                                <div className="col-span-1">
                                    <p className="text-[48px] font-semibold tracking-wider">4</p>
                                    <p className="text-[#7f7f7f] text-[20px]">Warriors staked</p>
                                </div>
                                <div className="col-span-1">
                                    <p className="text-[48px] font-semibold tracking-wider">36%</p>
                                    <p className="text-[#7f7f7f] text-[20px]">% of warriors staked</p>
                                </div>
                                <div className="col-span-1">
                                    <p className="text-[48px] font-semibold tracking-wider">150</p>
                                    <p className="text-[#7f7f7f] text-[20px]">Attack score</p>
                                </div>
                                <div className="col-span-1">
                                    <p className="text-[48px] font-semibold tracking-wider">100</p>
                                    <p className="text-[#7f7f7f] text-[20px]">Defense score</p>
                                </div>
                                <div className="col-span-1">
                                    <p className="text-[48px] font-semibold tracking-wider">250</p>
                                    <p className="text-[#7f7f7f] text-[20px]">Total army score</p>
                                </div>
                            </div>
                        </div>
                        <div className="block lg:grid grid-cols-2 grid-flow-col text-center ">
                            <div className="col-span-1 lg:mr-4 mt-8">
                                <div className="border-4 border-[#595959]">
                                    <div className="-mt-[22px] text-left">
                                        <span className="text-[#fe004d] ml-8 text-[20px] md:text-[22px] lg:text-[24px] font-serif bg-black p-4">
                                            player dashboard
                                        </span>
                                    </div>
                                    <div className="min-h-[300px] p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-4">
                                        <div className="p-2"><img src={nft_1_img} className="cursor-pointer" onClick={() => { setPropertyModal(true) }}></img></div>
                                        <div className="p-2"><img src={nft_1_img} className="cursor-pointer" onClick={() => { setPropertyModal(true) }}></img></div>
                                        <div className="p-2"><img src={nft_1_img} className="cursor-pointer" onClick={() => { setPropertyModal(true) }}></img></div>
                                        <div className="p-2"><img src={nft_1_img} className="cursor-pointer" onClick={() => { setPropertyModal(true) }}></img></div>
                                        <div className="p-2"><img src={nft_1_img} className="cursor-pointer" onClick={() => { setPropertyModal(true) }}></img></div>
                                        <div className="p-2"><img src={nft_1_img} className="cursor-pointer" onClick={() => { setPropertyModal(true) }}></img></div>
                                        <div className="p-2"><img src={nft_1_img} className="cursor-pointer" onClick={() => { setPropertyModal(true) }}></img></div>
                                        <div className="p-2"><img src={nft_1_img} className="cursor-pointer" onClick={() => { setPropertyModal(true) }}></img></div>
                                        <div className="p-2"><img src={nft_1_img} className="cursor-pointer" onClick={() => { setPropertyModal(true) }}></img></div>
                                        <div className="p-2"><img src={nft_1_img} className="cursor-pointer" onClick={() => { setPropertyModal(true) }}></img></div>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center justify-center space-x-4 lg:space-x-8 mt-4">
                                    <img className="hidden lg:block cursor-pointer" src={stakeBtn_img}></img>
                                    <img className="hidden lg:block cursor-pointer" src={stakeAllBtn_img}></img>
                                    <div className="flex flex-row items-center space-x-2">
                                        <img className="cursor-pointer" src={leftArrow_img}></img>
                                        <span className="font-bold text-[22px]">Page 1/1</span>
                                        <img className="cursor-pointer" src={rightArrow_img}></img>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center justify-center space-x-4 lg:space-x-8 mt-4 lg:hidden">
                                    <img className="cursor-pointer" src={stakeBtn_img}></img>
                                    <img className="cursor-pointer" src={stakeAllBtn_img}></img>
                                </div>
                            </div>
                            <div className="col-span-1 lg:ml-4 mt-8">
                                <div className="border-4 border-[#595959]">
                                    <div className="-mt-[22px]  ml-8  text-left">
                                        <span className="text-[#fe004d] text-[20px] md:text-[22px] lg:text-[24px] font-serif bg-black p-4">
                                            staked warriors
                                        </span>
                                    </div>
                                    <div className="min-h-[300px] p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-4">
                                        <div className="p-2"><img src={nft_2_img} onClick={() => { setPropertyModal(true) }}></img></div>
                                        <div className="p-2"><img src={nft_3_img} onClick={() => { setPropertyModal(true) }}></img></div>
                                        <div className="p-2"><img src={nft_4_img} onClick={() => { setPropertyModal(true) }}></img></div>
                                        <div className="p-2"><img src={nft_5_img} onClick={() => { setPropertyModal(true) }}></img></div>
                                        <div className="p-2"><img src={nft_6_img} onClick={() => { setPropertyModal(true) }}></img></div>
                                        <div className="p-2"><img src={nft_7_img} onClick={() => { setPropertyModal(true) }}></img></div>
                                        <div className="p-2"><img src={nft_8_img} onClick={() => { setPropertyModal(true) }}></img></div>
                                        <div className="p-2"><img src={nft_9_img} onClick={() => { setPropertyModal(true) }}></img></div>
                                        <div className="p-2"><img src={nft_8_img} onClick={() => { setPropertyModal(true) }}></img></div>
                                        <div className="p-2"><img src={nft_9_img} onClick={() => { setPropertyModal(true) }}></img></div>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center justify-center space-x-4 lg:space-x-8 mt-4">
                                    <img className="hidden lg:block cursor-pointer" src={unstakeBtn_img}></img>
                                    <img className="hidden lg:block cursor-pointer" src={unstakeAllBtn_img}></img>
                                    <div className="flex flex-row items-center space-x-2">
                                        <img className="cursor-pointer" src={leftArrow_img}></img>
                                        <span className="font-bold text-[22px]">Page 1/1</span>
                                        <img className="cursor-pointer" src={rightArrow_img}></img>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center justify-center space-x-4 lg:space-x-8 mt-4 lg:hidden">
                                    <img className="cursor-pointer" src={unstakeBtn_img}></img>
                                    <img className="cursor-pointer" src={unstakeAllBtn_img}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pb-2 flex items-center justify-center">
                        <Link to="/trainingground">
                            <div className="px-6 py-4 bg-[#fe004d] rounded-lg text-[20px]">
                                Enter the training ground
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="mt-[5vh] border-t-2 border-white pl-[2%] bg-black">
                    <p className="text-[15px] md:text-[20px] lg:text-[22px] font-serif tracking-wider pt-8 pb-8">
                        Five Kingdoms © 2022. All rights reserved.
                    </p>
                </div>
            </div>
            <div>
                {propertyModal &&
                    <div>
                        <div class="modal fade fixed w-full h-full outline-none top-[0px] left-[0px] overflow-x-hidden overflow-y-auto bg-opacity-60 bg-black backdrop-blur-sm w-screen h-full" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog" onClick={()=>{setPropertyModal(false)}}>
                            <div class="modal-dialog modal-dialog-centered relative w-[600px] pointer-events-none top-[50%] left-[50%] -ml-[300px] -mt-[130px]">
                                <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-clip-padding rounded-md outline-none text-current">
                                    <div class="modal-body relative p-4 bg-black text-white border-[#595959] border-4 rounded-[40px]">
                                        <p className="text-2xl text-center">Archer</p>
                                        <div className="grid grid-cols-3 gaps-4">
                                            <div className="col-span-1 p-[10%]">
                                                <img src={crown_img}></img>
                                                <p className="text-center text-xl -mt-4">Kingdom of the Undead</p>
                                            </div>
                                            <div className="col-span-1 p-[10%]">
                                                <img src={swords_img}></img>
                                                <p className="text-center text-xl text-red-800 font-semibold">4</p>
                                            </div>
                                            <div className="col-span-1 p-[10%]">
                                                <img src={shield_img}></img>
                                                <p className="text-center text-xl text-red-800 font-semibold">1</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Playerlobby;
