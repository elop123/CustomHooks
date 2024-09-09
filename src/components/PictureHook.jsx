import { useState, useEffect } from 'react';



export function usePicture() {
    const [images, setImages] = useState([]);
    const img = [{image:'../../public/images/cat1.jpg'}]

    useEffect(() => {
        setImages(img);
    }, []);

    return { images };
}