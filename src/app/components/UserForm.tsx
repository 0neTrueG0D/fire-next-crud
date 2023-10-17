import { useState } from "react";

export default function UserForm() {
    const [selected, setSelected] = useState("");
    return (
        <div className="border border-neutral rounded-box p-5">
            <h3 className="mb-5 text-2xl font-bold text-primary text-center">
                Add User
            </h3>
            <form action="" className="w-full flex flex-col gap-5">
                <div className="w-full">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter user name"
                        className="input input-bordered w-full mt-2"
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
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
                            placeholder="Enter user age"
                            className="input input-bordered w-full mt-2"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="gender">Gender</label>
                        <select
                            className="select select-bordered w-full mt-2"
                            name="gender"
                        >
                            <option disabled selected>
                                Gender
                            </option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                            <option>Prefer not to say</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5 w-full">
                    <div className="w-full">
                        <label htmlFor="street">Street</label>
                        <input
                            type="text"
                            name="street"
                            placeholder="Street name"
                            className="input input-bordered w-full mt-2"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="country">Country</label>
                        <select
                            className="select select-bordered w-full mt-2"
                            name="country"
                        >
                            <option disabled selected>
                                Country
                            </option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                            <option>Prefer not to say</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5 w-full">
                    <div className="w-full">
                        <label htmlFor="state">State</label>
                        <select
                            className="select select-bordered w-full mt-2"
                            name="state"
                        >
                            <option disabled selected>
                                State
                            </option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                            <option>Prefer not to say</option>
                        </select>
                    </div>
                    <div className="w-full">
                        <label htmlFor="city">City</label>
                        <select
                            className="select select-bordered w-full mt-2"
                            name="city"
                        >
                            <option disabled selected>
                                City
                            </option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                            <option>Prefer not to say</option>
                        </select>
                    </div>
                </div>
                <button className="btn btn-primary"> Submit </button>
            </form>
        </div>
    );
}
