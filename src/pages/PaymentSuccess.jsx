import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';

const PaymentSuccess = ({ clearCart }) => {
  useEffect(() => {
    triggerConfetti();
    clearCart(); 
  }, [clearCart]);

  const triggerConfetti = () => {
    const duration = 3000;

    confetti({
        particleCount: 1,
        spread: 100,
        origin: { y: 0.9 }
    });
      
    setTimeout(() => {
      confetti.reset();
    }, duration);
  };

  return (
    <div className="page-heading">
      <h2>Your payment was successful.</h2>
      <p>Thank you for ordering from our bookstore.</p>
      <Link to="/">Go back to home page</Link>
    </div>
  );
};

export default PaymentSuccess;
