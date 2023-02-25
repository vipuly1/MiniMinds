import React from 'react'
import Image from "next/image"

const login = () => {
  return (
    <div className='w-full lg:pt-44 h-screen  lg:bg-contain bg-no-repeat bg-center lg:bg-[url("/assets/Rectangle_18.png")]'>
    <div className='lg:mt-0 mt-8 flex items-center justify-center'>
        <Image src="/assets/miniminds_1.png" width={93} height={93} alt="logo" />
        <h3 className='mini-title text-[32px] leading-10 text-[#000000] '>MiniMinds</h3>
    </div>
        <p className='description lg:text-[11px] lg:w-[310px] lg:relative lg:bottom-4 lg:inset-x-0  mx-auto'>Helping educators and students to improve their memory and cognitive skills through fun and engaging gameplay.</p>
        <form className='flex flex-col lg:mt-0 mt-4 lg:gap-y-2 gap-y-4 items-center '>
          <label >Email <br/>
            <input className='login-input lg:h-[40px] border-[1px] lg:mt-0 lg:border-[#000000] lg:w-[288px] lg:bg-transparent mt-1 xs:w-[354px]' placeholder='abc@gmail.com'  type="email"/>
          </label>
          <label>Password <br/>
            <input className='login-input lg:h-[40px] lg:bg-transparent lg:mt-0 lg:border-[#000000] lg:w-[288px] border-[1px] xs:w-[354px] mt-1'type="password" placeholder='********'/>
          </label>
          <input className='login-input lg:h-[40px] lg:w-[288px] bg-[#19B03D] xs:w-[354px] lg:mt-1 mt-4 lg:mb-2 mb-9 text-[#FFFFFF] text-base font-semibold' type="submit" value="Login"/>
        </form>
        <div className='flex items-center gap-1 justify-center'>
        <hr className='border-[1px] border-[#555555] lg:w-[130px] xs:w-[143px] w-[177px] inline-block'/><span className='text-xs font-semibold text-[#555555]'>OR</span><hr className='border-[1px] lg:w-[130px] border-[#555555] xs:w-[143px] w-[177px]'/>
        </div>
        <div className='flex justify-center lg:mt-2 mt-5'>
        <button className='login-input lg:h-[40px] lg:border-[#000000] lg:w-[288px] lg:bg-[#FFFFFF] s:w-[354px] lg:mt-0 mt-3 lg:mb-4 mb-8 rounded-[5px] border-[rgba(0, 0, 0, 0.25)] border-[1px] flex gap-4 items-center justify-center'><Image src="/assets/Google.png" width={19.61} height={20} /><span className='font-semibold text-[#000000BF] text-base'>Login with Google </span> </button>
        </div>
        <p className='text-center text-base font-normal'>Don’t have account ? <span className='text-[#19B03D] font-normal text-base font-hind-madurai'>Sign up</span></p>

    </div>
  )
}

export default login