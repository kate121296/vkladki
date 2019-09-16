import React from 'react';
import {Redirect} from "react-router-dom";

function Home({
    userEmail='',
    uid=null
}) {
    return (
       <div>
           Hello, {userEmail}
           {uid === null && (
               <Redirect push to="/login" />
           )}
       </div>
    );
}

export default Home;