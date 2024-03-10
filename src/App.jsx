import { useState } from 'react'
import './App.css'
import ImageComponent from './ImageComponent'
import PostComponent from './PostComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ImageComponent/>
      <PostComponent />
    </>
  )
}

export default App
