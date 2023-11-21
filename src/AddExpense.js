
const AddExpense=(props)=>{
   
    return(
            <div className="addexpense">
               
               <button type="button" id="add-button"
               
               onClick={()=>{props.scl1("expensecontainer")}}
               

               >Add Expense</button>
              
            </div>

    )
}

export default AddExpense;