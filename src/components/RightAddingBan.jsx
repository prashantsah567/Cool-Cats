import React from 'react';
import './MainView.css'

const RightAddingBan = (props) =>{
    return(
        <div>
            <h2>Ban List</h2>
            <p>Select an attribute in your listing to ban it</p>
            {
                props.selectedCharacter.map((value, index) => (
                    <div key={index}>
                        <button className="button-1">{value}</button>
                        <br /><br />
                    </div>
                ))
            }
        </div>
    );
}

export default RightAddingBan;