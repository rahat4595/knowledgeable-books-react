import { useState } from "react";
import Book from "../Book/Book";
import { useEffect } from "react";


const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() =>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])


    return (
        <div>
            <div className="max-w-7xl mx-auto mt-20">
                <h2 className="text-center text-4xl font-bold">Books</h2>
                <div className="grid grid-cols-3 gap-10 justify-center mt-10">
                {
                    
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
                </div>
            </div>
        </div>
    );
};

export default Books;