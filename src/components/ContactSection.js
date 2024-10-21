import React, { useEffect, useRef } from 'react';

const ContactSection = () => {
  const sectionRef = useRef(null); // Membuat ref untuk section

  useEffect(() => {
    const slideInElements = document.querySelectorAll('.slide-in');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 });

    slideInElements.forEach((el) => observer.observe(el));

    // Cleanup observer saat komponen unmount
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="contact slide-in" ref={sectionRef}> {/* Tambahkan ref untuk slide-in */}
      <h2>Let's Collaborate!</h2>
      <p>Got ideas, suggestions, or feedback? We'd love to hear from you! Reach out to us at <a href="mailto:seccastudio@gmail.com">seccastudio@gmail.com</a> and let's build something amazing together.</p>

      <form>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Feedback" required></textarea>
        <button type="submit" className="button-70">Send Feedback</button>
      </form>
    </section>
  );
};

export default ContactSection;
