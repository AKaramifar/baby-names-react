import React from "react";
import "./ShowNames.css";

const ShowNames = (props) => {
  return (
    <div id="ShowNames.JSX" className="Div_ShowNames_CSS">
        {
            props.Names.map((baby, index)=>{
                return(
                    <div key="index" className={baby.sex === "m" ? "Div_Male_CSS" : "Div_Female_CSS"}>
                        {
                            baby.sex === "m" ? (<i class="fas fa-male"></i>) : (<i class="fas fa-female"></i>)
                        }
                        <p className="P_Name_CSS">{baby.name}</p>
                    </div>
                )
            })
        }
        {console.log(props.Names)}
    </div>
  );
};

export default ShowNames;
