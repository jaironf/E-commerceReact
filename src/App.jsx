import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Registre from './components/Registre/Registre'
import Products from './components/Products/Products'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import { ProductsProvider } from './context/ProductsContext/ProductsState'
import { UserProvider } from './context/UserContext/UserState'


function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <ProductsProvider>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/registre' element={<Registre />} />
              <Route path='/products' element={<Products />} />
              <Route path='/login' element={<Login />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>
            <div className='Space'></div>
            <Footer/>
          </ProductsProvider>
        </BrowserRouter>
      </UserProvider>
    </>
  )
}

export default App
