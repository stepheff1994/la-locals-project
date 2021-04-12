import React, { useRef } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_51IfAdzHWNGoPcqrU8uIIZdxC0VXEsqpK0dEVSvBr90mCz39dON97tIv1ZVDWGn5a2kv99vCBUvN3tJMe5vOGtKI900ua25bHil');


const CheckoutForm = () => {
  const amtRef = useRef(null);

  const handleClick = async (event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session

    const response = await fetch("/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        product_data: 'Donation',
        amount: amtRef.current.value,
      }),
    });

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      alert("Something went wrong, but we're on it!");
    }
  };

  return (
    <>
      <input type="text" placeholder="Amount" ref={amtRef} style={{
        border: "solid 1px grey",
        padding: "8px 20px",
        borderRadius: "5px",
        margin:" 1rem 0 ",
        width:"50%",
      }}></input>
    <div>
      <button role="link" onClick={handleClick} style={{
        border: "none",
        padding: ".5rem 3rem",
        color: "black",
        margin:" 1rem 0 ",
        width:"50%",
        boxShadow: "2px 1px 39px 0px rgba(186,201,227,0.5)",
        background: "linear-gradient(90deg,rgba(130,246,165,1) 50%,rgba(147,238,169,1) 100%)"
      }}>
        Donate
      </button>
     </div> 
    </>
  );
};

export default CheckoutForm;