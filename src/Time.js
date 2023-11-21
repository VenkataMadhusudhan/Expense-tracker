const Time=(props)=>{
    return (
        <div className="time">
    
          <label>{props.dtype} Date</label>
          <input type="date" id="{}-date" />
        </div>
      );
    
}

export default Time;