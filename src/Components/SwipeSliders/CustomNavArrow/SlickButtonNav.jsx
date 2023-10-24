/* eslint-disable no-unused-vars */
const SlickButtonNav = ({ currentSlide, slideCount, children, ...props }) => (
    <span {...props} className='wrapper-override-fix-button'>{children}</span>
);

export default SlickButtonNav ;