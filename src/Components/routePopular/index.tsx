
import styled from 'styled-components'
import SwipeSliders from "@components/SwipeSliders";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { item } from "./item";
const responsiveGroup = [
	{
		breakpoint: 1024,
		settings: {
			slidesToShow: 4,
		},
	},
	{
		breakpoint: 768,
		settings: {
			slidesToShow: 3,
		},
	},
	{
		breakpoint: 600,
		settings: {
			slidesToShow: 1,
		},
	},
	{
		breakpoint: 414,
		settings: {
			slidesToShow: 1,
		},
	},
	{
		breakpoint: 375,
		settings: {
			slidesToShow: 1,
		},
	},
];
const Wrapper = styled.header`
	.wid{
		width: 98% !important;
	}
`
const RoutePopular = () => {

  return (
    <Wrapper className='w-3/5 m-auto mt-10'>
      <div>
	  <h1 className='text-lg' >Tuyến đường phổ biến </h1>
			<div className="flex flex-col py-[5px] justify-center">	
				<SwipeSliders
					responsive={responsiveGroup}
					numberOfSlideShow={4}
				>
				{item?.map((item, index) => (
				<div className="m-2 shadow-md rounded-lg dark:bg-slate-800 wid" key={index}>
					<div className="w-full rounded-lg shadow-sm " >
						<a
							href="#"
							className="w-full h-36 overflow-hidden rounded-t-lg relative block"
						>
							<img
								src={item.url}
								alt=""
								className="w-full h-full absolute inset-0 object-cover"
							/>
						</a>
						<div className="p-3 bg-sky-900 rounded-b-lg text-[#666] dark:text-[#f1f1f1]">
							<p className="block text-base font-semibold text-current line-clamp-1 mb-1">
								{item.route}
							</p>
							<div className="flex items-center justify-between pb-4">
								<p className="text-[11px] flex-1 line-clamp-2 mb-0 ">
									<a href="#" className="text-[15px] text-white">
										{item.price}
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
				))}
				</SwipeSliders>
			</div>				
		</div>
    </Wrapper>
  )
}

export default RoutePopular
