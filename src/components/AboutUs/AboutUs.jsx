import { useState, useEffect } from 'react';

const AboutUs = () => {

    const [cardWidth, setCardWidth] = useState('100%');

    useEffect(() => {
        const handleResize = () => {
            setCardWidth(window.innerWidth > 768 ? '400px' : '100%');
        };

        // Initial resize
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <div className="max-w-7xl mx-auto">
            <div className=" mt-10 p-5 lg:p-0">
                <h2 className="text-center text-4xl font-bold">Our Numbers</h2>

            </div>

            <div className="text-center mt-10">
                <div className="stats stats-vertical lg:stats-horizontal shadow">

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div className="stat-title text-lg">Total Read</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                        </div>
                        <div className="stat-title text-lg">Sold Books</div>
                        <div className="stat-value">4,200</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </div>
                        <div className="stat-title text-lg">New Readers</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                </div>
            </div>


            <div className=" mt-10 p-5 lg:p-0">
                <h2 className="text-center text-4xl font-bold">About Us</h2>

            </div>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical p-5 mt-10">
                <li>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">

                        <div className="text-lg font-black">About Us</div>


                        <p className='text-[#131313CC]'>We serve as enduring companions, providing solace, wisdom, and inspiration during quiet moments. Each book carries the potential to educate, enlighten, and expand perspectives, enriching minds with valuable knowledge and insights.</p>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end mb-10">

                        <div className="text-lg font-black">Why Choose Us</div>

                        <p className='text-[#131313CC]'>From captivating stories to profound revelations, books cultivate empathy and understanding, forging connections among readers across diverse cultures and generations.</p>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">

                        <div className="text-lg font-black">Books Category</div>

                        <p className='text-[#131313CC]'>Explore our diverse collection of books spanning various genres and categories. From thrilling mysteries to heartwarming romances, thought-provoking non-fiction to captivating fantasy, we have something for every reader. Discover your next literary adventure with us today!</p>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end mb-10">

                        <div className="text-lg font-black">About Our Books</div>
                        <p className='text-[#131313CC]'>  our collection of books represents a curated selection of timeless classics, contemporary bestsellers, and hidden gems waiting to be discovered. Each title is carefully chosen to cater to a diverse range of interests and preferences, ensuring that there is something for every reader to enjoy. Whether you are seeking thrilling adventures, thought-provoking insights, or heartwarming tales, our books are here to enrich your reading journey. Explore our library and embark on an unforgettable literary adventure with us.</p>
                    </div>
                    <hr />
                </li>

            </ul>

            <div className=" mt-10 p-5 lg:p-0">
                <h2 className="text-center text-4xl font-bold">Sign UP Now!</h2>

            </div>

            <div className="hero my-10  rounded-xl">
                <div className="hero-content flex-col lg:gap-10 lg:flex-row-reverse">
                    
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100" style={{ width: cardWidth }}>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;