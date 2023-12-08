
import styled from 'styled-components'
import {ApiHistoryBooking} from '@apis'
import { useEffect,useState } from 'react'
//@ts-ignore
import { formatCurrency } from "@utils";

const Wrapper = styled.div`
  width: 100%;
  margin:1rem 0;
  padding-bottom: 0.05rem;
  .item{
    width: 100%;
    margin: 2% 0%;
    padding-bottom: 0.05rem;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 4px;
    border-radius: 4px;
  } 
  .payment{
    width: 120px;
    height: 30px;
    text-align: center;
    background: rgb(4, 69, 140);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: 'K2D';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
  }
`

const Current = () => {

  const [listHistory, setListHistory] = useState<any>([]);

   useEffect(() => {
      ApiHistoryBooking(setListHistory)
   },[setListHistory])
   
   const [dataSort, setDataSort] = useState<any>([]);
   useEffect(() =>{
      setDataSort(listHistory)
   },[listHistory])
  //  console.log(listHistory)
  // console.log(dataSort[1].historyBooking.payment.paymentMethods.status)

  const filteredData = dataSort.filter(
    (item) => item.historyBooking.payment.paymentMethods.status === "NO"
  );

  return (
    <Wrapper>
      <div className="block">
        {listHistory.length ? 
        <>
        <div>
         {Array.isArray(filteredData) && filteredData.map((item : any, index :any) => (
          <div>
            {new Date().valueOf() - Date.parse(item.historyBooking.dateStart) > 0 && item.historyBooking.status === "Success" ?
             <>
              <div className='block item'>
               <div className='flex '>
                <div className='w-[60%] ml-4'>
                  <h1 className='font-bold'>THÔNG TIN HÀNH TRÌNH</h1>
                  <div className='flex'>
                    <p className='w-[130px]'>Tuyến đường : </p>
                    <p className='font-bold '>{item.historyBooking.route}</p>
                  </div>
                  <div className='flex mt-[-5px]'>
                    <p className='w-[130px]'>Ngày khởi hành : </p>
                    <p>{item.historyBooking.dateStart.slice(0,10)} </p>
                  </div>
                  <div className='flex mt-[-5px]'>
                    <p className='w-[130px]'>Xe : </p>
                    <p>{item.historyBooking.nameVehicle}</p>
                  </div>
                  <div className='flex mt-[-5px]'>
                    <p className='w-[130px]'>Hãng xe : </p>
                    <p>{item.historyBooking.nameAgency}</p>
                  </div>
                  <div className='flex mt-[-5px]'>
                    <p className='w-[130px]'>Giờ xuất phát : </p>
                    <p>{item.historyBooking.timeStart || '07:00:00'}</p>
                  </div>
                  <div className='flex mt-[-5px]'>
                    <p className='w-[130px]'>Điểm đón : </p>
                    <p>Bến xe {item.historyBooking.payment.dep}</p>
                  </div>
                  <div className='flex mt-[-5px]'>
                    <p className='w-[130px]'>Điểm đến : </p>
                    <p>Bến xe {item.historyBooking.payment.des}</p>
                  </div>
                </div>
                <div className='w-[40%]'>
                  <h1 className='font-bold'>THÔNG TIN VÉ</h1>
                    <div className='flex'>
                      <p className='w-[120px]'>Số lượng vé : </p>
                      <p className='font-bold '>{item.historyBooking.numberTicket}</p>
                    </div>
                    {item.historyBooking.nameSeat ? 
                    <>
                      <div className='flex'>
                        <p className='w-[120px]'>Ghế : </p>
                        <p className='font-bold '>{item.historyBooking.nameSeat.slice(0, item.historyBooking.nameSeat.length-1)}</p>
                      </div>
                    </> 
                    : <></>}
                    <div className='flex mt-[-5px]'>
                      <p className='w-[120px]'>Tổng tiền : </p>
                      <p className='font-bold '>{formatCurrency(item.historyBooking.totalPrice)}VND</p>
                    </div>
                    {item.nameSeat ? 
                    <>
                      <p className='font-bold ml-20 mt-8 '>Thanh toán ngay </p>
                      <a href={item.historyBooking.payment.paymentMethods.url} target="_blank" className='payment ml-20 mt-[-10px] pl-[20px]'>Thanh toán</a>
                    </>
                    :
                    <>
                      <p className='font-bold ml-20 mt-16 '>Thanh toán ngay</p>
                      <a href={item.historyBooking.payment.paymentMethods.url} target="_blank" className='payment ml-20 mt-[-10px] pl-[20px]' >Thanh toán</a>
                    </>}
                  </div>
                </div>               
              </div>
             </> 
             : 
             <></>}
            </div>
          ))}
         </div>
        </>
         :
        <>
           <p className=''>Chưa có chuyến nào hủy</p>
        </>
        }
      </div>
    </Wrapper>
  )
}

export default Current
