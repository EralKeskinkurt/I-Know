"use client";
import Link from "next/link";
import Logo from "../Logo";
import { usePathname } from "next/navigation";


export default function Navbar() {
    const pathName = usePathname()

    const leftLink = [
        {
            path: "/",
            pathName: "Home"
        },
        {
            path: "/latest-news",
            pathName: "Latest News"
        },
        {
            path: "/breaking-news",
            pathName: "Breaking News"
        },
        {
            path: "/sports",
            pathName: "Sports"
        },
        {
            path: "/economy",
            pathName: "Economy"
        }
    ]

    const rightLink = [
        {
            path: "/culture-and-art",
            pathName: "Culture and Art"
        },
        {
            path: "/technology",
            pathName: "Technology"
        },
        {
            path: "/gallery",
            pathName: "Gallery"
        },
        {
            path: "/video",
            pathName: "Video"
        },
        {
            path: "/live-streaming",
            pathName: "Live Streaming"
        }
    ]

    return (
        <nav className="w-full container border-b border-b-[#322C2B] flex items-center justify-evenly py-2 px-1">
            <ul className="flex items-center gap-4">
                {leftLink.map(leftL => {
                    return (
                        <li><Link className={`${leftL.path === pathName ? "font-medium" : ""}`} href={leftL.path}>{leftL.pathName}</Link></li>
                    )
                })}
            </ul>
            <Link href="/">
                <Logo width={70} height={70} />
            </Link>
            <ul className="flex items-center gap-4">
                {rightLink.map(rightL => {
                    return (
                        <li><Link href={rightL.path}>{rightL.pathName}</Link></li>
                    )
                })}
            </ul>
        </nav>
    )
}
