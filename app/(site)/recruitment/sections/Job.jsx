"use client";

import { useEffect, useState } from "react";
import { getRecruitments } from "@/services/api";
import BoxJob from "./BoxJob";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import Container from "@/components/layouts/Container";

export default function JobPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // search & filter state
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [salaryRange, setSalaryRange] = useState("");

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Job type mapping
  const jobTypeLabel = {
    1: "Full Time",
    2: "On Site",
    3: "Remote",
  };

  // fetch data
  useEffect(() => {
    async function fetchData() {
      const data = await getRecruitments();
      setJobs(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  // helper: parse salary
  function parseMaxSalary(salaryText) {
    if (!salaryText) return 0;
    return Number(salaryText);
  }

  // dropdown options (unique)
  const locations = [...new Set(jobs.map((job) => job.location))];

  const types = [...new Set(jobs.map((job) => job.job_type))];

  // SEARCH + FILTER LOGIC
  const filteredJobs = jobs.filter((job) => {
    const keyword = searchTerm.toLowerCase();

    const typeText = jobTypeLabel[job.job_type]?.toLowerCase() || "";

    const matchSearch =
      job.job_title.toLowerCase().includes(keyword) ||
      job.location.toLowerCase().includes(keyword) ||
      typeText.includes(keyword) ||
      job.salary.toLowerCase().includes(keyword);

    const matchLocation =
      location === "" || job.location === location;

    const matchType =
      type === "" || String(job.job_type) === String(type);

    const maxSalary = parseMaxSalary(job.salary);

    const matchSalary =
      salaryRange === "" ||
      (salaryRange === "low" && maxSalary < 3000000) ||
      (salaryRange === "mid" && maxSalary >= 3000000 && maxSalary <= 5000000) ||
      (salaryRange === "high" && maxSalary > 5000000);

    return matchSearch && matchLocation && matchType && matchSalary;
  });

  // pagination
  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentJobs = filteredJobs.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // reset page when filter/search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, location, type, salaryRange]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className=" mx-auto text-black">
      <div className="bg-[#1c2b4f]">
        <Container>
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
        </Container>

      </div>

      <Container>
        <FilterBar
          locations={locations}
          types={types}
          salaryRange={salaryRange}
          selectedLocation={location}
          selectedType={type}
          onLocationChange={setLocation}
          onTypeChange={setType}
          onSalaryChange={setSalaryRange}
          jobTypeLabel={jobTypeLabel}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {currentJobs.map((job) => (
            <BoxJob
              key={job.id}
              jobname={job.job_title}
              location={job.location}
              type={jobTypeLabel[job.job_type]}
              salary={job.salary}
            />
          ))}
        </div>

        <div className="flex justify-center mt-10 gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 border rounded-md ${currentPage === i + 1
                ? "bg-blue-600 text-white"
                : "bg-white"
                }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </Container>
    </div>
  );
}
