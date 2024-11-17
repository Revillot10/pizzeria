import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Navbar_Cmp from './components/Navbar';


import './App.css'
function App() {

  return (
    <>
      <Navbar_Cmp></Navbar_Cmp>
      <Home></Home>
      <Footer></Footer>
    </>
  )
}

export default App
