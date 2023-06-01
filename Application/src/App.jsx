
import {Routes , Route} from 'react-router-dom'
import { SharedLayout , LandingPage , Login , Register , Error , Confirmation , ProtectedUser } from './pages'
import { ToastContainer } from 'react-toastify';
import { UpdateUser , Admin } from './pages/user';
const App = () => {
  return (
    <>
      <ToastContainer theme="colored"/>
      <Routes>
      <Route path="/landing" element={<LandingPage/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>} />
      <Route path="/confirmation" element={<Confirmation/>} />
      <Route path="/" element={
          <ProtectedUser>
            <SharedLayout/>
          </ProtectedUser>
          }
      >
          <Route index element={<UpdateUser/>} />
          <Route path="admin" element={<Admin/>} />
      </Route>
      <Route path="*" element={<Error/>} />
    </Routes>
    </>
  )
}

export default App