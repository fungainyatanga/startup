import React from "react";

interface PlanProps {
  id: string;
}

const Plan = (props: PlanProps) => {
  return (
    <div className="plan-section" id={props.id}>
      <div className="plan-title">
        <h2>Go Further with Premium</h2>
        <p>
          Switch to premium and unlock tons of{" "}
          <span style={{ color: "#00ffd1" }}>elite features</span>
        </p>
      </div>

      <div className="card-section">
        <div className="card-1 card">
          <header className="card-header">
            <h3>Basic Plan</h3>
            <p>For students and testing purposes</p>
          </header>
          <div className="card-plan">
            <h3>$Free</h3>
            <p>Upto 3 servers</p>
            <p>4 people conference</p>
            <p>30 mins live streaming</p>
            <button type="button">Buy Now</button>
          </div>
        </div>

        <div className="card-2 card">
          <header className="card-header">
            <h3>Starter Plan</h3>
            <p>For Startups to collaborate and accomplish tasks</p>
          </header>
          <div className="card-plan">
            <h3>$99/mo</h3>
            <p>Upto 100 servers</p>
            <p>Unlimited people group calls</p>
            <p>4 hours of live streaming</p>
            <button type="button">Buy Now</button>
          </div>
        </div>
        <div className="card-3 card">
          <header className="card-header">
            <h3>Mega Plan</h3>
            <p>Large scale collaborations</p>
          </header>
          <div className="card-plan">
            <h3>$299/mo</h3>
            <p>∞ Services</p>
            <p>Work with no limits</p>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
