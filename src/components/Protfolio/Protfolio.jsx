import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

const Protfolio = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('./protfolio.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    console.log(categories);
    return (
        <div className="mt-20">
            <h1 className="text-3xl font-bold text-primary text-center border-x-2 py-8">My Protfolio</h1>
            <div className="flex flex-col justify-center lg:flex-row gap-10">
                {
                    categories.map((singleCategory, index) => {
                        return (
                            <div key={index} className="w-[400px] bg-gray-100 p-2 rounded cursor-pointer hover:shadow-2xl">
                                <img className="h-[300px] w-full rounded-lg p-4" src={singleCategory.image} alt="" />
                                <div className="px-4">
                                <h1 className="text-xl font-semibold">{singleCategory.name}</h1>
                                <p><small>{singleCategory.description}</small></p>
                                <div className="flex justify-end py-3">
                                <button className=" px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"><a href={singleCategory.link}>Live</a></button>
                                <button className=" px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-primary rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"><a href={singleCategory.github}>Github</a></button>
                                </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default Protfolio;