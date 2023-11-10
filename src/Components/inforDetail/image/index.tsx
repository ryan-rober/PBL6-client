import styled from 'styled-components'
// @ts-ignore
import { Carousel } from 'react-carousel-minimal';
const Wrapper = styled.div`

`

const Image = () => {
  const data = [
    {
      image: "https://static.vexere.com/production/images/1640227454853.jpeg"
    },
    {
      image: "https://static.vexere.com/production/images/1640227397015.jpeg"
    },
    {
      image: "https://static.vexere.com/production/images/1640227366443.jpeg"
    },
    {
      image: "https://static.vexere.com/production/images/1640171795821.jpeg"
    },
    {
      image: "	https://static.vexere.com/production/images/1640228176991.jpeg"
    },
    {
      image: "https://static.vexere.com/production/images/1640228182365.jpeg"
    },
    {
      image: "https://static.vexere.com/production/images/1640228197573.jpeg"
    },
    {
      image: "https://static.vexere.com/production/images/1640228202337.jpeg"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <Wrapper>
      <div className="">
      <div style={{ textAlign: "center"}} className='mt-[-22px]'>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="550px"
            height="350px"
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
      </div>
    </Wrapper>
  )
}

export default Image
