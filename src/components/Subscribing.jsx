import React, { useState } from "react";

function SubscriptionSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    // send email to server for subscription
  };

  return (
    <section>
      <h2>Subscribe to our newsletter</h2>
      {isSubscribed ? (
        <p>Thank you for subscribing!</p>
      ) : (
        <form onSubmit={handleSubscribe}>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      )}
    </section>
  );
}

export default SubscriptionSection;