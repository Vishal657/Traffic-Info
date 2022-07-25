import { useEffect, useState } from "react";
import { Line, LineChart, ResponsiveContainer } from "recharts";

const LineGraph = ({ x, y }) => {

    const [pData, setPData] = useState(null);

    const generateData = () => {
        const data = [];
        for (let i = 0; i < x.length; i++) {
            data.push({ "x": x[i], "y": y[i] });
        }
        setPData(data);
    }

    useEffect(() => {
        generateData();
    }, [x, y])

    if (x.length === 0 || y.length === 0 || !pData) {
        return <>Loading...</>
    }

    return (
        <ResponsiveContainer width="95%" aspect={3}>
            <LineChart data={pData}>
                <Line dataKey="y" stroke="#000000" dot={false} />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default LineGraph;