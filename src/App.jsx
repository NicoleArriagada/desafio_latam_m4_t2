
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Home from './pages/Home';
// import RegisterPage from './pages/RegisterPage';
//import LoginPage from './pages/LoginPage';
import Cart from "./components/Cart";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      {/*<LoginPage />*/}
       <Cart />
      <Footer />
    </div>
  );
};

export default App;
