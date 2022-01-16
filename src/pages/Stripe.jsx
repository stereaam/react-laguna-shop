import React from 'react'
import Layout from '../components/Layout'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '../components/CheckoutForm';


const stripePromise = loadStripe('pk_test_51KHoA2KA8hXJtwAWecR3bgkRRMATVZYRAaXROb82zu0WjYEB9GGt7uGPAdeiEFDomRtWnUzTdePKSRjYOu8Aw8K300DgELg0vw');

function Stripe() {

    return (
        <Layout>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </Layout>
    )
}

export default Stripe
