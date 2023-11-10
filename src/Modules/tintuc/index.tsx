/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'

import {  } from '@assets'
import { Wrapper } from './styled'

const TestScreen = () => (
  <Wrapper id="intro">
    <div className="w-3/5 m-auto block">
      <div className="my-2  rounded-lg ">
		<div className=" rounded-lg shadow-sm wid-4" >
			<a
				href=""
				className="image overflow-hidden rounded-t-lg relative block"
			>
				<img
					src="https://bms.vexere.com/wp-content/uploads/2022/05/blog_750x450.png"
					alt=""
					className="w-full h-full absolute inset-0 object-cover"
				/>
			</a>
			<div className="p-3 bg-white rounded-b-lg text-black block">
				<a href='' className="block text-base text-current line-clamp-1 mb-1 font-bold">
					Hoá đơn điện tử là gì? Những lợi ích khi sử dụng hoá đơn điện tử cung cấp bởi Booking tickets
				</a>
				<p className='text-xs text-zinc-500'>6 May,2022</p>
				<p className='mb-0'>Hóa đơn điện tử (vé điện tử) là gì? Hóa đơn điện tử (vé điện tử) được chia làm 4 </p>
				<a href=''>Xem chi tiết </a>
			</div>
		</div>
	  </div>
	  <div className="my-2  rounded-lg ">
		<div className=" rounded-lg shadow-sm wid-4" >
			<a
				href=""
				className="image overflow-hidden rounded-t-lg relative block"
			>
				<img
					src="https://bms.vexere.com/wp-content/uploads/2021/12/2-1.png"
					alt=""
					className="w-full h-full absolute inset-0 object-cover"
				/>
			</a>
			<div className="p-3 bg-white rounded-b-lg text-black block">
				<a href=''>
				[HOT] Quà Tết gửi tặng đến 100% phí khởi tạo và phí hosting tháng đầu cho Quý Đối tác mới
				</a>
				<p className='text-xs text-zinc-500'>10 December,2022</p>
				<p className='mb-0'>Qùa Tết tri ân Quý đối tác Nhà xe mới TẶNG 100% phí hosting tháng đầu sau khi nhà xe ký hợp đồng</p>
				<a href=''>Xem chi tiết </a>
			</div>
		</div>
	  </div>
    </div>
  </Wrapper>
)

export default TestScreen
