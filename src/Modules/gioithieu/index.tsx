/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'

import { Gioithieu } from '@assets'
import { Wrapper } from './styled'

const GioithieuScreen = () => (
  <Wrapper id="intro">
    <div className='w-[60%] m-auto'>
      <img src={Gioithieu} className="w-full h-[28rem] ml-[-5px]"  alt='' />
    </div>
    <div className='w-11/12 m-auto text-center'>
       <h1 className='font-bold text-4xl mt-32  color'>Chúng tôi có thể làm gì?</h1>
       <p className='text-2xl font-bold'>Góp phần cho hành trình của bạn hạnh phúc hơn</p>
       <div className='w-11/12 m-auto mb-36 border-l-2 border-blue-900'>
          <p className='text-base italic ml-16'>Booking tickets mong muốn đồng hành và góp phần cho hành trình kinh doanh của nhà xe sẽ hạnh phúc trọn vẹn hơn. 
            Để làm được điều đó chúng tôi sẽ không ngừng nỗ lực và cải thiện sản phẩm để nhà xe được tiếp cận với những 
            dịch vụ phần mềm hãng xe tốt nhất, với nhiều trải nghiệm hạnh phúc trong quá trình làm việc. Thành công của 
            nhà xe chính là thành công của Booking tickets, hạnh phúc của nhà xe cũng chính là hạnh phúc của Booking tickets.</p>
       </div>
    </div>
  </Wrapper>
)

export default GioithieuScreen
