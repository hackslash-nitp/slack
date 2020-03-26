import React from 'react';
import logo from './logo.svg';
import './App.css';
import Firebase from 'firebase';
import { useAlert } from 'react-alert'
import config from './config';


const App = () => {
  var alert = useAlert();

  if (!Firebase.apps.length){
    Firebase.initializeApp(config);
  }

  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Title">Join HackSlash on Slack!</p>
        <form>
          <input className="input-field" placeholder="Name" id="name"/> <br></br>
          <input className="input-field" placeholder="Email" id="email"/> <br></br>
          <input className="input-field" placeholder="Link to a merged PR in HackSlash on GitHub" id="link"/> <br></br>
          <input type='button' className="send-button" value='Request an invitation' onClick={() => {
            const data = {
              name: document.getElementById("name").value,
              email: document.getElementById("email").value,
              link: document.getElementById("link").value
            }

            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email) 
              && data.email.length !== 0 
              && data.name.length !== 0
              && data.link.length !== 0)
              Firebase.database().ref('/slack-applications/' + data.email.split('.')[0]).set(data)
              .then((value) => {
                alert.show('Request saved! You will receive an invite if it is approved!');
              }, (value) => {
                alert.error('Something went wrong, please try again!');
              });
              else {
                alert.error('Please fill all fields correctly');
              }
          }}/> 
        </form>
    </div>
  );
}
export default App;
