import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from 'framer-motion';

function Landing() {
    
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3"className='w-full h-screen bg-zinc-900 pt-1'>
            <div className='textstructure mt-44 px-20'>
                {["We Manage", "Your Time", "pricisely, because", "it matters"].map((item, index) => {
                    return <div className='masker'>
                        <div className='w-fit flex'>
                            {index === 1 && (
                                <motion.div initial={{ width: 0 }} animate={{ width: "9vw" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                                    className='mr-[1vw] w-[9vw] rounded-md h-[vw] relative top-[.3vw] bg-green-500'></motion.div>)}
                        <h1 className="uppercase text-[5vw] leading-[4.2vw] tracking-tighter font-['Test Founders Grotesk X-Cond SmBd'] font-semibold">
                            {item}
                        </h1>
                        </div>    
                    </div>
                })}
            </div>
            <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
                {["Efficient, Agile, Organized", "Your Ultimate Work Management Solution."].map((item, index) =>
                    <p className='text-md font-light tracking-tight leading none'>
                        {item}
                    </p>)}
            
                <div className='start flex items-center gap-2'>
                    <div className='px-5 py-2 border-[1px] border-zinc-700 rounded-full font-light text-md uppercase capitalize'>Sign-up</div>
                    <div className='w-9 h-9 flex items-center justify-center border-[1px] border-zinc-500 rounded-full'>
                        <span className='rotate-[45deg]'>
                            <FaArrowUpLong />
                        </span>
                        
                    </div>
                </div>    
                
            </div>
      
        </div>
    );
}

export default Landing
