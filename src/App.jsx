import { useState } from 'react';
import './App.css';

import Card from './Card';
import Mpesa from './Mpesa';

function App() {
  const [paymentMethod, setPaymentMethod] = useState('default');
  return (
    <>
      {paymentMethod === 'mpesa' ? (
        <div className="flex-column-gap">
          <Mpesa />
          <button onClick={() => setPaymentMethod('default')}>Change Payment Method</button>
        </div>
      ) : paymentMethod === 'card' ? (
        <div  className="flex-column-gap">
          <Card />
          <button onClick={() => setPaymentMethod('default')}>Change Payment Method</button>
        </div>
      ) : (
        <>
          <h2>Choose Payment Method</h2>
          <div className="flex-column-gap">
            <button onClick={() => setPaymentMethod('mpesa')}>MPESA</button>
            <button onClick={() => setPaymentMethod('card')}>
              VISA / MasterCard
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default App;
