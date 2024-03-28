import { useState, useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const PagesChart = () => {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const [bookData, setBookData] = useState([]);

    useEffect(() => {
        // Fetched book data from local storage
        const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
        // Maped the book data 
        const chartData = storedBooks.map((book, index) => ({
            name: book.bookName,
            pages: book.totalPages, 
        }));
        // Set the chart data in the state
        setBookData(chartData);
    }, []);

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        // eslint-disable-next-line react/prop-types
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className='max-w-7xl p-10 bg-base-200 rounded-xl mx-auto'>
            <ResponsiveContainer width="100%" height={500}>
            <BarChart
               
                data={bookData}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                
                <Bar dataKey="pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {bookData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PagesChart;
