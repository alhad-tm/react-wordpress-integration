// components/Pricing.js
import { useState } from 'react';
import './Pricing.css';

export default function Pricing() {
  const [selected, setSelected] = useState('basic');

  const plans = [
    { id: 'basic', name: 'Basic', price: '$9/mo', features: ['Feature A', 'Feature B'] },
    { id: 'pro', name: 'Pro', price: '$29/mo', features: ['Feature A', 'Feature B', 'Feature C'] },
    { id: 'enterprise', name: 'Enterprise', price: '$99/mo', features: ['All Features'] },
  ];

  return (
    <section id="pricing" className="pricing">
      <h2>Pricing Plans</h2>
      <div className="pricing-grid">
        {plans.map(plan => (
          <div
            key={plan.id}
            className={`plan ${selected === plan.id ? 'selected' : ''}`}
            onClick={() => setSelected(plan.id)}
          >
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
            <button className="select-btn">
              {selected === plan.id ? 'Selected' : 'Select'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
