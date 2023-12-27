import React from "react";

const paymentCancel = () => {
	return (
		<div className="bg-white h-screen mt-20">
			<div className="bg-white p-6  md:mx-auto">
				<svg
					viewBox="0 0 24 24"
					className="text-red-600 w-16 h-16 mx-auto my-6"
				>
					<path
						fill="currentColor"
						d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
					></path>
				</svg>

				<div className="text-center">
					<h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
						Hủy thanh toán thành công!
					</h3>
					<p className="text-gray-600 my-2">
						Cảm ơn bạn đã hoàn tất thanh toán trực tuyến.
					</p>
					{/* <p> Have a great day!  </p> */}
					<div className="py-10 text-center">
						<a
							href="/"
							className="px-12 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3"
						>
							TRANG CHỦ
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default paymentCancel;
