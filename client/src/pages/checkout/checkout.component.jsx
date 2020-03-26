import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";

import { clearCart } from "../../redux/cart/cart.actions";

import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total, clearCart }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className="total">TOTAL: ${total}</div>
    <div className="test-warning">
      *Please use the following credit card for payments:
      <br />
      4242 4242 4242 4242 exp. date: 01/01 - CVV: 123
    </div>
    <div className="payclear-buttons">
      <CustomButton className="clear-button" onClick={() => clearCart()}>Clear cart</CustomButton>
      <StripeCheckoutButton className="pay-button" price={total} />
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
