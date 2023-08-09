import './App.css';
import { useState } from 'react';
import Axios from 'axios';
import Image from './assets/react.svg';

function Card() {
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [currency, setCurrency] = useState('KES');
  const [apiRef, setApiRef] = useState('test');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');

  const payHandler = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      const res = await Axios.post(
        'https://8ce3-41-60-234-32.ngrok-free.app/cardpay',
        {
          firstName,
          lastName,
          email,
          currency,
          apiRef,
          amount,
          phoneNumber,
        }
      );
      setLink(res.data.url);
      setLoading(false);
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
          {link ? (
            <>
              <a href={link}>Go to secure checkout</a>
            </>
          ) : (
            <>
              <h1>
                Pay With <span className="theme">MasterCard / VISA</span>
              </h1>
              <form onSubmit={payHandler}>
                <input
                  type="text"
                  placeholder="Jane"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Doe"
                  value={lastName}
                  onChange={(e) => setlastName(e.target.value)}
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="0712345678"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="janedoe@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  <option value="KES">KES</option>
                  <option value="USD">USD</option>
                </select>
                <input
                  type="text"
                  name="amount"
                  placeholder="1000"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <input
                  type="text"
                  name="apiRef"
                  value={apiRef}
                  onChange={(e) => setApiRef(e.target.value)}
                />
                <button type="submit">Pay NOW</button>
              </form>
            </>
          )}
        </>
      )}
    </>
  );
}

export default Card;
