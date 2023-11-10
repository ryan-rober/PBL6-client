

import * as React from 'react';
import {useState,useEffect} from 'react'
import styled from 'styled-components'
import { login } from "@apis";

const Wrapper = styled.div`

  input{
    width: 100%;
    height: 40px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid rgb(217, 217, 217);
    &:focus{
      box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
    }
  }
  input[type=text]:focus {
    outline: none !important;
  }
  input[type=password]:focus {
    outline: none !important;
  }
  button:hover{
    background-color: #3786a5;
  }
`

const SignIn = ()  => {
  const [dataLogin, setDataLogin] = useState({
    username: "",
    password: "",
  });

  const [inValidData, setInValidData] = useState({
    errusername: "",
    errPassword: "",
    errRequire: "",
  });

  useEffect(() => {
    if (
      dataLogin.username &&
      dataLogin.password 
    ) {
      setInValidData({
        ...inValidData,
        errRequire: "",
      });
    }
  }, [
    dataLogin.password,
    dataLogin.username
  ]);

  const onSubmitRegister = () => {
    if (!dataLogin.username || !dataLogin.password) {
      setInValidData({
        ...inValidData,
        errRequire: "Vui lòng điền thông tin!",
      });
    } else {
      setInValidData({
        ...inValidData,
        errRequire: "",
      });
       login(
        {
          username: dataLogin.username,
          password: dataLogin.password,
        }
      );
    }
  };

  const handleValidUsername = (val :any) => {
     if (!val) {
      setInValidData({
        ...inValidData,
        errusername: "Vui lòng điền số điện thoại hoặc email!",
      });
    } else {
      setInValidData({
        ...inValidData,
        errusername: "",
      });
    }
  };
  const handleValidPassword = (val :any) => {
    if (!val) {
      setInValidData({
        ...inValidData,
        errPassword: "Vui lòng điền mật khẩu",
      });
    } else {
      setInValidData({
        ...inValidData,
        errPassword: "",
      });
    }
  };

	return (
    <Wrapper>
        <h1 className='font-bold text-[15px] text-center'>Đăng nhập</h1>
        <div className='mt-[-5px]'>
            <h4 className='font-bold mb-0'>Số điện thoại hoặc email<span className='text-red-600'>*</span></h4>
            <input type="text" className='mt-[-15px]' placeholder="" 
                maxLength={11}
                onChange={(e : any) => {
                  setDataLogin({
                    ...dataLogin,
                    username: e.target.value,
                  })
                  handleValidUsername(e.target.value);
              }}/>
              {inValidData.errusername ? (
                  <p className='text-red-600 mb-[-15px] text-[10px]' > {inValidData.errusername}</p>
                ) : (
                  ""
              )}
        </div>
      <div>
        <h4 className='font-bold mb-0'>Mật khẩu <span className='text-red-600'>*</span></h4>
        <input type="password" className='mt-[-15px]' 
          value={dataLogin.password}
          onChange={(e : any) => {
            setDataLogin({
              ...dataLogin,
              password:  e.target.value,
          })
          handleValidPassword(e.target.value);
        }}/>
        {inValidData.errPassword ? (
              <p className='text-red-600 mb-[-15px] text-[10px]'> {inValidData.errPassword}</p>
          ) : (
              ""
        )}
      </div>
      {inValidData.errRequire ? (
            <p className='text-red-600 mb-0 mb-[-15px] text-[10px]' > {inValidData.errRequire}</p>
          ) : (
            ""
          )}
      <div className='mt-4'>
        <button className=" bg-sky-700 w-full flex font-semibold h-10 items-center justify-center rounded-md text-white text-sm  fol"
             onClick={() => onSubmitRegister()}
        >
            Đăng nhập
        </button>
      </div>
    </Wrapper>
	 );
}

export default SignIn;

