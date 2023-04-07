import React, { useState, useEffect, useContext } from "react";

import flagApes_img from "../assets/image/flag_apes.png";
import flagKnights_img from "../assets/image/flag_knights.png";
// import back_img from "../assets/image/battle/back.png";
import back_img from "../assets/image/battle/Knights Background.gif";

import knights_back_img from "../assets/image/battle/Knights Background.gif";

import Undead_back_img from "../assets/image/battle/Undead background.gif";

import Ares_back_img from "../assets/image/battle/Ares Background.gif";

import Ape_back_img from "../assets/image/battle/Ape Background.gif";

import Anhur_back_img from "../assets/image/battle/Anhur Background.gif";

import leftArrow_img from "../assets/image/leftArrow.png";
import rightArrow_img from "../assets/image/rightArrow.png";

import spell_book_open_img from "../assets/image/battle/Spell Book - Open (Active).png";

import healthBarBaseLeft from "../assets/image/battle/Health Bar - base.png";

import healthBarBaseRight from "../assets/image/battle/Health Right Bar - base.png";

import healthBarLeft100 from "../assets/image/battle/Health - 100.png";
import healthBarLeft90 from "../assets/image/battle/Health - 90.png";
import healthBarLeft80 from "../assets/image/battle/Health - 80.png";
import healthBarLeft70 from "../assets/image/battle/Health - 70.png";
import healthBarLeft60 from "../assets/image/battle/Health - 60.png";
import healthBarLeft50 from "../assets/image/battle/Health - 50.png";
import healthBarLeft40 from "../assets/image/battle/Health - 40.png";
import healthBarLeft30 from "../assets/image/battle/Health - 30.png";
import healthBarLeft20 from "../assets/image/battle/Health - 20.png";
import healthBarLeft10 from "../assets/image/battle/Health - 10.png";

import healthBarRight100 from "../assets/image/battle/Health Right - 100.png";
import healthBarRight90 from "../assets/image/battle/Health Right - 90.png";
import healthBarRight80 from "../assets/image/battle/Health Right - 80.png";
import healthBarRight70 from "../assets/image/battle/Health Right - 70.png";
import healthBarRight60 from "../assets/image/battle/Health Right - 60.png";
import healthBarRight50 from "../assets/image/battle/Health Right - 50.png";
import healthBarRight40 from "../assets/image/battle/Health Right - 40.png";
import healthBarRight30 from "../assets/image/battle/Health Right - 30.png";
import healthBarRight20 from "../assets/image/battle/Health Right - 20.png";
import healthBarRight10 from "../assets/image/battle/Health Right - 10.png";

import { NotificationContainer, NotificationManager } from 'react-notifications';
import "react-notifications/lib/notifications.css";

import BattleSpellModal from './BattleSpellModal';

import MyContext from './MyContext';

const kingdomName = ['', 'Kingdom of the Anhur', 'Kingdom of the Apes', 'Kingdom of the Ares', 'Kingdom of the Knights', 'Kingdom of the Undead'];
var battleStart1 = false;

function Battle() {
    // const { battleInfo, setBattleInfo } = useContext(MyContext);
    const [teamAHit, setTeamAHit] = useState(100);
    const [teamBHit, setTeamBHit] = useState(100);
    const [battleStart, setBattleStart] = useState(false);
    const [attackTurn, setAttackTurn] = useState(false);
    const [battleSpellModalOpen, setBattleSpellModalOpen] = useState(false);
    const [spellData, setSpellData] = useState([0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);

    const [boostedTeamA, setBoostedTeamA] = useState(false);
    const [boostedTeamB, setBoostedTeamB] = useState(false);

    const { battleInfo, setBattleInfo } = useContext(MyContext);

    const [teams, setTeams] = useState([2, 4]);
    var kingdomBattleInfo = [
        {

        },
        {
            attack: 40000,
            defense: 30000
        },
        {
            attack: 40000,
            defense: 30000
        },
        {
            attack: 40000,
            defense: 30000
        },
        {
            attack: 40000,
            defense: 30000
        },
        {
            attack: 40000,
            defense: 30000
        }
    ];

    var battleBonusInfo = {
        12: {
            1: 4,
            2: 1
        },
        13: {
            1: 4,
            2: 1
        },
        14: {
            1: 4,
            2: 1
        },
        15: {
            1: 4,
            2: 1
        },
        21: {
            1: 4,
            2: 1
        },
        22: {
            1: 4,
            2: 1
        },
        23: {
            1: 4,
            2: 1
        },
        24: {
            1: 4,
            2: 1
        },
        25: {
            1: 4,
            2: 1
        },
        34: {
            1: 4,
            2: 1
        },
        35: {
            1: 4,
            2: 1
        },
        45: {
            1: 4,
            2: 1
        }
    }

    function attackSucceed(as1, ds1, as2, ds2) {
        let defense_block_percent = ds2 / 1000;
        let random_defense = Math.random() * 100;
        if (random_defense > defense_block_percent) {
            let attack_succeed_percent = as1 * 100 / (as1 + as2);
            let random_attack = Math.random() * 100;
            if (random_attack < attack_succeed_percent) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    function getLeftHealthBarImage(percentage) {
        switch (percentage) {
            case 100: { return healthBarLeft100; }
            case 90: { return healthBarLeft90; }
            case 80: { return healthBarLeft80; }
            case 70: { return healthBarLeft70; }
            case 60: { return healthBarLeft60; }
            case 50: { return healthBarLeft50; }
            case 40: { return healthBarLeft40; }
            case 30: { return healthBarLeft30; }
            case 20: { return healthBarLeft20; }
            case 10: { return healthBarLeft10; }
            default: { return healthBarLeft100; }
        }
    }

    function getRightHealthBarImage(percentage) {
        switch (percentage) {
            case 100: { return healthBarRight100; }
            case 90: { return healthBarRight90; }
            case 80: { return healthBarRight80; }
            case 70: { return healthBarRight70; }
            case 60: { return healthBarRight60; }
            case 50: { return healthBarRight50; }
            case 40: { return healthBarRight40; }
            case 30: { return healthBarRight30; }
            case 20: { return healthBarRight20; }
            case 10: { return healthBarRight10; }
            default: { return healthBarRight100; }
        }
    }

    function battle(k1, k2) {
        if (!battleStart1) {
            battleStart1 = true;
            // console.log("kingdom:", k1, " vs kingdom:", k2);
            let as1 = kingdomBattleInfo[k1]['attack'];
            let ds1 = kingdomBattleInfo[k1]['defense'];
            let as2 = kingdomBattleInfo[k2]['attack'];
            let ds2 = kingdomBattleInfo[k1]['defense'];
            let hit1 = 10;
            let hit2 = 10;
            let temp = k1 > k2 ? k2 * 10 + k1 : k1 * 10 + k2;
            ds1 += battleBonusInfo[temp][1] * 100;
            ds2 += battleBonusInfo[temp][2] * 100;

            let side = false;
            let turn_number = 0;
            const intervalID = setInterval(() => {
                side = !side;
                let rlt = false;
                setAttackTurn(side);
                if (side) {
                    rlt = attackSucceed(as1, ds1, as2, ds2);
                    if (rlt) hit2--;
                } else {
                    rlt = attackSucceed(as2, ds2, as1, ds1);
                    if (rlt) hit1--;
                }
                turn_number++;
                // console.log("rlt:", rlt);
                // console.log("hit1:", hit1);
                // console.log("hit2:", hit2);
                setTeamAHit(hit1 * 10);
                setTeamBHit(hit2 * 10);
                if (hit1 <= 0 || hit2 <= 0) {
                    // console.log("turn_number", turn_number);
                    if (hit1 <= 0) {
                        console.log("Kingdom", k2, " win!");
                        // alert(kingdomName[teams[1]] + " win!");
                        NotificationManager.success(kingdomName[teams[1]] + " win!");
                    } else {
                        console.log("Kingdom", k1, " win!");
                        NotificationManager.success(kingdomName[teams[0]] + " win!");
                        // alert(kingdomName[teams[0]] + " win!");
                    }
                    clearInterval(intervalID);
                }
            }, 1000);
        }
    }
    useEffect(() => {
        console.log("battleInfo", battleInfo);
        battle(teams[0], teams[1]);
    }, [battleInfo]);

    const spellBookClicked = () => {
        setBattleSpellModalOpen(true);
    }

    const closeSpellModal = () => {
        setBattleSpellModalOpen(false);
    }

    const selectSpell = (selectedSpellData) => {
        setBattleSpellModalOpen(false);
        console.log("selectedSpellData", selectedSpellData);
        if (selectedSpellData.length > 0) {
            let temp_spellData = [...spellData];
            for (let i = 0; i < selectedSpellData.length; i++) {
                temp_spellData[selectedSpellData[i]] = 0;
            }
            setSpellData(temp_spellData);
            NotificationManager.success("Spell affected!");
        }
    }

    const boostTeamA = () => {
        if(!boostedTeamA){
            setBoostedTeamA(true);
            NotificationManager.success("Team A boosted!");
        }
    }

    const boostTeamB = () => {
        if(!boostedTeamB){
            setBoostedTeamB(true);
            NotificationManager.success("Team B boosted!");
        }
    }

    return (
        <div className="p-[5vw] pt-12 pb-0 text-white">
            {battleSpellModalOpen && <BattleSpellModal spellData={spellData} closeSpellModal={closeSpellModal} selectSpell={selectSpell} />}
            <div className=" pl-[2%] pr-[2%]">
                <p className="text-[#fe004d] text-[46px] md:text-[52px] lg:text-[60px] font-serif text-center tracking-wider font-Canterbury">
                    {"Agasaya Battle"}
                </p>
                <div className="mt-12">
                    <div className="block lg:grid grid-cols-11 grid-flow-col">
                        <div className="col-span-5 lg:mr-4">
                            <div className="border-4 border-[#595959] p-8">
                                <div className="-mt-[54px]">
                                    <span className="text-[#fe004d] text-[20px] md:text-[22px] lg:text-[26px] font-serif bg-black p-4">
                                        battle opponents
                                    </span>
                                    <div className="mt-4">
                                        <div className="block lg:grid grid-cols-2 grid-flow-col">
                                            <div className="col-span-1 flex items-center justify-center space-x-4">
                                                <img
                                                    src={flagApes_img}
                                                    className="h-[100px]"
                                                ></img>
                                                <div>
                                                    <p className="text-[22px] text-[#595959] font-bold">
                                                        Team A
                                                    </p>
                                                    <p className="text-[22px]">
                                                        {kingdomName[teams[0]]}
                                                        {/* Kingdom of the Ares */}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-span-1 flex items-center justify-center space-x-4">
                                                <img
                                                    src={flagKnights_img}
                                                    className="h-[100px]"
                                                ></img>
                                                <div>
                                                    <p className="text-[22px] text-[#595959] font-bold">
                                                        Team B
                                                    </p>
                                                    <p className="text-[22px]">
                                                        {kingdomName[teams[1]]}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 lg:ml-4 lg:mr-4">
                            <div className="border-4 border-[#595959] p-4  h-full">
                                <div className="-mt-[38px]">
                                    <span className="text-[#fe004d] text-[20px] md:text-[22px] lg:text-[26px] font-serif bg-black p-4">
                                        battle start time
                                    </span>
                                </div>
                                <div className="text-center flex items-center justify-center h-full">
                                    <span className="text-[42px] text-white font-bold tracking-widest">
                                        LIVE
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 lg:ml-4 lg:mr-4">
                            <div className="border-4 border-[#595959] p-8  h-full">
                                <div className="-mt-[54px]">
                                    <span className="text-[#fe004d] text-[20px] md:text-[22px] lg:text-[26px] font-serif bg-black p-4">
                                        spell
                                    </span>
                                </div>
                                <div className="mt-4 text-center flex items-center justify-center h-full">
                                    <img src={spell_book_open_img} className="h-[100px] cursor-pointer" onClick={() => { spellBookClicked() }}></img>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 lg:ml-4">
                            <div className="border-4 border-[#595959] p-8 h-full">
                                <div className="-mt-[54px]">
                                    <span className="text-[#fe004d] text-[20px] md:text-[22px] lg:text-[26px] font-serif bg-black p-4">
                                        defense boost
                                    </span>
                                </div>
                                <div className="mt-4 space-x-4 flex items-center justify-center  h-full">
                                    <span onClick={() => { boostTeamA(); }} className="bg-white rounded-lg text-black font-semibold text-[16px] leading-[20px] px-4 py-4 cursor-pointer">
                                        TEAM A
                                    </span>
                                    <span onClick={() => { boostTeamB(); }} className="bg-[#595959] rounded-lg text-white font-semibold text-[16px] leading-[20px] px-4 py-4 cursor-pointer">
                                        TEAM B
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-4 border-[#595959] p-8 mt-12">
                        <div className="-mt-[54px]">
                            <span className="text-[#fe004d] text-[20px] md:text-[22px] lg:text-[26px] font-serif bg-black p-4">
                                Agasaya battle
                            </span>
                            <div className="mt-4 relative">
                                {/* <div className="absolute w-full">
                                    <div className="grid grid-cols-2 p-4">
                                        <div className="col-span-1 p-4 px-8">
                                            <p className="text-[32px] font-bold text-[#fe004d]">
                                                {kingdomName[teams[0]]}
                                            </p>
                                            <div className="w-[70%] h-[40px] bg-black border-2 border-[#ffffff] mt-1">
                                                <div className="h-full bg-[rgb(0,152,254)]" style={{
                                                    width: teamAHit + '%'
                                                }}></div>
                                            </div>
                                        </div>
                                        <div className="col-span-1 p-4 px-8 flex flex-col items-end">
                                            <p className="text-[32px] font-bold text-[#fe004d]">
                                                {kingdomName[teams[1]]}
                                            </p>
                                            <div className="w-[70%] h-[40px] bg-black border-2 border-[#ffffff] mt-1 flex justify-end">
                                                <div className="h-full bg-[rgb(0,152,254)]" style={{
                                                    width: teamBHit + '%'
                                                }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <img src={attackTurn ? rightArrow_img : leftArrow_img} className="w-[100px]"></img>
                                    </div>
                                </div> */}
                                <div className="absolute w-full">
                                    <div className="grid grid-cols-2 p-4">
                                        <div className="col-span-1 p-4 px-8">
                                            <div className="w-[80%] relative">
                                                <div className="absolute w-full h-full">
                                                    <div className="flex items-center h-full">
                                                        <div className="w-[100%]">
                                                            {teamAHit > 0 ?
                                                                <img src={getLeftHealthBarImage(teamAHit)}></img> : ''}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="absolute w-full h-full">
                                                    <div className="flex items-center h-full">
                                                        <div className="w-[79.8%]">
                                                        </div>
                                                        <div className="h-[40%] w-[13%] flex justify-center">
                                                            <img src={flagApes_img} className="h-full"></img>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="absolute w-full h-full">
                                                    <div className="h-full">
                                                        <div className="font-Canterbury w-full flex justify-between text-right pl-[2%] pr-[22%] pt-[3.2%] xl:pt-[3.4%] 2xl:pt-[3.8%] text-[16px] xl:text-[19px] 2xl:text-[22px] font-semibold text-[#fe004d]">
                                                            <span>{teamAHit}%</span>
                                                            <span>{kingdomName[teams[0]]}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={healthBarBaseLeft}></img>
                                            </div>
                                        </div>
                                        <div className="col-span-1 p-4 px-8 flex flex-col items-end">
                                            <div className="w-[80%] relative">
                                                <div className="absolute w-full h-full">
                                                    <div className="flex items-center h-full">
                                                        <div className="w-[100%]">
                                                            {teamBHit > 0 ?
                                                                <img src={getRightHealthBarImage(teamBHit)}></img> : ''}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="absolute w-full h-full">
                                                    <div className="flex items-center h-full">
                                                        <div className="w-[7.1%]">
                                                        </div>
                                                        <div className="h-[40%] w-[13%] flex justify-center">
                                                            <img src={flagKnights_img} className="h-full"></img>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="absolute w-full h-full">
                                                    <div className="h-full">
                                                        <div className="font-Canterbury w-full flex justify-between text-right pr-[2%] pl-[22%] pt-[3.2%] xl:pt-[3.4%] 2xl:pt-[3.8%] text-[16px] xl:text-[19px] 2xl:text-[22px] font-semibold text-[#fe004d]">
                                                            <span>{kingdomName[teams[1]]}</span>
                                                            <span>{teamBHit}%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={healthBarBaseRight}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <img src={attackTurn ? rightArrow_img : leftArrow_img} className="w-[100px]"></img>
                                    </div>
                                </div>

                                <img src={back_img} className="w-full"></img>
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

export default Battle;
