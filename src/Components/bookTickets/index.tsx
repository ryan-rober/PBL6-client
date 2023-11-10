import styled from 'styled-components'
import { items } from "./item";
import { useState } from 'react'
import { FC } from 'react';
import Place from './place'
import Infor from './infor'
import Pay from './pay'

interface Prop{
  isClickBook: boolean; 
  item: any;
  ArrSeat :any ;
  setArrSeat : any;
  dataBookSeat:any ;
  setDataBookSeat :any;
  count :any;
  setCounter:any;
  startpoint:any;
  endpoint: any;
}
const Wrapper = styled.div`
    border-top: 1px solid rgb(192, 192, 192);
    margin: 0rem 3rem;
    .line{
      margin-left: -33px;
      margin-right: 52px;
      padding-bottom: 7.7px;
      border-bottom: 1px solid rgb(192, 192, 192);
    }
    .activeNav {
    position: relative;
    color: #2a41e8 !important ;
    }
    .activeNav::after {
        content : "";
        position: absolute;
        left    : 0;
        bottom  : -10px;
        height  : 0px;
        width   : 100%;
        border-bottom: 3px solid #2a41e8;
    }
`

const BookTickets:FC<Prop> = ({isClickBook, item ,ArrSeat ,setArrSeat, dataBookSeat , setDataBookSeat, count , setCounter, startpoint, endpoint}) => {
  const [list, setList] = useState(items);
  const [idSeat, setIdSeat] = useState<any[]>([])
  const [dataInforBook, setDataInforBook] = useState<any>();
  return (
    <Wrapper className={`${isClickBook === item.idTrip ? 'block' : 'hidden'}`}>
       <div className='mt-4 ml-24 '>
         <ul className='flex mb-0'>
          {list.map((value: any, index: any) => {
            let classStyles2 = "";
            if (value?.isActive) classStyles2 = "activeNav";
            return (
              <li key={index} className={`dark:text-slate-700 mr-32 text-base  ${classStyles2}`}>
                <div
                  className="cursor-pointer font-medium" >
                  {value.name}
                </div>
              </li>
            );
          })}
        </ul>
        <div className='line'></div>
        <div>
						{list[0].isActive && (
							<Place list={list} setList={setList} item={item} ArrSeat={ArrSeat} idSeat={idSeat} setIdSeat={setIdSeat} setArrSeat={setArrSeat} count={count} setCounter={setCounter}/>
						)}
						{list[1].isActive && (
							<Infor list={list} setList={setList} item={item} ArrSeat={ArrSeat} idSeat={idSeat} setIdSeat={setIdSeat} dataBookSeat={dataBookSeat} setDataBookSeat={setDataBookSeat} count={count} dataInforBook={dataInforBook} setDataInforBook={setDataInforBook}/>
						)}
						{list[2].isActive && (
							<Pay  list={list} setList={setList} item={item} ArrSeat={ArrSeat} dataBookSeat={dataBookSeat} count={count} startpoint={startpoint} endpoint={endpoint} dataInforBook={dataInforBook}/>
						)}
					</div>
       </div>
    </Wrapper>
  )
}

export default BookTickets
