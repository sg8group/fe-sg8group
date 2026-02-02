import Sidebar from "./components/Sidebar";
import MainContent from "./sections/MainContent";
import Container from "@/components/layouts/Container";
import Hero from "@/components/sections/Hero";
import { getArticles, getTopics } from "@/services/api";

export default async function ArticlePage({ slug = "" }) {
    const [topics, articles] = await Promise.all([
        getTopics(),
        getArticles(slug ? { topic: slug } : {}),
    ]);

    const pageTitle = slug ? slug.replace(/-/g, " ") : "All Articles";

    return (
        <>
        <Hero title="Article" />

        <Container>
            <div className="flex flex-col lg:grid lg:grid-cols-4 gap-8 py-8 lg:py-12">
                <div className="lg:col-span-1">
                    <Sidebar topics={topics} activeCategory={slug} />
                </div>

                <div className="lg:col-span-3">
                    <MainContent articles={articles} pageTitle={pageTitle} />
                </div>
            </div>
        </Container>
        </>
    );
}
