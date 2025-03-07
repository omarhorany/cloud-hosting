"use client"

import { useState } from "react"
import { toast } from 'react-toastify';


const AddArticlesForm = () => {
    const [title, setTitle] = useState("")
    const [descreption, setDescreption] = useState("")

    const formSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim() === "") return toast.error('Title is required');
        if (descreption.trim() === "") return toast.error('Descreption is required');

        console.log("Form submitted!");
        console.log({ title, descreption });
    }
    return (
        <form onSubmit={formSubmitHandler} className="flex flex-col space-y-4">
            <div>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder="Enter Article Title"
                    autoComplete="username"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
            </div>
            <textarea
             className="mb-4 p-2 lg:text-xl rounded resize-none" 
             rows={5}
             placeholder="Enter Article Descrepion"
             value={descreption}
             onChange={(e)=> setDescreption(e.target.value)}
             >


            </textarea>
            <button
                type="submit"
                className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
          Add    
        </button>
        </form>
    )
}

export default AddArticlesForm
