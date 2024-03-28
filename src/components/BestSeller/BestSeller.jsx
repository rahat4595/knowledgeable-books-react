

const BestSeller = () => {
    return (

        <>

            <div className="max-w-7xl mx-auto lg:mt-10 p-5 lg:p-0">
            <h2 className="text-center text-4xl font-bold">Best Seller</h2>
            <p className="text-center mt-5 text-base lg:px-80">Lets have a look at our Top-selling books across various genres, capturing readers imaginations and inspiring millions worldwide.</p>
            </div>

            <div className="max-w-7xl mx-auto lg:mt-10 grid grid-cols-1 lg:grid-cols-3 place-items-center lg:mb-10 p-5 lg:p-0">


                <div className="card w-full lg:w-80 bg-base-100 shadow-xl mt-10">
                    <figure><img className="h-96 w-80" src="https://i.ibb.co/2vWR2Mt/jessica-fadel-q-Xu-MWgoga6-Q-unsplash.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Harry Potter

                        </h2>
                        <p>A boy attends a school for magic and faces challenges against evil.</p>
                        <div className="card-actions justify-start mt-2">
                            <div className="badge badge-outline">Fantasy</div>
                            <div className="badge badge-outline">Young adult fiction</div>
                        </div>
                    </div>
                </div>
                <div className="card w-full lg:w-80 bg-base-100 shadow-xl mt-10">
                    <figure><img className="h-96 w-80 bg-cover" src="https://i.ibb.co/H2r976M/One-Piece-100.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            One Piece

                        </h2>
                        <p>Join the ultimate clash of pirates to become the king of pirates.</p>
                        <div className="card-actions justify-start mt-2">
                            <div className="badge badge-outline">Comedy</div>
                            <div className="badge badge-outline">Action</div>
                        </div>
                    </div>
                </div>
                <div className="card w-full lg:w-80 bg-base-100 shadow-xl mt-10">
                    <figure><img className="h-96 w-80" src="https://i.ibb.co/g4L1qzp/1822367-1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            The Lord of the Rings

                        </h2>
                        <p>Quest to destroy a powerful ring and save the world.</p>
                        <div className="card-actions justify-start mt-2">
                            <div className="badge badge-outline">Fantasy</div>
                            <div className="badge badge-outline">Adventure Fiction.</div>
                        </div>
                    </div>
                </div>
                <div className="card w-full lg:w-80 bg-base-100 shadow-xl mt-10">
                    <figure><img className="h-96 w-80" src="https://i.ibb.co/vsLtDCh/To-Kill-a-Mockingbird-first-edition-cover-1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            To kill A Mocking Bird

                        </h2>
                        <p>A young girl learns about injustice in the South during the 1930s.</p>
                        <div className="card-actions justify-start mt-2">
                            <div className="badge badge-outline">Novel</div>
                            <div className="badge badge-outline">Gothic fiction</div>
                        </div>
                    </div>
                </div>
                <div className="card w-full lg:w-80 bg-base-100  shadow-xl mt-10">
                    <figure><img className="h-96 w-80 " src="https://i.ibb.co/ZVT71RH/91-Rpwag-B7u-L-AC-UF1000-1000-QL80-1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Uzumaki Naruto

                        </h2>
                        <p>A young ninja dreams of becoming the strongest leader in his village.</p>
                        <div className="card-actions justify-start mt-2">
                            <div className="badge badge-outline">Fantasy</div>
                            <div className="badge badge-outline">Adventure</div>
                        </div>
                    </div>
                </div>
                <div className="card w-full lg:w-80 bg-base-100 shadow-xl mt-10">
                    <figure><img className="h-96 w-80" src="https://i.ibb.co/pdp8v2g/6a00d8341c5ebf53ef0240a4ae7f8b200b-600wi-1-1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Atomic Habits

                        </h2>
                        <p>An easy and proven way to bild good habits & break bad ones</p>
                        <div className="card-actions justify-start mt-2">
                            <div className="badge badge-outline">Self-Help</div>
                            <div className="badge badge-outline">Personal Development</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default BestSeller;