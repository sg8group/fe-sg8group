"use client";
import { useState } from "react";

export default function JobPage() {
  // ========================
  // Dummy Data Lowongan
  // ========================
  const jobs = Array.from({ length: 35 }, (_, i) => ({
    id: i + 1,
    title: "Cleaning Service Officer Laki - Laki",
    location: "Jakarta Pusat, DKI Jakarta",
    type: "Full-Time, Onsite",
    salary: "Rp2.500.000 - Rp3.500.000",
  }));

  // ========================
  // Pagination State
  // ========================
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // ========================
  // Hitung Data Per Halaman
  // ========================
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentJobs = jobs.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(jobs.length / itemsPerPage);

  // ========================
  // Render
  // ========================
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      {/* Job List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white border rounded-xl shadow-sm p-6 flex justify-between items-center"
          >
            <div>
              <h3 className="text-gray-500 font-semibold text-lg">{job.title}</h3>

              <ul className="mt-2 text-sm text-gray-500 space-y-1">
                <li>{job.location}</li>
                <li>{job.type}</li>
                <li>{job.salary}</li>
              </ul>
            </div>

            <button className="bg-blue-700 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-800">
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded-md border text-sm
              ${
                currentPage === index + 1
                  ? "bg-blue-700 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
