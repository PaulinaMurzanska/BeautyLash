import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Carousel from 'react-bootstrap/Carousel';
import "../../../text.css"

const Slider = ({imagesList}) => {


    return (
		<Carousel fade>
			{imagesList.map((item, index) => (
				<Carousel.Item
				
					style={{
						height:'100vh',
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

export default Slider
