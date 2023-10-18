export default function UserDataTable() {
    return (
        <div className="overflow-x-auto border border-base-content border-opacity-20 rounded-box p-5 w-full">
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
                    {/* row 1 */}
                    <tr>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div>
                                    <div className="font-bold">
                                        Hart Hagerty
                                    </div>
                                    <div className="text-sm text-center opacity-50">
                                        17, Male
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>email.issofuckingop@mail.com</td>
                        <td>69 Pikachooo Street, Pune, Maharashtra India </td>
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
                    {/* row 2 */}
                    <tr>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div>
                                    <div className="font-bold">
                                        Hart Hagerty
                                    </div>
                                    <div className="text-sm opacity-50">
                                        17, Male
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>email@mail.com</td>
                        <td>Street, Pune, Maharashtra India </td>
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
                    {/* row 3 */}
                    <tr>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div>
                                    <div className="font-bold">
                                        Hart Hagerty
                                    </div>
                                    <div className="text-sm opacity-50">
                                        17, Male
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>email@mail.com</td>
                        <td>Street, Pune, Maharashtra India </td>
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
                    {/* row 4 */}
                    <tr>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div>
                                    <div className="font-bold">
                                        Hart Hagerty
                                    </div>
                                    <div className="text-sm opacity-50">
                                        17, Male
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>email@mail.com</td>
                        <td>Street, Pune, Maharashtra India </td>
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
                </tbody>
            </table>
        </div>
    );
}
