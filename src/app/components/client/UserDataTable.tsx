import { useState, useEffect } from "react";
import {
    collection,
    addDoc,
    getDoc,
    QuerySnapshot,
    query,
    onSnapshot,
} from "firebase/firestore";

import { db } from "@/app/firebase";

export default function UserDataTable() {
    const [data, setData] = useState([]);

    // fetch data from firestore
    useEffect(() => {
        const q = query(collection(db, "users"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const users: any = [];
            querySnapshot.forEach((doc) => {
                users.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
            setData(users);
            console.log("Current data: ", users);
        });
        return () => unsubscribe();
    }, []);

    return (
        <div className="overflow-auto border border-base-content border-opacity-20 rounded-box p-5 w-full max-h-[36rem]">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user: any) => (
                        <tr key={user.id}>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div>
                                        <div className="font-bold">
                                            {user.name}
                                        </div>
                                        <div className="text-sm text-center opacity-50">
                                            {user.age}, {user.gender}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{user.email}</td>
                            <td>
                                {user.street}, {user.city}, {user.state},{" "}
                                {user.country}{" "}
                            </td>
                            <td>
                                <div className="flex gap-5">
                                    <button className="btn btn-ghost btn-xs">
                                        Edit
                                    </button>
                                    <button className="btn btn-ghost btn-xs">
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
