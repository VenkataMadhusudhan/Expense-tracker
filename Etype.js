import { useState } from "react";
const Etype = () => {
  const [color1, setColor1] = useState("active");
  const [color2, setColor2] = useState("inactive");
  const [color3, setColor3] = useState("inactive");
  const [color4, setColor4] = useState("inactive");
  const [color5, setColor5] = useState("inactive");
  return (
    <div className="etype">
      <button
        type="radio"
        name="income"
        
        className={` ${color1} color`}
        onClick={() => {
          setColor1("active");
          setColor2("inactive");
          setColor3("inactive");
          setColor4("inactive");
          setColor5("inactive");
        }}
        
      >
        Income
      </button>

      <button
        type="radio"
        name="income"
        className={` ${color2} color`}
        onClick={() => {
          setColor1("inactive");
          setColor2("active");
          setColor3("inactive");
          setColor4("inactive");
          setColor5("inactive");
        }}
      >
        Wants
      </button>

      <button
        type="radio"
        name="income"
        className={` ${color3} color`}
        onClick={() => {
          setColor1("inactive");
          setColor2("inactive");
          setColor3("active");
          setColor4("inactive");
          setColor5("inactive");
        }}
      >
        Needs
      </button>

      <button
        type="radio"
        name="income"
        className={` ${color4} color`}
        onClick={() => {
          setColor1("inactive");
          setColor2("inactive");
          setColor3("inactive");
          setColor4("active");
          setColor5("inactive");
        }}
      >
        Savings
      </button>

      <button
        type="radio"
        name="income"
        className={` ${color5} color`}
        onClick={() => {
          setColor1("inactive");
          setColor2("inactive");
          setColor3("inactive");
          setColor4("inactive");
          setColor5("active");
        }}
      >
        Left
      </button>
    </div>
  );
};

export default Etype;
