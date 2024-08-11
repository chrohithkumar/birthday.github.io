import React from 'react';

import blue from './images/blue.png';
import green from './images/green.png';
import orange from './images/orange.png';
import pink from './images/pink.png';
import red from './images/red.png';
import white from './images/blue.png';
import yellow from './images/yellow.png';
import border from './images/border.png';
import audio from './audio/hbd.mp3';
import birthday from './images/birthday.png';
import iyan from './images/sir.jpeg';
import './birthday.css';

export default function Birthday() {
  return (
    <div>
      <div className="boarder">
        <img src={border} alt="ballonboarder" style={{ width: '100%', position: 'absolute' }} />
        <div className="blubcontainer" style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
          <img className="blub" src={blue} alt="blue_blub" />
          <img className="blub" src={green} alt="green_blub" />
          <img className="blub" src={orange} alt="orange_blub" />
          <img className="blub" src={pink} alt="pink_blub" />
          <img className="blub" src={red} alt="red_blub" />
          <img className="blub" src={white} alt="white_blub" />
          <img className="blub" src={yellow} alt="yellow_blub" />
        </div>
      </div>
      <div>
        
      <img  src={birthday} alt="birthday" style={{justifyContent:'center',display:'flex',marginLeft:'35%',marginTop:'5%'}}/>
   
      </div>
      <div>
      <img  src={iyan} alt="pic" style={{justifyContent:'center',display:'flex',marginLeft:'35%',borderRadius:'20px',marginTop:'5%',width:'30%'}} />
      </div>
      <div className="birthdaysong" style={{justifyContent:'center',display:'flex',marginLeft:'2%',marginTop:'5%'}}>
        <audio className="song" controls loop autoPlay>
          <source src={audio} type="audio/mpeg" />
        
        </audio>
      </div>
    </div>
  );
}
