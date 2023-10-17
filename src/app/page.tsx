"use client";

import React from "react";

import { Header, UserForm } from "@/app/components";

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
        <>
            <Header />
            <main className="min-h-screen max-w-3xl mx-auto">
                <UserForm onSubmit={getData} />
            </main>
        </>
    );
}
