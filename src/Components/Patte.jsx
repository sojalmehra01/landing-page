import React from 'react'

function Patte() {
  return (
      <div className='w-full h-screen bg-zinc-900 flex items-center px-16 gap-5'>
          <div className='cardcontainer h-[50vh] w-1/2'>
              <div className='card relative rounded-xl w-full h-full bg-[#c4c4c4] flex items-center justify-center'>
                  <img className='w-96' src="src/Components/kann-banlogo.png" />
                  <button className='absolute py-1 px-1 border-2 rounded-full left-10 bottom-10'>
                      Click here
                  </button>
              </div> 
          </div>

          <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
              <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#c4c4c4]'>
                  <img className='w-64' src="src/Components/kann-banlogo.png" />
                  <button className='absolute py-1 px-1 border-2 rounded-full left-10 bottom-10'>
                      Click here
                  </button>
              </div>
              <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-zinc-100'>
                  <img className='w-64' src="src/Components/kann-banlogo.png" />
                  <button className='absolute text-black py-1 px-1 border-2 border-black rounded-full left-10 bottom-10'>
                      Click here
                  </button>
              </div>
          </div>
      
    </div>
  )
}

export default Patte
