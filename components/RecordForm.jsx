import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const RecordForm = ({ entry, onSubmit }) => {
    const [data, setData] = useState(entry);

    const router = useRouter();

    const handleCancelButton = () => {
        router.push(`/records`);

    }

    const handleChange = (key, value) => {
        setData((prev) => ({
            ...prev,
            [key]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        onSubmit(data);

    }

    return (
        <div>
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <div className= "text-center font-bold text-xl">
                    {entry?._id ? "Update record" : "Create record"}
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="title"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                        placeholder="Title"
                        required
                        value={data.title}
                        onChange={(e) => handleChange('title', e.target.value)} 
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="Description"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Description
                    </label>
                    <input
                        type="text"
                        id="Description"
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                        placeholder="Description"
                        required
                        value={data.description}
                        onChange={(e) => handleChange('description', e.target.value)} 
                    />
                </div>
                <div className="flex gap-4">
                    <button
                        type="submit"
                        class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Submit
                    </button>
                    <button
                        type="button"
                        className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        onClick={handleCancelButton}
                    >
                        Cancel
                    </button>
                </div>
            </form>

        </div>

    )

}

export default RecordForm;