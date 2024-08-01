import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import FormLogin from './Form/FormLogin'
import RegisterForm from './Form/RegisterForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <FormLogin/> */}
      <RegisterForm/>
    </div>
  )
}

export default App
