// import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
// import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <>
      <div>
          <Header/>
          <Products/>
      </div>
      
    </>
  )
}

export default App
