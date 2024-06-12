import React from 'react'

function Footer() {
  return (
      <div className='flex gap-20 w-full h-screen bg-zinc-900 p-20'>
          <div className='w-1/2 h-full flex flex-col justify-between font-["Test Founders Grotesk X-Cond SmBd"] font-semibold '>
              <div className='heading relative'>
                  <h1 className='text-[6vw] leading-none -mb-4 fonts-semibold'>EFFIEIENT,</h1>
                  <h1 className='text-[6vw] leading-none -mb-4 fonts-semibold'>AGILE</h1>
                  <h1 className='pt-80'>Kann-ban</h1>
               </div>
              
          </div>
      <div className='w-1/2 -pt-[vh]'>
        <h1 className='text-[6vw] font-["Test Founders Grotesk X-Cond SmBd"] font-semibold'>
           ORGANISED. 
        </h1>
        <div className='pt-[8vh]'>
          {["Your"," Ultimate","Work Management ","Solution. . ."].map((item, index) =>
                    <p className='text-md font-light tracking-tight leading none font-["Neue Montreal"]'>
                        {item}
                    </p>)}
        </div>

      </div>
    </div>
  )
}

export default Footer
