import {LineChart, Line} from "recharts";

const TableCharts = ({data}: any) => {

    return (
        <LineChart width={150} height={50} data={data}>
            <Line type="monotone" dataKey="priceUsd" stroke="#8884d8" dot={false} />
        </LineChart>
    )
}
export default TableCharts;
