import React, { useState } from 'react';


const ProfilePage = () => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    contact: '',
    address: '',
    email: '',
    password: '',
    bookings: [
      { type: 'Bike A', startDate: '2024-07-01 10:00', endDate: '2024-07-01 18:00', amount: '₹500', cancel: false },
      { type: 'Bike B', startDate: '2024-07-02 09:00', endDate: '2024-07-02 17:00', amount: '₹500', cancel: false }
    ]
  });

  const [image, setImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="profile">
      <h1>User Profile</h1>
      <div className="profile-form">
        <div className="image-upload">
          {image && <img src={image} alt="User" className="user-image" />}
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" name="firstName" value={profile.firstName} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" name="lastName" value={profile.lastName} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Contact:</label>
          <input type="text" name="contact" value={profile.contact} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input type="text" name="address" value={profile.address} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={profile.email} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={profile.password} onChange={handleInputChange} />
        </div>
      </div>
      <div>  
      <button type="submit">Save Changes</button>
      </div>
    </div>
  );
};

export default ProfilePage;
