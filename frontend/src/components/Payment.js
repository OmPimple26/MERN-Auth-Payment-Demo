import React, { useState } from "react";
import axios from "axios";

function Payment() {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const backendURL = process.env.REACT_APP_BACKEND_URL;

  // ✅ Load Razorpay script dynamically
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // ✅ Handle payment logic
  const handlePayment = async () => {
    if (!amount || amount <= 0) {
      alert("Please enter a valid amount 💰");
      return;
    }

    setLoading(true);

    const res = await loadRazorpayScript();
    if (!res) {
      alert("Razorpay SDK failed to load. Check your internet connection.");
      setLoading(false);
      return;
    }

    try {
      // Step 1: Create order in backend
      const { data } = await axios.post(`${backendURL}/api/payment/create-order`, { amount });

      // Step 2: Configure payment options
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID || "your_test_key_id",
        amount: data.order.amount,
        currency: "INR",
        name: "Om's MERN App",
        description: "Payment for Service",
        order_id: data.order.id,
        handler: async function (response) {
          try {
            const verify = await axios.post(`${backendURL}/api/payment/verify-payment`, response);
            alert(`✅ ${verify.data.message}`);
          } catch (err) {
            alert("❌ Payment verification failed");
          }
        },
        prefill: {
          name: "Om",
          email: "om@example.com",
          contact: "9999999999",
        },
        theme: { color: "#e91e63" },
      };

      // Step 3: Open Razorpay checkout
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error(error);
      alert("❌ Payment initialization failed");
    }

    setLoading(false);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>💳 Make a Payment (INR)</h2>

        <input
          type="number"
          placeholder="Enter amount in ₹"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={styles.input}
        />

        <button
          onClick={handlePayment}
          disabled={loading}
          style={loading ? styles.buttonDisabled : styles.button}
        >
          {loading ? "Processing..." : "Pay with Razorpay"}
        </button>

        <p style={styles.note}>
          You can pay using <b>Google Pay, UPI, Credit/Debit Card,</b> or <b>Net Banking</b>.
        </p>
      </div>
    </div>
  );
}

// 💅 Inline Styles
const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #fce4ec, #f3e5f5, #e3f2fd)",
    fontFamily: "'Poppins', sans-serif",
  },
  card: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    width: "350px",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  title: {
    color: "#e91e63",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "25px",
  },
  input: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    marginBottom: "20px",
    outline: "none",
    transition: "border-color 0.3s, box-shadow 0.3s",
  },
  button: {
    backgroundColor: "#e91e63",
    color: "white",
    border: "none",
    padding: "12px 18px",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    width: "100%",
    transition: "background-color 0.3s, transform 0.2s",
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
    color: "#666",
    border: "none",
    padding: "12px 18px",
    borderRadius: "10px",
    width: "100%",
    fontSize: "16px",
  },
  note: {
    marginTop: "18px",
    fontSize: "14px",
    color: "#555",
    lineHeight: "1.5",
  },
};

export default Payment;
