import React from "react";
import { connect } from "react-redux";

import { clearCart } from "../../redux/cart/cart.actions";

import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({price, clearCart}) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_nFDMvefE00ETCMg3edk82hhy004fELs0gf";

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    }).then(response => {
      alert('Payment successful');
      clearCart();
    }).catch(error=>{
      console.log('Payment error ', JSON.parse(error));
      alert('There was an issue with your payment. Please sure you use the provided card')
    })
  };
  return (
    
    <StripeCheckout
      label="Pay now"
      name="Larmoire"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart())
});

export default connect(
  null, mapDispatchToProps)(StripeCheckoutButton);