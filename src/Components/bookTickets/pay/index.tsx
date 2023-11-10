
import styled from 'styled-components'
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import {useState, useEffect} from 'react'
import { ApiPayment } from "@apis";
import { formatCurrency } from "@utils";

const Wrapper = styled.div`
 .left{
    line-height: 1.5;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    -webkit-box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
    box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
    touch-action: manipulation;
    height: 32px;
    padding: 0 15px;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
  }
  .right{
    line-height: 1.5;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    -webkit-box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
    box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
    touch-action: manipulation;
    height: 32px;
    padding: 0 15px;
    font-size: 14px;
    border-radius: 4px;
    background-color: rgb(0, 96, 196);
    color : white;
  }
  .item_co{
		border: 1px solid rgb(224, 224, 224);
		border-radius: 4px;
    width:100%;
	}
  img{
    width: 80%;
    margin-top: 20px;
    border-radius: 26px;
  }
`

const Pay = ({list ,setList, item, ArrSeat, dataBookSeat, count , startpoint, endpoint, dataInforBook}:any) => {
  const [select, setSelect] = useState(false);
  const [valid, setValid] = useState(false);

  const handleClickDown = () => {
    const newList = list.map((_item: any) => {
      if (_item.id === '2') {
        return { ..._item, isActive: true };
      } else {
        return { ..._item, isActive: false };
      }
    });
    setList(newList);
  };

  const [totalPrice, setTotalPrice] = useState<any>('')
  useEffect(() =>{
    if(item.status ){
      setTotalPrice(item.price*ArrSeat.length)
    }else{
      setTotalPrice(item.price * count)
    }
  },[item])

  const handlePayment = () => {
    if(!select){
        setValid(true)
    }else{
      ApiPayment({
        id: dataInforBook.paymentId ,
        price : totalPrice,
      })
    }
  }

  console.log(totalPrice)
  useEffect(() => {
     if(select){
      setValid(false)
     }
  },[select])

  return (
    <Wrapper>
        <div className='w-full mt-6 ml-[-2rem] flex mb-8'>
            <div className='w-3/5'>
               <p className='text-base font-bold'>Phương thức thanh toán</p>
               <FormControlLabel 
                  value="" 
                  control={<Radio />} 
                  label="Thanh toán online với VNPAY - QR Code" 
                  onClick={() => setSelect(true)}
               />
                {valid ? (
                  <p className='text-red-600 mb-[-15px] text-[10px] ml-8' >Bạn chưa chọn phương thức thanh toán !!</p>
                ) : (
                  ""
                )}
                <img src="https://cdn.sforum.vn/sforum/wp-content/uploads/2021/07/bg1.jpg" alt='' />
            </div>
            <div className='w-2/5'>
              <p className='text-base font-bold'>Thông tin chuyến đi</p>
              <div className="w-1/4  rounded-lg mr-2 py-2 item_co block p-4">
                <div>
                  <p className='mb-0'>Hành khách</p>
                  <p className='font-medium'>{dataBookSeat.username}</p>
                </div>
                <div >
                  <p className='mb-0'>Số điện thoại</p>
                  <p className='font-medium'>{dataBookSeat.phonenumber}</p>
                </div>
                <div >
                  <p className='mb-0'>Gmail</p>
                  <p className='font-medium'>{dataBookSeat.email}</p>
                </div>
                <div className='border-b-2 mb-4'></div>
                <div >
                  <p className='mb-0'>Nhà xe</p>
                  <p className='font-medium'>{item.nameVehicle}</p>
                </div>
                <div >
                  <p className='mb-0'>Điểm đón (dự kiến)</p>
                  <p className='font-medium'>Bến xe {startpoint.label}</p>
                </div>
                <div >
                  <p className='mb-0'>Điểm trả (dự kiến)</p>
                  <p className='font-medium'>Bến xe {endpoint.label}</p>
                </div>
              </div>
            </div>
        </div>
        <div className='border-b-2 w-[118%] ml-[-6rem]'></div>
          <div className='w-[118%] ml-[-6rem] mt-6 flex'>
             <div className='w-1/2'>
                <button className='left' onClick={() => handleClickDown()}>Quay lại</button>
             </div>
             <div className='w-1/2 flex ml-[14.3rem]'>
                <p className='pt-1 mr-6'>Tổng cộng : 
                  <span className='text-[#2a41e8]'>
                  {item.status ? 
                    <> <p>{formatCurrency(item.price*ArrSeat.length)}VND</p></> 
                    : 
                    <> <p>{formatCurrency(item.price *count)}VND</p></>
                  }
                  </span>
                </p>
                <button className='right' onClick={() => handlePayment()}>Thanh toán</button>
             </div>
          </div>
    </Wrapper>
  )
}

export default Pay
