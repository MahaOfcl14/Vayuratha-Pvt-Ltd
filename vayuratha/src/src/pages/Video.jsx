import React from 'react'

const Video = () => {
  return (
   <div className='2xl:container mx-auto'>
      <div class="w-[90%] md:w-[80%] mx-auto grid grid-cols-2 bg-[#F6F6F6] p-5 mt-5 gap-x-4 py-2 pb-4 gap-2 rounded-3xl md:hover:cursor-pointer">
        <div>
          <h1 className="font-[Montserrat] text-left font-semibold text-[38px] text-black">Aerial Excellence in Action</h1>
        </div>
        <div>
          <p className="text-black text-[14px] font-normal font-[Montserrat] pb-3 transition-opacity duration-1000 ease-in-out hover:opacity-80">Watch videos highlighting the exceptional performance and innovative features of our state-of-the-art drones</p>

        </div>
        <video src="https://ik.imagekit.io/ajql7av7t/vayuratha/DroneVideo.mp4"
          controls
          className="w-full rounded-lg shadow-md">
        </video> 
        </div>
        </div>
        
       /*</div> <div className='2xl:container mx-auto'>
  <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-2 bg-[#F6F6F6] p-5 mt-5 gap-x-4 py-2 pb-4 gap-2 rounded-3xl md:hover:cursor-pointer">
    
    {/* Title *
    <div>
      <h1 className="font-[Montserrat] text-left font-semibold text-[38px] text-black">
        Aerial Excellence in Action
      </h1>
    </div>
  
    {/* Description *
    <div>
      <p className="text-black text-[14px] font-normal font-[Montserrat] pb-3 transition-opacity duration-1000 ease-in-out hover:opacity-80">
        Watch videos highlighting the exceptional performance and innovative features of our state-of-the-art drones.
      </p>
    </div>
    
    * Video Section *
    <div className="bg-[url('https://ik.imagekit.io/ajql7av7t/vayuratha/DroneVideo.mp4')] h-[500px] bg-center">
      <video 
        src="https://ik.imagekit.io/ajql7av7t/vayuratha/DroneVideo.mp4"
        controls
        className="w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] rounded-lg shadow-md">
      </video>
    </div>

  </div>
</div>
 */
      


      
  )
}

export default Video