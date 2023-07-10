import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Checkout = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCVV] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('');
    const navigate = useNavigate();

    const handlePaymentSubmit = (e) => {
        e.preventDefault();

        // Payment Simulation
        const isSuccess = Math.random() < 0.5; 

        if (isSuccess) {
        navigate('/payment-success');
        } else {
        setPaymentStatus('failed');
        }
    };

    return (
        <div className="page-heading">
        <h2>Checkout</h2>
        <form onSubmit={handlePaymentSubmit}>
            <div className="form-group">
            <label htmlFor="name">Name:</label>
            <div className="input-container">
                <input
                type="text"
                id="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
            </div>
            </div>

            <div className="form-group">
            <label htmlFor="address">Address:</label>
            <div className="input-container">
                <input
                type="text"
                id="address"
                className="form-control"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                />
            </div>
            </div>

            <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <div className="input-container">
                <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>
            </div>

            <div className="form-group">
            <label htmlFor="cardNumber">Card Number:</label>
            <div className="input-container">
                <input
                type="text"
                id="cardNumber"
                className="form-control"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
                />
            </div>
            </div>

            <div className="form-group">
            <label htmlFor="expiry">Expiry Date (MM/YY):</label>
            <div className="input-container">
                <input
                type="text"
                id="expiry"
                className="form-control"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                required
                />
            </div>
            </div>

            <div className="form-group">
            <label htmlFor="cvv">CVV:</label>
            <div className="input-container">
                <input
                type="text"
                id="cvv"
                className="form-control"
                value={cvv}
                onChange={(e) => setCVV(e.target.value)}
                required
                />
            </div>
            </div>

            <button type="submit" className="btn-submit">
            Submit Payment
            </button>

            {paymentStatus === 'failed' && (
            <p className="payment-failed">Payment failed. Please try again.</p>
            )}
        </form>
        <Footer />
        </div>
    );
};

export default Checkout;
