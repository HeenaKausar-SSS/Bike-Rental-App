import React from 'react';
import { FaEye } from 'react-icons/fa';
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import user1 from '../../images/user1.jpg'

const users = [
  {
    id: 1,
    profilePhoto: user1,
    firstName: 'John',
    lastName: 'Doe',
    contact: '123-456-7890',
    address: '1234 Long Address Street Name, City, State, Zip Code',
    email: 'john.doe@example.com',
    password: '********',
  },
  {
    id: 1,
    profilePhoto: user1,
    firstName: 'John',
    lastName: 'Doe',
    contact: '123-456-7890',
    address: '1234 Long Address Street Name, City, State, Zip Code',
    email: 'john.doe@example.com',
    password: '********',
  },
  {
    id: 1,
    profilePhoto: user1,
    firstName: 'John',
    lastName: 'Doe',
    contact: '123-456-7890',
    address: '1234 Long Address Street Name, City, State, Zip Code',
    email: 'john.doe@example.com',
    password: '********',
  },
  // Add more user data as needed
];

const UserManagement = () => {
  return (
    <div className="user-management">
      <h2>User Management</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Profile Photo</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <img src={user.profilePhoto} alt="Profile" className="profile-photo" />
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.contact}</td>
              <td>{user.address.length > 50 ? `${user.address.substring(0, 50)}...` : user.address}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td className="actions">
                <button className="view-btn"><FaEye /></button>
                <button className="edit-btn"><MdModeEdit /></button>
                <button className="delete-btn"><MdDelete /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
