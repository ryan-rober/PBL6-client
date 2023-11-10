import styled from 'styled-components'

const Wrapper = styled.header`
	.wid-4{
		width: 20rem !important;
	}
	.scroll{
	 overflow: auto !important;
	}
	.item_co{
		border: 1px solid rgb(224, 224, 224);
		border-radius: 4px;
	}
`
const ConnectionPlatform = () => {

  return (
    <Wrapper className='w-3/5 m-auto mt-10'>
      <div>
	  <h1 className='text-lg' >Nền tảng kết nối người dùng và nhà xe </h1>
		<div className="flex py-[5px] justify-center scroll" >	
		    <div className="w-1/4  rounded-lg mr-2 py-2 item_co flex">
                     <div className='mx-2'>
                        <img src="https://storage.googleapis.com/fe-production/svgIcon/bus-car-icon.svg" alt='' />
                     </div>
                     <div className='w-4/5 pr-1'>
                        <p className='text-base font-bold mb-1'>2000+ nhà xe chất lượng cao</p>
						<span className='text-zinc-500'>5000+ tuyến đường trên toàn quốc, chủ động và đa dạng lựa chọn.</span>
                     </div>
            </div>
			<div className="w-1/4  rounded-lg mr-2 py-2 item_co flex">
                     <div className='mx-2'>
                        <img src="https://storage.googleapis.com/fe-production/svgIcon/yellow-ticket-icon.svg" alt='' />
                     </div>
                     <div className='w-4/5 pr-1'>
                        <p className='text-base font-bold mb-1'>Đặt vé dễ dàng</p>
						<span className='text-zinc-500'>Đặt vé chỉ với 60s. Chọn xe yêu thích cực nhanh và thuận tiện.</span>
                     </div>
            </div>
			<div className="w-1/4  rounded-lg mr-2 py-2 item_co flex">
                     <div className='mx-2'>
                        <img src="https://storage.googleapis.com/fe-production/svgIcon/completement-icon.svg" alt='' />
                     </div>
                     <div className='w-4/5 pr-1'>
                        <p className='text-base font-bold mb-1'>Đảm bảo có vé</p>
						<span className='text-zinc-500'>Hoàn ngay 150% nếu không có vé, mang đến hành trình trọn vẹn.</span>
                     </div>
            </div>
			<div className="w-1/4  rounded-lg py-2 item_co flex">
                     <div className='mx-2'>
                        <img src="https://storage.googleapis.com/fe-production/svgIcon/coupon-icon.svg" alt='' />
                     </div>
                     <div className='w-4/5 pr-1'>
                        <p className='text-base font-bold mb-1'>Nhiều ưu đãi</p>
						<span className='text-zinc-500'>Hàng ngàn ưu đãi cực chất độc quyền tại Booking tickets.</span>
                     </div>
            </div>
		</div>				
	</div>
    </Wrapper>
  )
}

export default ConnectionPlatform
