
import { FunctionComponent} from 'react'
import styled from 'styled-components'
import { formatCurrency } from "@utils";
const Wrapper = styled.div`
	.modal{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 4px;
		  border-radius: 10px;
  }
 p{
  margin-bottom: 0;
 }
`

interface ModalDetailProps {
	event: any;
  route: any;
  dateStart: any;
  nameVehicle: any;
  nameAgency: any;
  timeStart: any;
  dep: any;
  des: any;
  numberTickets: any;
  nameSeat: any;
  totalPrice: any;
}

const ModalDetail: FunctionComponent<ModalDetailProps> = ({event, route, dateStart, nameVehicle, nameAgency, timeStart, dep, des, numberTickets, nameSeat,totalPrice}) => {

	return (
    <Wrapper>
		<div className="block items-center fixed z-[999] bg-[#2c2c2c14] w-full h-full top-0 left-0">
			<div className="block ml-[30%] mt-[10%] p-2 items-center leading-[42px] top-0 left-0 pb-8 w-2/5 modal bg-white">
        <img src='https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/close-icon.png' className='w-[15px] cursor-pointer ml-[97%]' alt=''onClick={event}/>
        <div className='block mx-4'>
             <h1 className='font-bold text-[15px] text-center'>Thông tin chi tiết</h1>
             <div className=' flex '>
                <div className='w-[60%] ml-4'>
                  <h1 className='font-bold'>THÔNG TIN HÀNH TRÌNH</h1>
                  <div className='flex'>
                    <p className='w-[130px]'>Tuyến đường : </p>
                    <p className='font-bold '>{route} </p>
                  </div>
                  <div className='flex mt-[-5px]'>
                    <p className='w-[130px]'>Ngày khởi hành : </p>
                    <p>{dateStart}</p>
                  </div>
                  <div className='flex mt-[-5px]'>
                    <p className='w-[130px]'>Xe : </p>
                    <p>{nameVehicle}</p>
                  </div>
                  <div className='flex mt-[-5px]'>
                    <p className='w-[130px]'>Hãng xe : </p>
                    <p>{nameAgency}</p>
                  </div>
                  <div className='flex mt-[-5px]'>
                    <p className='w-[130px]'>Giờ xuất phát : </p>
                    <p>{timeStart}</p>
                  </div>
                  <div className='flex mt-[-5px]'>
                    <p className='w-[130px]'>Điểm đón : </p>
                    <p>Bến xe {dep}</p>
                  </div>
                  <div className='flex mt-[-5px]'>
                    <p className='w-[130px]'>Điểm đến : </p>
                    <p>Bến xe {des}</p>
                  </div>
                </div>
                <div className='w-[40%]'>
                  <h1 className='font-bold'>THÔNG TIN VÉ</h1>
                    <div className='flex'>
                      <p className='w-[120px]'>Số lượng vé : </p>
                      <p className='font-bold '>{numberTickets}</p>
                    </div>
                    {nameSeat ? 
                    <>
                      <div className='flex'>
                        <p className='w-[120px]'>Ghế : </p>
                        <p className='font-bold '>{nameSeat}</p>
                      </div>
                    </> 
                    : <></>}
                    <div className='flex mt-[-5px]'>
                      <p className='w-[120px]'>Tổng tiền : </p>
                      <p className='font-bold '>{formatCurrency(totalPrice)}VND</p>
                    </div> 
                </div>
              </div>
        </div> 
      </div>
		</div>
    </Wrapper>
	 );
}

export default ModalDetail;

