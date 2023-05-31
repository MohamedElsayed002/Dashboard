
import {Routes , Route} from 'react-router-dom'
import { SharedLayout , LandingPage , Login , Register , Error , Confirmation } from './pages'
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <>
        <ToastContainer theme="colored"/>
      <Routes>
      <Route path="/landing" element={<LandingPage/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>} />
      <Route path="/confirmation" element={<Confirmation/>} />
      <Route path="/" element={<SharedLayout/>}>

      </Route>
      <Route path="*" element={<Error/>} />
    </Routes>
    </>
  )
}

export default App