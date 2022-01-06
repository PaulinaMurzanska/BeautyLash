import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Carousel from 'react-bootstrap/Carousel';


const Slider = ({imagesList}) => {



    return (
	
		<Carousel fade style={{marginTop:`${window.screen.width> "700"? "40px":"10px"}`}}>
			{imagesList.map((item, index) => (
				<Carousel.Item
				
					style={{
						height:`${window.screen.width> "700"? "50vh":"300px"}`,
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
