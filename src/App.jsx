import { useState } from 'react'

import './App.css'
import { useFetch } from './custom-hooks/useFetch'

function App() {
  const [id,setId] = useState(1);
  
  const {data,loading,error} = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`,2);
  // console.log(data);
  return (
    <>
      {error && <div>error</div>}
      {loading? <div>Loading...</div>:JSON.stringify(data.title)}
     <button onClick={() => setId(1)}>1</button>
     <button onClick={() => setId(2)}>2</button>
     <button onClick={() => setId(3)}>3</button>
     
    </>
  )
}

export default App
