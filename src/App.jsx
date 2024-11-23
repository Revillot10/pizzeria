import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Navbar_Cmp from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';

function App() {

  return (
    <>
      <Navbar_Cmp></Navbar_Cmp>
      <Register></Register>
      <Login></Login>
      <Footer></Footer>
    </>
  )
}

export default App
