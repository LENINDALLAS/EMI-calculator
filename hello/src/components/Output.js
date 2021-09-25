import React from 'react';

function Output(props) {

    const { emi, totalPayable, totalInterest } = props;

    const handleCurrency = (no) => {
        return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(no);
    }

    return (
        <div>
            {totalPayable ? <div>
                <hr />
                <h3> Loan EMI Calculator </h3>
                <div className="outputContainer">
                    <div className="output__firstRow">
                        <div className='rowBox1'>
                            <p>Loan EMI</p>
                            <p>₹ {handleCurrency(emi)}</p>
                        </div>
                        <div className='rowBox2'>
                            <p>Total Interest Payable</p>
                            <p>₹ {handleCurrency(totalInterest)}</p>
                        </div>
                    </div>
                    <div className="output__secondRow">
                        <div className='rowBox3'>
                            <p>Total Payment </p><p className='subName'>(Principal + Interest)</p>
                        </div>

                        <p className='rowBox3' >₹ {handleCurrency(totalPayable)}</p>
                    </div>
                </div>

            </div> : ''
            }
        </div>
    );
}

export default Output;