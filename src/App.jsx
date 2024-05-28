//import { BrowserRouter } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
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

             </Routes>

          </ProductsProvider>
      </BrowserRouter>
    </>
  )
}

export default App
