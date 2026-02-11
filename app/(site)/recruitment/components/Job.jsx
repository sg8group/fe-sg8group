"use client";

import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import Container from "@/components/ui/Container";
import { useState } from "react";
import useRecruitments from "@/lib/hooks/useRecruitments";
import Pagination from "./Pagination";
import JobCard from "./JobCard";

export default function JobPage() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);

  const { jobs, meta, loading } = useRecruitments({
    search,
    type,
    page,
  });

  const skeletonCount = jobs?.length || 6;

  return (
    <div className=" mx-auto text-black">
      <div className="bg-[#1c2b4f]">
        <Container>
          <SearchBar value={search} onChange={setSearch} />
        </Container>
      </div>
      <Container>

        <FilterBar
          selectedType={type}
          onTypeChange={setType}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 min-h-50">
          {loading ? (
            Array.from({ length: skeletonCount }).map((_, i) => (
              <div key={i} className="animate-pulse h-32 bg-gray-300 rounded-xl"/>
            ))
          ) : jobs.length === 0 ? (
            <p className="col-span-full text-center">No Jobs Found.</p>
          ) : (
            jobs?.filter(Boolean).map((job) => (
              <JobCard key={job.id} job={job} />
            ))
          )}
        </div>
        <Pagination
          current={page}
          last={meta.last_page}
          onChange={setPage}
        />
      </Container>
    </div>
  );
}