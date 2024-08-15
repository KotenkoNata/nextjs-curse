import {notFound} from "next/navigation";
import { getNewsItem } from '@/assets/lib/news'

export default async function ImagePage({params}) {
    const newsSlug = params.slug;
    const newsItem = await getNewsItem(newsSlug);

    if(!newsItem){
        notFound();
    }
    return (
        <>
            <div className="fullcreen-image">
                <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
            </div>
        </>
    )
}