import Link from "next/link";

export default function NewsPage() {
    return (
        <>
            <h1>List of News</h1>
            <ul>
                <li>
                    <Link href='/news/first'>Some link</Link>
                </li>
                <li>
                    <Link href='/news/second'>Some link</Link>
                </li>
                <li>
                    <Link href='/news/third'>Some link</Link>
                </li>
            </ul>
        </>
    )
}