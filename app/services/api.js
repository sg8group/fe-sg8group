import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({baseURL: API_URL})

export async function getTopics() {
    const res = await api.get("/topics");
    return res.data.data;
}
export async function getArticles(params = {}) {
    const res = await api.get("/articles", { params });
    return res.data.data;
}

export async function getArticleDetailBySlug(slug) {
    const res = await api.get(`/articles/${slug}`);
    return res.data.data;
}

// fungi mengambil data api recruitment
export async function getRecruitments(params = {}) {
    const res = await api.get("/recruitments", { params });
    console.log("Data", res.data)
    return res.data.data;
}

export async function  getRecruitmentsDetailBySlug (slug) {
    const res = await api.get(`/recruitments/${slug}`);
    return res.data.data;
}
