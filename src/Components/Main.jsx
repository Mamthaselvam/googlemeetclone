import React from "react";
import { MdOutlineVideoCall } from "react-icons/md";
import { LiaKeyboard } from "react-icons/lia";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './Main.css';

// import required modules


const Main = () => {
  return (
    <div className="text-start font-sans ">
      <div className="grid grid-cols-2 gap-4 ">
        <div className="col-span-1 m-24">
          <div>
            <div className="mt-20 ml-5 tracking-tighter">
              <h5 className="font-semi-bold text-4xl">Premium video meetings.</h5>
              <h5 className="font-semi-bold text-4xl">Now free for everyone.</h5>
            </div>
            <div className="mt-10 ml-5">
              <p className="">
                We're-engineered the service we build for secure business
              </p>
              <p>
                meetings,Google Meet,to make it free and available for all.
              </p>
            </div>

            <div className="flex items-center ">
              <button className=" flex items-center text-center cursor-pointer ml-5 mt-10 bg-blue-600 border text-white p-2">
                <span className="text-2xl">
                  
                  <MdOutlineVideoCall />
                </span>
                <span className=" text-sm ml-2">New Meeting</span>
              </button>
              <button className="flex items-center">
                <label className="flex items-center mt-10 ml-8 border border-slate-500 p-2 ">
                  <span>
                    <LiaKeyboard />
                  </span>
                  <input
                    type="text"
                    placeholder="Enter link or code "
                    className="ml-2 outline-none"
                  />
                </label>
                <span className="ml-3 mt-8 text-slate-300">Join</span>
              </button>
            </div>
          </div>
          <p className="ml-5 mt-10 cursor-pointer"><span className="text-blue-800 hover:underline">Learn more</span> about Google meet</p>
        </div>
        <div className="col-span-1 m-40 ">
         <div >
         <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper "
      >
       
        <SwiperSlide  >
          <div className=" pl-20 pt-10">
            <img src="https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg" className=" rounded-full h-44 w-44"/>  
          </div>
          <div  className="mt-8 text-center ">
          <p className="text-xl tracking-tighter">Get a link you can share</p>
          <p className="text-sm"> Click <span className="font-semibold"> New meeting </span> to get a link you can send to people </p>
          <p  className="text-sm">you want to meet with</p>
          </div>
          
        </SwiperSlide>
        
        <SwiperSlide >
          <div className=" pl-20 pt-10">
            <img src="https://www.gstatic.com/meet/user_edu_scheduling_light_b352efa017e4f8f1ffda43e847820322.svg" className=" rounded-full h-44 w-44"/> 
          </div>
          <div  className="mt-8 text-center ">
          <p className="text-xl tracking-tighter">Plan ahead</p>
          <p className="text-sm"> Click <span className="font-semibold"> New meeting </span> to schedule meetings in google</p>
          <p  className="text-sm">Calendar and send invites to participants</p>
          </div>
        </SwiperSlide>
        
        <SwiperSlide >
          <div className=" pl-20 pt-10">
            <img src="https://www.gstatic.com/meet/user_edu_safety_light_e04a2bbb449524ef7e49ea36d5f25b65.svg" className=" rounded-full h-44 w-44"/> 
          </div>
          <div  className="mt-8 text-center ">
          <p className="text-xl tracking-tighter">Your meeting is safe</p>
          <p className="text-sm">No one can join a meeting unless invited or admitted by</p>
          <p  className="text-sm">the host</p>
          </div>
        </SwiperSlide>
        
        
      </Swiper>
      
         </div>
       
        </div>
      </div>
    </div>
  );
};

export default Main;
