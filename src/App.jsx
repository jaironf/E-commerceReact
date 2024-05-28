//import { BrowserRouter } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Login from './components/Login/Login'
import { ProductsProvider } from './context/ProductsContext/ProductsState'


function App() {
  return (
    <>

        <BrowserRouter>
          <ProductsProvider>
            <Header/>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/products' element={<Products/>} />
                <Route path='/login' element={<Login/>} />
             </Routes>

          </ProductsProvider>
      </BrowserRouter>
    </>
  )
}

export default App
