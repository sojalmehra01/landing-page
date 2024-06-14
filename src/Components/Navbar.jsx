import React from 'react'

function Navbar() {
  return (
    <div className="fixed z-[999] w-full px-20 py-8 font-['Neue Montreal'] flex justify-between items-center backdrop-blur-[3px] h-10">
          <div className="logo text-2xl font-bold ">
              kann-ban
          </div>
          <div className="Links flex gap-10 ">
              {["Services", "Our Works", "About Us", "Insights", "Contact"].map((item, index) => <a key={index} className={`text-md capitalize font-regukar ${index === 4 && 'ml-32'}`}>{item}</a>)}
          </div>      
    </div>
  )
}

export default Navbar
