import CryptoBuy from './cryptoBuy';
import React from 'react';
import Context from './context';
import Orders from './orders';

export default function App() {
  const [orders, setOrders] = React.useState([
    { id: '471', comment: 'First Order', XRP: { price: 30, quantity: 1 } },
  ]);
  console.log("ex")
  const addOrder = (order) => {
    console.log("adsf")
    setOrders([...orders, { id: Math.floor(Math.random() * 1000), ...order }]);
  }
    

  return (
    <Context.Provider value={{ addOrder, orders }}>
      <CryptoBuy />
      <Orders/>
    </Context.Provider>
  );
}
