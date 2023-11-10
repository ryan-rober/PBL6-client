
import styled from 'styled-components'
import {ApiHistoryBooking, ApiRefund, getListNoPayment} from '@apis'
import { useEffect,useState } from 'react'
import { getLocalStorage } from '@utils'
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
  .cancle{
    width: 120px;
    height: 30px;
    text-align: center;
    background: #af0303;
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
  const [listnoPayment, setListnoPayment] = useState<any>([]);

   useEffect(() => {
      ApiHistoryBooking(setListHistory)
      getListNoPayment(setListnoPayment)
   },[setListHistory, setListnoPayment])

   const CancelTicket = (id: any) => {
     ApiRefund(id)
   }

   const [dataSort, setDataSort] = useState<any>();
   useEffect(() =>{
      setDataSort(listHistory.reverse())
   },[listHistory])

   const [countDown, setCountDown] = useState(0);
   const [runTimer, setRunTimer] = useState(false);

  //  useEffect(() =>{
  //    if(listnoPayment.length > 0){
  //     setRunTimer(true)
  //    }
  //  },[])

   console.log(listnoPayment)

   useEffect(() => {
    let timerId;
    if (getLocalStorage('count')) {
      setCountDown(60 * 15);
      timerId = setInterval(() => {
        setCountDown((countDown) => countDown - 1);
      }, 1000);
    } else {
      clearInterval(timerId);
    }

    return () => clearInterval(timerId);
  }, [runTimer]);

  useEffect(() => {
    if (countDown < 0) {
      setRunTimer(false);
      setCountDown(0);
    }
  }, [countDown]);

  const time = (currentDate) => {
    const today = new Date()
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    if( date === currentDate ){
      return true;
    }
    else{
      return false;
    }
  }
 const Seconds = String(countDown % 60);
 const Minutes =  String(Math.floor(countDown / 60));
  return (
    <Wrapper>
      <div className="block">
      {listnoPayment.length ? 
        <>
        <div>
         {listnoPayment.map((item : any, index :any) => (
          <div>
            { time(item.dateOrder.slice(0,10)) ?
             <>
              <div className='item flex '>
                <div className='w-[60%] ml-4'>
                  <h1 className='font-bold'>THÔNG TIN HÀNH TRÌNH</h1>
                  <div className='flex'>
                    <p className='w-[130px]'>Tuyến đường : </p>
                    <p className='font-bold '>{item.route}</p>
                  </div>
                  <div className='flex mt-[-5px]'>
                    <p className='w-[130px]'>Ngày khởi hành : </p>
                    <p>{item.dateStart.slice(0,10)} </p>
                  </div>
                  <div className='flex mt-[-5px]'>
                    <p className='w-[130px]'>Xe : </p>
                    <p>{item.nameVehicle}</p>
                  </div>
                  <div className='flex mt-[-5px]'>
                    <p className='w-[130px]'>Hãng xe : </p>
                    <p>{item.nameAgency}</p>
                  </div>
                  <div className='flex mt-[-5px]'>
                    <p className='w-[130px]'>Giờ xuất phát : </p>
                    <p>{item.timeStart || '07:00:00'}</p>
                  </div>
                  <div className='flex mt-[-5px]'>
                    <p className='w-[130px]'>Điểm đón : </p>
                    <p>Bến xe {item.dep}</p>
                  </div>
                  <div className='flex mt-[-5px]'>
                    <p className='w-[130px]'>Điểm đến : </p>
                    <p>Bến xe {item.des}</p>
                  </div>
                </div>
                <div className='w-[40%]'>
                  <h1 className='font-bold'>THÔNG TIN VÉ</h1>
                    <div className='flex'>
                      <p className='w-[120px]'>Số lượng vé : </p>
                      <p className='font-bold '>{item.numberTickets}</p>
                    </div>
                    {item.nameSeat ? 
                    <>
                      <div className='flex'>
                        <p className='w-[120px]'>Ghế : </p>
                        <p className='font-bold '>{item.nameSeat.slice(0, item.nameSeat.length-1)}</p>
                      </div>
                    </> 
                    : <></>}
                    <div className='flex mt-[-5px]'>
                      <p className='w-[120px]'>Tổng tiền : </p>
                      <p className='font-bold '>{formatCurrency(item.totalPrice)}VND</p>
                    </div> 
                    {item.nameSeat ? 
                    <>
                      <p className='font-bold ml-20 mt-8 '>Thanh toán ngay </p>
                      <a href={item.paymentMethods.url} target="_blank" className='payment ml-20 mt-[-10px] pl-[20px]'>Thanh toán</a>
                    </>
                    :
                    <>
                      <p className='font-bold ml-20 mt-16 '>Thanh toán ngay</p>
                      <a href={item.paymentMethods.url} target="_blank" className='payment ml-20 mt-[-10px] pl-[20px]' >Thanh toán</a>
                    </>}
                </div>
              </div>
             </> 
             : <></>}
            </div>
          ))}
         </div>
        </>
         :
        <> </>
        }
        {listHistory.length ? 
        <>
        <div>
         {dataSort.map((item : any, index :any) => (
          <div>
            {item.historyBooking.status === "Success" && new Date().valueOf() - Date.parse(item.historyBooking.dateStart) < 0 ?
             <>
               <div className='item flex '>
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
                    { new Date(item.historyBooking.datOrder).setDate(new Date(item.historyBooking.datOrder).getDate() + 1) - new Date().valueOf() > 0 ? 
                    <>
                      {item.historyBooking.nameSeat ? 
                        <>  <button className='cancle ml-20 mt-16 pl-[36px]' onClick={() => CancelTicket(item.historyBooking.payment.id)}>Hủy vé</button></>
                        :
                        <>  <button className='cancle ml-20 mt-24 pl-[36px]' onClick={() => CancelTicket(item.historyBooking.payment.id)}>Hủy vé</button></>}
                    </> 
                    : <></>}
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
           <p className=''>Bạn chưa có chuyến sắp đi nào, <span className='text-[#2a41e8] cursor-pointer'>đặt vé ngay</span></p>
        </>
        }
      </div>
    </Wrapper>
  )
}

export default Current
