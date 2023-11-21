import React , { PureComponent }from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const MyPieChart = () => {
  const myData = [
    { name: "Group A", value: 20 },
    { name: "Group B", value: 20 },
    { name: "Group C", value: 20 },
    { name: "Group D", value: 20 }
    // { name: "Group E", value: 50 } "#0088FE",
  ];
  
  const COLORS = [ "#A50325", "#EB2649", "#16441d", "#1B9985", "07C8AF"];

  return (
    <div className="pie">
      <ResponsiveContainer width="100%" aspect={1}>
        <PieChart>
          <Pie
            data={myData}
            cx={"50%"}
            cy={"50%"}
            innerRadius={"50%"}
            outerRadius={"90%"}
            
            fill="#6084d8"
            paddingAngle={5}
            
            dataKey="value"
          >
            {COLORS.map((color, index) => (
              <Cell key={`cell-${index}`} fill={color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyPieChart;
