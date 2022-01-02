import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Carousel from 'react-bootstrap/Carousel';
import "../../../text.css"


const Slider = ({imagesList}) => {


    return (
	
		<Carousel fade style={{marginTop:"40px"}}>
			{imagesList.map((item, index) => (
				<Carousel.Item
				
					style={{
						height:`${window.screen.width> "700"? "80vh":"300px"}`,
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
