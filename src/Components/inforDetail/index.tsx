import styled from 'styled-components'
import { items } from "./item";
import { useState } from 'react'
import Image from './image'
import Evaluate from './evaluate';
import Point from './point';
import Policy from './policy';
import Utilites from './utilities';
import { FC } from 'react';

interface Prop{
  isClickInfor: boolean; 
  item :any
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

const InforDetail:FC<Prop> = ({isClickInfor, item}) => {
  const [list, setList] = useState(items);
  const handleClick = (item: any) => {
			const newList = list.map((_item: any) => {
				if (_item.id === item.id) {
					return { ..._item, isActive: true };
				} else {
					return { ..._item, isActive: false };
				}
			});
			setList(newList);
	};
  return (
    <Wrapper className={`${isClickInfor === item.idTrip ? 'block' : 'hidden'}`}>
    {/* // <Wrapper className="infor"> */}
       <div className='mt-4 ml-20 '>
         <ul className='flex mb-0'>
          {list.map((item: any, index: any) => {
            let classStyles2 = "";
            if (item?.isActive) classStyles2 = "activeNav";
            return (
              <li key={index} className={`dark:text-slate-700 mr-14 text-base  ${classStyles2}`}>
                <div
                  className="cursor-pointer font-medium"
                  onClick={() => handleClick(item)}
                >
                  {item.name}
                </div>
              </li>
            );
          })}
        </ul>
        <div className='line'></div>
        <div>
						{list[0].isActive && (
							<Image  />
						)}
						{list[1].isActive && (
							<Utilites/>
						)}
						{list[2].isActive && (
							<Point item={item} />
						)}
						{list[3].isActive && (
							<Policy  />
						)}
						{list[4].isActive && (
							<Evaluate item={item} />
						)}
					</div>
       </div>
    </Wrapper>
  )
}

export default InforDetail
