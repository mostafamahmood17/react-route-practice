import React from 'react';
import {Link, useHistory} from "react-router-dom";



const Friends = (props) => {
    
   const {name, email, id} = props.friend;
   const history = useHistory();
   const friendsStyle = {
        border : '1px solid purple',
        padding : "5px",
        margin : "5px",
        textAlign : 'center',
        borderRadius: "25px"
    }
    const handleClick = (friendId) => {
        history.push(`/friend/${friendId}`)
    }
    return (
        <div style={friendsStyle}>
            <h2>Name : {name}</h2>
            <h4>Email : {email}</h4>
            {/* <Link to={`/friend/${id}`}><button>Show Detail of {id}</button></Link> */}
            <button onClick={()=>handleClick(id)}>click me</button>
     
        </div>
    );
};

export default Friends;