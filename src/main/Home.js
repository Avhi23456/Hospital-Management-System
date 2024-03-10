import React from 'react';

export default function Home() {
  return (
    <div>
      <header>
        <h1>Welcome to Hospital Management System</h1>
        <nav>
          <ul>
            {/* <li><a href="about.html">About Us</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="contact.html">Contact Us</a></li>
            <li><a href="login.html">Login</a></li> */}
          </ul>
        </nav>
      </header>

      <section className="banner">
        <h2>Empowering Healthcare Management</h2>
        <p>Our hospital management system ensures seamless operations, enhanced patient care, and efficient resource utilization.</p>
        {/* <a href="register.html" className="btn">Register Now</a> */}
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <div className="feature">
          {/* <img src="Appointment.jpg" alt="Appointment" /> */}
          <h3>Appointment Scheduling</h3>
          <p>Easily schedule and manage appointments for patients, doctors, and other staff members.</p>
        </div>
        <div className="feature">
          {/* <img src="records.png" alt="Medical Records" /> */}
          <h3>Medical Records Management</h3>
          <p>Securely maintain and access patient medical records, treatment history, and test results.</p>
        </div>
        <div className="feature">
          {/* <img src="billing.png" alt="Billing" /> */}
          <h3>Integrated Billing</h3>
          <p>Streamline billing processes, generate invoices, and manage payments efficiently.</p>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Hospital Management System. All rights reserved.</p>
      </footer>
    </div>
  );
}
