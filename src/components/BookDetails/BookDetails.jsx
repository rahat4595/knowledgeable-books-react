import { useLoaderData, useParams } from "react-router-dom";
import { saveDataToLocalStorage } from "../../utility/localstorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

const BookDetails = () => {

  const books = useLoaderData();
  const { bookId } = useParams();
  const idInt = parseInt(bookId);
  const book = books.find(book => book.bookId === idInt);
  console.log(book)

  const wbook = books.find(wbook => wbook.bookId == idInt);
  console.log(wbook)

  const [readList, setReadList] = useState(JSON.parse(localStorage.getItem('books')) || []);
  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlistBooks')) || []);

  const handleAddToRead = () => {
    if (!readList.find(item => item.bookId === idInt)) {
      setReadList([...readList, book]);
      saveDataToLocalStorage({ data: book, listType: 'books' });
      toast.success("Added to Read list");
    } else {
      toast.error("Already added to Read list");
    }
  }

  const handleAddToWishlist = () => {
    if (readList.find(item => item.bookId === idInt)) {
      toast.error("Book already added to Read list");
    } else if (!wishlist.find(item => item.bookId === idInt)) {
      setWishlist([...wishlist, book]);
      saveDataToLocalStorage({ data: book, listType: 'wishlistBooks' });
      toast.success("Added to Wishlist");
    } else {
      toast.error("Already added to Wishlist");
    }
  }

  

  return (

    <div className="max-w-7xl mx-auto mt-20 flex justify-center gap-10">
      <img className="w-[420px] h-[550px] bg-base-200 rounded-2xl" src={book.image} alt="" />

      <div>
        <h2 className="text-2xl font-bold mt-5">{book.bookName}</h2>
        <h2 className="border-b-2 py-5 border-dotted w-80">By : {book.author}</h2>
        <h2 className="border-b-2 py-5 border-dotted w-80">{book.category}</h2>
        <p><span className="font-bold">Review:</span> {book.review}</p>

        <div className="flex gap-2 mt-5">
          {book.tags.map((tag, index) => (
            <h2 key={index} className="border-2 bg-base-200 text-[#23BE0A] px-2 rounded-full font-medium">#{tag}</h2>
          ))}
        </div>

        <div className="mt-5 flex gap-10">
          <div>
            <p>number of pages:</p>
            <p>publisher:</p>
            <p>Year of Publishing:</p>
            <p>Rating:</p>
          </div>
          <div>
            <p className="font-bold">{book.totalPages}</p>
            <p className="font-bold">{book.publisher}</p>
            <p className="font-bold">{book.yearOfPublishing}</p>
            <p className="font-bold">{book.rating}</p>
          </div>
        </div>

        <div className="mt-10 flex gap-5">
          <button onClick={handleAddToRead} className="rounded-lg py-3 px-6 text-center text-xl bg-transparent text-black border-2 duration-300 hover:scale-90">Read</button>
          <button onClick={handleAddToWishlist} className="rounded-lg py-3 px-6 text-center text-xl bg-[#50B1C9] text-white border-2 duration-300 hover:scale-90">Wishlist</button>
          <ToastContainer position="top-right" />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;