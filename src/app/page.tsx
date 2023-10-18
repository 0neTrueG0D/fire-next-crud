"use client";
import Link from "next/link";

import { UserForm } from "@/app/components/client";

interface formData {
    name: string;
    email: string;
    age: string;
    gender: string;
    street: string;
    country: string;
    state: string;
    city: string;
}
export default function Home() {
    const getData = (data: formData) => console.log(data);
    return (
        <main className="min-h-screen max-w-3xl mx-auto">
            <div className="flex justify-center w-full mb-5">
                <div className="tabs tabs-boxed">
                    <Link href="/" className="tab tab-lg tab-active">
                        User Creation Form
                    </Link>
                    <Link href="/data" className="tab tab-lg">
                        All User Data Table
                    </Link>
                </div>
            </div>
            <UserForm onSubmit={getData} />
        </main>
    );
}
