/* eslint-disable no-unused-vars */

import styled from "styled-components";
import { ApiHistoryBooking } from "@apis";
import { useEffect, useState } from "react";
import { formatCurrency } from "@utils";

const Wrapper = styled.div`
  width: 100%;
  margin: 1rem 0;
  padding-bottom: 0.05rem;
  .item {
    width: 100%;
    margin: 2% 0%;
    padding-bottom: 0.05rem;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 4px;
    border-radius: 4px;
  }
  .cancle {
    width: 120px;
    height: 30px;
    text-align: center;
    background: #af0303;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: "K2D";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }
`;
const Cancel = () => {
  const [listHistory, setListHistory] = useState([]);

  useEffect(() => {
    ApiHistoryBooking(setListHistory);
  }, [setListHistory]);

  const [dataSort, setDataSort] = useState();
  useEffect(() => {
    setDataSort(listHistory.reverse());
  }, [listHistory]);

  return (
    <Wrapper>
      <div className="block">
        {listHistory.length ? (
          <>
            <div>
              {dataSort.map((item, index) => (
                <div key={index}>
                  {item.historyBooking.status === "Cancel" ? (
                    <>
                      <div className="item flex ">
                        <div className="w-[60%] ml-4">
                          <h1 className="font-bold">THÔNG TIN HÀNH TRÌNH</h1>
                          <div className="flex">
                            <p className="w-[130px]">Tuyến đường : </p>
                            <p className="font-bold ">
                              {item.historyBooking.route}
                            </p>
                          </div>
                          <div className="flex mt-[-5px]">
                            <p className="w-[130px]">Ngày khởi hành : </p>
                            <p>{item.historyBooking.dateStart.slice(0, 10)} </p>
                          </div>
                          {/* ... (other details) ... */}
                        </div>
                        <div className="w-[40%]">
                          <h1 className="font-bold">THÔNG TIN VÉ</h1>
                          <div className="flex">
                            <p className="w-[120px]">Số lượng vé : </p>
                            <p className="font-bold ">
                              {item.historyBooking.numberTicket}
                            </p>
                          </div>
                          {/* ... (other ticket details) ... */}
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <p className="">Chưa có chuyến nào hủy</p>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default Cancel;
