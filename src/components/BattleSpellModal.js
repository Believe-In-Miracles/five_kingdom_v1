import { useState, useEffect } from 'react';

import { ReactComponent as Close } from "../assets/image/X.svg";

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


export default function BattleSpellModal({ spellData, closeSpellModal, selectSpell }) {
    const [data, setData] = useState(spellData);

    const [selectedSpellData, setSelectedSpellData] = useState([]);

    const setSpell = (index) => {
        if (data[index] == 1) {
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

    return (
        <div className="fixed flex flex-wrap justify-center items-center 
        top-0 left-0 bottom-0 -right-0 z-10 
        bg-opacity-60 bg-black backdrop-blur-sm w-screen h-full">
            <div className="flex flex-col fixed p-4 w-[580px] border-2 border-[#808080]
             bg-black rounded-[32px] ">
                <div onClick={closeSpellModal}
                    className="flex fixed sm:absolute right-0 top-0 p-3 m-2 
                    justify-center items-center h-10 w-10 rounded-full
                    hover:cursor-pointer transform hover:border-4 ">
                    <Close className="" />
                </div>
                <div className='mt-6'>
                    <div className='py-4 px-2'>
                        <div className='grid grid-cols-4 gap-4'>
                            {passiveSpellImage.map((item, index) => (
                                <img src={data[index] == 0 ? item : activeSpellImage[index]} className={(selectedSpellData.indexOf(index) == -1?"border-[#ff004b00]":"border-[#ff004b]")+" border-2 cursor-pointer"} onClick={() => { setSpell(index); }}></img>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='mt-4 flex justify-center items-center mb-4'>
                    <p className='w-full max-w-[200px] rounded-lg bg-[#ff004b] px-5 py-2 border-4 border-[#808080] text-center text-[20px] font-bold cursor-pointer' onClick={() => { selectSpell(selectedSpellData); }}>Use</p>
                </div>
            </div>
        </div>
    )
}