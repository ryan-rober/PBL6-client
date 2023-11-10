/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import { Wrapper } from './styled'

const LienheScreen = () => (
  <Wrapper id="intro" className='flex'>
    <div className="w-1/2">
       <div className='w-3/5 ml-60 pr-14 mt-20 mb-12'>
          <h1 className='font-bold text-3xl'>Liên hệ để được tư vấn ngay</h1>
          <p className='text-base mt-10'>Tôi luôn sẵn sàng giải đáp tất cả thắc mắc cũng như hướng dẫn bạn dùng phần mềm của chúng tôi.</p>
          <p className='text-base mt-10'>Bạn có thể liên hệ với tôi bằng những cách sau:</p>
          <div className="w-3/5 h-16 rounded-lg my-0 border-2 flex mt-10 hover:bg-gray-100 cursor-pointer">
              <div className='my-auto mx-8'>
                <img src="https://static.vexere.com/webnx/prod/img/bms-vexere/phone.svg" alt=''/>
              </div>
              <div className='my-auto '>
                <p className=' mb-1'>+ 84 526 368 554</p>
              </div>
          </div>
          <div className="w-3/5 h-16 rounded-lg mt-4 border-2 flex hover:bg-gray-100 cursor-pointer">
              <div className='my-auto mx-8'>
                <img src="https://static.vexere.com/webnx/prod/img/bms-vexere/mail.svg" alt=''/>
              </div>
              <div className='my-auto '>
                <p className=' mb-1'>pbl6@gmail.com</p>
              </div>
          </div>
          <div className="w-3/5 h-16 rounded-lg mt-4 border-2 flex hover:bg-gray-100 cursor-pointer">
              <div className='my-auto mx-8'>
                <img src="https://static.vexere.com/webnx/prod/img/bms-vexere/pin.svg" alt=''/>
              </div>
              <div className='my-auto '>
                <p className=' mb-1'>BKDN</p>
              </div>
          </div>
       </div>
    </div>
    <div className='w-1/2 bg-[#0a2e5c]'>
       <div className='w-3/5 ml-10 pr-4 mt-28 mb-12'>
         <div className='text-white'>
           <p className='mb-2'>Tên của bạn <span className='text-red-500'>*</span></p>
           <input type='text' className='w-full rounded-md h-10 text-black p-2' />
         </div>
         <div className='text-white'>
           <p className='mb-2 mt-2'>Anh / chị đến từ công ty <span className='text-red-500'>*</span></p>
           <input type='text' className='w-full rounded-md h-10 text-black p-2' />
         </div>
         <div className='text-white'>
           <p className='mb-2 mt-2'>Điện thoại liên lạc <span className='text-red-500'>*</span></p>
           <input type='text' className='w-full rounded-md h-10 text-black p-2' />
         </div>
         <div className='text-white'>
           <p className='mb-2 mt-2'>Tỉnh / Thành phố <span className='text-red-500'>*</span></p>
           <input type='text' className='w-full rounded-md h-10 text-black p-2' />
         </div>
         <div className='text-white'>
           <p className='mb-2 mt-2'>Email <span className='text-red-500'>*</span></p>
           <input type='text' className='w-full rounded-md h-10 text-black p-2' />
         </div>
         <div className='text-white'>
           <p className='mb-2 mt-2'>Ghi chú <span className='text-red-500'>*</span></p>
           <textarea className='w-full rounded-md h-16 text-black p-2' />
         </div>
         <button className="bg-yellow-500 w-50 mt-4 flex font-semibold h-12 items-center justify-center  px-3 rounded-md text-white text-sm  fol">
            <span className='mx-2 font-bold text-lg text-black'>Tư vấn cho tôi !</span> 
          </button>
          <p className='text-white text-xs mt-4'>Chúng tôi sẽ liên lạc với anh chị bằng thông tin ở trên nhé</p>
       </div>
    </div>
  </Wrapper>
)

export default LienheScreen
