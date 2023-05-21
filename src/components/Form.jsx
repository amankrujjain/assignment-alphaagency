import React, { useState, useEffect } from 'react'
import '../index.css'
import { BsArrowRight } from 'react-icons/bs'

function Form() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowForm(true);
      } else {
        setShowForm(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      {showForm && (
        <div className="form-container">
          <form>
            <div className="form-group">
              <label >Name:</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label >Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label >Contact</label>
              <input type="tel" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label >Company</label>
              <input type="text" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label >State</label>
              <select id="selectField" name="selectField" required>
                <option value="">California</option>
              </select>
            </div>
            <div className="form-group">
              <label >How would you like to describe yourself</label>
              <select id="selectField" name="selectField" required>
                <option value="">Installer</option>
              </select>
            </div>
            <div className="form-group">
              <label >Preferred Distributor</label>
              <select id="selectField" name="selectField" required>
                <option value="">Aerotech</option>
              </select>
            </div>

            <div className="form-group">
              <label >Additional Information</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>

            <div className="check-box">
              <input type="checkbox" id="checkbox" name="checkbox" />
              <label className="checkbox-label">I'd like to receive promotions, product information and service offers from Avery Dennison.</label>
            </div>

            <div className="form-group">
              <button type="submit">Submit <BsArrowRight className='arrow' /></button>
            </div>
          </form>
        </div>)}
    </div>
  )
}

export default Form