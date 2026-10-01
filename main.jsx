import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const ticketPrices = {
  Student: 10,
  Standard: 25,
  VIP: 60,
};

const initialForm = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  ticket: "Standard",
  dietary: "No preference",
  message: "",
};

function App() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData(initialForm);
    setSubmitted(false);
  };

  const currentPrice = ticketPrices[formData.ticket];

  return (
    <div className="page">

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">NEXORA</div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#schedule">Schedule</a>
          <a href="#register">Register</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">

          <p className="tag">THE FUTURE STARTS HERE</p>

          <h1>
            Future
            <span>Forward</span>
          </h1>

          <p className="hero-description">
            A next-generation technology and innovation event bringing
            together creators, developers, entrepreneurs, and technology
            enthusiasts.
          </p>

          <div className="event-info">
            <div>
              <strong>18 NOV 2026</strong>
              <small>Wednesday</small>
            </div>

            <div>
              <strong>BENGALURU</strong>
              <small>India</small>
            </div>

            <div>
              <strong>09:00 AM</strong>
              <small>Doors Open</small>
            </div>
          </div>

        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div>
          <p className="section-label">ABOUT THE EVENT</p>
          <h2>Ideas that create tomorrow.</h2>
        </div>

        <p>
          Future Forward is a one-day technology event designed for people
          who want to explore emerging technologies, connect with innovative
          thinkers, and discover new opportunities.
        </p>
      </section>

      {/* Schedule */}
      <section className="schedule" id="schedule">

        <p className="section-label">EVENT SCHEDULE</p>
        <h2>A day full of ideas.</h2>

        <div className="schedule-grid">

          <div className="schedule-card">
            <span>09:00</span>
            <div>
              <h3>Registration & Networking</h3>
              <p>
                Meet fellow attendees and collect your event badge.
              </p>
            </div>
          </div>

          <div className="schedule-card">
            <span>10:30</span>
            <div>
              <h3>Opening Keynote</h3>
              <p>
                Discover the technologies shaping the next decade.
              </p>
            </div>
          </div>

          <div className="schedule-card">
            <span>13:00</span>
            <div>
              <h3>Innovation Panel</h3>
              <p>
                Industry experts discuss the future of technology.
              </p>
            </div>
          </div>

          <div className="schedule-card">
            <span>16:00</span>
            <div>
              <h3>Startup Showcase</h3>
              <p>
                Meet emerging startups and their innovative products.
              </p>
            </div>
          </div>

          <div className="schedule-card">
            <span>18:30</span>
            <div>
              <h3>Networking Night</h3>
              <p>
                Connect, collaborate, and build something new.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Registration */}
      <section className="registration" id="register">

        <div className="registration-heading">
          <p className="section-label">JOIN THE EVENT</p>

          <h2>Register now.</h2>

          <p>
            Reserve your place at Future Forward 2026.
          </p>
        </div>

        {!submitted ? (

          <form
            className="registration-form"
            onSubmit={handleSubmit}
          >

            {/* Name */}
            <div className="form-group">
              <label htmlFor="name">
                Full Name *
              </label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email and Phone */}
            <div className="form-row">

              <div className="form-group">
                <label htmlFor="email">
                  Email Address *
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  Phone Number *
                </label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            {/* Organization */}
            <div className="form-group">
              <label htmlFor="organization">
                Organization / College
              </label>

              <input
                id="organization"
                type="text"
                name="organization"
                placeholder="Enter your organization or college"
                value={formData.organization}
                onChange={handleChange}
              />
            </div>

            {/* Ticket Selection */}
            <div className="form-group">

              <label>
                Select Ticket
              </label>

              <div className="ticket-options">

                <label className="ticket">
                  <input
                    type="radio"
                    name="ticket"
                    value="Student"
                    checked={formData.ticket === "Student"}
                    onChange={handleChange}
                  />

                  <div>
                    <strong>Student</strong>
                    <span>$10</span>
                    <small>
                      Valid student ID required
                    </small>
                  </div>
                </label>

                <label className="ticket">
                  <input
                    type="radio"
                    name="ticket"
                    value="Standard"
                    checked={formData.ticket === "Standard"}
                    onChange={handleChange}
                  />

                  <div>
                    <strong>Standard</strong>
                    <span>$25</span>
                    <small>
                      Full event access
                    </small>
                  </div>
                </label>

                <label className="ticket">
                  <input
                    type="radio"
                    name="ticket"
                    value="VIP"
                    checked={formData.ticket === "VIP"}
                    onChange={handleChange}
                  />

                  <div>
                    <strong>VIP</strong>
                    <span>$60</span>
                    <small>
                      VIP lounge + exclusive access
                    </small>
                  </div>
                </label>

              </div>
            </div>

            {/* Dietary Preference */}
            <div className="form-group">

              <label htmlFor="dietary">
                Dietary Preference
              </label>

              <select
                id="dietary"
                name="dietary"
                value={formData.dietary}
                onChange={handleChange}
              >
                <option>No preference</option>
                <option>Vegetarian</option>
                <option>Vegan</option>
                <option>Gluten Free</option>
              </select>

            </div>

            {/* Message */}
            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Anything you would like us to know?"
                value={formData.message}
                onChange={handleChange}
              />

            </div>

            {/* Price */}
            <div className="price-summary">

              <span>Your ticket</span>

              <strong>
                {formData.ticket}
                <br />
                ${currentPrice}
              </strong>

            </div>

            <button
              type="submit"
              className="register-button"
            >
              Complete Registration →
            </button>

          </form>

        ) : (

          /* Confirmation */
          <div className="success">

            <div className="success-icon">
              ✓
            </div>

            <p className="section-label">
              REGISTRATION COMPLETE
            </p>

            <h2>You're on the list!</h2>

            <p>
              Thanks, <strong>{formData.name}</strong>.
              Your registration for Future Forward 2026
              has been received.
            </p>

            <div className="confirmation">

              <div>
                <span>Ticket</span>
                <strong>{formData.ticket}</strong>
              </div>

              <div>
                <span>Email</span>
                <strong>{formData.email}</strong>
              </div>

              <div>
                <span>Amount</span>
                <strong>${currentPrice}</strong>
              </div>

            </div>

            <button
              className="register-button"
              onClick={handleReset}
            >
              Register Another Person
            </button>

          </div>
        )}

      </section>

      {/* Footer */}
      <footer>
        <div className="logo">NEXORA</div>

        <p>
          © 2026 Future Forward. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);