/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import { Wrapper } from './styled'
import { items } from "./item";
import { useState } from 'react'
import MyTickets from './mytickets';
import Infor from './infor';
import Notification from './notifi';
import Comment from './comment';

const ProfileScreen = () => {
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
    <Wrapper id="intro" className='flex'>
    <div className="w-[26%] mr-8">
      <div className='mt-4 border-slate-300 border rounded-md'>
          <ul className='block mb-0 p-2'>
            {list.map((item: any, index: any) => {
              let classStyles2 = "";
              if (item?.isActive) classStyles2 = "active_pro";
              return (
                <li key={index} className={`dark:text-slate-700 p-2 flex ${classStyles2}`}>
                  <img src={item.url} alt=''/>
                  <div
                    className="cursor-pointer mt-1 ml-2"
                    onClick={() => handleClick(item)}
                  >
                    {item.name}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
    </div>
    <div className='w-4/5 ml-8'>
       <div>
          {list[0].isActive && (
            <Infor />
          )}
          {list[1].isActive && (
            <MyTickets />
          )}
          {list[2].isActive && (
            <Notification />
          )}
          {list[3].isActive && (
            <Comment />
          )}
        </div>
    </div>
  </Wrapper>
  )
}

export default ProfileScreen
