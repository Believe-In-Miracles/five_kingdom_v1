import { useState, useEffect } from 'react';

import { ReactComponent as Close } from "../assets/image/X.svg";
import tree_img from "../assets/image/tree.png";
import gold_img from "../assets/image/gold.png";
import stone_img from "../assets/image/stone.png";
import back2_img from "../assets/image/Picture2.png";
import crown_img from "../assets/image/Crown.png";
import sword_img from "../assets/image/Swords.png";
import shield_img from "../assets/image/Shield.png";

export default function AttackModal({ modalData, closeModal, submitRequest}) {
    return (
        <div className="fixed flex flex-wrap justify-center items-center 
        top-0 left-0 bottom-0 -right-0 z-10 
        bg-opacity-60 bg-black backdrop-blur-sm w-screen h-full">
            <div className="flex flex-col fixed p-4 w-[580px] border-2 border-[#808080]
             bg-black rounded-[32px] ">

                <div onClick={closeModal}
                    className="flex fixed sm:absolute right-0 top-0 p-3 m-2 
                    justify-center items-center h-10 w-10 rounded-full
                    hover:cursor-pointer transform hover:border-4 ">
                    <Close className="" />
                </div>

                <div className="h-full justify-center items-center">
                    <div className='grid grid-cols-5'>
                        <div className='col-span-2'>
                            <img src={back2_img} className="rounded-[24px]" alt=""></img>
                        </div>
                        <div className='col-span-3'>
                            <h1 className="font-pressio-condensed text-[24px]  text-center  text-white">{modalData['title']}</h1>
                            <br></br>

                            <div className='grid grid-cols-3'>
                                <div className='col-span-1 text-center flex flex-col justify-center items-center'>
                                    <img src={crown_img} alt="" className="w-[50px]"></img>
                                    <p className='text-[#ffd966] text-[14px]'>Kingdom of the Apes</p>
                                </div>
                                <div className='col-span-1 text-center flex flex-col justify-center items-center'>
                                    <img src={sword_img} alt="" className="w-[50px]"></img>
                                    <p className='text-[#fe004d] text-[20px]'>30,000</p>
                                </div>
                                <div className='col-span-1 text-center flex flex-col justify-center items-center'>
                                    <img src={shield_img} alt="" className="w-[50px]"></img>
                                    <p className='text-[#fe004d] text-[20px]'>30,000</p>
                                </div>
                            </div>
                            <div className='grid grid-cols-3'>
                                <div className='col-span-1 text-center flex flex-col justify-center items-center'>
                                    <img src={tree_img} alt="" className="w-[50px]"></img>
                                    <p className='text-[#fe004d] text-[20px]'>100</p>
                                </div>
                                <div className='col-span-1 text-center flex flex-col justify-center items-center'>
                                    <img src={stone_img} alt="" className="w-[50px]"></img>
                                    <p className='text-[#fe004d] text-[20px]'>75</p>
                                </div>
                                <div className='col-span-1 text-center flex flex-col justify-center items-center'>
                                    <img src={gold_img} alt="" className="w-[50px]"></img>
                                    <p className='text-[#fe004d] text-[20px]'>50</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='w-full rounded-full bg-[#ff004b] p-3 border-4 border-[#808080] text-center text-[20px] font-bold cursor-pointer' onClick={submitRequest}>Attack!</p>
                    </div>
                    {/* <p className='text-white text-[22px]'>{modalData['message']}</p>
                    {modalData['trade'].length > 0 &&
                        <div className='grid grid-cols-2 text-center mt-6'>
                            <div className='col-span-1'>
                                <p className='text-[#808080]'>Your Kingdom</p>
                                <div className='flex flex-row items-center justify-center'>
                                    <img src={tree_img} className="w-[100px]" alt=""></img>
                                    <span className='text-[#fe004d] text-[24px] font-bold'>x 250</span>
                                </div>
                            </div>
                            <div className='col-span-1'>
                                <p className='text-[#808080]'>Your Kingdom</p>
                                <div className='flex flex-row items-center justify-center'>
                                    <img src={gold_img} className="w-[100px]" alt=""></img>
                                    <span className='text-[#fe004d] text-[24px] font-bold'>x 50</span>
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
                    } */}
                </div>
            </div>
        </div>
    )
}