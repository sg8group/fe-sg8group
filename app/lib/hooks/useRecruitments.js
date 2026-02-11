import { useEffect, useState } from "react";
import { getRecruitments } from "../api";

export default function useRecruitments({ search, type, page }) {
    const [jobs, setJobs] = useState([]);
    const [meta, setMeta] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let ignore = false;

        async function fetchData() {
            setLoading(true);

            try {
                const res = await getRecruitments({
                    search,
                    type,
                    page,
                    status: true,
                });

                if (!ignore) {
                    setJobs(res.data);
                    setMeta(res.data);
                }
            } finally {
                setLoading(false);
            }
        }

        fetchData();
        return () => (ignore = true);
    }, [search, type, page]);

    return { jobs, meta, loading };
}