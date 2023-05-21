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
        <div class="form-container">
          <form>
            <div class="form-group">
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div class="form-group">
              <label for="email">Contact</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div class="form-group">
              <label for="email">Company</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div class="form-group">
              <label for="selectField">State</label>
              <select id="selectField" name="selectField" required>
                <option value=""> <span style={{ color: '#000000' }}>California</span></option>
              </select>
            </div>
            <div class="form-group">
              <label for="selectField">How would you like to describe yourself</label>
              <select id="selectField" name="selectField" required>
                <option value="">Installer</option>
              </select>
            </div>
            <div class="form-group">
              <label for="selectField">Preferred Distributor</label>
              <select id="selectField" name="selectField" required>
                <option value="">Aerotech</option>
              </select>
            </div>

            <div class="form-group">
              <label for="message">Additional Information</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>

            <div class="form-group">
              <input type="checkbox" id="checkbox" name="checkbox" />
              <label for="checkbox" class="checkbox-label">I'd like to receive promotions, product information and service offers from Avery Dennison.</label>
            </div>

            <div class="form-group">
              <button type="submit">Submit <BsArrowRight className='arrow' /></button>
            </div>
          </form>
        </div>)}
    </div>
  )
}

export default Form