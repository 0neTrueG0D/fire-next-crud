"use client";
import Link from "next/link";

import { UserForm, NavTab } from "@/app/components/client";

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
        <main className="max-w-3xl mx-auto">
            <NavTab />
            <UserForm onSubmit={getData} />
        </main>
    );
}
