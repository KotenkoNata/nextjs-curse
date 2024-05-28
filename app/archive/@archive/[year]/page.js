import NewsList from "@/assets/components/news-list";
import {getNewsForYear} from "@/assets/lib/news";

export default function FilteredNewsPage({params}) {
    const newsYear =params.year;
    const news = getNewsForYear(newsYear);
    return <NewsList news={news}/>
}