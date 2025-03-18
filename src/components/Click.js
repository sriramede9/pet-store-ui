import React,{useState} from "react";

function Click(){

    const [click,setClick] = useState(0);
    
    return(
        <div>
            <h1>Click Counter</h1>
            <p>{click}</p>
            <button onClick={()=>setClick(click+1)}>Click</button>
        </div>
    );
}

export default Click;