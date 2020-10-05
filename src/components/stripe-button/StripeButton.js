import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;

  const publishableKey =
    'pk_test_51HRjQwJ8rOoXoFnPCcEYacvq6uwxLfdYby6b7Jlnv1Cw0n0alYIc4E7ErqHuVg8OnKe1fVbimrr6yAhcYYsG9TkA00Pgmg53DU';

  const onToken = token => {
    console.log(token);
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

export default StripeButton;
