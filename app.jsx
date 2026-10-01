import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    ticket: "Standard",
    organization: "",
    dietary: "No preference",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const ticketPrices = {
    Student: 10,
    Standard: 25,
    VIP: 60,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      ticket: "Standard",
      organization: "",
      dietary: "No preference",
      message: "",
    });

    setSubmitted(false);
  };

  const price = ticketPrices[formData.ticket];

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

      {/* Hero Section */}
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

      {/* About Section */}
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
              <p>Meet fellow attendees and grab your event badge.</p>
            </div>
          </div>

          <div className="schedule-card">
            <span>10:30</span>
            <div>
              <h3>Opening Keynote</h3>
              <p>Discover the technologies shaping the next decade.</p>
            </div>
          </div>

          <div className="schedule-card">
            <span>13:00</span>
            <div>
              <h3>Innovation Panel</h3>
              <p>Industry experts discuss the future of technology.</p>
            </div>
          </div>

          <div className="schedule-card">
            <span>16:00</span>
            <div>
              <h3>Startup Showcase</h3>
              <p>Meet emerging startups and their innovative products.</p>
            </div>
          </div>

          <div className="schedule-card">
            <span>18:30</span>
            <div>
              <h3>Networking Night</h3>
              <p>Connect, collaborate, and build something new.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Registration Section */}
      <section className="registration" id="register">

        <div className="registration-heading">
          <p className="section-label">JOIN THE EVENT</p>
          <h2>Register now.</h2>
          <p>
            Reserve your place at Future Forward 2026.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="registration-form">

            <div className="form-group">
              <label>
                Full Name *
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">

              <div className="form-group">
                <label>Email Address *</label>

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number *</label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <div className="form-group">
              <label>Organization / College</label>

              <input
                type="text"
                name="organization"
                placeholder="Enter your organization"
                value={formData.organization}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Select Ticket</label>

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
                    <small>Valid student ID required</small>
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
                    <small>Full event access</small>
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
                    <small>VIP lounge + exclusive access</small>
                  </div>
                </label>

              </div>
            </div>

            <div className="form-group">
              <label>Dietary Preference</label>

              <select
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

            <div className="form-group">
              <label>Message</label>

              <textarea
                name="message"
                rows="5"
                placeholder="Anything you would like us to know?"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            {/* Price Summary */}
            <div className="price-summary">
              <span>Your ticket</span>

              <strong>
                {formData.ticket}
                <br />
                ${price}
              </strong>
            </div>

            <button type="submit" className="register-button">
              Complete Registration →
            </button>

          </form>
        ) : (

          /* Success Message */
          <div className="success">

            <div className="success-icon">✓</div>

            <p className="section-label">REGISTRATION COMPLETE</p>

            <h2>You're on the list!</h2>

            <p>
              Thanks, <strong>{formData.name}</strong>. Your registration
              for Future Forward 2026 has been received.
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
                <strong>${price}</strong>
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

export default App;
