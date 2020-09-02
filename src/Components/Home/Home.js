import React, { useState, useEffect } from 'react';
import Friends from '../Friends/Friends'


const Home = () => {
    const [friend , setFriend] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setFriend(data))
    .catch(err => console.error(err))
  },[])
  const friendStyle = {
    textAlign:"center",
    border : "1px solid blue",
    borderRadius: "25px"
  }
    return (
        <div style={friendStyle}>
               <h1>Hello Friends</h1>
                <p>friends :{friend.length}</p>
                { 
                friend.map(friend => <Friends friend = {friend}></Friends>)
                }
                        
        </div>
    );
};

export default Home;