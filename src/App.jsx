import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css"
import CartList from './components/CartList'


function App() {
  const [dataCart, setDataCart] = useState([]);
  const [quantity, setQuantity] = useState([
    { id: 1, counter: 1, price: 109.95 },
    { id: 2, counter: 1, price: 22.30 },
    { id: 3, counter: 1, price: 55.99 },
    { id: 4, counter: 1, price: 15.99 },
    { id: 5, counter: 1, price: 695.00 },
  ]);

  const totalCounter = quantity.reduce((accumulator, item) => {
    return accumulator + item.counter;
  }, 0);

  const totalPrice = quantity.reduce((accumulator, item) => {
    let subtotal = (accumulator + item.counter * item.price)
    return subtotal;
  }, 0);

  setTimeout(() => {
    totalPrice
  }, 5000);

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
      <Navbar total={totalCounter} />
      <CartList data={dataCart} quantity={quantity} setQuantity={setQuantity} totalPrice={totalPrice} />
    </>
  )
}

export default App
