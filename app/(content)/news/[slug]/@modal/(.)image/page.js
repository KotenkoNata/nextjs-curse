import {notFound} from "next/navigation";
import ModalBackdrop from '@/assets/components/modal-backdrop'
import { getNewsItem } from '@/assets/lib/news'

export default async function InterceptedImagePage({params}) {
    const newsSlug = params.slug;
    const newsItem = await getNewsItem(newsSlug);

    if(!newsItem){
        notFound();
    }
    return (
        <>
            <ModalBackdrop />
            <dialog className="modal" open>
                <div className="fullcreen-image">
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
                </div>
            </dialog>
        </>
    )
}