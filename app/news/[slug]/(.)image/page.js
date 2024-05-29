import {DUMMY_NEWS} from "@/dummy-news";
import {notFound} from "next/navigation";

export default function InterceptedImagePage({params}) {
    const newsSlug = params.slug;
    const newsItem = DUMMY_NEWS.find((newsItem)=>newsItem.slug === newsSlug);

    if(!newsItem){
        notFound();
    }
    return (
        <>
            <h2>Intercepted Image Page</h2>
            <div className="fullcreen-image">
                <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
            </div>
        </>
    )
}