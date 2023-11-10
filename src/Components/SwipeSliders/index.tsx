import './style.css'
import Slider from 'react-slick'
import SlickButtonNav from './CustormNavArrow/SlickButtonNav';

const SwipeSliders = ( props: {
	children:
		| boolean
		| React.ReactChild
		| React.ReactFragment
		| React.ReactPortal
		| null
		| undefined;
    responsive:any,
    numberOfSlideShow:number,
    }, ) => {

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: props.numberOfSlideShow,
        slidesToScroll: 1,
        swipe:true,
        swipeToSlide: true,
        arrows: true,
        nextArrow: (
            <SlickButtonNav>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 absolute rounded-full bg-white dark:bg-[#333] dark:text-[#f1f1f1] shadow-md text-[#777] z-10 top-[50%] right-[-8px] translate-y-[-50%] hover:cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
            </SlickButtonNav>
          ),
        prevArrow: (
            <SlickButtonNav>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 absolute rounded-full bg-white dark:bg-[#333] dark:text-[#f1f1f1] shadow-md text-[#777] z-10 top-[50%] left-[-3px] translate-y-[-50%] hover:cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            </SlickButtonNav>
        ),
        responsive : [...props.responsive]
    };

    return (
        <div className='wrapper-overide-css'>
            <Slider {...settings} >
                {props.children}
            </Slider>
        </div>
    )
}

export default SwipeSliders