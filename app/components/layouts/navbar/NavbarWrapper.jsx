import { getTopics } from "@/lib/api";
import Navbar from "./Navbar";

export default async function NavbarWrapper() {
    const topics = await getTopics();

    return <Navbar topics={topics || []} />
}