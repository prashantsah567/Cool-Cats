import React, {useState} from 'react';
import LeftAddingImg from './LeftAddingImg';
import RightAddingBan from './RightAddingBan';
import './MainView.css';

const MainView = () => {
    const [imageLink, setImageLink] = useState('src/assets/cat1.jpeg');
    const [name, setName] = useState('Name');
    const [origin, setOrigin] = useState('USA');
    const [lifespan, setlifeSpan] = useState('lifespan');
    const [weight, setWeight] = useState('weight');
    const [selectedCharacter, setSelectedCharacter] = useState([]);

    const url = 'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=abys&api_key=live_1Rg1VoeW1VUHhwEXBuDJP9PPCWw59UwD0V1p3yC9cUBxmcaGFljiGHb5ViAUYchA';
    const submitDiscoverBtn = async () =>{
        const response = await fetch(url);
        const data = await response.json();
        const randomSelector = Math.floor(Math.random() * 10);
        setImageLink(data[randomSelector].url);
        document.querySelectorAll('.hidden').forEach(elem => elem.style.display = 'block');
        setName(data[randomSelector].breeds[0].name);
        setOrigin(data[randomSelector].breeds[0].origin);
        setlifeSpan(data[randomSelector].breeds[0].life_span);
        setWeight(data[randomSelector].breeds[0].weight.imperial);
        console.log(data);
    }

    const nameHandler = () =>{
        setSelectedCharacter([...selectedCharacter,name]);
    }

    const originHandler = () =>{
        setSelectedCharacter([...selectedCharacter,origin]);
    }

    const lifespanHandler = () =>{
        setSelectedCharacter([...selectedCharacter,lifespan]);
    }

    const weightHandler = () =>{
        setSelectedCharacter([...selectedCharacter,weight]);
    }

    return(
        <div className='containter'>
            <div className='card' id="leftCard">
                <LeftAddingImg />
            </div>

            <div className='card' id="mainCard">
                <div className="content">
                    <h1>Awesome Cats</h1>
                    <p>Cats around the world</p>
                    <p></p>
                    <div className='selectCharacter'>
                        <button className="button-1 hidden" role="button" onClick={nameHandler}>{name}</button>
                        <button className="button-1 hidden" role="button" onClick={originHandler}>{origin}</button>
                        <button className="button-1 hidden" role="button" onClick={lifespanHandler}>{lifespan} years</button>
                        <button className="button-1 hidden" role="button" onClick={weightHandler}>{weight} lbs</button>
                    </div>
                    <p></p>
                    <div id="hiddenImg">
                        <img src={imageLink} width="500px" height="450px" className="hidden" />
                    </div>
                    <p></p>
                    <button className="discoverBtn" onClick={submitDiscoverBtn}>🔄Discover</button>
                </div>
            </div>

            <div className='card' id="rightCard">
                <RightAddingBan selectedCharacter = {selectedCharacter} />
            </div>
        </div>
    );
}

export default MainView;