import { useState, useEffect } from 'react';

import { ReactComponent as Close } from "../assets/image/X.svg";
import tree_img from "../assets/image/tree.png";
import gold_img from "../assets/image/gold.png";
import stone_img from "../assets/image/stone.png";
export default function TradeRequestModal({ modalData, closeModal, acceptRequest, declineRequest }) {
    const getTradeImage = (type) => {
        switch(type){
            case 1: {
                return tree_img;
                break;
            }
            case 2: {
                return stone_img;
                break;
            }
            case 3: {
                return gold_img;
                break;
            }
            default: {
                return tree_img;
                break;
            }
        }
    }
    return (
        <div className="fixed flex flex-wrap justify-center items-center 
        top-0 left-0 bottom-0 -right-0 z-10 
        bg-opacity-60 bg-black backdrop-blur-sm w-screen h-full">
            <div className="flex flex-col fixed justify-center items-center p-5 w-[580px] border-2 border-[#808080]
             bg-black rounded-3xl ">

                <div onClick={closeModal}
                    className="flex fixed sm:absolute right-0 top-0 p-3 m-2 
                    justify-center items-center h-10 w-10 rounded-full
                    hover:cursor-pointer transform hover:border-4 ">
                    <Close className="" />
                </div>

                <div className="h-full justify-center items-center px-[5%]">
                    <h1 className="font-pressio-condensed text-[24px]  text-center  text-[#fe004d]">{modalData['title']}</h1>
                    <br></br>
                    <p className='text-white text-[22px]'>{modalData['message']}</p>
                    {modalData['trade'].length > 0 &&
                        <div className='grid grid-cols-2 text-center mt-6'>
                            <div className='col-span-1'>
                                <p className='text-[#808080]'>{modalData['trade'][0]['kingdomName']}</p>
                                <div className='flex flex-row items-center justify-center'>
                                    <img src={getTradeImage(modalData['trade'][0]['type'])} className="w-[100px]" alt=""></img>
                                    <span className='text-[#fe004d] text-[24px] font-bold'>x {modalData['trade'][0]['amount']}</span>
                                </div>
                            </div>
                            <div className='col-span-1'>
                                <p className='text-[#808080]'>{modalData['trade'][1]['kingdomName']}</p>
                                <div className='flex flex-row items-center justify-center'>
                                    <img src={getTradeImage(modalData['trade'][1]['type'])} className="w-[100px]" alt=""></img>
                                    <span className='text-[#fe004d] text-[24px] font-bold'>x {modalData['trade'][1]['amount']}</span>
                                </div>
                            </div>
                        </div>}
                    {modalData['accept'] &&
                        <div className='flex flex-row space-x-8 justify-center mb-1 mt-6'>
                            <div className='w-[200px] h-[40px] bg-[#ff004e] rounded-xl flex items-center justify-center cursor-pointer' onClick={acceptRequest}>
                                <span className='text-[20px] mb-1'>Accept</span>
                            </div>
                            <div className='w-[200px] h-[40px] bg-[#808080] rounded-xl flex items-center justify-center cursor-pointer' onClick={declineRequest}>
                                <span className='text-[20px] mb-1'>Decline</span>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}