import React, { useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="landing-page">
      <div className="header">
        <h1>Refer & Earn</h1>
        <p>Refer to your friends and earn rewards!</p>
        <button className="refer-now-button" onClick={handleOpenModal}>Refer Now</button>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>&times;</span>
            <h2>Refer a Course</h2>
            <form>
              <label>Your Name</label>
              <input type="text" id="name" required />
              <label >Your Email</label>
              <input type="email" id="email" required />
              <label >Friend's Name</label>
              <input type="text" id="friendName"required />
              <label >Friend's Email</label>
              <input type="email" id="friendEmail"required  />
              <button>Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
