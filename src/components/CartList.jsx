import CartItem from "./CartItem";
const CartList = ({ data, quantity, setQuantity, totalPrice }) => {

  const updateQuantity = (id, newCounter) => {
    setQuantity(prev =>
      prev.map(item =>
        item.id === id ? { ...item, counter: newCounter } : item
      )
    );
  };

  return (
    <>
      <div className="container mt-5 pt-3">
        {data.map((item, index) => (
          <CartItem
            key={index}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            quantity={quantity}
            setQuantity={updateQuantity}
          />
        ))}
        <h1 className="text-end">Subtotal: ${totalPrice.toFixed(2)}</h1>
      </div>
    </>
  );
};

export default CartList;

