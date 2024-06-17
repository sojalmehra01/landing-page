import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className="fixed z-[999] w-full px-20 py-8 font-['Neue Montreal'] flex justify-between items-center backdrop-blur-[3px] h-10">
          <div className="logo text-2xl font-bold ">
              <a href="/">kann-ban</a>
          </div>
          <div className="Links flex gap-10 ">
        {["Services", "Our Works", "About Us", "Insights", "Contact"].map((item, index) => (
            <Link key={index} to={`/${item.replace(/\s+/g, '-').toLowerCase()}`} className={`text-md capitalize font-regular ${index === 4 && 'ml-32'}`}>
              {item}
            </Link>
))}
   
          </div>      
    </div>
  )
}

export default Navbar
