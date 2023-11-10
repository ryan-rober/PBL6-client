
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 97%;
  margin:1rem 0;
  margin-left: -2rem;
  padding: 15px;
  padding-bottom: 0.05rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 4px;
  border-radius: 4px;
  background-color: rgb(245, 245, 245);
  .item_{
    border-bottom: 1px solid rgb(192, 192, 192);
  }
`

const Utilites = () => {
  return (
    <Wrapper>
      <div className="item_ block">
          <p className='flex items-center mb-1'>
            <img src='https://static.vexere.com/production/utilities/1610093076560.png' alt='' className='w-[32px]' />
            An toàn mùa Covid-19</p>
          <p className='ml-2'>Là chương trình bảo vệ an toàn cho hành khách sử dụng dịch vụ của BookingTickets trong mùa dịch Covid. BookingTickets đồng hành các nhà xe đối tác triển khai biện pháp bảo vệ an toàn cho hành khách, như sau:
          <br/>(1) Kiểm tra thân nhiệt hành khách trước khi lên xe;
          <br/>(2) Trang bị nước rửa tay;
          <br/>(3) Có đảm bảo khuyến cáo tất cả hành khách đeo khẩu trang khi lên xe;
          <br/>(4) Có thực hiện khử trùng xe;
          <br/>(5) Tài xế và nhân viên đã được tiêm vắc xin
          </p>
      </div>
      <div className="item_ block mt-2">
          <p className='flex items-center mb-1'>
            <img src='	https://static.vexere.com/production/utilities/1632753176106.png' alt='' className='w-[32px]' />
            Nhân viên đã tiêm vắc xin</p>
          <p className='ml-2'>Tài xế và nhân viên nhà xe đã được tiêm vắc xin phòng Covid -19</p>
      </div>
      <div className="item_ block mt-2">
          <p className='flex items-center mb-1'>
            <img src='	https://static.vexere.com/production/utilities/1609838042285.png' alt='' className='w-[32px]' />
            Dây đai an toàn</p>
          <p className='ml-2'>Trên xe có trang bị dây đai an toàn cho hành khách khi ngồi trên xe</p>
      </div>
      <div className="item_ block mt-2">
          <p className='flex items-center mb-1'>
            <img src='	https://static.vexere.com/production/utilities/1609837962216.png' alt='' className='w-[32px]' />
            Khử trùng xe</p>
          <p className='ml-2'>Nhà xe có thực hiện phun khử trùng Nano Bạc lên xe nhằm bảo vệ an toàn cho hành khách mùa Covid</p>
      </div>
      <div className="item_ block mt-2">
          <p className='flex items-center mb-1'>
            <img src='	https://static.vexere.com/production/utilities/1609837896898.png' alt='' className='w-[32px]' />
            Khuyến cáo đeo khẩu trang</p>
          <p className='ml-2'>Có đảm bảo khuyến cáo tất cả hành khách đeo khẩu trang khi lên xe</p>
      </div>
    </Wrapper>
  )
}

export default Utilites
