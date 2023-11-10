
import styled from 'styled-components'
import { item } from "./item";

const Wrapper = styled.header`
	.wid-4{
		width: 20rem !important;
	}
	.scroll{
	 overflow: auto !important;
	}
`
const OutstandingOffer = () => {

  return (
    <Wrapper className='w-3/5 m-auto mt-10'>
      <div>
	  <h1 className='text-lg' >Ưu đãi nổi bật </h1>
			<div className="flex py-[5px] justify-center scroll" >	

				{item?.map((item, index) => (
				<div className="m-2 shadow-md rounded-lg " style={{ marginLeft : item.style }} key={index}>
					<div className=" rounded-lg shadow-sm wid-4" >
						<a
							href=''
							className=" h-36 overflow-hidden rounded-t-lg relative block"
						>
							<img
								src={item.url}
								alt=""
								className="w-full h-full absolute inset-0 object-cover"
							/>
						</a>
						<div className="p-3 bg-white rounded-b-lg text-black">
							<p className="block text-base font-semibold text-current line-clamp-1 mb-1 ">
								{item.title}
							</p>
						</div>
					</div>
				</div>
				))}
			</div>				
		</div>
    </Wrapper>
  )
}

export default OutstandingOffer
