import { FunctionComponent, useState, useEffect } from "react";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import styled from "styled-components";
import { register, updateProfile } from "@apis";
import DatePicker from "react-datepicker";
import { firebase, auth } from "./firebase";
import { getLocalStorage, STORAGE } from "@utils";

const Wrapper = styled.div`
	input {
		width: 100%;
		height: 40px;
		padding: 5px 10px;
		border-radius: 5px;
		border: 1px solid rgb(217, 217, 217);
		&:focus {
			box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
		}
	}
	input[type="text"]:focus {
		outline: none !important;
	}
	input[type="password"]:focus {
		outline: none !important;
	}
	button:hover {
		background-color: #3786a5;
	}
`;

interface SignUpProps {
	step: any;
	setStep: any;
}

const SignUp: FunctionComponent<SignUpProps> = ({ step, setStep }) => {
	const [isErrCode, setIsErrCode] = React.useState(false);
	const [info, setInfo] = useState({
		name: "",
		phone: "",
		email: "",
		address: "",
		wards: "",
		city: "",
		country: "",
	});

	const [dataRegister, setDataRegister] = useState({
		phoneNumber: "",
		password: "",
		re_password: "",
	});

	const [inValidData, setInValidData] = useState({
		errPhoneNumber: "",
		errPassword: "",
		errRe_password: "",
		errRequire: "",
	});

	const [inValidInfor, setInValidInfor] = useState({
		errName: "",
		errEmail: "",
		errAddress: "",
		errRequire: "",
	});

	useEffect(() => {
		if (
			dataRegister.phoneNumber &&
			dataRegister.password &&
			dataRegister.re_password
		) {
			setInValidData({
				...inValidData,
				errRequire: "",
			});
		}
	}, [
		dataRegister.password,
		dataRegister.phoneNumber,
		dataRegister.re_password,
	]);

	const onSubmitRegister = () => {
		if (
			!dataRegister.password ||
			!dataRegister.phoneNumber ||
			!dataRegister.re_password
		) {
			setInValidData({
				...inValidData,
				errRequire: "Bạn chưa điền thông tin!!",
			});
		} else {
			setInValidData({
				...inValidData,
				errRequire: "",
			});
			if (
				!inValidData.errPhoneNumber &&
				!inValidData.errPassword &&
				!inValidData.errRe_password
			) {
				sendCode();
			}
		}
	};

	const handleValidPhoneNumber = (val: any) => {
		if (val.length > 11) {
			setInValidData({
				...inValidData,
				errPhoneNumber: "Số điện thoại không quá 11 số!",
			});
		} else if (!val) {
			setInValidData({
				...inValidData,
				errPhoneNumber: "Vui lòng điền số điện thoại!",
			});
		} else {
			setInValidData({
				...inValidData,
				errPhoneNumber: "",
			});
		}
	};
	const handleValidEmail = (val: any) => {
		if (!val) {
			setInValidInfor({
				...inValidInfor,
				errEmail: "Vui lòng điền email!",
			});
		} else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)) {
			setInValidInfor({
				...inValidInfor,
				errEmail: "Vui lòng điền email hợp lệ!",
			});
		} else {
			setInValidInfor({
				...inValidInfor,
				errEmail: "",
			});
		}
	};
	const handleValidPassword = (val: any) => {
		if (!val) {
			setInValidData({
				...inValidData,
				errPassword: "Vui lòng điền mật khẩu",
			});
		} else if (val.length < 8) {
			setInValidData({
				...inValidData,
				errPassword: "Mật khẩu phải lớn hơn hoặc bằng 8 kí tự",
			});
		} else {
			setInValidData({
				...inValidData,
				errPassword: "",
			});
		}
	};
	const handleValidRePassword = (val: any) => {
		if (!val) {
			setInValidData({
				...inValidData,
				errRe_password: "Vui lòng điền lại mật khấu!",
			});
		} else if (val !== dataRegister.password) {
			setInValidData({
				...inValidData,
				errRe_password: "Vui lòng điền trùng với mật khẩu phía trên !",
			});
		} else {
			setInValidData({
				...inValidData,
				errRe_password: "",
			});
		}
	};

	const handleValidName = (val: any) => {
		if (!val) {
			setInValidInfor({
				...inValidInfor,
				errName: "Vui lòng điền tên !",
			});
		} else {
			setInValidInfor({
				...inValidInfor,
				errName: "",
			});
		}
	};
	// const handleValidBirthday = (val: any) => {
	// 	if (!val) {
	// 		setInValidInfor({
	// 			...inValidInfor,
	// 			errBirthday: "Vui lòng điền ngày sinh !",
	// 		});
	// 	} else {
	// 		setInValidInfor({
	// 			...inValidInfor,
	// 			errBirthday: "",
	// 		});
	// 	}
	// };
	const handleValidAddress = (val: any) => {
		if (!val) {
			setInValidInfor({
				...inValidInfor,
				errAddress: "Vui lòng điền địa chỉ thường trú !",
			});
		} else {
			setInValidInfor({
				...inValidInfor,
				errAddress: "",
			});
		}
	};

	const [mynumber, setnumber] = useState("");
	const [otp, setOtp] = useState("");
	const [verificationId, setVerificationId] = useState<any>(null);

	const sendCode = () => {
		register({
			username: dataRegister.phoneNumber,
			password: dataRegister.password,
			role: "1",
		}).then(() => {
			if (getLocalStorage(STORAGE.USER_TOKEN)?.length) {
				if (mynumber === "") return;

				var handlePhone = "";
				if (mynumber.length === 10) {
					handlePhone = "+84" + mynumber.slice(1, mynumber.length);
				} else {
					handlePhone = "+84" + mynumber;
				}

				let verify = new firebase.auth.RecaptchaVerifier(
					"recaptcha-container",
					{
						size: "invisible",
					}
				);
				console.log(handlePhone);
				auth.signInWithPhoneNumber(handlePhone, verify)
					.then((result) => {
						console.log(result);
						setVerificationId(result.verificationId);
						setStep("VERIFY_OTP");
						verify.clear();
					})
					.catch((err) => {
						alert(err);
					});
			}
		});
	};

	const ValidateOtp = () => {
		if (otp === null) return;
		const credential = firebase.auth.PhoneAuthProvider.credential(
			verificationId,
			otp
		);
		auth.signInWithCredential(credential)
			.then(() => {
				// setStep("VERIFY_SUCCESS");
        window.location.reload();
			})
			.catch((err) => {
				setIsErrCode(true);
			});
	};

	const onSubmitInfo = () => {
		updateProfile(info);
	};

	return (
		<Wrapper>
			{step === "INPUT_PHONE_NUMBER" && (
				<div>
					<h1 className="font-bold text-[15px] text-center">
						Đăng ký
					</h1>
					<>
						<div className="mt-[-5px]">
							<h4 className="font-bold mb-0">
								Số điện thoại
								<span className="text-red-600">*</span>
							</h4>
							<input
								type="text"
								className="mt-[-15px]"
								placeholder=""
								maxLength={11}
								value={mynumber}
								onChange={(e: any) => {
									setDataRegister({
										...dataRegister,
										phoneNumber: e.target.value,
									});
									setInfo({
										...info,
										phone: e.target.value,
									});
									setnumber(e.target.value);
									handleValidPhoneNumber(e.target.value);
								}}
							/>
							{inValidData.errPhoneNumber ? (
								<p className="text-red-600 mb-[-15px] text-[10px]">
									{" "}
									{inValidData.errPhoneNumber}
								</p>
							) : (
								""
							)}
						</div>
					</>
					<div>
						<h4 className="font-bold mb-0">
							Mật khẩu <span className="text-red-600">*</span>
						</h4>
						<input
							type="password"
							className="mt-[-15px]"
							value={dataRegister.password}
							onChange={(e: any) => {
								setDataRegister({
									...dataRegister,
									password: e.target.value,
								});
								handleValidPassword(e.target.value);
							}}
						/>
						{inValidData.errPassword ? (
							<p className="text-red-600 mb-[-15px] text-[10px]">
								{" "}
								{inValidData.errPassword}
							</p>
						) : (
							""
						)}
					</div>
					<div>
						<h4 className="font-bold mb-0">
							Nhập lại mật khẩu
							<span className="text-red-600">*</span>
						</h4>
						<input
							type="password"
							className="mt-[-15px]"
							value={dataRegister.re_password}
							onChange={(e: any) => {
								setDataRegister({
									...dataRegister,
									re_password: e.target.value,
								});
								handleValidRePassword(e.target.value);
							}}
						/>
						{inValidData.errRe_password ? (
							<p className="text-red-600 mb-[-15px] text-[10px]">
								{" "}
								{inValidData.errRe_password}
							</p>
						) : (
							""
						)}
						{inValidData.errRequire ? (
							<p className="text-red-600 mb-0 mb-[-15px] text-[10px]">
								{" "}
								{inValidData.errRequire}
							</p>
						) : (
							""
						)}
					</div>
					<div id="recaptcha-container"></div>
					<div className="mt-4">
						<button
							className=" bg-sky-700 w-full flex font-semibold h-10 items-center justify-center rounded-md text-white text-sm  fol"
							onClick={() => {
								onSubmitRegister();
							}}
						>
							Tiếp tục
						</button>
					</div>
				</div>
			)}
			{step === "VERIFY_OTP" && (
				<div className="mt-4">
					<h1 className="font-bold text-[15px] text-center">
						Nhập mã xác thực
					</h1>
					<div className="mt-[-25px]">
						<h4 className="font-bold mb-0">
							Nhập mã xác nhận vừa gửi đến sđt{" "}
						</h4>
						<input
							type="text"
							className="mt-[-15px]"
							placeholder="Nhập mã OTP"
							onChange={(e) => {
								setOtp(e.target.value);
							}}
						/>
						{isErrCode && (
							<p className="text-red-600 mb-0 mb-[-15px] text-[10px]">
								Mã code chưa chính xác !
							</p>
						)}
					</div>
					<a onClick={() => sendCode()}>Gửi lại mã xác thực</a>
					<button
						className=" bg-sky-700 w-full flex font-semibold h-10 items-center justify-center rounded-md text-white text-sm  fol"
						onClick={() => ValidateOtp()}
					>
						Tiếp tục
					</button>
				</div>
			)}
			{step === "VERIFY_SUCCESS" && (
				<div>
					<div className="mt-[-5px]">
						<h4 className="font-bold mb-0">
							Họ và tên <span className="text-red-600">*</span>
						</h4>
						<input
							type="text"
							className="mt-[-15px]"
							placeholder=""
							value={info.name}
							onChange={(e: any) => {
								setInfo({
									...info,
									name: e.target.value,
								});
								handleValidName(e.target.value);
							}}
						/>
						{inValidInfor.errName ? (
							<p className="text-red-600 mb-0 mb-[-15px] text-[10px]">
								{" "}
								{inValidInfor.errName}
							</p>
						) : (
							""
						)}
					</div>
					<div>
						<h4 className="font-bold mb-0">
							Email<span className="text-red-600">*</span>
						</h4>
						<input
							type="text"
							className="mt-[-15px]"
							placeholder=""
							value={info.email}
							onChange={(e: any) => {
								setInfo({
									...info,
									email: e.target.value,
								});
								handleValidEmail(e.target.value);
							}}
						/>
						{inValidInfor.errEmail ? (
							<p className="text-red-600 mb-[-15px] text-[10px]">
								{" "}
								{inValidInfor.errEmail}
							</p>
						) : (
							""
						)}
					</div>
					<div>
						<h4 className="font-bold mb-0">
							Địa chỉ<span className="text-red-600">*</span>
						</h4>
						<input
							type="text"
							className="mt-[-15px]"
							value={info.address}
							onChange={(e: any) => {
								setInfo({
									...info,
									address: e.target.value,
								});
								handleValidAddress(e.target.value);
							}}
						/>
						{inValidInfor.errAddress ? (
							<p className="text-red-600 mb-0 mb-[-15px] text-[10px]">
								{" "}
								{inValidInfor.errAddress}
							</p>
						) : (
							""
						)}
					</div>
					<div className="mt-4">
						<button
							className=" bg-sky-700 w-full flex font-semibold h-10 items-center justify-center rounded-md text-white text-sm  fol"
							onClick={onSubmitInfo}
						>
							Tiếp tục
						</button>
					</div>
				</div>
			)}
		</Wrapper>
	);
};

export default SignUp;
