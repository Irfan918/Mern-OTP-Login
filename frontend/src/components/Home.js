import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="bg-emerald-500 h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-8">Welcome to Home Page</h1>
    
      <Link to="/profile">
        <button className="bg-emerald-600 text-white py-2 px-4 rounded-lg">
          Go to Profile
        </button>
      </Link>
    </section>
  );
};

export default Home;
