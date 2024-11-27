import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Navbar_Cmp from './components/Navbar';
import Cart from './components/Cart';
//import Register from './components/Register';
//import Login from './components/Login';

function App() {

  return (
    <>
      <Navbar_Cmp></Navbar_Cmp>
      <Cart></Cart>
      {/*<Home></Home>*/}
      {/*<Register></Register>*/}
      {/*<Login></Login>*/}
      <Footer></Footer>
    </>
  )
}

export default App
