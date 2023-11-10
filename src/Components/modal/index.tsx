
import { FunctionComponent , useState} from 'react'
import SignIn from './signin'
import SignUp from './signup'
import styled from 'styled-components'
const Wrapper = styled.div`
	.modal{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 4px;
		  border-radius: 10px;
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

interface ModalSignInProps {
	event: any;
}

const ModalSignIn: FunctionComponent<ModalSignInProps> = ({event}) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [step, setStep] = useState('INPUT_PHONE_NUMBER');

	return (
    <Wrapper>
		<div className="block items-center fixed z-[999] bg-[rgba(0,0,0,.45)] w-full h-full top-0 left-0">
			<div className="block ml-[30%] mt-[10%] p-2 items-center leading-[42px] top-0 left-0 pb-8 w-2/5 modal bg-white">
       {step !== 'VERIFY_OTP' &&
					<img src='https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/close-icon.png' className='w-[15px] cursor-pointer ml-[97%]' alt=''onClick={event}/>
       }
      <div className='block mx-4'>
          {!isSignUp ? 
          <> <SignIn /></> 
          : <> <SignUp step={step} setStep ={setStep}/> </>}
          {step !== 'VERIFY_OTP' ? 
          <>
              <p className='mt-2'>Bạn chưa có tài khoản ? 
              <a onClick={()=> setIsSignUp(!isSignUp)}>
              {!isSignUp ? 
                <> Đăng ký</>
                :
                <> Đăng nhập
                </>} </a>
            </p>
          </> 
          : <></>}
      </div> 
      </div>
		</div>
    </Wrapper>
	 );
}

export default ModalSignIn;

