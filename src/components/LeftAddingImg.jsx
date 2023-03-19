import React from 'react';
import './MainView.css';

const LeftAddingImg = (props) =>{
    const {imageUrl,description} = props;
    return(
        <div>
            <h2>Who have we seen so far?</h2>
            {console.log(props.description)}
            {console.log(props.imageUrl)}
            <div>
                {
                    imageUrl.map((image, index) => (
                        <div key={index}>
                            <img src={image} width="200px" height="200px" />
                            <p>{description[index]}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default LeftAddingImg;