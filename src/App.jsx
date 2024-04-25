
import './App.css'
import { Background } from './compontent/Background'
import { Forground } from './compontent/Forground'

function App() {


  return (
    <>
      <div className=' relative  w-full h-screen bg-zinc-800 ' >

        <Forground />

        <Background />
      </div>
    </>
  )
}

export default App
