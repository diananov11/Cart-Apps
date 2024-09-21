import CartItem from "./CartItem"


const CartList = ({ data }) => {
  return (
    <>
      <div className="container">
        {
          data.map((item, index) => < CartItem key={index} title={item.title} price={item.price} image={item.image} />)}
      </div>
    </>
  )
}

export default CartList
