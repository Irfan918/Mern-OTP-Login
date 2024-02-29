// SignUp.js
import React, { useState } from 'react';
import { CgSpinner } from "react-icons/cg";
import { Link, useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';

const SignUp = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Form data
    const formData = new FormData();
    formData.append('phoneNumber', phoneNumber);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('imageFile', imageFile);

    try {
      const response = await fetch('https://agile-sweater-slug.cyclic.app/api/v1/upload/imageUpload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        toast.error('Fill All Field Correctly');
        setLoading(false);
        throw new Error('Network response was not ok');
        
      }

      const data = await response.json();
      
      if (data.success === true) {
        toast.success('Succesfully Registered');
        setLoading(false);
        navigate('/login');
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <section className="bg-emerald-500 flex items-center justify-center h-screen">
      <Toaster toastOptions={{ duration: 4000 }} />
      <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
        <h1 className="text-center leading-normal text-white font-medium text-3xl mb-6">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit} className='flex flex-col items-center gap-3'>
          <input
            className='input-field w-full  h-8 p-4'
            type="text" placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className='input-field w-full  h-8 p-4'
            type="text" placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='input-field w-full h-8 p-4'
            type="number" placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            className='file-input'
            type="file"
            onChange={(e) => setImageFile(e.target.files[0])}
          />
          <button type="submit" className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded">
                Sign Up</button>
                {loading && (
                  <CgSpinner size={20} className="mt-1 animate-spin" />
                )}
        </form>
        <Link to={"/login"}>
          <h1 className='text-gray-300 text-center'>Already have an account? Login</h1>
        </Link>
      </div>
    </section>
  );
};

export default SignUp;
