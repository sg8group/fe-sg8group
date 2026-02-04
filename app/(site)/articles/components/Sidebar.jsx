"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SocialLinks from "@/components/ui/SocialLinks";

function Sidebar({ topics = [], activeCategory = "" }) {
    const router = useRouter();

    const handleChange = (e) => {
        const slug = e.target.value;
        router.push(slug ? `/articles/${slug}` : "/articles");
    };

    if (!topics.length) {
        return null; // ⬅️ jangan render sidebar kosong
    }

    return (
        <aside className="w-full lg:sticky lg:top-24 space-y-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            {/* ================= Topics ================= */}
            <section className="space-y-4">
                <h3 className="text-black text-lg font-bold border-l-4 border-blue-600 px-3">
                    Topics
                </h3>

                {/* Mobile */}
                <div className="lg:hidden">
                    <select
                        value={activeCategory}
                        onChange={handleChange}
                        className="w-full rounded-md border text-gray-700 border-gray-300 bg-gray-50 px-4 py-3 text-sm font-medium focus:border-blue-500 focus:outline-none"
                    >
                        <option value="">All Topics</option>
                        {topics.map(({ id, name, slug }) => (
                            <option key={id} value={slug}>
                                {name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Desktop */}
                <div className="hidden lg:flex flex-col gap-2 text-gray-700">
                    <Link
                        href="/articles"
                        scroll={false}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition
                                ${!activeCategory
                                ? "bg-blue-600 text-white"
                                : "bg-gray-50 hover:bg-gray-100"
                            }`}
                    >
                        View All
                    </Link>

                    {topics.map(({ id, name, slug }) => {
                        const active = activeCategory === slug;

                        return (
                            <Link
                                key={id}
                                href={`/articles/${slug}`}
                                scroll={false}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition
                                        ${active
                                        ? "bg-blue-600 text-white shadow"
                                        : "bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                                    }`}
                            >
                                {name}
                            </Link>
                        );
                    })}
                </div>
            </section>

            {/* ================= Social ================= */}
            <section className="hidden lg:block space-y-3 border-t pt-5">
                <p className="text-sm font-medium text-gray-700">Follow us</p>
                <SocialLinks />
            </section>
        </aside>
    );
}

export default Sidebar;
