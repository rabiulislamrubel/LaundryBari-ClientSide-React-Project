import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentProcess = ({ shippingData }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      const paymentId = paymentMethod.id;
      shippingData.paymentId = paymentId;
      console.log(shippingData);
      fetch('https://obscure-tundra-49850.herokuapp.com/serviceOrders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(shippingData),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
    alert('Payment is Successful.');
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type='submit' disabled={!stripe} className='btn btn-success mt-3'>
        Pay
      </button>
    </form>
  );
};
export default PaymentProcess;
