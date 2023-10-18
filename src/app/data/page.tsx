"use client";

import { NavTab, UserDataTable } from "@/app/components/client";

export default function UserData() {
    return (
        <main className="max-w-5xl mx-auto">
            <NavTab />
            <UserDataTable />
        </main>
    );
}
