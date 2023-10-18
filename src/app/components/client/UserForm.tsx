import React, { useState, useEffect } from "react";

import { Country, State, City } from "country-state-city";

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

interface Props {
    onSubmit: (data: formData) => void;
}

export default function UserForm({ onSubmit }: Props) {
    const [form, setForm] = useState<formData>({
        name: "",
        email: "",
        age: "",
        gender: "",
        street: "",
        country: "",
        state: "",
        city: "",
    });

    useEffect(() => {
        if (form.country) {
            const states = State.getStatesOfCountry(form.country);
            if (states.length > 0) {
                setForm((prev) => ({
                    ...prev,
                    state: states[0].isoCode,
                }));
            }
        }
    }, [form.country]); // run this effect when country changes

    useEffect(() => {
        if (form.state) {
            const cities = City.getCitiesOfState(form.country, form.state);
            if (cities.length > 0) {
                setForm((prev) => ({
                    ...prev,
                    city: cities[0].name,
                }));
            }
        }
    }, [form.country, form.state]); // run this effect when country or state changes

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        onSubmit(form); // call the parent onSubmit function / pass the form data
        setForm({
            name: "",
            email: "",
            age: "",
            gender: "",
            street: "",
            country: "",
            state: "",
            city: "",
        });
    };
    return (
        <div className="border border-base-content border-opacity-20 rounded-box p-5 w-full">
            <h2 className="mb-5 text-2xl font-bold text-primary text-center">
                Add User
            </h2>
            <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-5"
            >
                <div className="w-full">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter user name"
                        className="input input-bordered w-full mt-2"
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter user email"
                        className="input input-bordered w-full mt-2"
                    />
                </div>
                <div className="grid grid-cols-2 gap-5 w-full">
                    <div className="w-full">
                        <label htmlFor="age">Age</label>
                        <input
                            type="number"
                            name="age"
                            value={form.age}
                            onChange={handleChange}
                            placeholder="Enter user age"
                            className="input input-bordered w-full mt-2"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="gender">Gender</label>
                        <select
                            className="select select-bordered w-full mt-2"
                            name="gender"
                            value={form.gender}
                            onChange={handleChange}
                        >
                            <option disabled selected value={""}>
                                Gender
                            </option>
                            <option value={"Male"}>Male</option>
                            <option value={"Female"}>Female</option>
                            <option value={"Other"}>Other</option>
                            <option value={"Prefer not to say"}>
                                Prefer not to say
                            </option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5 w-full">
                    <div className="w-full">
                        <label htmlFor="street">Street</label>
                        <input
                            type="text"
                            name="street"
                            value={form.street}
                            onChange={handleChange}
                            placeholder="Street name"
                            className="input input-bordered w-full mt-2"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="country">Country</label>
                        <select
                            className="select select-bordered w-full mt-2"
                            name="country"
                            value={form.country}
                            onChange={handleChange}
                        >
                            <option disabled selected value={""}>
                                Country
                            </option>
                            {Country.getAllCountries().map((country) => (
                                <option
                                    key={country.isoCode}
                                    value={country.isoCode}
                                >
                                    {country.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5 w-full">
                    <div className="w-full">
                        <label htmlFor="state">State</label>
                        <select
                            className="select select-bordered w-full mt-2"
                            name="state"
                            onChange={handleChange}
                            value={form.state}
                        >
                            <option disabled selected value={""}>
                                State
                            </option>
                            {State.getStatesOfCountry(form.country).map(
                                (state) => (
                                    <option
                                        key={state.isoCode}
                                        value={state.isoCode}
                                    >
                                        {state.name}
                                    </option>
                                )
                            )}
                        </select>
                    </div>
                    <div className="w-full">
                        <label htmlFor="city">City</label>
                        <select
                            className="select select-bordered w-full mt-2"
                            name="city"
                            value={form.city}
                            onChange={handleChange}
                        >
                            <option disabled selected value={""}>
                                City
                            </option>
                            {City.getCitiesOfState(
                                form.country,
                                form.state
                            ).map((city) => (
                                <option key={city.name} value={city.name}>
                                    {city.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <button className="btn btn-primary"> Submit </button>
            </form>
        </div>
    );
}
