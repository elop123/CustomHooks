import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { ThemeContext } from './context/ThemeContext';

//import files dynamically from a directory
const image = import.meta.glob('../../public/images/*.{jpg,png,svg}');

export function useImages() {
    const [images, setImages] = useState([]);

    const {isDarkMode, handleChangeDarkMode} =useContext(ThemeContext)
    console.log('isDark', isDarkMode);
    
  

    useEffect(() => {
    //Convert the object keys to an array of paths/get the array of file paths
    const imagePaths = Object.keys(image);
    setImages(imagePaths);
    }, []);



    return {images};
}

