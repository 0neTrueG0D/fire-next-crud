"use client";

import { useParams } from "next/navigation";

import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/app/firebase";

import toast, { Toaster } from "react-hot-toast";

import { UserForm, NavTab } from "@/app/components/client";
import { userData } from "@/app/utils/interfaces";

export default function EditUserData() {
    const params = useParams();
    const userId = params.userId;

    const docRef = doc(db, "users", userId as string); // get document reference

    // this function is called when user submits the form in child form component
    const getData = async (
        data: userData,
        setData: React.Dispatch<React.SetStateAction<userData>>
    ) => {
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
                await updateDoc(docRef, {
                    name: name.trim(),
                    email: email.trim(),
                    age: age,
                    gender: gender,
                    street: street,
                    country: country,
                    state: state,
                    city: city,
                });
                toast.success("Successfully updated User!");
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
                console.error("Error adding document: ", error);
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
