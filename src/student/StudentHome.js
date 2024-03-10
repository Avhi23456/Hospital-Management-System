import React from 'react';

export default function StudentHome() {
  return (
    <div>
      <header>
        <h1>Welcome, </h1>
        <nav>
          <ul>
            {/* <li><a href="profile.html">Profile</a></li>
            <li><a href="appointments.html">Appointments</a></li>
            <li><a href="medical_records.html">Medical Records</a></li>
            <li><a href="logout.html">Logout</a></li> */}
          </ul>
        </nav>
      </header>

      <section className="appointments">
        <h2>Upcoming Appointments</h2>
        <ul>
          <li>
            <strong>Date:</strong> [Appointment Date]
            <br />
            <strong>Time:</strong> [Appointment Time]
            <br />
            <strong>Doctor:</strong> [Doctor Name]
          </li>
          {/* Repeat this list item for each upcoming appointment */}
        </ul>
      </section>

      <section className="medical-records">
        <h2>Medical Records</h2>
        <ul>
          <li>
            <strong>Date:</strong> [Record Date]
            <br />
            <strong>Description:</strong> [Record Description]
          </li>
          {/* Repeat this list item for each medical record */}
        </ul>
      </section>

      <footer>
        <p>&copy; 2024 Hospital Management System. All rights reserved.</p>
      </footer>
    </div>
  );
}
