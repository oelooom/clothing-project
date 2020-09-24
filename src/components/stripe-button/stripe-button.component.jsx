import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HUmjMG9mQWR3hQT6javAt2IxEx1bWDMXMF37x4pmUCWS8LRbiaSkjQMcb9UOcYPer7nuYzFrqvlTM009zPNC9Ao00uGgSCYN5';

    const onToken = token => {
        console.log(token)
        alert('Payment Success')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Toko Baju'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;