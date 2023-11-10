import styled from 'styled-components'
import { useEffect, useState } from "react";
import {SEAT_NO , SEAT_YES, SEAT_ED} from "@assets"
import { getLocalStorage, STORAGE } from '@utils'
import {ModalSignIn} from "@components"
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
`

const Place = ( {list ,setList, item ,ArrSeat ,setArrSeat, count, setCounter, idSeat, setIdSeat}:any) => {

  const token =  getLocalStorage(STORAGE.USER_TOKEN)?.length ;
  const [isShow, setIsShow] = useState(false);
  const [isLoggedIn, setisLoggedIN] = useState(false) 
  useEffect(() => {
     if (token){
         setisLoggedIN(true)
     }
  },[token])

  const handleClick = () => {  
    if(ArrSeat.length > 0 || count >0){
      if(isLoggedIn){
      const newList = list.map((_item: any) => {
        if (_item.id === '2') {
          return { ..._item, isActive: true };
        } else {
          return { ..._item, isActive: false };
        }
      });
        setList(newList);
      }else{
      setIsShow(true)
      }
    };
    }

   const [data, setData] = useState<any>();
   useEffect (() => {
    setData(item.seatStatuses)
   },[item.seatStatuses, data])

   const increment = (): any => {
      if(count < 3){
        setCounter(count+1);
      }
   };
   
   const decrement = (): any => {
    if(count > 0){
      setCounter(count-1);
    }
   }

   const onClickSeat = (nameSeat :any) => {
      if( ArrSeat.length < 3 && nameSeat !== ArrSeat[0] && nameSeat !== ArrSeat[1] && nameSeat !== ArrSeat[2]) {
        setArrSeat(old => [...old,nameSeat]);
      } 
      if(nameSeat === ArrSeat[0] || nameSeat === ArrSeat[1] || nameSeat === ArrSeat[2]){
        setArrSeat(ArrSeat.filter(item => item !== nameSeat))
      }
   };

   const IdSeat = (idseat :any) => {
    if( idSeat.length < 3 && idseat !== idSeat[0] && idseat !== idSeat[1] && idseat !== idSeat[2]) {
      setIdSeat(old => [...old,idseat]);
    } 
    if(idseat === idSeat[0] || idseat === idSeat[1] || idseat === idSeat[2]){
      setIdSeat(idSeat.filter(item => item !== idseat))
    }
  };

  return (
    <Wrapper>
      <div className="">
      {/* <Seats item={item} /> */}
      {item.status ? 
      <>
         <div className='flex'>
          <div className='w-[200px]  flex flex-wrap mt-8 ml-[-3rem]'>
            {data?.map((item : any, index :any) => (
                <div className='' >
                  { index < 23 ? 
                  <>
                  <div className='w-[60px] h-[90px]'>
                    {item.status ?
                     <><img src={SEAT_NO} alt='' className='m-[auto]'/></> 
                     : 
                     <>
                     <div onClick={() => {onClickSeat(item.nameSeat)
                                            IdSeat(item.id)}}>
                        { ArrSeat[0] === item.nameSeat || ArrSeat[1] === item.nameSeat || ArrSeat[2] === item.nameSeat ? 
                        <><img src={SEAT_ED} alt='' className='m-[auto] cursor-pointer'/></>
                        :
                        <><img src={SEAT_YES} alt='' className='m-[auto] cursor-pointer'/></>
                        }
                     </div>
                     </>
                     }
                    <h2 className='text-center mt-1'>{item.nameSeat}</h2>
                    </div>
                  </>
                  :<></>}
                </div>
              ))}
          </div>
          <div className='w-[200px]  flex flex-wrap mt-8 ml-[2rem]'>
            {data?.map((item : any, index :any) => (
                <div className='' >
                  { index > 22 ? 
                  <>
                  <div className='w-[60px] h-[90px]'>
                   {item.status?
                     <><img src={SEAT_NO} alt='' className='m-[auto]'/></> 
                     : 
                     <>
                       <div onClick={() => {onClickSeat(item.nameSeat)
                                            IdSeat(item.id)}}>
                        { ArrSeat[0] === item.nameSeat || ArrSeat[1] === item.nameSeat || ArrSeat[2] === item.nameSeat ? 
                        <><img src={SEAT_ED} alt='' className='m-[auto] cursor-pointer'/></>
                        :
                        <><img src={SEAT_YES} alt='' className='m-[auto] cursor-pointer'/></>
                        }
                     </div>
                     </>
                    }
                    <h2 className='text-center mt-1'>{item.nameSeat}</h2>
                    </div>
                  </>
                  :<></>}
                </div>
              ))}
          </div>
          <div className='ml-[3rem] mt-8 block'>
             <p className='font-bold'>Chú thích</p>
             <div className='flex h-[50px] mb-4'>
                <img src={SEAT_YES} alt=''/>
                <p className='ml-4 pt-2'> Ghế đơn <br/> {formatCurrency(item.price)}VND</p>
             </div>
             <div className='flex h-[50px] mb-4'>
                <img src={SEAT_NO} alt=''/>
                <p className='ml-4 pt-3'>Ghế không bán</p>
             </div>
             <div className='flex h-[50px]'>
                <img src={SEAT_ED} alt='' />
                <p className='ml-4 pt-3'>Đang chọn</p>
             </div>
          </div>
        </div>
      </> 
      : 
      <>
        <div className='my-16'>
           <h1 className=''>Chọn số lượng ghế :</h1>
           <div className='flex mt-4'>
            <button onClick={decrement} className="w-[30px] h-[30px] border-2 border-gray-400  mr-4">-</button>
            <div key={count} className='text-base mt-1'>{count}</div>
            <button onClick={increment} className="w-[30px] h-[30px] border-2 border-gray-400  ml-4">+</button>
          </div>
        </div>
      </>
      }
       <div className='border-b-2 w-[118%] ml-[-6rem]'></div>
       <div className='w-[118%] ml-[-6rem] mt-6 flex'>
             <div className='w-1/2'>
             {item.status ? 
                <> <p>Ghế {ArrSeat[0]} {ArrSeat[1]} {ArrSeat[2]}</p></> 
                : 
                <> <p>{count} ghế</p></>
              }
             </div>
             <div className='w-1/2 flex ml-[15.5rem]'>
                <p className='pt-1 mr-6'>Tổng cộng : 
                  <span className='text-[#2a41e8]'>
                  {item.status ? 
                    <> <p>{formatCurrency(item.price*ArrSeat.length)}VND</p></> 
                    : 
                    <> <p>{formatCurrency(item.price *count)} VND</p></>
                  }
                  </span>
                </p>
                <button className={`right ${ArrSeat.length || count ? '' : 'opacity-75'}`} onClick={() => handleClick()} >Tiếp tục</button>
             </div>
          </div>
      </div>
      {isShow && (
         <ModalSignIn
          event={() => setIsShow(false)}
       />
      )}
    </Wrapper>
  )
}

export default Place
