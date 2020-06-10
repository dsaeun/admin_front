import React from "react";
import '../App.css';
import {Link} from "react-router-dom";

let AdminDisList = () => {
  return (
     <div>
        <h1>this is admindislist</h1>
        <button><Link to="/AdminDetail">move to admindetail</Link></button>
    </div>
  )
};

export default AdminDisList;