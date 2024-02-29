import React from 'react';
import { Link } from 'react-router-dom';

const Profile = ({ data }) => {
  console.log( data);

  return (
    <section className="bg-emerald-500 h-screen flex flex-col items-center justify-center">
      {data.success ? (
        <>
          <div className="mb-8">
            <img
              src={data.data.imageUrl}
              alt="Profile"
              className="rounded-full w-32 h-32 object-cover border-4 border-white"
            />
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <h1 className="text-2xl font-bold mb-4">User Profile</h1>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name:
              </label>
              <p className="text-gray-800">{data.data.name}</p>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email:
              </label>
              <p className="text-gray-800">{data.data.email}</p>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Phone:
              </label>
              <p className="text-gray-800">{data.data.phoneNumber}</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <p>No Data Available... Right Now</p>
          <Link to="/login">
            <button className="bg-emerald-600 text-white py-2 px-4 rounded-lg">
              Login Page
            </button>
          </Link>
        </>
      )}
    </section>
  );
};

export default Profile;
