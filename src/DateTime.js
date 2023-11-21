import { useState } from "react";
import { format } from "date-fns";

const DateTime = () => {
  const [currentDate, setdate] = useState();

  const Time = () => {
    const date = new Date();
    const formattedDate = format(date, "yyyy-MM-dd hh-mm-ss");
    setdate(formattedDate)
  };


  return (
    <div className="date-container">
      <div className="date">
        <h1>time:{currentDate}</h1>
      </div>
    </div>
  );
};
export default DateTime;
