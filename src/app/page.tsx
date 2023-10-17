"use client";

import React from "react";

import { UserForm } from "@/app/components";

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
        <main className="min-h-screen max-w-3xl mx-auto p-5 md:p-10 lg:p-20">
            <UserForm onSubmit={getData} />
        </main>
    );
}
