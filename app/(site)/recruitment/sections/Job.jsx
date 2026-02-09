"use client";

import { useEffect, useState } from "react";
import BoxJob from "./BoxJob";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import { getRecruitments } from "@/lib/api";
import Container from "@/components/ui/Container";

export default function JobPage() {
  const [jobs, setJobs] = useState([]);
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(false);

  // search & filter state
  const [searchTerm, setSearchTerm] = useState("");
  const [type, setType] = useState("");

  // pagination
  const [currentPage, setCurrentPage] = useState(1);

  const skeletonCount = jobs.length > 0 ? jobs.length : 6

  // fetch data
  async function fetchJobs() {
    setLoading(true);

    const res = await getRecruitments({
      search: searchTerm,
      type,
      page: currentPage,
      status: true,
    })
    setJobs(res.data);
    setMeta(res.meta);

    setLoading(false);
  }

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, type]);

  useEffect(() => {
    fetchJobs();
  }, [searchTerm, type, currentPage]);

  return (
    <div className=" mx-auto text-black">
      <div className="bg-[#1c2b4f]">
        <Container>
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
        </Container>
      </div>
      <Container>

        <FilterBar
          selectedType={type}
          onTypeChange={setType}
        />
      </Container>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 min-h-50">
          {loading ? (
            Array.from({ length: skeletonCount }).map((_, i) => (
              <div key={i} className="animate-pulse h-32 bg-gray-300 rounded-xl"/>
            ))
          ) : jobs.length === 0 ? (
            <p className="col-span-full text-center">No Jobs Found.</p>
          ) : (
            jobs.map((job) => (
              <BoxJob
                key={job.id}
                jobname={job.title}
                location={job.location}
                type={job.type_label}
                salary={job.salary}
                link={job.link}
              />
            ))
          )}
        </div>
      </Container>

      <div className="flex justify-center mt-10 gap-2">
        {Array.from({ length: meta.last_page || 1 }).map((_, i) => (
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

    </div>
  );
}