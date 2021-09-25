import React, { useEffect, useState } from 'react';
import './App.css';
import Input from './components/Input';
import Output from './components/Output';

function App() {

  const [amount, setAmount] = useState('');
  const [months, setMonths] = useState('');
  const [interest, setInterest] = useState('');
  const [emi, setEmi] = useState('');
  const [totalInterest, setTotalInterest] = useState('');
  const [totalPayable, setTotalPayable] = useState('');
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const tP = emi * months
    setTotalPayable(tP);
    const tI = tP - amount;
    setTotalInterest(tI);
    // eslint-disable-next-line
  }, [emi, setTotalPayable])


  const handleForm = (e) => {
    e.preventDefault();
    if (amount.split('.').length > 1) {
      alert('Loan amount cannot have a decimal value');
      return;
    };
    if (months.split('.').length > 1) {
      alert('Loan tenure cannot have a decimal value');
      return;
    }
    const rate = interest.split('.');
    if (rate.length > 1) {
      if (rate[1].length > 2) {
        alert('Interest rate can have only upto two decimal values');
        return;
      }
    }
    const E = amount * ((interest / 12) / 100) * (Math.pow((1 + ((interest / 12) / 100)), months)) / (Math.pow((1 + ((interest / 12) / 100)), months) - 1)
    setEmi(Math.ceil(E));
    setToggle(true)
  }

  const handleReset = (e) => {
    e.preventDefault();
    setAmount('');
    setMonths('');
    setInterest('');
    setEmi('');
    setTotalPayable('');
    setTotalInterest('');
    setToggle(false);
  }

  return (
    <div>
      <Input
        handleForm={handleForm}
        setAmount={setAmount}
        setMonths={setMonths}
        setInterest={setInterest}
        amount={amount}
        months={months}
        interest={interest}
        toggle={toggle}
        handleReset={handleReset}
      />
      <Output
        emi={emi}
        totalInterest={totalInterest}
        totalPayable={totalPayable}
      />

    </div>
  );
}

export default App;
