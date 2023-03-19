import React, {useState} from 'react';
import LeftAddingImg from './LeftAddingImg';
import RightAddingBan from './RightAddingBan';
import './MainView.css';

const MainView = () => {
    const [imageLink, setImageLink] = useState('src/assets/mars.jpg');

    const url = 'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_1Rg1VoeW1VUHhwEXBuDJP9PPCWw59UwD0V1p3yC9cUBxmcaGFljiGHb5ViAUYchA';
    const submitDiscoverBtn = async () =>{
        const response = await fetch(url);
        const data = await response.json();
        setImageLink(data[Math.floor(Math.random() * 10)].url);
        console.log(data[Math.floor(Math.random() * 10)].url);
        console.log(data);
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
                        <div className="char1">RHAZ</div>
                        <div className="char2">CHEMCAM</div>
                        <div className="char3">MAHIL</div>
                        <div className="char4">NAVCAM</div>
                        <div className="char5">MINITES</div>
                    </div>
                    <p></p>
                    <img src={imageLink} width="500px" height="500px"/>
                    <p></p>
                    <button className="discoverBtn" onClick={submitDiscoverBtn}>🔄Discover</button>
                </div>
            </div>

            <div className='card' id="rightCard">
                <RightAddingBan />
            </div>
        </div>
    );
}

export default MainView;