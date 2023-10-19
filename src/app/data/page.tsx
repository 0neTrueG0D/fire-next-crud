"use client";

import { NavTab, UserDataTable } from "@/app/components";

export default function UserData() {
    return (
        <main className="max-w-5xl mx-auto">
            <NavTab />
            <UserDataTable />
        </main>
    );
}
