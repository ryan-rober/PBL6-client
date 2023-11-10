import { useState, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { Menu , Dropdown} from 'antd'
import { HomeOutlined } from '@ant-design/icons'
import { items } from "./item";
import {  LOGO_ICON } from '@assets'
import { getLocalStorage, removeLocalStorage, STORAGE } from '@utils'
import { useAuth } from '@hooks'
import { USER_URL } from '@constants'
import { USER_ROLE } from '@constants/auth'
import { Link } from "react-router-dom";
import { FC } from 'react';

const Wrapper = styled.header`
  width: 100%;
  position: fixed;
	padding: 0 15rem;
  padding-top: 0.5rem;
  z-index: 999;
  top: 0;
  display: flex;
  height: 4rem;
  align-items: center;
  border-bottom: 0 solid #f8f9fa;
  box-shadow: 0 1.6rem 3rem rgb(0 0 0 / 10%);
  background-color: ${({ theme }) => theme.white};
  backdrop-filter: blur(0.5rem);
  will-change: backdrop-filter;
  @media screen and (max-width: 1250px){
      padding: 0 5rem;
  }
  @media screen and (max-width: 910px){
    padding: 0;
  }
  .container {
    padding: 0 .75rem;
    width: 100%;
    .row {
      display: flex;
      align-items: center;
      .header-left {
        margin-right: 15rem;
        .search {
          display: flex;
          align-items: center;
          label.cursor-pointer {
            cursor: pointer;
            svg.svg-icon--material {
              font-size: 1.5rem;
              fill: #6c5ed3;
            }
          }
          input.search-input {
            border: none;
            background-color: transparent;
            width: 100%;
            font-weight: 500;
            padding: .3rem .75rem;

            &:focus-visible {
              outline: none;
            }
          }
        }
        .logo {
          width: 150px;
        }
      }
      .header-right {
        flex: 0 0 auto;
        width: auto;
        margin-left: 24rem;
        @media screen and (max-width: 1300px){
            margin-left: 14rem;
          }
          @media screen and (max-width: 1250px){
            margin-left: 18rem;
          }
          @media screen and (max-width: 1000px){
            margin-left: 12rem;
          }
          @media screen and (max-width: 910px){
            margin-left: 10rem;
          }
        .row {
          flex-wrap: wrap;

          .col-auto {
            margin: .5rem;
            button {
              cursor: pointer;
            }
          }

          .btn-action {
            padding: .625rem;
            width: calc(28px + 1.25rem);
            height: calc(28px + 1.25rem);
            background-color: transparent;
            border: none;
            border-radius: 1.25rem;
            &:hover, &:active {
              background-color: #e7eef8;
              border-color: #e7eef8;
            }
          }

          .user-info {
            cursor: pointer;
            display: flex;
            align-items: center;

            .text-end {
              text-align: end;
              margin-right: .7rem;
              .name {
                font-weight: 600;
                font-size: .75rem;
                color: #808191;
              }

              .title {
                font-weight: 300;
                font-size: .75rem;
                color: #6c757d;
              }
            }

            .avatar {
              background-color: #fff3d4;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }

`
interface Prop{
  setIsShow: any; 
}
const Header:FC<Prop> = ({setIsShow}) => {
  const { profile } = useAuth()
  const role = profile?.role
  
  const [list, setList] = useState(items);
  const token =  getLocalStorage(STORAGE?.USER_TOKEN)?.length ;
  const [isLoggedIn, setisLoggedIN] = useState(false)
  const username = token ? (JSON?.parse(getLocalStorage(STORAGE?.PROFILE_USER) || '{}')).name : null;

  useEffect(() => {
     if (token){
         setisLoggedIN(true)
     }
  },[token])

  const handleLogout = useCallback(() => {
    removeLocalStorage(STORAGE.USER_TOKEN)
    removeLocalStorage(STORAGE.USER_DATA)
    window.location.replace('./')
  }, [])

  const dropdownMenu = (
    <Menu>
      {role === USER_ROLE.COMPANY_ADMIN && (
      <>
        <Menu.Item key="0" onClick={() => window.location.replace(USER_URL)}>
          <HomeOutlined />
          <span>&nbsp;User page</span>
        </Menu.Item>
        <Menu.Divider />
      </>
      )}
      <Menu.Item key="1" >
        <img src='https://storage.googleapis.com/fe-production/images/Auth/account-circle.svg' alt=''/>
        <Link to="./profile">
          <span>&nbsp;Thông tin tài khoản</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="2" onClick={handleLogout}>
      <img src='https://storage.googleapis.com/fe-production/images/Auth/logout.svg'   alt=''/>
        <span>&nbsp;Đăng xuất</span>
      </Menu.Item>
    </Menu>
  )

  return (
    <Wrapper className='main'>
      <div className="container">
        <div className="row">
          <div className="header-left absolute">
             <img src={LOGO_ICON} className="h-16 mb-2" alt='' />
          </div>
          <div className="header-right absolute">
            <div className="row g-3">
              {/* <NavList isCenter={true} items={list} event={handleClick} /> */}
              <div >
                <ul className='flex mb-0'>
									{list?.map((item: any, index: any) =>(
										<li
											className={`dark:text-slate-400 mr-10 text-base }`}                     
											key={index}
										>
                        <Link
                          className="transition-all text-black"
                          to={item.path}
                        >
                          {item.name}
                        </Link>
                     
										</li>
                    ))}
								</ul>
              </div>
              <div className="col user-info" role="presentation">
                <button className="bg-sky-700 w-full flex font-semibold h-8 items-center justify-center  px-3 rounded-md text-white text-sm  fol">
                  <img src="https://storage.googleapis.com/fe-production/images/Auth/account-circle-fill.svg" alt=''/>
                   {isLoggedIn ? 
                   <>
                        <Dropdown overlay={dropdownMenu} trigger={['click']}>
                          <a href="true" className="ant-dropdown-link" style={{ display: 'flex', alignItems: 'center' }} onClick={(e) => e.preventDefault()}>
                            <div className="me-3">
                              <div className="text-end">
                                <div className="text-white ml-2">{ username || 'Hiiii'}</div>
                              </div>
                            </div>
                          </a>
                        </Dropdown>
                       <img className='w-[14px] ml-1' src="https://icon-library.com/images/arrow-down-icon-png/arrow-down-icon-png-3.jpg" alt='' />
                   </>
                   :
                   <>
                      <span className='mx-2' onClick={() => setIsShow(true)} >Đăng nhập</span> 
                   </> }
                  
                </button>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Header
