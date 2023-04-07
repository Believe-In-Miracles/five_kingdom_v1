import { useState, useEffect } from 'react';

import { ReactComponent as Close } from "../assets/image/X.svg";
import tree_img from "../assets/image/tree.png";
import gold_img from "../assets/image/gold.png";
import swords_img from "../assets/image/Swords.png";
import stone_img from "../assets/image/stone.png";
import shield_img from "../assets/image/Shield.png";

import catapultImg from "../assets/image/tool1.png";
import ballistaImg from "../assets/image/tool2.png";
import woodenCastle from "../assets/image/handoftheking/woodenCastle.png";
import stoneKeep from "../assets/image/handoftheking/stoneKeep.png";
import stoneCastle from "../assets/image/handoftheking/stoneCastle.png";
import royalCastle from "../assets/image/handoftheking/royalCastle.png";
import mercenariesImg from "../assets/image/mercenaries.png";

export default function MarketplaceModal({ modalData, closeModal, buyRequest, sellRequest }) {
    const selectImage = (str) => {
        switch (str) {
            case 'Catapult':
                return catapultImg;
            case 'Ballista':
                return ballistaImg;
            case 'Wooden Castle':
                return woodenCastle;
            case 'Stone Keep':
                return stoneKeep;
            case 'Stone Castle':
                return stoneCastle;
            case 'Royal Castle':
                return royalCastle;
            case 'Mercenaries':
                return  mercenariesImg;
            default:
                return catapultImg;
        }
    }
    return (
        <div className="fixed flex flex-wrap justify-center items-center 
        top-0 left-0 bottom-0 -right-0 z-10 
        bg-opacity-60 bg-black backdrop-blur-sm w-screen h-full">
            <div className="flex flex-col fixed justify-center items-center p-5 w-[500px] border-2 border-[#808080]
             bg-black rounded-3xl ">

                <div onClick={closeModal}
                    className="flex fixed sm:absolute right-0 top-0 p-3 m-2 
                    justify-center items-center h-10 w-10 rounded-full
                    hover:cursor-pointer transform hover:border-4 ">
                    <Close className="" />
                </div>

                <div className="h-full justify-center items-center">
                    <h1 className="font-pressio-condensed text-[24px]  text-center  text-[#fe004d]">{modalData['title']}</h1>
                    <div className='p-2 border-2 border-[#808080] flex items-center justify-center rounded-2xl mt-4'>
                        <img src={selectImage(modalData['title'])} className="w-[140px]" alt=""></img>
                    </div>
                    <div className='p-4'>
                        <div>
                            <p className='text-[#808080] text-[20px] font-semibold'>Stats:</p>
                            <div className='flex flex-row space-x-10 px-[5%] mt-2'>
                                <div>
                                    <img src={swords_img} className="w-[50px]" alt=""></img>
                                    <p className='text-[20px] text-center'>{modalData['attack']}</p>
                                </div>
                                <div>
                                    <img src={shield_img} className="w-[50px]" alt=""></img>
                                    <p className='text-[20px] text-center'>{modalData['defense']}</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <p className='text-[#808080] text-[20px] font-semibold'>Resources required to buy:</p>
                            <div className='flex flex-row space-x-10 px-[5%] mt-2'>
                                <div>
                                    <img src={tree_img} className="w-[50px]" alt=""></img>
                                    <p className='text-[20px] text-center'>{modalData['buy']['wood']}</p>
                                </div>
                                <div>
                                    <img src={stone_img} className="w-[50px]" alt=""></img>
                                    <p className='text-[20px] text-center'>{modalData['buy']['stone']}</p>
                                </div>
                                <div>
                                    <img src={gold_img} className="w-[50px]" alt=""></img>
                                    <p className='text-[20px] text-center'>{modalData['buy']['gold']}</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <p className='text-[#808080] text-[20px] font-semibold'>Resources to receive if selling:</p>
                            <div className='flex flex-row space-x-10 px-[5%] mt-2'>
                                <div>
                                    <img src={tree_img} className="w-[50px]" alt=""></img>
                                    <p className='text-[20px] text-center'>{modalData['sell']['wood']}</p>
                                </div>
                                <div>
                                    <img src={stone_img} className="w-[50px]" alt=""></img>
                                    <p className='text-[20px] text-center'>{modalData['sell']['stone']}</p>
                                </div>
                                <div>
                                    <img src={gold_img} className="w-[50px]" alt=""></img>
                                    <p className='text-[20px] text-center'>{modalData['sell']['gold']}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row space-x-8 justify-center mb-1 mt-6'>
                        <div className='w-[200px] h-[40px] bg-[#ff004e] rounded-xl flex items-center justify-center cursor-pointer' onClick={buyRequest}>
                            <span className='text-[20px] mb-1'>Buy</span>
                        </div>
                        <div className='w-[200px] h-[40px] bg-[#808080] rounded-xl flex items-center justify-center cursor-pointer' onClick={sellRequest}>
                            <span className='text-[20px] mb-1'>Sell</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}