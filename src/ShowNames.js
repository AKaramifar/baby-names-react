import React, { useState } from "react";
import "./ShowNames.css";

const ShowNames = (props) => {
  const [container, setFilter] = useState(props.Names);
  const MaleFilter = () => {
    setFilter(props.Names.filter((name) => name.sex === "f"));
  };
  const FemaleFilter = () => {
    setFilter(props.Names.filter((name) => name.sex === "f"));
  };

  return (
    <div>
      <div id="Div_Search_JSX" className="Div_Search_CSS">
        <div>
          <input
            type="text"
            id="Input_Name_JSX"
            className="Input_Name_CSS"
            placeholder="Search Names"
          />
        </div>
        <div id="Div_M_F_JSX" className="Div_M_F_CSS">
          <i
            className="I_C_M_Filter_CSS fas fa-male"
            onClick={() => MaleFilter()}
          ></i>
          <i
            className="I_C_F_Filter_CSS fas fa-female"
            onClick={() => MaleFilter()}
          ></i>
        </div>
        <i
          className="I_MaleFilter_CSS fas fa-male"
          onClick={() => MaleFilter()}
        ></i>
        <i
          className="I_FemailFilter_CSS fas fa-female"
          onClick={() => FemaleFilter()}
        ></i>
      </div>
      <div id="ShowNames.JSX" className="Div_ShowNames_CSS">
        {props.Names.sort((a, b) => a.name.localeCompare(b.name)).map(
          (baby, index) => {
            return (
              <div
                key={index}
                className={baby.sex === "m" ? (baby.name === "Afshin") ? "Div_Me_CSS" : "Div_Male_CSS" : "Div_Female_CSS"}
              >
                {baby.sex === "m" ? ( baby.name === "Afshin" ? (<i className="I_CSS fas fa-user-secret"></i>) : (<i class="I_CSS fas fa-male"></i>)
                ) : (
                  <i className="I_CSS fas fa-female"></i>
                )}
                <p className="P_Name_CSS">{baby.name}</p>
              </div>
            );
          }
        )}
        {console.log(props.Names)}
      </div>
    </div>
  );
};

export default ShowNames;
