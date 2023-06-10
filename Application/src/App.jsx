
import {Routes , Route} from 'react-router-dom'
import { SharedLayout , LandingPage , Login , Register , Error , Confirmation , ProtectedUser , Products } from './pages'
import { ToastContainer } from 'react-toastify';
import { UpdateUser , Admin , ChangePassword , ShowInfoUser , VerifyEmail , CheckEmail } from './pages/user';
const App = () => {
  return (
    <>
      <ToastContainer theme="colored"/>
      <Routes>
      <Route path="/landing" element={<LandingPage/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>} />
      <Route path="/confirmation" element={<Confirmation/>} />
      <Route path="/verify-email" element={<VerifyEmail/>} />
      <Route path="/check-email" element={<CheckEmail/>} />
      <Route path="/" element={
          <ProtectedUser>
            <SharedLayout/>
          </ProtectedUser>
          }
      >
          <Route index element={<Products/>} />
          <Route path="admin" element={<Admin/>} />
          <Route path="updateUser" element={<UpdateUser/>} />
          <Route path="changePassword" element={<ChangePassword/>} />
          <Route path="showMoreInfo/:id" element={<ShowInfoUser/>} />
      </Route>
      <Route path="*" element={<Error/>} />
    </Routes>
    </>
  )
}

export default App