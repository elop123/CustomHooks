import { useFetch } from './components/Hook.jsx'
import {Picture} from './components/Picture.jsx'

import './App.css'

function App() {
  
const {data} = useFetch(`https://jsonplaceholder.typicode.com/todos/1`)

console.log('I got some data', data)
  return (
    <div>
      
      {data &&(
        <>
          <p>{data.id}</p>
          <p>{data.UserId}</p>
          <p>{data.title}</p>
          <Picture />
        </>
      )}
     
    </div>
    
  );
}

export default App
