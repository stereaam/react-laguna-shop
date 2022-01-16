import React from 'react';
import {CardNumberElement, CardExpiryElement, CardCvcElement} from '@stripe/react-stripe-js';
import './CheckoutForm.css'


class CheckoutForm extends React.Component {

    constructor(){
        super()
        this.state = {
            message: null
        }
    }

    handleCheckoutMessage(){
        this.setState({message: 'Card payment is unavailable at the moment. Please try again later!'})
    }

    render(){
        return (
          <div className='d-flex flex-column justify-content-center align-items-center text-white'>
              <h1 className='mt-3 p-1'>Stripe Payment</h1>
              <em className='mb-2 p-1 text-center'>Enter your fictional card details below and finalize your payment!</em>
              <form className='container-fluid'>
                  <div className='card-element d-flex flex-column justify-content-center m-1 p-3 px-2'>
                      <div className='my-1 mb-2 px-1 w-100'>
                          <p className='m-0 p-1 fw-bold'>Number:</p>
                          <CardNumberElement />
                      </div>
                      <div className='d-flex justify-content-around my-1 mb-2'>
                          <div className='w-50 p-1'>
                              <p className='m-0 p-1 fw-bold'>Exp. date:</p>
                              <CardExpiryElement />
                          </div>
                          <div className='w-50 p-1'>
                              <p className='m-0 p-1 fw-bold'>CVC:</p>
                              <CardCvcElement />
                          </div>
                      </div>
                  </div>   
              </form>
                <button 
                    className='btn btn-outline-light my-2 px-5 py-2' 
                    onClick={() => this.handleCheckoutMessage()}
                >
                    Pay
                </button>
                <p className='text-center p-1 px-2 text-danger mt-1 mb-3'>{this.state.message}</p>
          </div>
        )
    }
};

export default CheckoutForm