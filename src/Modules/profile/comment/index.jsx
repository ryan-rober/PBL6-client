import styled from "styled-components";
import { useEffect, useState } from "react";
import { getListRatingByUser } from "@apis";
//@ts-ignore
import ReactStarRating from "react-star-ratings-component";

const Wrapper = styled.div`
  width: 100%;
  margin: 1rem 0;
`;

// ... (previous imports and styles remain the same)

const Comment = () => {
  const [listRating, setListRating] = useState([]);
  useEffect(() => {
    getListRatingByUser(setListRating);
  }, []);

  return (
    <Wrapper>
      {listRating.length ? (
        <>
          <div>
            {listRating.map((item, index) => (
              <div
                key={index}
                className="h-[12rem] w-[100%] flex mb-2 border-b"
              >
                <div className="ml-6 mt-6">
                  <img
                    src="https://halan.vn/wp-content/uploads/2021/04/avar-2.png"
                    alt=""
                  />
                </div>
                <div className="block mx-6 my-4">
                  <p className="mb-1">{item.userName}</p>
                  <p className="flex">
                    <ReactStarRating
                      numberOfStar={5}
                      numberOfSelectedStar={item.rating}
                      colorFilledStar="#217f94"
                      colorEmptyStar="black"
                      starSize="20px"
                      spaceBetweenStar="10px"
                      disableOnSelect={true}
                    />
                  </p>
                  <p className="mb-1">{item.comment}</p>
                  <p className="text-zinc-400 text-xs mb-1">
                    Chuyến : {item.depart} - {item.arrive}{" "}
                  </p>
                  <p className="text-zinc-400 text-xs mb-1">
                    Hãng xe : {item.agencyName}
                  </p>
                  <p className="text-zinc-400 text-xs">
                    Xe : {item.vehicleName}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <p>Chưa có nhận xét nào</p>
        </>
      )}
    </Wrapper>
  );
};

export default Comment;
