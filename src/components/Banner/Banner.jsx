

const Banner = () => {
    return (
        <div>
            <div className="hero  bg-base-200 rounded-xl max-w-7xl mx-auto mt-5 h-[555px]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img  src="https://i.ibb.co/680vDcC/pngwing-1.png" className="max-w-sm rounded-lg shadow-2xl bg-base-200" />
                    <div className="w-[530px] h-72 mt-14">
                        <h1 className="text-5xl font-bold ">Books to freshen up your bookshelf</h1>
                       
                        <button  className="rounded-lg py-3 px-6 text-center text-xl bg-[#23BE0A] text-white mt-14 duration-300 hover:scale-90">View the List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;