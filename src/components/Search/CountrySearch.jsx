"use client";
import React, { useState, useEffect } from "react";
import SearchBar from "../SearchInput/SearchBar";
import Card from "../Cards/Card";

const ITEMS_PER_PAGE_DESKTOP = 12; // Número de elementos por página en desktop
const ITEMS_PER_PAGE_MOBILE = 3; // Número de elementos por página en dispositivos móviles

const LeftArrowSVG = () => (
  <svg
    width="9"
    height="12"
    viewBox="0 0 9 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-3 h-6"
  >
    <path
      d="M8.16003 1.41L3.58003 6L8.16003 10.59L6.75003 12L0.750034 6L6.75003 0L8.16003 1.41Z"
      fill="white"
    />
  </svg>
);

const RightArrowSVG = () => (
  <svg
    width="9"
    height="12"
    viewBox="0 0 9 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-3 h-6"
  >
    <path
      d="M0.839966 1.41L5.41997 6L0.839966 10.59L2.24997 12L8.24997 6L2.24997 0L0.839966 1.41Z"
      fill="white"
    />
  </svg>
);

const CountrySearch = ({ countries }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedCountries, setDisplayedCountries] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [showAllPages, setShowAllPages] = useState(false);

  useEffect(() => {
    const filteredCountries = countries.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const startIndex = (currentPage - 1) * getItemsPerPage();
    const endIndex = startIndex + getItemsPerPage();
    setDisplayedCountries(filteredCountries.slice(startIndex, endIndex));
    setTotalPages(Math.ceil(filteredCountries.length / getItemsPerPage()));
  }, [currentPage, countries, searchTerm]);

  const getItemsPerPage = () => {
    return window.innerWidth < 768 ? ITEMS_PER_PAGE_MOBILE : ITEMS_PER_PAGE_DESKTOP;
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setShowAllPages(false);
  };


  const handleHideExtraPages = () => {
    setShowAllPages(false);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <SearchBar
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Card countries={displayedCountries} />
      <div className="flex justify-center items-center mt-4">
        <button
          className="mx-1 px-3 py-1 rounded-[8px] bg-[#343847]"
          onClick={goToPreviousPage}
        >
          <LeftArrowSVG />
        </button>
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          if (!showAllPages && page > 3 && page !== totalPages) {
            return null;
          }
          return (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`bg-[#343847] mx-1 px-3 py-1 rounded-[8px] ${
                page === currentPage
                  ? "border-[2px] border-white text-white"
                  : ""
              }`}
            >
              {page}
            </button>
          );
        })}
        <span className="mx-1 px-3 py-1 rounded-[8px] bg-[#343847]">...</span>
        <button
          className="mx-1 px-3 py-1 rounded-[8px] bg-[#343847]"
          onClick={goToNextPage}
        >
          <RightArrowSVG />
        </button>
      </div>
    </div>
  );
};

export default CountrySearch;
