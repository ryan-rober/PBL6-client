/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { item, item_ht } from "./item";

const Wrapper = styled.footer`
  padding: .25rem 0.75rem;
  border-top: 1px solid #e0e0e0;
  bottom: 0;
  display: flex;
  align-items: center;
  backdrop-filter: blur(0.5rem);
  will-change: backdrop-filter;
  color: #323232;
  .container {
    width: 100%;
    .row {
      display: flex;
      flex-wrap: wrap;
      .col {
        flex: 1 0;
        .copyright {
          font-weight: 300;
          font-size: .75rem;
        }
      }
      .col-auto {
        flex: 0 0 auto;
        width: auto;
      }
    }
  }
`

const Footer = () => {
  return (
    <Wrapper>
      <div className="container mt-10 ml-28">
        <div className="row w-3/5 m-auto">
          <div className="mr-40">
            <h1 className='text-lg font-bold'>Về chúng tôi</h1>
            <ul className='block'>
              {item?.map((item, index) => (
                <li className='mt-2' key={index}>
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
          <div className="mr-40">
            <h1 className='text-lg font-bold'>Hỗ trợ</h1>
            <ul className='block'>
              {item_ht?.map((item_ht, index) => (
                <li className='mt-2' key={index}>
                  <a href={item_ht.url } className="text-black">
													{item_ht.name}
										</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
             <h1 className='text-lg font-bold'>Tải ứng dụng</h1>
             <a href=''>
                <img src="https://storage.googleapis.com/fe-production/images/landingpagetet2018/AP-icon.png?v=2" className='w-40'/>
             </a>
             <a href='' >
                <img src="https://storage.googleapis.com/fe-production/images/landingpagetet2018/GP-icon.png?v=2" className='w-40 mt-2'/>
             </a>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Footer
