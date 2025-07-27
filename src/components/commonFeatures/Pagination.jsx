import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const getPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex justify-center mt-8 gap-2">
      <button
        className="px-3 py-1 rounded-l bg-gray-200 text-textPrimary font-semibold disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {getPages().map((page) => (
        <button
          key={page}
          className={`px-3 py-1 font-semibold border border-blue-200 ${page === currentPage ? 'bg-blue-600 text-white' : 'bg-white text-blue-700'} rounded`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="px-3 py-1 rounded-r bg-gray-200 text-textPrimary font-semibold disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
