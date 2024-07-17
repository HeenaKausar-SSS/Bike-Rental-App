import React, { useState } from 'react';

function BookingPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contact: '',
    address: '',
    licensePhoto: null,
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    bikeQuantity: 1,
    bikeType: '',
    paymentMethod: '',
    emergencyName: '',
    emergencyRelationship: '',
    emergencyContact: '',
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [openSection, setOpenSection] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    });
  };

  const validate = () => {
    let formErrors = {};

    if (!formData.email?.includes('@')) {
      formErrors.email = 'Invalid email address';
    }

    if (!formData.terms) {
      formErrors.terms = 'You must accept the terms and conditions';
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
    }
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="booking">
      <h1>RENT A BIKE</h1>
      <form onSubmit={handleSubmit}>
        <div className="section">
          <div className="section-header" onClick={() => toggleSection('personalInfo')}>
            Personal Information
          </div>
          {openSection === 'personalInfo' && (
            <div className="section-content">
              <div>
                <label>First Name:</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
              </div>
              <div>
                <label>Last Name:</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
              </div>
              <div>
                <label>Contact:</label>
                <input type="text" name="contact" value={formData.contact} onChange={handleChange} required />
              </div>
              <div>
                <label>Address:</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} required />
              </div>
              <div>
                <label>Driver's License Photo:</label>
                <input type="file" name="licensePhoto" onChange={handleChange} required />
              </div>
            </div>
          )}
        </div>

        <div className="section">
          <div className="section-header" onClick={() => toggleSection('rentalDetails')}>
            Rental Details
          </div>
          {openSection === 'rentalDetails' && (
            <div className="section-content">
              <div>
                <label>Start Date:</label>
                <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
              </div>
              <div>
                <label>Start Time:</label>
                <input type="time" name="startTime" value={formData.startTime} onChange={handleChange} required />
              </div>
              <div>
                <label>End Date:</label>
                <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required />
              </div>
              <div>
                <label>End Time:</label>
                <input type="time" name="endTime" value={formData.endTime} onChange={handleChange} required />
              </div>
              <div>
                <label>Quantity of Bike:</label>
                <input type="number" name="bikeQuantity" value={formData.bikeQuantity} onChange={handleChange} required />
              </div>
              <div>
                <label>Type of Bike:</label>
                <input type="text" name="bikeType" value={formData.bikeType} onChange={handleChange} required />
              </div>
            </div>
          )}
        </div>

        <div className="section">
          <div className="section-header" onClick={() => toggleSection('paymentInfo')}>
            Payment Information
          </div>
          {openSection === 'paymentInfo' && (
            <div className="section-content">
              <div>
                <label>Payment Method:</label>
                <input type="text" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required />
              </div>
            </div>
          )}
        </div>

        <div className="section">
          <div className="section-header" onClick={() => toggleSection('emergencyContact')}>
            Emergency Contact Information
          </div>
          {openSection === 'emergencyContact' && (
            <div className="section-content">
              <div>
                <label>Name:</label>
                <input type="text" name="emergencyName" value={formData.emergencyName} onChange={handleChange} required />
              </div>
              <div>
                <label>Relationship:</label>
                <input type="text" name="emergencyRelationship" value={formData.emergencyRelationship} onChange={handleChange} required />
              </div>
              <div>
                <label>Contact:</label>
                <input type="text" name="emergencyContact" value={formData.emergencyContact} onChange={handleChange} required />
              </div>
            </div>
          )}
        </div>

        <div>
          <label>
            <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} required />
            I accept the terms and conditions
          </label>
          {errors.terms && <span>{errors.terms}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookingPage;
