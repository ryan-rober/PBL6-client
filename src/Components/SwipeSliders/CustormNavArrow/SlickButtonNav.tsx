const SlickButtonNav = ({ currentSlide, slideCount, children, ...props }:any) => (
    <span {...props} className='wrapper-override-fix-button'>{children}</span>
);

export default SlickButtonNav ;