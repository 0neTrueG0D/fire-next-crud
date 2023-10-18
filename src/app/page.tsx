"use client";

import { collection, addDoc } from "firebase/firestore";
import { db } from "@/app/firebase";

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
                console.log("Document successfully written!");
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
        <main className="max-w-3xl mx-auto">
            <NavTab />
            <UserForm onSubmit={getData} />
        </main>
    );
}
