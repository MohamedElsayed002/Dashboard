
import {Routes , Route} from 'react-router-dom'
import { SharedLayout , LandingPage , Login , Register , Error } from './pages'
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <>
      <Routes>
      <Route path="/landing" element={<LandingPage/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>} />
      <Route path="/" element={<SharedLayout/>}>

      </Route>
      <Route path="*" element={<Error/>} />
    </Routes>
    <ToastContainer theme="colored"/>

    </>
  )
}

export default App