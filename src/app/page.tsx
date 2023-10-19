"use client";

import { collection, addDoc } from "firebase/firestore";
import { db } from "@/app/firebase";
import toast, { Toaster } from "react-hot-toast";

import { UserForm, NavTab } from "@/app/components/client";
import { userData } from "@/app/utils/interfaces";

export default function Home() {
    const getData = async (
        data: userData,
        setData: React.Dispatch<React.SetStateAction<userData>>
    ) => {
        console.log(data);

        let { name, email, age, gender, street, country, state, city } = data;
        age = age.toString();
        // Add a new user document.
        if (
            name !== "" &&
            email !== "" &&
            age !== "" &&
            gender !== "" &&
            street !== "" &&
            country !== ""
        ) {
            try {
                await addDoc(collection(db, "users"), {
                    name: name.trim(),
                    email: email.trim(),
                    age: age,
                    gender: gender,
                    street: street,
                    country: country,
                    state: state,
                    city: city,
                });
                toast.success("Successfully added User!");
                setData({
                    name: "",
                    email: "",
                    age: "",
                    gender: "",
                    street: "",
                    country: "",
                    state: "",
                    city: "",
                });
            } catch (error) {
                toast.error("Something went wrong");
            }
        }
    };
    return (
        <>
            <Toaster
                position="top-center"
                toastOptions={{
                    success: {
                        style: {
                            background: "green",
                        },
                    },
                    error: {
                        style: {
                            background: "red",
                        },
                    },
                }}
            />
            <main className="max-w-3xl mx-auto">
                <NavTab />
                <UserForm onSubmit={getData} />
            </main>
        </>
    );
}
