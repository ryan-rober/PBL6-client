import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getListRatingByAgency } from "@apis";
//@ts-ignore
import ReactStarRating from "react-star-ratings-component";

const Wrapper = styled.div`
  width: 97%;
  margin: 1rem 0;
  margin-left: -2rem;
  padding-bottom: 0.05rem;
`;

const Evaluate = ({ item }) => {
  const [listRating, setListRating] = useState([]);
  useEffect(() => {
    getListRatingByAgency(item.nameAgency, setListRating);
  }, []);

  return (
    <Wrapper>
      {listRating.length ? (
        <>
          <div>
            {listRating.map((ratingItem, index) => (
              <div className='h-[9rem] w-[100%] flex mb-2 border-b' key={index}>
                <div className='ml-6 mt-6'>
                  <img src='https://halan.vn/wp-content/uploads/2021/04/avar-2.png' alt='' />
                </div>
                <div className='block mx-6 my-4'>
                  <p className='mb-1'>{ratingItem.userName}</p>
                  <p className='flex'>
                    <ReactStarRating
                      numberOfStar={5}
                      numberOfSelectedStar={ratingItem.rating}
                      colorFilledStar="#217f94"
                      colorEmptyStar="black"
                      starSize="20px"
                      spaceBetweenStar="10px"
                      disableOnSelect={true}
                    />
                  </p>
                  <p className='mb-0'>{ratingItem.comment}</p>
                  <p className='text-zinc-400 text-xs'>Chuyến : {ratingItem.depart} - {ratingItem.arrive} </p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <p>Chưa có đánh giá nào</p>
        </>
      )}
    </Wrapper>
  );
};

export default Evaluate;
