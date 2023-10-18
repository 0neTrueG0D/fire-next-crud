"use client";

import Link from "next/link";

export default function UserData() {
    return (
        <main className="min-h-screen max-w-3xl mx-auto">
            <div className="flex justify-center w-full mb-5">
                <div className="tabs tabs-boxed">
                    <Link href="/" className="tab tab-lg">
                        User Creation Form
                    </Link>
                    <Link href="/data" className="tab tab-lg tab-active">
                        All User Data Table
                    </Link>
                </div>
            </div>
            <div className="card h-96"></div>
        </main>
    );
}
