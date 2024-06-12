import React from 'react'

function About() {
  return (
      <div data-scroll data-scroll-section data-scroll-speed="-.1"className='w-full p-20 bg-[#f58105] rounded-tl-3xl rounded-tr-3xl text-black '>
          <h1 className='font-["Neue Montreal"] text-[3vw] leading-[3.5vw] tracking-tight'>
               Transforming Ideas into Reality: Our Kann-ban is a powerful tool designed to streamline workflows, enhance productivity, and foster collaboration. Dive into our innovative platform to experience the future of project management.
          </h1>
          <div className='grid gap-y-30 md:grid-cols-12 py-15 outline-top mb-[15vw] md:mb-[15vw] w-full border-t-[1px] mt-14 border-[#fa9f37]'>
              <div className='col-span-12 md:col-span-6 text-black mt-3 flex font-["Neue Montreal"]'>
                  <h1>
                    What you can expect :
                  </h1>
              </div>
              <div className='col-span-12 md:col-span-6 font-["Neue Montreal"] text-black text-justify mt-3 -mb-[7vw] flex'>
                  <h1>
                    "Kann-Ban" is designed with a focus on simplicity and ease of use.
                      The intuitive interface is designed to be straightforward, allowing users to quickly grasp how to add, move, and manage tasks.
                      This simplicity is complemented by powerful features that support team collaboration, such as real-time updates, task assignment, and progress tracking.
                      By providing a clear overview of the project's status at a glance, "Kann-Ban" helps teams stay aligned and focused on their goals.
                  </h1>
               </div>
          </div>
          <div className='w-full flex gap-5 border-t-[1px] mt-20 border-[#fa9f37]'>
              <div className='w-1/2 mt-[1vw]'>
                  <h1 className='text-5xl'>
                      Our approach:
                  </h1>
                  <button className='flex uppercase gap-9 items-center px-4 py-4 bg-zinc-900 mt-6 rounded-full text-white'>Read More
                      <div className='w-2 h-2 bg-zinc-100 rounded-full '></div>
                  </button>  
              </div>
              <div className='w-1/2 mt-[2vw] h-[70vh] rounded-3xl bg-[#e3a319]'></div>
          </div>
    </div>
  )
}

export default About
