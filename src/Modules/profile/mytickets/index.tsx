
import styled from 'styled-components'
import { useState} from 'react';
import Current from './current';
import Went from './went';
import Cancel from './cancel';

const Wrapper = styled.div`
.line{
      padding-bottom: 7.7px;
      border-bottom: 1px solid rgb(192, 192, 192);
    }
    .active_myticket {
    position: relative;
    color: #2a41e8 !important ;
    }
    .active_myticket::after {
        content : "";
        position: absolute;
        left    : 0;
        bottom  : -10px;
        height  : 0px;
        width   : 100%;
        border-bottom: 3px solid #2a41e8;
    }
`

const MyTickets = () => {
  const status = [
    { id: '1', value: 'Hiện tại', isActive: true, text_po :"text-left"},
    { id: '2', value: 'Đã đi', isActive: false ,text_po :"text-center"},
    { id: '3', value: 'Đã hủy', isActive: false ,text_po :"text-right"},
 ];

 const [list, setList] = useState(status);
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
    <Wrapper>
      <div className="">
        <ul className='flex mb-0'>
          {list.map((item: any, index: any) => {
            let classStyles2 = "";
            if (item?.isActive) classStyles2 = "active_myticket";
            return (
              <li key={index} className={`dark:text-slate-700 text-base w-1/3 ${item.text_po} ${classStyles2}`}>
                <div
                  className="cursor-pointer"
                  onClick={() => handleClick(item)}
                >
                  {item.value}
                </div>
              </li>
            );
          })}
        </ul>
        <div className='line'></div>
        <div>
						{list[0].isActive && (
							<Current  />
						)}
						{list[1].isActive && (
							<Went/>
						)}
						{list[2].isActive && (
							<Cancel />
						)}
					</div>
      </div>
    </Wrapper>
  )
}

export default MyTickets
