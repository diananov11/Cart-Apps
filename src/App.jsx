import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css"
import CartList from './components/CartList'
import CartItem from './components/CartItem'

function App() {
  const [dataCart, setDataCart] = useState([]);
  // const [totalItems, setTotalItems] = useState(0);

  const fetchApi = async () => {
    try {
      let response = await fetch('https://fakestoreapi.com/products?limit=5')
      let data = await response.json()
      console.log(data)
      setDataCart(data)
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => { fetchApi() }, [])



  return (
    <>
      <Navbar />
      <CartList data={dataCart} />

    </>
  )
}

export default App
