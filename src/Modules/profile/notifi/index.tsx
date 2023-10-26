
import styled from 'styled-components'
import {getListNotification} from '@apis'
import { useEffect, useState } from 'react'
import ModalDetail from './modalDetail'
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
`

const Notification = () => {
  const [listNotifi, setListNotifi] = useState([])
  const [isShow, setIsShow] = useState(false);
  const [isId, setIsID] = useState('');
  useEffect(() =>{
   getListNotification(setListNotifi)
  },[])

  console.log(listNotifi);

  return (
    <Wrapper>
      <div className="block pt-2">
      {listNotifi.length ? 
        <>
          <div>
           {listNotifi.map((item : any) => (
            <div>
              <div className='item block cursor-pointer' 
              onClick={() => {
                setIsShow(true)
                setIsID(item.historyBooking.id)
              }}>
                 <h1 className='font-bold'>{item.title}</h1>
                 <p>{item.content}</p>
              </div>
              <div>
                {isShow && isId === item.historyBooking.id && (
                  <ModalDetail
                    event={() => setIsShow(false)}
                    route={item.historyBooking?.route}
                    dateStart={item.historyBooking?.dateStart.slice(0,10)}
                    nameVehicle={item.historyBooking?.nameVehicle}
                    nameAgency={item.historyBooking?.nameAgency}
                    timeStart={item.historyBooking?.timeStart || '07:00:00'}
                    dep={item.historyBooking?.payment.dep}
                    des={item.historyBooking?.payment.des}
                    numberTickets={item.historyBooking?.numberTicket}
                    nameSeat={item.historyBooking?.nameSeat.slice(0, item.historyBooking.nameSeat.length-1)}
                    totalPrice={item.historyBooking?.totalPrice}
                  />
                )}
                </div>
              </div>
              ))}
          </div>
        </> 
        : 
        <>
          <p >Chưa có thông báo nào</p>
        </>}
      </div>
    </Wrapper>
  )
}

export default Notification
