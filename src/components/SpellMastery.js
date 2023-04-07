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

import backToTraingground_img from "../assets/image/training/backToTraingground.png";
import leftArrow_img from "../assets/image/playerlobby/leftArrow.png";
import rightArrow_img from "../assets/image/playerlobby/rightArrow.png";
import stakeAllBtn_img from "../assets/image/playerlobby/stakeAllBtn.png";
import stakeBtn_img from "../assets/image/playerlobby/stakeBtn.png";
import unstakeAllBtn_img from "../assets/image/playerlobby/unstakeAllBtn.png";
import unstakeBtn_img from "../assets/image/playerlobby/unstakeBtn.png";
import crown_img from "../assets/image/Crown.png";
import shield_img from "../assets/image/Shield.png";
import swords_img from "../assets/image/Swords.png";
import spellMasteryBg from "../assets/image/training/spellMasteryBg.png";
import spellMasteryItem1 from "../assets/image/training/spellMasteryItem1.png";
import spellMasteryItem2 from "../assets/image/training/spellMasteryItem2.png";

import { NotificationContainer, NotificationManager } from 'react-notifications';
import "react-notifications/lib/notifications.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import spellImg111 from "../assets/image/spell/111.jpg";
import spellImg112 from "../assets/image/spell/112.jpg";
import spellImg121 from "../assets/image/spell/121.jpg";
import spellImg122 from "../assets/image/spell/122.jpg";
import spellImg131 from "../assets/image/spell/131.jpg";
import spellImg132 from "../assets/image/spell/132.jpg";
import spellImg141 from "../assets/image/spell/141.jpg";
import spellImg142 from "../assets/image/spell/142.jpg";
import spellImg211 from "../assets/image/spell/211.jpg";
import spellImg212 from "../assets/image/spell/212.jpg";
import spellImg221 from "../assets/image/spell/221.jpg";
import spellImg222 from "../assets/image/spell/222.jpg";
import spellImg231 from "../assets/image/spell/231.jpg";
import spellImg232 from "../assets/image/spell/232.jpg";
import spellImg241 from "../assets/image/spell/241.jpg";
import spellImg242 from "../assets/image/spell/242.jpg";
import spellImg311 from "../assets/image/spell/311.jpg";
import spellImg312 from "../assets/image/spell/312.jpg";
import spellImg321 from "../assets/image/spell/321.jpg";
import spellImg322 from "../assets/image/spell/322.jpg";
import spellImg331 from "../assets/image/spell/331.jpg";
import spellImg332 from "../assets/image/spell/332.jpg";
import spellImg341 from "../assets/image/spell/341.jpg";
import spellImg342 from "../assets/image/spell/342.jpg";
import spellImg411 from "../assets/image/spell/411.jpg";
import spellImg412 from "../assets/image/spell/412.jpg";
import spellImg421 from "../assets/image/spell/421.jpg";
import spellImg422 from "../assets/image/spell/422.jpg";
import spellImg431 from "../assets/image/spell/431.jpg";
import spellImg432 from "../assets/image/spell/432.jpg";
import spellImg441 from "../assets/image/spell/441.jpg";
import spellImg442 from "../assets/image/spell/442.jpg";

const activeSpellImage = [spellImg111, spellImg121, spellImg131, spellImg141, spellImg211, spellImg221, spellImg231, spellImg241, spellImg311, spellImg321, spellImg331, spellImg341, spellImg411, spellImg421, spellImg431, spellImg441];
const passiveSpellImage = [spellImg112, spellImg122, spellImg132, spellImg142, spellImg212, spellImg222, spellImg232, spellImg242, spellImg312, spellImg322, spellImg332, spellImg342, spellImg412, spellImg422, spellImg432, spellImg442];


function SpellMastery(walletAddress) {
    const [propertyModal, setPropertyModal] = useState(false);
    const [spellData, setSpellData] = useState([0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    const [selectedSpellData, setSelectedSpellData] = useState([]);
    const setSpell = (index) => {
        if (spellData[index] == 1) {
            let temp_selectedSpellData = [...selectedSpellData];
            let id = temp_selectedSpellData.indexOf(index);
            if (id == -1) {
                temp_selectedSpellData.push(index);
            } else {
                temp_selectedSpellData.splice(id, 1);
            }
            console.log("temp_selectedSpellData", temp_selectedSpellData);
            setSelectedSpellData(temp_selectedSpellData);
        }
    }

    const selectSpell = () => {
        setPropertyModal(false);
        if (selectedSpellData.length > 0) {
            let temp_spellData = [...spellData];
            for (let i = 0; i < selectedSpellData.length; i++) {
                temp_spellData[selectedSpellData[i]] = 0;
            }
            setSpellData(temp_spellData);
            NotificationManager.success("Spell Trained!");
        }
    }

    return (
        <div>
            <div className="p-[5vw] pt-12 pb-0 text-white">
                <div className=" pl-[2%] pr-[2%]">
                    <p className="text-[#fe004d] text-[46px] md:text-[52px] lg:text-[60px] font-serif text-center tracking-wider">
                        Spell Mastery
                    </p>
                    <div className="mt-12">
                        <div className="text-center ">
                            <div className="col-span-1 lg:mr-4 mt-8">
                                <div className="border-4 border-[#595959]">
                                    <div className="-mt-[22px] text-left">
                                        <span className="text-[#fe004d] ml-8 text-[20px] md:text-[22px] lg:text-[24px] font-serif bg-black p-4">
                                            spell mastery
                                        </span>
                                    </div>
                                    <div className="min-h-[300px] p-6 pt-[12px]">
                                        <img src={spellMasteryBg} className="w-full cursor-pointer" onClick={() => { setPropertyModal(true) }}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 pb-2 flex items-center justify-center">
                        <Link to="/trainingground">
                            <img className="cursor-pointer w-[300px]" src={backToTraingground_img}></img>
                        </Link>
                    </div>
                </div>
                <div className="mt-[5vh] border-t-2 border-white pl-[2%] bg-black">
                    <p className="text-[15px] md:text-[20px] lg:text-[22px] font-serif tracking-wider pt-8 pb-8">
                        Five Kingdoms © 2022. All rights reserved.
                    </p>
                </div>
                <NotificationContainer />
            </div>
            <div>
                {propertyModal &&
                    <div>
                        <div class="modal fade fixed w-full h-full outline-none top-[0px] left-[0px] overflow-x-hidden overflow-y-auto bg-opacity-60 bg-black backdrop-blur-sm w-screen h-full" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
                            <div class="modal-dialog modal-dialog-centered relative w-[600px] pointer-events-none top-[50%] left-[50%] -ml-[300px] -mt-[300px]">
                                <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-clip-padding rounded-md outline-none text-current">
                                    <div class="modal-body relative p-4 bg-black text-white border-yellow border-4 rounded-[10px] grid grid-cols-4 gap-4">
                                        {passiveSpellImage.map((item, index) => (
                                            <img src={spellData[index] == 0 ? item : activeSpellImage[index]} className={(selectedSpellData.indexOf(index) == -1 ? "border-[#ff004b00]" : "border-[#ff004b]") + " border-2 cursor-pointer"} onClick={() => { setSpell(index); }}></img>
                                        ))}
                                    </div>
                                    <div className='mt-4 flex justify-center items-center mb-4'>
                                        <p className='w-full max-w-[200px] rounded-lg bg-[#ff004b] px-5 py-2 border-4 border-[#808080] text-center text-[20px] font-bold cursor-pointer' onClick={() => { selectSpell() }}>Train</p>
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

export default SpellMastery;
