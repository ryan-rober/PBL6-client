import styled from 'styled-components';

const Wrapper = styled.div`

`;

const Point = ({ item }) => {
  const routeStations = Object.values(item.routeStations);

  return (
    <Wrapper>
      <div className="py-6">
        <p className='font-bold text-sky-500 pt-2'>Lưu ý
          <br/><span className='font-normal text-black'>Các mốc thời gian đón, trả bên dưới là thời gian dự kiến.
          <br/>Lịch này có thể thay đổi tùy tình hình thực tế.</span>
        </p>
        {routeStations?.map((value, index) => 
           <div className='mb-1' key={index}>+ {value[0]} - {value[1]}</div>
        )}  
      </div>
    </Wrapper>
  );
};

export default Point;
