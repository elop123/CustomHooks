import { useFetch } from './components/Hook.jsx'
import {useImages} from './components/useImages.jsx'
import s from './Style/useImage.module.scss'

import './App.css'

export default function App() {
  
const {data} = useFetch(`https://jsonplaceholder.typicode.com/todos/1`);
const {images} = useImages();

console.log('I got some data', data)

  return (
    <>
      <div>
      {data &&(
        <>
        <p>{data.id}</p>
          <p>{data.UserId}</p>
          <p>{data.title}</p>
        </>
          
      )}
      </div>
       <div>
        {images.map((image, index)=>(
          <img key={index}  className={s.imageStyle} src={image} alt={`Image ${index}`}  />
        ))}
      </div> 
    </>
    
  );
}


