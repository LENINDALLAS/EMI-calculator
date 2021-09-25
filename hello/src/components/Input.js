import React, { useEffect, useState } from 'react';

function Input({ handleForm, amount, months, interest, setAmount, setInterest, setMonths, toggle, handleReset }) {


    const [disable, setDisable] = useState('')

    useEffect(() => {
        if (toggle) {
            setDisable(true)
        }
        if (!toggle) {
            setDisable(false)
        }
    }, [toggle])

    return (
        <div className='inputContainer'>
            <h3>Loan EMI Calculator</h3>
            <form className='form' onSubmit={toggle ? (e) => handleReset(e) : (e) => handleForm(e)}>
                <label htmlFor='amount' className='label__flex'>Loan Amount
                    <input type='number' placeholder='Enter amount' id='amount' disabled={disable} value={amount} onChange={(e) => setAmount(e.target.value)} />
                    INR
                </label>
                <label htmlFor='months' className='label__flex'>Loan Tenure
                    <input type='number' placeholder='Enter months' id='months' disabled={disable} value={months} onChange={(e) => setMonths(e.target.value)} />
                    Months
                </label>
                <label htmlFor='interest' className='label__flex'>Interest Rate
                    <input type='number' placeholder='NN. NN' id='interest' disabled={disable} value={interest} onChange={(e) => setInterest(e.target.value)} />
                    %
                </label>
                <button type='submit' >{toggle ? 'RESET' : 'CALCULATE'}</button>
            </form>
        </div>
    );
}

export default Input;