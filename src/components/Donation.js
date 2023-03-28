import React, { useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";


export default function App() {
    const [state, setState] = useState(0);
    return (
        
      <div className="payment">
        { console.log("hello")}
        <h1 className="donate-title">Donate Us</h1>
        
        <input
          type="number"
          className="amount"
          placeholder="Please enter amount"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <PayPalButton
          options={{
            clientId: "AWqfjam8PAivLvwM2l7kUevV4AYdb-qTqRvKSikpI1gVVKlqLqYXWHGQu1zfIRHGYLvnX5hvxOgiiUoV",
            currency: "CAD",
          }}
          amount={state}
          onSuccess={(details, data) => {
            alert("Transaction completed by " + details.payer.name.given_name);
  
            console.log({ details, data });
          }}
        />
      </div>
    );
  }
  
