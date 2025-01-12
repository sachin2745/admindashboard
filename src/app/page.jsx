"use client";
import Link from 'next/link';
import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

const HomePage = () => {
  // Function to run confetti animation
  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: {
        y: 0.6,
      },
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="mx-auto p-24 text-center border-2 border-sky-500 bg-sky-500 text-white rounded-lg">
        <h1 className="text-3xl font-bold">Welcome to TailAdmin Dashboard</h1>
        <p className="mt-2 text-white">
          Want to see click below on this <br />
          <Link href="http://localhost:3000/admin/dashboard" className="text-white font-bold">
            Link
          </Link>
        </p>
        <button
          id="hs-run-on-click-run-confetti"
          className="py-2 px-6 inline-flex items-center gap-x-2 text-sm font-medium rounded  bg-white text-black  focus:outline-none  disabled:opacity-50 disabled:pointer-events-none mt-4"
          type="button"
          onClick={handleConfetti}
        >
          Omphoo 🎉
        </button>
      </div>
    </div>
  );
};

export default HomePage;
