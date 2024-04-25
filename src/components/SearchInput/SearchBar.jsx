"use client"
import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="flex justify-center items-center pt-6 pb-4 px-4 lg:px-0">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          className="w-full bg-[#343847] border-[2px] border-[#505568] text-[#7D879C] focus:outline-none rounded-[45px] pl-12 pr-4 py-3 text-sm"
          placeholder="Search..."
          value={value}
          onChange={onChange}
        />
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.45003 0C4.24691 0 0 4.24691 0 9.45003C0 14.6531 4.24691 18.9001 9.45003 18.9001C11.8098 18.9001 13.9658 18.0199 15.6252 16.5797L16.2001 17.1545V18.9001L23.7411 26.4411C24.4863 27.1863 25.6959 27.1863 26.4411 26.4411C27.1863 25.6959 27.1863 24.4863 26.4411 23.7411L18.9001 16.2001H17.1545L16.5797 15.6252C18.0199 13.9658 18.9001 11.8098 18.9001 9.45003C18.9001 4.24691 14.6531 0 9.45003 0ZM9.45003 2.70001C13.194 2.70001 16.2001 5.70611 16.2001 9.45003C16.2001 13.194 13.194 16.2001 9.45003 16.2001C5.70611 16.2001 2.70001 13.194 2.70001 9.45003C2.70001 5.70611 5.70611 2.70001 9.45003 2.70001Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
