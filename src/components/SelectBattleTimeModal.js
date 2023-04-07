import { useState, useEffect } from 'react';

import { ReactComponent as Close } from "../assets/image/X.svg";

export default function SelectBattleTimeModalOpen({ modalData, closeSelectTimeModal, submitRequest }) {
    const [availableTime, setAvailableTime] = useState([]);
    const [attackTime, setAttackTime] = useState(0);

    useEffect(() => {
        const date = new Date();
        // console.log(date);
        let offset = 0; //Timezone offset for EST in minutes.
        let estDate = new Date(date.getTime() + offset * 60 * 1000);
        // console.log(estDate);
        // console.log("Hour", estDate.getHours());
        let hr = estDate.getHours();

        let tempTime = [];
        for (let i = 1; i <= 24; i++) {
            let time;
            let enable = true;
            if (i == 24) {
                time = '12AM';
            } else if (i < 12) {
                time = i + 'AM';
            } else if (i == 12) {
                time = '12PM';
            } else {
                time = (i - 12) + 'PM'
            }
            if (i < hr + 2) {
                enable = false;
            }
            tempTime.push({
                time: time,
                enable: enable
            });
        }
        setAvailableTime(tempTime);
        // console.log(tempTime);
    }, []);

    return (
        <div className="fixed flex flex-wrap justify-center items-center 
        top-0 left-0 bottom-0 -right-0 z-10 
        bg-opacity-60 bg-black backdrop-blur-sm w-screen h-full">
            <div className="flex flex-col fixed p-4 w-[580px] border-2 border-[#808080]
             bg-black rounded-[32px] ">

                <div onClick={closeSelectTimeModal}
                    className="flex fixed sm:absolute right-0 top-0 p-3 m-2 
                    justify-center items-center h-10 w-10 rounded-full
                    hover:cursor-pointer transform hover:border-4 ">
                    <Close className="" />
                </div>
                <div>
                    <h1 className="font-pressio-condensed text-[24px] text-[#fe004d]  text-center">Attack</h1>
                    <div className='py-4 px-2'>
                        <p className="font-pressio-condensed text-[18px] text-[#b1b1b1]">Proposed date of attack:</p>
                        <div className='mt-6'>
                            <span className='p-2 px-3 border border-white text-[18px] text-white'>25</span>
                            <span className='ml-4 p-2 px-8 border border-white text-[18px] text-white'>October</span>
                        </div>
                        <div className='mt-12'>
                            <p className="font-pressio-condensed text-[18px] text-[#b1b1b1]">Proposed time of attack(EST time):</p>
                            <div class="grid grid-cols-8 gap-2 mt-6 text-center">
                                {availableTime.map((item, key) => (<span key={key} className={(item['enable'] ? 'hover:border-[#fe004d] ' : 'bg-[#808080] ') + (attackTime == key + 1 ? 'border-[#fe004d] ' : '') + 'p-2 border-2 border-white text-[16px] text-white  cursor-pointer '} onClick={() => { if (item['enable']) setAttackTime(key + 1); }}>{item['time']}</span>))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-4 flex justify-center items-center mb-4'>
                    <p className='w-full max-w-[200px] rounded-lg bg-[#ff004b] px-5 py-2 border-4 border-[#808080] text-center text-[20px] font-bold cursor-pointer' onClick={()=>{submitRequest(); alert("You have selected "+availableTime[attackTime-1]['time']+" on 25 October 2022")}}>Submit</p>
                </div>
            </div>
        </div>
    )
}