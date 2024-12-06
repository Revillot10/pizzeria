import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar_Cmp from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import Register from './components/Register';
import Login from './components/Login';
import Pizza from './components/Pizza';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar_Cmp></Navbar_Cmp>
      {/*<Home></Home>*/}
      {/*<Cart></Cart>*/}
      {/*<Register></Register>*/}
      {/*<Login></Login>*/}
      <Pizza></Pizza>
      <Footer></Footer>
    </>
  )
}

export default App
