import React, { useState } from 'react'

function Card () {
  const [purchasePrice, setPurchasePrice] = useState('0')
  const [downPayment, setDownPayment] = useState('0')
  const [loanTerm, setLoanTerm] = useState('1')
  const [interestRate, setInterestRate] = useState('0')
  const [loanAmount, setLoanAmount] = useState('0')
  const [mortageAmount, setMortageAmount] = useState('0')
  function CalculateMortage () {
    const rate = parseFloat(interestRate / (100 * 12))
    const paymentMonths = parseFloat(loanTerm * 12)
    const loanAmount = purchasePrice - downPayment
    const mortageAmount =
      loanAmount *
      ((rate * (1 + rate) ** paymentMonths) / ((1 + rate) ** paymentMonths - 1))
    console.log(mortageAmount)
    console.log(loanAmount)
    setLoanAmount(loanAmount)
    setMortageAmount(mortageAmount.toFixed(3))
  }
  function Reset () {
    setPurchasePrice('0')
    setDownPayment('0')
    setLoanTerm('0')
    setInterestRate('0')
    setLoanAmount('0')
    setMortageAmount('0')
  }
  return (
    <>
      <div className='bg-slate-800 p-4 drop-shadow-xl rounded-3xl flex md:flex-row  flex-col '>
        <div className='Input-card bg-orange-50 text-zinc-950 w-96 m-4 p-4 rounded-xl flex flex-wrap flex-col'>
          <h1 className='text-4xl font-semibold m-4'>Mortage Calculator</h1>
          <input
            className='p-4 bg-slate-300 font-semibold rounded-md m-2'
            type='number'
            onChange={e => setPurchasePrice(e.target.value)}
            placeholder='$0'
            id='Purchase'
          />

          <input
            className='p-4 bg-slate-300 font-semibold rounded-md m-2'
            type='number'
            onChange={e => setDownPayment(e.target.value)}
            placeholder='$0'
            id='DownPayment'
          />

          <input
            className='p-4 bg-slate-300 font-semibold rounded-md m-2'
            type='number'
            onChange={e => setLoanTerm(e.target.value)}
            placeholder='0 Years'
            id='LoanTerm'
          />

          <input
            className='p-4 bg-slate-300 font-semibold rounded-md m-2'
            type='number'
            onChange={e => setInterestRate(e.target.value)}
            placeholder='0%'
            id='Rate'
          />

          <button
            className='bg-sky-500 m-2 p-4  align-bottom hover:bg-sky-400/80 text-xl  hover:scale-105 transition drop-shadow-lg '
            onClick={CalculateMortage}
          >
            Calculate
          </button>
        </div>
        <div className='data-card  bg-blue-300 text-neutral-900 p-4 m-4 rounded-xl flex  flex-col w-96'>
          {/*<p className='text-2xl text-start'>
            Purchase Price: $ {purchasePrice}
          </p>
          <p className='text-2xl text-start'>
            DownPayment Amount$ {downPayment}
          </p>
          <p className='text-2xl text-start'>LoanTerm: {loanTerm} years</p>
          <p className='text-2xl text-start'>Rate: {interestRate} %</p>*/}
          <h1 className='text-4xl m-4 text-center font-semibold'>Summary</h1>
          <hr className=' border-gray-500 mx-4 mb-4'></hr>
          <h1 className='text-2xl  mx-4 font-semibold text-start'>
            Outstanding Loan Amount:
          </h1>
          <h1 className='text-3xl mx-4  font-semibold text-start'>
            $ {loanAmount}
          </h1>
          <h1 className='text-2xl  mx-4 font-semibold text-start'>
            Fixed Monthly Amount:{' '}
          </h1>
          <h1 className='text-3xl  mx-4  font-semibold text-start'>
            $ {mortageAmount}
          </h1>
          <p className='flex text-base  mx-4 flex-wrap mt-8 text-start'>
            This is the estimated monthly payment based on loan amount of $
            {loanAmount} with a {interestRate}% fixed mpnthly interest rate for
            entire duration of loan {loanTerm} years.{' '}
          </p>
          <button
            className='bg-red-500 my-4  mx-2 p-4  hover:bg-red-400/80 text-xl hover:scale-105 transition drop-shadow-lg '
            onClick={Reset}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  )
}

export default Card
