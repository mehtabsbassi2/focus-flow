import React, { useState } from "react"; // Import necessary React features
import Modal from "react-modal"; // Import modal component
import "./feedback.css"; // Import styles

const Feedback = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false); // State for modal visibility
  const [feedback, setFeedback] = useState({
    // State for feedback form
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value }); // Update feedback state
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Create mailto link with feedback details
    const mailtoLink = `mailto:p2772570@my365.dmu.ac.uk?subject=Feedback%20from%20${encodeURIComponent(
      feedback.name
    )}&body=Name:%20${encodeURIComponent(
      feedback.name
    )}%0D%0AEmail:%20${encodeURIComponent(
      feedback.email
    )}%0D%0AMessage:%20${encodeURIComponent(feedback.message)}`;

    // Open the mailto link
    window.location.href = mailtoLink;

    // Close the modal
    setModalIsOpen(false);
  };

  return (
    <div className="feedback-button-container">
      <button className="feedback-button" onClick={() => setModalIsOpen(true)}>
        Feedback
      </button>{" "}
      {/* Open modal */}
      <Modal
        isOpen={modalIsOpen} // Modal open state
        onRequestClose={() => setModalIsOpen(false)} // Close on request
        className="feedback-modal" // Modal styles
        overlayClassName="feedback-overlay" // Overlay styles
        ariaHideApp={false} // Accessibility setting
      >
        <h2>Submit Feedback</h2>
        <form onSubmit={handleSubmit} className="feedback-form">
          {" "}
          {/* Feedback form */}
          <label htmlFor="name">Enter your name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={feedback.name} // Controlled input
            onChange={handleInputChange} // Handle input change
            required // Required field
          />
          <label htmlFor="email">Enter your email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={feedback.email} // Controlled input
            onChange={handleInputChange} // Handle input change
            required // Required field
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={feedback.message} // Controlled input
            onChange={handleInputChange} // Handle input change
            required // Required field
            rows={10} // Textarea height
          ></textarea>
          <div className="modal-actions">
            <button type="submit" className="submit-button">
              Submit
            </button>{" "}
            {/* Submit button */}
            <button
              type="button"
              className="cancel-button"
              onClick={() => setModalIsOpen(false)}
            >
              Cancel
            </button>{" "}
            {/* Cancel button */}
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Feedback; // Export component
