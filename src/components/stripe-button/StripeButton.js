import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import StripeCheckout from 'react-stripe-checkout';
import { removeCartItems } from '../../redux/cart/cartSelector';
import { resetCart } from '../../redux/cart/cartActions';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;

  const publishableKey =
    'pk_test_51HRjQwJ8rOoXoFnPCcEYacvq6uwxLfdYby6b7Jlnv1Cw0n0alYIc4E7ErqHuVg8OnKe1fVbimrr6yAhcYYsG9TkA00Pgmg53DU';

  const onToken = token => {
    //console.log(cartItems);
    //localStorage.clear();
    //resetCart();
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems
// });

export default StripeButton;
