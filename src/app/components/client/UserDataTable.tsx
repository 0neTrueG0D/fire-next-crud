import { useState, useEffect } from "react";
import Link from "next/link";

import {
    collection,
    doc,
    deleteDoc,
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

    // delete data from firestore
    const deleteData = async (id: string) => {
        await deleteDoc(doc(db, "users", id));
    };

    return (
        <div className="overflow-auto border border-base-content border-opacity-20 rounded-box p-5 w-full max-h-[36rem]">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th className="w-16 text-center">Action</th>
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
                                <div className="flex justify-between">
                                    <Link
                                        href={`/data/edit/${user.id}`}
                                        className="btn btn-ghost btn-xs"
                                    >
                                        <svg
                                            className="text-accent w-6 h-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                        >
                                            <g id="evaEdit2Fill0">
                                                <g id="evaEdit2Fill1">
                                                    <path
                                                        id="evaEdit2Fill2"
                                                        fill="currentColor"
                                                        d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 18ZM15.27 4L18 6.73l-2 1.95L13.32 6Z"
                                                    />
                                                </g>
                                            </g>
                                        </svg>
                                    </Link>
                                    <button
                                        onClick={() => deleteData(user.id)}
                                        className="btn btn-ghost btn-xs"
                                    >
                                        <svg
                                            className="text-error w-6 h-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"
                                            />
                                        </svg>
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
