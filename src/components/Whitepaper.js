import React from "react";
import flagAnhur_img from "../assets/image/flag_anhur.png";
import flagApes_img from "../assets/image/flag_apes.png";
import flagAres_img from "../assets/image/flag_ares.png";
import flagKnights_img from "../assets/image/flag_knights.png";
import flagUndead_img from "../assets/image/flag_undead.png";
import mintPic from "../assets/image/mintPic.png";

import tree_img from "../assets/image/tree.png";
import stone_img from "../assets/image/stone.png";
import gold_img from "../assets/image/gold.png";
import tool1_img from "../assets/image/tool1.png";
import tool2_img from "../assets/image/tool2.png";

import naur1_img from "../assets/image/naur1.png";
import naur2_img from "../assets/image/naur2.png";
import naur3_img from "../assets/image/naur3.png";
import naur4_img from "../assets/image/naur4.png";

function Whitepaper() {
    return (
        <div className="p-[5vw] pt-12 pb-0 text-white">
            <div className=" pl-[2%] pr-[2%]">
                <p className="text-[#fe004d] text-[46px] md:text-[52px] lg:text-[60px] font-serif text-center tracking-wider">
                    Whitepaper 1.0
                </p>
                <div className="mt-12">
                    <p className="text-[#fe004d] text-[32px] md:text-[42px] lg:text-[52px] font-serif">
                        Overview
                    </p>
                    <p className="text-[16px] md:text-[20px] lg:text-[22px] mt-6">
                        Five Kingdoms is a community vs community play to earn (p2e)
                        game whereby five sub communities (i.e. five Kingdoms) do
                        battle for exciting rewards, and the ultimate bragging
                        rights. The five Kingdoms that will be doing battle are:
                    </p>
                    <div className="block lg:grid grid-cols-5 grid-flow-col mt-4">
                        <div className="col-span-1 flex flex-col justify-center items-center mt-8">
                            <img src={flagAnhur_img}></img>
                            <p className="text-center text-blue-500 text-[16px] md:text-[20px] lg:text-[22px]">
                                Kingdom of Anhur
                            </p>
                        </div>
                        <div className="col-span-1 flex flex-col justify-center items-center mt-8">
                            <img src={flagApes_img}></img>
                            <p className="text-center text-[#ffd966] text-[16px] md:text-[20px] lg:text-[22px]">
                                Kingdom of Apes
                            </p>
                        </div>
                        <div className="col-span-1 flex flex-col justify-center items-center mt-8">
                            <img src={flagAres_img}></img>
                            <p className="text-center text-[#c00000] text-[16px] md:text-[20px] lg:text-[22px]">
                                Kingdom of Ares
                            </p>
                        </div>
                        <div className="col-span-1 flex flex-col justify-center items-center mt-8">
                            <img src={flagKnights_img}></img>
                            <p className="text-center text-[#00B050] text-[16px] md:text-[20px] lg:text-[22px]">
                                Kingdom of Knights
                            </p>
                        </div>
                        <div className="col-span-1 flex flex-col justify-center items-center mt-8">
                            <img src={flagUndead_img}></img>
                            <p className="text-center text-[#808080] text-[16px] md:text-[20px] lg:text-[22px]">
                                Kingdom of Undead
                            </p>
                        </div>
                    </div>
                    <p className="text-[16px] md:text-[20px] lg:text-[22px] mt-12">
                        There will be a total of 10,000 warrior NFTs (2,000 per
                        Kingdom). The supply of these genesis warriors will be
                        deflationary.
                    </p>
                    <div className="grid grid-cols-2 lg:grid-cols-3 grid-flow-col p-4 lg:p-12">
                        <div className="col-span-2 text-[10px] md:text-[18px]">
                            <p className="italic">Minting guide:</p>
                            <table className="table-auto text-right border-collapse border border-slate-400 w-full mt-2 leading-10">
                                <thead>
                                    <tr className="bg-red-700">
                                        <th className="border border-slate-300 text-left">
                                            Warrior Rank
                                        </th>
                                        <th className="border border-slate-300">
                                            NFTs per kingdom
                                        </th>
                                        <th className="border border-slate-300">
                                            Chance of minting (%)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-slate-300 text-left">
                                            King and Queen
                                        </td>
                                        <td className="border border-slate-300">
                                            2
                                        </td>
                                        <td className="border border-slate-300">
                                            0.1%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-300 text-left">
                                            Loads and Ladies
                                        </td>
                                        <td className="border border-slate-300">
                                            48
                                        </td>
                                        <td className="border border-slate-300">
                                            2.4%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-300 text-left">
                                            Heroes
                                        </td>
                                        <td className="border border-slate-300">
                                            100
                                        </td>
                                        <td className="border border-slate-300">
                                            5.0%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-300 text-left">
                                            Soldiers
                                        </td>
                                        <td className="border border-slate-300">
                                            350
                                        </td>
                                        <td className="border border-slate-300">
                                            17.5%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-300 text-left">
                                            Archers
                                        </td>
                                        <td className="border border-slate-300">
                                            500
                                        </td>
                                        <td className="border border-slate-300">
                                            25.0%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-300 text-left">
                                            Villagers
                                        </td>
                                        <td className="border border-slate-300">
                                            1000
                                        </td>
                                        <td className="border border-slate-300">
                                            50.0%
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-span-1  hidden lg:flex justify-end">
                            <img src={mintPic} className="h-[350px]"></img>
                        </div>
                    </div>
                    <p className="text-[16px] md:text-[20px] lg:text-[22px] mt-6">
                        Each warrior will have its own attack and defense score, which is combined to form a total score.
                    </p>
                    <div className="text-[10px] md:text-[18px] p-4 lg:p-12">
                        <p className="italic">Minting guide:</p>
                        <table className="table-auto text-right border-collapse border border-slate-400 w-full mt-2 leading-10">
                            <thead>
                                <tr className="bg-red-700">
                                    <th className="border border-slate-300 text-left">
                                        Warrior Rank
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
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-slate-300 text-left">
                                        King and Queen
                                    </td>
                                    <td className="border border-slate-300">50</td>
                                    <td className="border border-slate-300">
                                        150
                                    </td>
                                    <td className="border border-slate-300 bg-gray-500">
                                        200
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 text-left">
                                        Lords and Ladies
                                    </td>
                                    <td className="border border-slate-300">25</td>
                                    <td className="border border-slate-300">
                                        50
                                    </td>
                                    <td className="border border-slate-300 bg-gray-500">
                                        75
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 text-left">
                                        Heroes
                                    </td>
                                    <td className="border border-slate-300">35</td>
                                    <td className="border border-slate-300">
                                        20
                                    </td>
                                    <td className="border border-slate-300 bg-gray-500">
                                        55
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 text-left">
                                        Soldiers
                                    </td>
                                    <td className="border border-slate-300">15</td>
                                    <td className="border border-slate-300">
                                        5
                                    </td>
                                    <td className="border border-slate-300 bg-gray-500">
                                        20
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 text-left">
                                        Archers
                                    </td>
                                    <td className="border border-slate-300">4</td>
                                    <td className="border border-slate-300">
                                        1
                                    </td>
                                    <td className="border border-slate-300 bg-gray-500">
                                        5
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 text-left">
                                        Villagers
                                    </td>
                                    <td className="border border-slate-300">1</td>
                                    <td className="border border-slate-300">
                                        0
                                    </td>
                                    <td className="border border-slate-300 bg-gray-500">
                                        1
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-[16px] md:text-[20px] lg:text-[22px] mt-6">
                        Players can fight for their Kingdom and earn rewards by staking their warriors.
                    </p>
                </div>
            </div>
            <div className="mt-[5vh] border-t-2 border-white pl-[2%] pr-[2%] bg-black">
                <p className="text-[#fe004d] text-[32px] md:text-[42px] lg:text-[52px] font-serif tracking-wider mt-8 mb-12">
                    General gameplay
                </p>
                <p className="text-white text-[16px] md:text-[20px] lg:text-[22px]">Each Kingdom will have a starting total army strength score of 20,000. However, only the scores of warriors that are staked will contribute towards their Kingdom’s total army strength score in battles. The higher the number of staked warriors, the more powerful your Kingdom.</p>
                <br></br>
                <p className="text-white text-[16px] md:text-[20px] lg:text-[22px]">The aim of the game (in the initial phases) is for Kingdoms to conquer as many territories as possible. Conquering a territory will unlock its valuable resources (wood, stone and gold) which can be traded or used to purchase assets to strengthen your army (e.g. catapults), or to better defend your territories (castles). A Kingdom will be victorious if they control more than 50% of all territories.</p>
                <div className="block md:grid grid-cols-5 grid-flow-col mt-12 pb-12">
                    <div className="col-span-1 flex items-center justify-center"><img src={tree_img} className="w-1/2 md:w-3/4 lg:w-1/2"></img></div>
                    <div className="col-span-1  flex items-center justify-center"><img src={stone_img} className="w-1/2 md:w-3/4 lg:w-1/2"></img></div>
                    <div className="col-span-1  flex items-center justify-center"><img src={gold_img} className="w-1/2 md:w-3/4 lg:w-1/2"></img></div>
                    <div className="col-span-1  flex items-center justify-center"><img src={tool1_img} className="w-1/2 md:w-3/4 lg:w-1/2"></img></div>
                    <div className="col-span-1  flex items-center justify-center"><img src={tool2_img} className="w-1/2 md:w-3/4 lg:w-1/2"></img></div>
                </div>
            </div>
            <div className="mt-[5vh] border-t-2 border-white pl-[2%] pr-[2%] bg-black">
                <p className="text-[#fe004d] text-[32px] md:text-[42px] lg:text-[52px] font-serif tracking-wider pt-8 pb-12">
                    Roadmap 1.0
                </p>
                <div>
                    <div>
                        <p className="underline text-[#bfbfbf] font-bold text-[22px] md:text-[24px] lg:text-[26px]">Phase 0 - Genesis Warrior Mint</p>
                        <br></br>
                        <p className="text-[16px] md:text-[20px] lg:text-[22px]">In this phase our team will focus on a successful mint, which will see 10,000 warriors join the Five Kingdoms ecosystem. Our innovative approach to allocating whitelists will reward those that truly believe in our project and vision.</p>
                    </div>
                    <div className="mt-12">
                        <p className="underline text-[#bfbfbf] font-bold text-[22px] md:text-[24px] lg:text-[26px]">Phase 1 - Strengthening Your Kingdom</p>
                        <br></br>
                        <p className="text-[16px] md:text-[20px] lg:text-[22px]">For your Kingdom to prosper, you must be aligned as a community. This phase is all about strengthening your Kingdom’s community bond to ensure that you are ready to fight as a unit.</p>
                        <br></br>
                        <p className="text-[16px] md:text-[20px] lg:text-[22px]">We will host a series of community building games and events. Winners will unlock valuable resources for their Kingdoms, giving them a big advantage in the next phase of gameplay.</p>
                    </div>
                    <div className="mt-12">
                        <p className="underline text-[#bfbfbf] font-bold text-[22px] md:text-[24px] lg:text-[26px]">Phase 2 - The Battle Of Yllek</p>
                        <br></br>
                        <p className="text-[16px] md:text-[20px] lg:text-[22px]">In phase 2, Kingdoms will battle to conquer the country of Yllek, which is made up of 30 territories. To be victorious in Phase 2, a Kingdom must control 16 or more territories.</p>
                        <br></br>
                        <p className="text-[16px] md:text-[20px] lg:text-[22px]">Kingdoms will be rewarded for each territory that they occupy. By conquering a particular territory, your Kingdom will unlock its valuable resources (Gold, Stone or Wood). These resources can then be used to purchase assets to strengthen your army (e.g. catapults, ballistas, etc.) or to help defend your territories (e.g. castles). Resources can also be traded.</p>
                        <br></br>
                        <div className="text-[10px] md:text-[18px] p-4 md:p-12 pt-6 lg:pr-[100px]">
                            <p className="italic">Game Assets:</p>
                            <table className="table-auto text-right border-collapse border border-slate-400 w-full mt-2 leading-10">
                                <thead>
                                    <tr className="bg-red-700">
                                        <th className="border border-slate-300 text-left">
                                            Asset
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
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-slate-300 text-left">
                                            Catapult
                                        </td>
                                        <td className="border border-slate-300">500</td>
                                        <td className="border border-slate-300">
                                            0
                                        </td>
                                        <td className="border border-slate-300 bg-gray-500">
                                            500
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-300 text-left">
                                            Ballista
                                        </td>
                                        <td className="border border-slate-300">1,000</td>
                                        <td className="border border-slate-300">
                                            0
                                        </td>
                                        <td className="border border-slate-300 bg-gray-500">
                                            1,000
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-300 text-left">
                                            Mercenaries
                                        </td>
                                        <td className="border border-slate-300">3,500</td>
                                        <td className="border border-slate-300">
                                            500
                                        </td>
                                        <td className="border border-slate-300 bg-gray-500">
                                            4,000
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-300 text-left">
                                            Wooden Castle
                                        </td>
                                        <td className="border border-slate-300">0</td>
                                        <td className="border border-slate-300">
                                            1,000
                                        </td>
                                        <td className="border border-slate-300 bg-gray-500">
                                            1,000
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-300 text-left">
                                            Stone Keep
                                        </td>
                                        <td className="border border-slate-300">0</td>
                                        <td className="border border-slate-300">
                                            2,500
                                        </td>
                                        <td className="border border-slate-300 bg-gray-500">
                                            2,500
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-300 text-left">
                                            Stone Castle
                                        </td>
                                        <td className="border border-slate-300">0</td>
                                        <td className="border border-slate-300">
                                            5,000
                                        </td>
                                        <td className="border border-slate-300 bg-gray-500">
                                            5,000
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-300 text-left">
                                            Royal Castle
                                        </td>
                                        <td className="border border-slate-300">0</td>
                                        <td className="border border-slate-300">
                                            10,000
                                        </td>
                                        <td className="border border-slate-300 bg-gray-500">
                                            10,000
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <br></br>
                        <p className="text-[16px] md:text-[20px] lg:text-[22px]">To conquer a territory, your chances of victory are higher if your Kingdom’s total army strength score is superior to the total army strength score of the defending territory. Kingdoms can make only one attacking move per day. Kingdoms can also only conquer neighboring territories (i.e. territories that are adjoining territories already conquered).</p>
                        <br></br>
                        <p className="text-[16px] md:text-[20px] lg:text-[22px]">At the conclusion of phase 2, the victorious Kingdom will be handsomely rewarded!</p>
                    </div>
                    <div className="mt-12">
                        <p className="underline text-[#bfbfbf] font-bold text-[22px] md:text-[24px] lg:text-[26px]">Phase 3 - The Battle Of Naur</p>
                        <br></br>
                        <p className="text-[16px] md:text-[20px] lg:text-[22px]">In phase 3, the game is reset and Kingdoms will battle to conquer the country of Naur, which is made up of 40 territories. To be victorious in Phase 3, a Kingdom must control 21 or more territories.</p>
                        <br></br>
                        <p className="text-[16px] md:text-[20px] lg:text-[22px]">However, things are taken up a notch in this phase as we introduce our $token (TBA) and a burning mechanism whereby NFT holders will be able to burn their lower tier warriors for higher tier warriors, thus strengthening their Kingdom’s army and reducing total supply. We expect the total supply of warriors to reduce by more than 50% in this phase.</p>
                        <br></br>
                        <p className="text-[16px] md:text-[20px] lg:text-[22px]">Please see below for an overview of our burning chart:</p>
                        <div className="block lg:grid grid-cols-2 grid-flow-col">
                            <div className="col-span-1">
                                <div className="text-[10px] md:text-[18px] p-4 lg:p-12 pt-8">
                                    <p className="italic">Minting guide:</p>
                                    <table className="table-auto text-right border-collapse border border-slate-400 w-full mt-2 leading-10">
                                        <thead>
                                            <tr className="bg-red-700">
                                                <th className="border border-slate-300 text-left">
                                                    Warrior Unlocked
                                                </th>
                                                <th className="border border-slate-300">
                                                    Burning Requirements
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border border-slate-300 text-left">
                                                    Archer
                                                </td>
                                                <td className="border border-slate-300">3 x Villager NFTs</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-slate-300 text-left">
                                                    Soldier
                                                </td>
                                                <td className="border border-slate-300">2 x Archer NFTs</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-slate-300 text-left">
                                                    Heroes
                                                </td>
                                                <td className="border border-slate-300">2 x Soldier NFTs</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-span-1 mt-12 hidden lg:block">
                                <div className=" block lg:grid grid-cols-4 grid-flow-col mt-4">
                                    <div className="col-span-1 flex justify-center items-center">
                                        <img src={naur1_img}></img>
                                    </div>
                                    <div className="col-span-1 flex justify-center items-center">
                                        <img src={naur2_img}></img>
                                    </div>
                                    <div className="col-span-1 flex justify-center items-center">
                                        <img src={naur3_img}></img>
                                    </div>
                                    <div className="col-span-1 flex justify-center items-center">
                                        <img src={naur4_img}></img>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <p className="text-[16px] md:text-[20px] lg:text-[22px] mt-4">Kingdoms will once again unlock valuable resources by conquering territories. As was the case in phase 2, these resources can be used to purchase assets to strengthen their army or to better defend territories. Staked warriors will also earn $tokens for each territory conquered (amounts based on warrior rank). </p>
                        <br></br>
                        <p className="text-[16px] md:text-[20px] lg:text-[22px]">At the conclusion of phase 3, the victorious Kingdom will be rewarded handsomely with $tokens, which will have utility in the next phase of gameplay and beyond.</p>
                        <br></br>
                    </div>
                </div>
            </div>
            <div className="mt-[5vh] border-t-2 border-white pl-[2%] pr-[2%] bg-black">
                <p className="text-[#fe004d] text-[32px] md:text-[42px] lg:text-[52px] font-serif tracking-wider pt-8 pb-4">
                    Chapter 2 and beyond
                </p>
                <br></br>
                <p className="text-[16px] md:text-[20px] lg:text-[22px]">Our team is big on under promising and over delivering. We like to keep things up our sleeve, ensuring our competition are always a few steps behind. We also don't want to spoil all the surprises at once! We will keep innovating as a team and as a community. There is much to look forward to.</p>
            </div>
            <div className="mt-[5vh] border-t-2 border-white pl-[2%] pr-[2%] bg-black">
                <p className="text-[#fe004d] text-[32px] md:text-[42px] lg:text-[52px] font-serif tracking-wider pt-8 pb-4">
                    Conquering territories
                </p>
                <br></br>
                <p className="text-[16px] md:text-[20px] lg:text-[22px]">When attempting to conquer a territory, your chances of victory are higher if your Kingdom's total army strength score (sum of all attack and defense scores) is superior to the total army strength score of the defending territory.</p>
                <br></br>
                <p className="text-[16px] md:text-[20px] lg:text-[22px]">During battles, Kingdoms will take turns in attempting to successfully strike the opposing Kingdom. There are two elements to a successful strike:</p>
                <div className="text-[16px] md:text-[20px] lg:text-[22px]">
                    <div className="pl-[4%] md:pl-[10%] pt-8">
                        <p><span className="underline">Element 1</span> – Whether the opponent is able to block your Kingdom's attack, which is calculated as follows:</p>
                        <div className="ml-8 mt-8 mb-8 p-4 bg-[#404040] border-red-800 border-2 lg:mr-[20%]">
                            <p className="underline">Kingdom's chances of blocking an attack:</p>
                            <p className="mt-4">Defense effectiveness % = Kingdom's total defense score / 100,000</p>
                        </div>
                        <p>If an attack is successfully blocked, the attacking Kingdom's turn is ended.</p>
                    </div>
                    <div className="pl-[4%] md:pl-[10%] pt-12">
                        <p><span className="underline">Element 2</span> –  If an attack is not successfully blocked, the attacking Kingdom will try to inflict damage on the opposing Kingdom. A Kingdom’s chances of inflicting damage on an opponent are calculated as follows:</p>
                        <div className="ml-8 mt-8 mb-8 p-4 bg-[#404040] border-red-800 border-2 lg:mr-[20%]">
                            <p className="underline">Kingdom’s chances of inflicting damage:</p>
                            <p className="mt-4">Attack effectiveness % = Attack score / (Attack score + Opponent attack score)</p>
                        </div>
                    </div>
                </div>
                <br></br>
                <p className="text-[16px] md:text-[20px] lg:text-[22px]">A Kingdom will achieve victory in battle if they can inflict enough damage to reduce their opponent’s health bar to 0%.</p>
            </div>
            <div className="mt-[5vh] border-t-2 border-white pl-[2%] pr-[2%] bg-black">
                <p className="text-[#fe004d] text-[32px] md:text-[42px] lg:text-[52px] font-serif tracking-wider pt-8 pb-4">
                    Game tactics
                </p>
                <br></br>
                <p className="text-[16px] md:text-[20px] lg:text-[22px]">Staking warriors is the key. The more warriors staked, the more powerful your army becomes and the more likely you are to win battles. Staked warriors will also earn in-game utility tokens in phases 3 and beyond.</p>
                <br></br>
                <p className="text-[16px] md:text-[20px] lg:text-[22px]">There will be some interesting tactics at play for you to be mindful of. Some players may hold warriors from more than one Kingdom, who may then act as spies or intentionally sabotage certain Kingdoms. Some Kingdoms may also decide that an alliance is necessary in order to stop a more powerful Kingdom. We are excited to see how things play out!</p>
            </div>
            <div className="mt-[5vh] border-t-2 border-white pl-[2%] pr-[2%] bg-black">
                <p className="text-[#fe004d] text-[32px] md:text-[42px] lg:text-[52px] font-serif tracking-wider pt-8 pb-4">
                In-game utility tokens
                </p>
                <p className="text-[#fe004d] text-[32px] md:text-[42px] lg:text-[52px] font-serif tracking-wider pb-4 block md:hidden">(to be announced)</p>
                <br></br>
                <p className="text-[16px] md:text-[20px] lg:text-[22px]">$tokens will be our in-game utility token. There will be a maximum supply of 1,000,000,000 $tokens.</p>
                <br></br>
                <p className="text-[16px] md:text-[20px] lg:text-[22px]">1 $token = 1 $token. The Five Kingdoms team will not set up or advertise any liquidity pools associated with $tokens. Regardless, there will be exciting utility within the project’s ecosystem to make $tokens a sought after and valuable asset.</p>
                <br></br>
                <p className="text-[16px] md:text-[20px] lg:text-[22px]">Further details regarding the utility and tokenomics of $tokens will be announced at a later date. Please note that we will be seeking community feedback on our tokenomics prior to launching our in-game tokens.
                </p>
            </div>
            <div className="mt-[5vh] border-t-2 border-white pl-[2%] bg-black">
                <p className="text-[15px] md:text-[20px] lg:text-[22px] font-serif tracking-wider pt-8 pb-8">
                    Five Kingdoms © 2022. All rights reserved.
                </p>
            </div>
        </div>
    );
}

export default Whitepaper;
