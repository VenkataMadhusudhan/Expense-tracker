import Dashbord from "./Dashbord";
import Time from "./Time";
import Header from "./Header";
import MyPieChart from "./MyPieChart";
import AddExpense from "./AddExpense";
import ExpenseContainer from "./ExpenseContainer";
import { useState } from "react";
const Body = () => {
  const [close, setclose]=useState("closeexpensecontainer")
  return (
    <div className="body">
      <Header />
      <div className="details">
        <h2>Hello</h2>
        <h2>User</h2>
      </div>

      <div className="combined">
        <div className="stats">
          <h2>Statistics</h2>
        </div>
        <div className="timeperiod">
          <Time dtype={"From"} />
          <Time dtype={"To"} />
        </div>
        <MyPieChart />
        <Dashbord />
        
      </div>
      <AddExpense  scl1={setclose}/>
      <ExpenseContainer cl={close} scl={setclose}/>
    </div>
  );
};

export default Body;
