import { useState } from 'react';
import Axios from 'axios';
import './App.css';
import Image from './assets/react.svg';

function Mpesa() {
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('10');

  const payHandler = async (event) => {
    event.preventDefault();

    setLoading(true);
    try {
      const res = await Axios.post(
        'https://8ce3-41-60-234-32.ngrok-free.app/mpesapay',
        {
          amount,
          phone,
        }
      );
      setLoading(false);

      console.log(res);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <>
          <div className="spinner">
            <img src={Image} alt="loading" />
          </div>
        </>
      ) : (
        <>
          <h1>
            Pay With <span className="theme">M-PESA</span>
          </h1>
          <form onSubmit={payHandler}>
            <input
              type="text"
              name="phone"
              placeholder="0712345678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              name="amount"
              placeholder="1000"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <button type="submit">Pay NOW</button>
          </form>
        </>
      )}
    </>
  );
}

export default Mpesa;
