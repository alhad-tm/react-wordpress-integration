// components/Features.js
import './Features.css';

export default function Features() {
  return (
    <section id="features" className="features">
      <h2>Features</h2>
      <div className="features-grid">
        <div className="feature">
          <h3>Easy to Use</h3>
          <p>Simple setup with React and WordPress integration.</p>
        </div>
        <div className="feature">
          <h3>Customizable</h3>
          <p>Fully customizable React components and styles.</p>
        </div>
        <div className="feature">
          <h3>Performance</h3>
          <p>Optimized for fast loading and great user experience.</p>
        </div>
        <div className="feature">
          <h3>Responsive</h3>
          <p>Looks great on all devices and screen sizes.</p>
        </div>
      </div>
    </section>
  );
}
