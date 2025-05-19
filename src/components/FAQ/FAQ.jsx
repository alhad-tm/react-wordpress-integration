// components/FAQ.js
import { useState } from 'react';
import './FAQ.css';

export default function FAQ() {
  const faqs = [
    { q: 'Is this theme SEO friendly?', a: 'Yes! It follows modern SEO best practices.' },
    { q: 'Can I use custom plugins?', a: 'Yes. You can use any standard WordPress plugin.' },
    { q: 'Is it mobile responsive?', a: 'Yes, fully responsive across devices.' },
    { q: 'How do I update content?', a: 'Use the WordPress admin dashboard as usual.' },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {item.q}
              <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
            </div>
            {openIndex === index && <div className="faq-answer">{item.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
