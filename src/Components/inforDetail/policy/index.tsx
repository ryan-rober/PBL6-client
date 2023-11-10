
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 97%;
  margin:1rem 0;
  margin-left: -2rem;
  padding-bottom: 0.05rem;
`

const Policy = () => {
  return (
    <Wrapper>
      <div className="block">
         <h1 className='font-bold text-lg'>Chính sách hủy vé</h1>
         <div className='flex'>
             <p className='border-2 p-2 ml-[8rem] mr-4'>Hôm nay</p>
             <p className='w-1/3 font-bold text-center mr-[8rem]'> 23:00 <br/> <span  className='font-normal' > 02/11/2022 </span></p>
             <p className='font-bold mt-2'>Khởi hành</p>
         </div>
         <div className='w-full flex'>
            <div className='w-1/2 h-[15px] bg-yellow-500'><div className='w-[10px] h-[10px] bg-white rounded-full mt-[2px] ml-[10rem] '></div></div>
            <div className='w-1/2 h-[15px] bg-red-500'><div className='w-[10px] h-[10px] bg-white rounded-full mt-[2px] ml-[17rem] '></div></div>
         </div>
         <div className='flex mt-2 w-full'>
             <p className=' w-1/2 text-center'>Không mất phí</p>
             <p className=' w-1/2 text-center'>Không cho phép hủy</p>
          </div> 
          <div>
             <p className='font-bold'> Ghi Chú : 
             <span className='font-normal'> Phí huỷ sẽ được tính trên giá gốc, không giảm trừ khuyến mãi hoặc giảm giá - đồng thời không vượt quá số tiền quý khách đã thanh toán.</span></p>
          </div>  
      </div>
    </Wrapper>
  )
}

export default Policy
