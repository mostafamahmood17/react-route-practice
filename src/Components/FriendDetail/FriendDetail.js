import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friends , setFriends] = useState({});
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setFriends(data))
    } ,[])
    const friendStyle = {
        textAlign:"center",
        border : "1px solid blue",
        borderRadius: "25px"
      }
    
    return (
        <div style={friendStyle}>
            <h4>this is my friend : {friendId}</h4>
            <h2>Name : {friends.name}</h2>
            <h2>Email : {friends.email}</h2>
            <h2>Phone : {friends.phone}</h2>
            <h2>Website : {friends.website}</h2>
            
        </div>
    );
};

export default FriendDetail;