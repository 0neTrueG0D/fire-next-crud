import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavTab() {
    const pathname = usePathname();
    return (
        <div className="flex justify-center w-full mb-5">
            <div className="tabs tabs-boxed">
                <Link
                    href="/"
                    className={pathname === "/" ? "tab tab-active" : "tab"}
                >
                    User Creation Form
                </Link>
                <Link
                    href="/data"
                    className={pathname === "/data" ? "tab tab-active" : "tab"}
                >
                    All Users Data Table
                </Link>
            </div>
        </div>
    );
}
