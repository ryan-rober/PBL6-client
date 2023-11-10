/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import { item } from "./item";
import {  } from '@assets'
import { Wrapper } from './styled'

const DanggiaScreen = () => (
  <Wrapper id="intro">
    <div className="contain ">
      <div className='py-8 pl-24'>
         <h1 className='font-bold text-2xl m'>Nhận xét của khách hàng</h1>
         {item?.map((item, index) => (
          <div className='h-[8rem] bg-[#0c4a6e] w-[120%] flex mb-10'>
            <div className=' ml-6 mt-6'>
               <img src={item.avatar} alt=''  />
            </div>
            <div className='block mx-6 my-4 text-white'>
               <p className='mb-1'>{item.name}</p>
               <p className='flex'>
                  <img src="https://halan.vn/wp-content/uploads/2020/12/Star-1.svg" alt='' />
                  <img src="https://halan.vn/wp-content/uploads/2020/12/Star-1.svg" alt='' />
                  <img src="https://halan.vn/wp-content/uploads/2020/12/Star-1.svg" alt='' />
                  <img src="https://halan.vn/wp-content/uploads/2020/12/Star-1.svg" alt='' />
                  <img src="https://halan.vn/wp-content/uploads/2020/12/Star-1.svg" alt='' />
               </p>
               <p>{item.title}</p>
            </div>
         </div>
         	))}
      </div>
    </div>
  </Wrapper>
)

export default DanggiaScreen
