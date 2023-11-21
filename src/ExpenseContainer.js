
import Time from "./Time";
import Etype from "../Etype";


const ExpenseContainer = (props) => {
  

  return (
    <div id="ec"  className={props.cl}>
      <div>
      <h2>Add your new Expense</h2>
      </div>
      <Time id="adddate" className="adddate" dtype={"Expense on "} />
      <h3>Select type of debit/cerdit</h3>
      <Etype/>
        <input type="text" className="discriptionfeild"placeholder="Description"/>
        <input type="number" className="discriptionfeild"placeholder="Amount" pattern="[0-9]*" min="0" inputmode="numeric" step="any"/>
      <div className="decision">
      <input type="button" className="submit" value="Submit"
       onClick={()=>{props.scl("closeexpensecontainer")}}
      />
      <input type="button" className="Cancel" value="Cancel"
      onClick={()=>{props.scl("closeexpensecontainer")}}
      />
      </div>
    </div>
  );
};
export default ExpenseContainer;
