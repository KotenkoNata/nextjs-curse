import {getLatestNews} from "@/assets/lib/news";
import NewsList from "@/assets/components/news-list";

export default function LatestNewsPage() {
    const latestNews = getLatestNews();

    return <>
        <h2>Latest News</h2>
        <NewsList news={latestNews} />
    </>
}