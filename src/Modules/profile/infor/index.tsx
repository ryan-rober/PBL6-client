import styled from 'styled-components'
import { useState , useEffect} from "react";
import {getProfile , updateProfile, getListLocation} from '@apis'
import Select from "react-select";
const Wrapper = styled.div`
  width: 97%;
  margin:1rem 0;
  margin-left: -2rem;
  padding-bottom: 0.05rem;
  .title{
    padding: 8px 12px;
    border-radius: 4px;
    background-color: rgb(236, 244, 253);
    color: rgb(14, 99, 193);;
  }
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
  .line{
      margin:1.2rem 0;
      border-bottom: 1px solid rgb(192, 192, 192);
    }
   .active_gender {
   position: relative;
   color: white;
   background: #1890ff;
   }
   .bt_save:hover{
     background: #4fa0ec;
   }
   .css-g1d714-ValueContainer{
    padding : 0px;
  }
  .css-1pahdxg-control{
    box-shadow: none !important;
    border-color: white !important;
    padding : 0px !important;
    margin-left: 10px !important;
  }
`      
   const Infor = () => {
 
    const [data, setData] = useState<any>([])
    const [edit, setEdit] = useState(false)
    const [listLocation, setListLocation] = useState([]);
    useEffect(() => {
      getProfile(setData)
      getListLocation(setListLocation);
    },[setData])

    const [dataInfor, setDataInfor] = useState({
      address : '',
      city : '',
      country: '',
      email : '',
      name: '',
      phone: '', 
      wards : '',  
    });
    const [city, setCity] = useState('')

    useEffect(() => {
      setDataInfor({
        address : data.address,
        city : data.city,
        country: data.country,
        email : data.email,
        name: data.name,
        phone: data.phone, 
        wards : data.wards, 
      })
    },[data])

    const handleSave = () =>{
      updateProfile(dataInfor)
    }

    const updatedCountries = listLocation.map((country :any) => ({
      label: country.nameStation,
      value: country.id,
    }));

    console.log(dataInfor.city)
  return (
    <Wrapper>
      <div className='w-[100%] mb-2 block'>
         <div className='title w-[72%]'>Bổ sung đầy đủ thông tin sẽ giúp chúng tôi hỗ trợ bạn tốt hơn khi đặt vé</div>
         {!edit ? 
         <>
            <div className='mt-4'>
           <p >Họ và tên*</p>
           <input type="text" className='mt-[-15px]' 
             value={data.name}
           />
            </div>
            <div className='mt-4'>
              <p >Số điện thoại</p>
              <input type="text" className='mt-[-15px]' 
                  maxLength={11} 
                  value={data.phone}
                />
            </div>
            <div className='mt-4'>
              <p >Email</p>
              <input type="text" className='mt-[-15px]'
                defaultValue={data.email} 
                value={data.email}
              />
            </div>
            <div className='mt-4'>
              <p >Quốc gia</p>
              <input type="text" className='mt-[-15px]'
                value={data.country}
              />
            </div>
            <div className='mt-4'>
              <p >Thành phố</p>
              <input type="text" className='mt-[-15px]' 
                value={data.city}
              />
            </div>
            <div className='mt-4'>
              <p >Phường</p>
              <input type="text" className='mt-[-15px]' 
                value={data.wards}
              />
            </div>
            <div className='mt-4'>
              <p >Địa chỉ</p>
              <input type="text" className='mt-[-15px]' 
                value={dataInfor.address}
              />
            </div>
         </> 
         : 
         <>
            <div className='mt-4'>
              <p >Họ và tên*</p>
              <input type="text" className='mt-[-15px]' 
                value={dataInfor.name}
                onChange={(e : any) => {
                  setDataInfor({
                    ...dataInfor,
                    name : e.target.value,
                  })
                }}
              />
            </div>
            <div className='mt-4'>
              <p >Số điện thoại</p>
              <input type="text" className='mt-[-15px]' 
                  maxLength={11} 
                  value={dataInfor.phone.replace(/\D/,'')}
                  onChange={(e : any) => {
                    setDataInfor({
                      ...dataInfor,
                      phone : e.target.value,
                    })
                  }}
                />
            </div>
            <div className='mt-4'>
              <p >Email</p>
              <input type="text" className='mt-[-15px]'
                defaultValue={dataInfor.email} 
                value={dataInfor.email}
                onChange={(e : any) => {
                  setDataInfor({
                    ...dataInfor,
                    email : e.target.value,
                  })
                }}
              />
            </div>
            <div className='mt-4'>
              <p >Quốc gia</p>
              <input type="text" className='mt-[-15px]'
                value={dataInfor.country}
                onChange={(e : any) => {
                  setDataInfor({
                    ...dataInfor,
                    country : e.target.value,
                  })
                }}
              />
            </div>
            <div className='mt-4'>
              <p >Thành phố</p>
              <Select
                  id="country"
                  name="country"
                  label="country"
                  className='w-1/2 pr-2 mb-5'
                  placeholder='Chọn thành phố'
                  options={updatedCountries}
                  value={city}
                  onChange={(e :any) => {
                    setDataInfor({
                      ...dataInfor,
                      city : e.label,
                    })
                    setCity(e.label)
                  }}
                />
              <input type="text" className='mt-[-15px]' 
                value={dataInfor.city}
                onChange={(e : any) => {
                  setDataInfor({
                    ...dataInfor,
                    city : e.target.value,
                  })
                }}
              />
            </div>
            <div className='mt-4'>
              <p >Phường</p>
              <input type="text" className='mt-[-15px]' 
                value={dataInfor.wards}
                onChange={(e : any) => {
                  setDataInfor({
                    ...dataInfor,
                    wards : e.target.value,
                  })
                }}
              />
            </div>
            <div className='mt-4'>
              <p >Địa chỉ</p>
              <input type="text" className='mt-[-15px]' 
                value={dataInfor.address}
                onChange={(e : any) => {
                  setDataInfor({
                    ...dataInfor,
                    address : e.target.value,
                  })
                }}
              />
            </div>
         </>
         }
        {!edit ?
         <>
           <button className='mt-4 w-full text-center border-slate-300 border rounded-md bg-[#1890ff] p-2 text-white bt_save'
           onClick={() => setEdit(true)}
           >Edit</button>
         </>
         :
         <>
          <button className='mt-4 w-full text-center border-slate-300 border rounded-md bg-[#1890ff] p-2 text-white bt_save'
              onClick={() => handleSave()}
            >Save</button>
        </>}
      </div>
    </Wrapper>
  )
}

export default Infor
