import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader


const ServicePhotoGallery = ({servicePhoto}) => {
    const imagesList = servicePhoto;
    return (

        <Carousel fade style={{marginTop:`${window.screen.width> "700"? "40px":"10px"}`}}>
        {imagesList.map((item, index) => (
            <Carousel.Item
            
                style={{
                    height:`${window.screen.width> "700"? "40vh":"250px"}`,
                    backgroundImage: `url(${item})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                 
                }}
                foto={item}
                key={index}
            />
        ))}
    </Carousel>

            
       
    )
}

export default ServicePhotoGallery
