import { useEffect, useState } from "react";


const ListedBooks = () => {
    const [appliedData, setAppliedData] = useState([])
    console.log(appliedData)
    useEffect(() =>{
        const getDeafultData = JSON.parse(localStorage.getItem('books')) || [];
        setAppliedData(getDeafultData)
    },[])

    return (
        <div>
            <div className="max-w-7xl mx-auto bg-base-200 mt-10 p-8 rounded-2xl">
                <h2 className="text-center text-4xl font-bold">Books</h2>
            </div>

            <div role="tablist" className="tabs tabs-lifted max-w-7xl mx-auto  mt-10">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" checked/>
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                {appliedData.map((data) => (
                        <div key={data.bookId} className="flex items-center space-x-4 mt-5">
                            <img  src={data.image} alt={data.bookName} className="bg-base-200 w-56 h-56" />
                            <div>
                                <h3 className="font-bold">{data.bookName}</h3>
                                <p>Author: {data.author}</p>
                                <p>Rating: {data.rating}</p>
                                <p>Category: {data.category}</p>
                                
                            </div>
                        </div>
                    ))}
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2"  />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>

                
            </div>
        </div>
    );
};

export default ListedBooks;