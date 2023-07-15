import React from "react";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const { email, password } = location.state;

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Profile Page</h2>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
    </div>
  );
};

export default Profile;
