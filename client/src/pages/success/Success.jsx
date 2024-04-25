import { useLocation, useNavigate } from 'react-router-dom';
import './success.scss'
import { useEffect } from 'react';
import newRequest from '../../utils/newRequest';
const Success = () => {
    const { search } = useLocation();
    const navigate = useNavigate();
    const params = new URLSearchParams(search);
    const payment_intent = params.get('payment_intent');
    useEffect(() => {
        const makeRequest = async () => {
            try {
                console.log("payment_intent------------>");
                console.log(payment_intent);
                await newRequest.put('/Orders', { payment_intent });
                setTimeout(() => {
                    navigate("Orders");
                }, 5000);
            } catch (error) {
                console.log(error);
            }
        }
        makeRequest();
    }, []);
    return (
       [  <div className="cm">
      <img src="images/successfully-done.gif" alt="" />
       </div>,
       <div className='success'>
            payment successfulYou are being redirected to the order page.<br></br>
        </div>,
         <span className='close'>please do not close page</span>]
    );
}
export default Success;
// import React, { useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import newRequest from '../../utils/newRequest';
// import './success.scss';

// const Success = () => {
//   const { search } = useLocation();
//   const navigate = useNavigate();
//   const params = new URLSearchParams(search);
//   const paymentIntent = params.get('payment_intent');

//   useEffect(() => {
//     const makeRequest = async () => {
//       try {
//         if (!paymentIntent) {
//           throw new Error('Payment intent not found');
//         }

//         // This assumes your endpoint is correctly set up to receive POST requests
//         const response = await newRequest.post('/order/intent', {
//           ethTransactionId: paymentIntent,
//           id: "6626a89578e22eaaec83fb5d" // Make sure to pass the correct gig ID
//         });
//         const data = await response.json();

//         // Navigate to the order details page with the newly created order ID
//         navigate(`/Orders/${data.order._id}`);
//       } catch (error) {
//         console.error('Error creating order:', error);
//       }
//     }

//     makeRequest();
//   }, [navigate, paymentIntent]);

//   return (
//     <>
//       <div className="cm">
//         <img src="images/successfully-done.gif" alt="Transaction Completed Successfully" />
//       </div>
//       <div className='success'>
//         Payment successful! You are being redirected to your order.<br></br>
//       </div>
//       <span className='close'>Please do not close this page.</span>
//     </>
//   );
// }

// export default Success;
