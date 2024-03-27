import { useEffect, useState } from "react";
import { Link } from "react-router-dom";




const ListedBooks = () => {
    const [appliedData, setAppliedData] = useState([]);
    const [wishlistBooks, setWishlistBooks] = useState([]);
    const [sortBy, setSortBy] = useState(null);

    console.log(appliedData)
    useEffect(() => {
        const getDeafultData = JSON.parse(localStorage.getItem('books')) || [];
        setAppliedData(getDeafultData);


    }, []);

    useEffect(() => {
        const savedWishlistBooks = JSON.parse(localStorage.getItem('wishlistBooks')) || [];
        setWishlistBooks(savedWishlistBooks);
    }, [])

    const handleSortBy = (sorting) => {
        setSortBy(sorting)
    }

    const sortData = (data) => {
        if (sortBy === "rating") {
            return data.sort((a, b) => b.rating - a.rating);
        } else if (sortBy === "pages") {
            return data.sort((a, b) => b.totalPages - a.totalPages);
        } else if (sortBy === "year") {
            return data.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        } else {
            return data;
        }
    };
    

    return (
        <div className="">
            <div className="max-w-7xl mx-auto bg-base-200 mt-10 p-8 rounded-2xl">
                <h2 className="text-center text-4xl font-bold">Books</h2>
            </div>

            <div className="max-w-7xl mx-auto text-center p-5">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="rounded-lg py-2 px-6 text-center text-base font-semibold bg-[#23BE0A] text-white">Sort By</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleSortBy("rating")}><a>Rating</a></li>
                        <li onClick={() => handleSortBy("pages")}><a>Number of pages</a></li>
                        <li onClick={() => handleSortBy("year")}><a>Publisher year</a></li>
                    </ul>
                </div>
            </div>

            <section className="max-w-7xl mx-auto   mt-24">
                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" defaultChecked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box lg:p-6" >
                        {sortData(appliedData).map((data) => (
                            <div key={data.bookId} className="flex flex-col lg:flex-row items-center space-x-4 mt-5 border-2 rounded-xl p-5">
                                <img src={data.image} alt={data.bookName} className="bg-base-200 w-56 h-56" />
                                <div>
                                    <h3 className="font-bold text-2xl mb-5">{data.bookName}</h3>
                                    <p className="text-[#131313CC] font-medium">By : {data.author}</p>

                                    <div className="flex flex-col lg:flex-row gap-5 mb-5">
                                        <div className="flex gap-2 mt-5">
                                            {data.tags.map((tag, index) => (
                                                <h2 key={index} className="border-2 bg-base-200 text-[#23BE0A] py-1 px-2 rounded-full font-medium">#{tag}</h2>
                                            ))}
                                        </div>
                                        <h2 className="mt-5 text-[#131313CC] font-normal">Year of publishing : {data.yearOfPublishing}</h2>
                                    </div>
                                    <div className="flex flex-col lg:flex-row lg:gap-16 ">
                                        <p>Publisher : {data.publisher}</p>
                                        <p>Pages : {data.totalPages}</p>
                                    </div>
                                    <div className="grid grid-cols-1 lg:grid-cols-3 mt-5">
                                        <p className=" py-1 px-5 border-0 rounded-full bg-[#328EFF26] text-[#0274ffe7]">Category : {data.category}</p>
                                        <p className="ml-2 py-1 text-center px-3 w-32 border-0 rounded-full bg-[#FFAC3326] text-[#ff9900de]">Rating : {data.rating}</p>
                                        <Link to={`/book/${data.bookId}`}>
                                            <button className="rounded-full py-1 px-5 text-center text-lg bg-[#23BE0A] text-white  duration-300 hover:scale-90">View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box lg:p-6">
                        {sortData(wishlistBooks).map((data) => (
                            <div key={data.bookId} className="flex flex-col lg:flex-row items-center space-x-4 mt-5 border-2 rounded-xl p-5">
                                <img src={data.image} alt={data.bookName} className="bg-base-200 w-56 h-56" />
                                <div>
                                    <h3 className="font-bold text-2xl mb-5">{data.bookName}</h3>
                                    <p className="text-[#131313CC] font-medium">By : {data.author}</p>

                                    <div className="flex flex-col lg:flex-row gap-5 mb-5">
                                        <div className="flex gap-2 mt-5">
                                            {data.tags.map((tag, index) => (
                                                <h2 key={index} className="border-2 bg-base-200 text-[#23BE0A] py-1 px-2 rounded-full font-medium">#{tag}</h2>
                                            ))}
                                        </div>
                                        <h2 className="mt-5 text-[#131313CC] font-normal">Year of publishing : {data.yearOfPublishing}</h2>
                                    </div>
                                    <div className="flex flex-col lg:flex-row lg:gap-16 ">
                                        <p>Publisher : {data.publisher}</p>
                                        <p>Pages : {data.totalPages}</p>
                                    </div>
                                    <div className="grid grid-cols-1 lg:grid-cols-3 mt-5">
                                        <p className=" py-1 px-5 border-0 rounded-full bg-[#328EFF26] text-[#0274ffe7]">Category : {data.category}</p>
                                        <p className="ml-2 py-1 text-center px-3 w-32 border-0 rounded-full bg-[#FFAC3326] text-[#ff9900de]">Rating : {data.rating}</p>
                                        <Link to={`/book/${data.bookId}`}>
                                            <button className="rounded-full py-1  px-5 text-center text-lg bg-[#23BE0A] text-white  duration-300 hover:scale-90">View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </section>
        </div>
    );
};

export default ListedBooks;