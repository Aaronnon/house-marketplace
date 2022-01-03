import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Offers from './pages/Offers'
import Explore from './pages/Explore'
import ForgotPassword from './pages/ForgotPassword'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Explore />}></Route>
          <Route path='/offers' element={<Offers />}></Route>
          <Route path='/sign-in' element={<SignIn />}></Route>
          <Route path='/profile' element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path='/sign-up' element={<SignUp />}></Route>
          <Route path='/forgot-password' element={<ForgotPassword />}></Route>
        </Routes>
        <Navbar />
      </Router>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
