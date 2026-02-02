import ArticlePage from "../ArticlePage";

export default function PageCategory ({ params }) {
  return <ArticlePage slug={params.category} />;
}