import React from 'react'
import Container from '../components/atoms/containers/Container';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import SectionHeader from '../components/molecules/SectionHeader';
import { fullGallery } from '../constants/Galleries';




const Gallery = () => {
    const array = fullGallery;
    const images = array.map(function(value){
        return {
            original: value,
            thumbnail: value,
        }
    });

    return (
        <Container>
            <SectionHeader title="Galeria moich prac"/>
            <ImageGallery items ={images}/>
        </Container>
    )
}

export default Gallery
