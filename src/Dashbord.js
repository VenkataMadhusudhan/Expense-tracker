const Dashbord=()=>{
    return(
            <div className="dashbord">
                <div className="category income">
                    <h3>Income : </h3>
                    <h3 className="ammount">100</h3>
                </div> 
               
                <div className="category wants">
                    <h3>Wants : </h3>
                    <h3 className="ammount">20</h3>
                </div>

                <div className="category needs">
                    <h3>Needs : </h3>
                    <h3 className="ammount">20</h3>
                </div>

                <div className="category savings">
                    <h3>Savings : </h3>
                    <h3 className="ammount">20</h3>
                </div>

                <div className="category left">
                    <h3>Left : </h3>
                    <h3 className="ammount">20</h3>
                </div>
            </div>

    )
}

export default Dashbord;