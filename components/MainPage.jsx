import { useState } from "react";
import { getRecords } from "../utils/recordsFunctions";
import Spinner from "./Spinner";
import { useEffect } from 'react';
import { deleteRecord } from "../utils/recordsFunctions";
import { useRouter } from "next/router";

const MainPage = () => {
    const router = useRouter();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchRecords = async () => {
        const response = await getRecords();

        setData(response);
        setIsLoading(false);
    }

    const handleDelete = async (id) => {
        try {
            const response = await deleteRecord(id);

            if (response?.acknowledged) {
                const newData = data.filter((el) => el._id !== id);

                setData(newData);

            }
        } catch (error) {
            console.log(error);

        }

    }

    const handleRecordUpdate = (id) => {
        router.push(`/records/${id}`);
    }


    useEffect(() => {
        fetchRecords();
    }, [])

    if (isLoading) {
        return <Spinner />;
    }


    return (

        <div className="m-4 flex gap-4 flex wrap">
            {
                data?.map((record) => (

                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{record.title}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{record.description}</p>
                        <button 
                        type="button" 
                        className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        onClick={() => handleRecordUpdate(record._id)}
                        >
                            Update
                        </button>
                        <button 
                        type="button" 
                        className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        onClick={() => handleDelete(record._id)}
                        >
                            Delete
                        </button>

                    </div>

                ))
            }

        </div>
    )
}

export default MainPage;