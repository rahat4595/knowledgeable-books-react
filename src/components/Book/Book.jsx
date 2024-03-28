import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineStar } from "react-icons/ai";

const Book = ({book}) => {
    const {bookId,bookName,author,image,category,rating,tags} = book
    return (
      <Link to={`/book/${bookId}`}>
        <div>
            
                    <div className="flex flex-col border-2 rounded-lg items-center  pt-5">
                        <div className="w-80 h-60 bg-base-200 rounded-lg flex justify-center  items-center">
                            <img className="w-32 h-40 rounded-sm"  src={image }alt="" />
                        </div>
                        <div className="flex gap-2 mt-5">
                        {tags.map((tag, index) => (
                        <h2 key={index} className="border-2 bg-base-200 text-[#23BE0A] px-2 rounded-full font-medium">{tag}</h2>
                        ))}
                        </div>
                        <h2 className="text-2xl font-bold mt-5">{bookName}</h2>
                        <h2 className="border-b-2 py-5 border-dotted w-80">By : {author}</h2>

                        <div className="flex justify-between w-80 py-3">
                            <p>{category}</p> <p className='flex gap-3'>{rating} <AiOutlineStar className='mt-1' /></p>
                        </div>
                       
                    </div>
                  
                    
                    
                
        </div>
        </Link>
    );
};
Book.propTypes = {
    book: PropTypes.shape({
        bookId: PropTypes.number.isRequired,
        bookName: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
};

export default Book;