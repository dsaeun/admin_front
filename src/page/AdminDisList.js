import React from "react";
import '../App.css';
import {Link} from "react-router-dom";
import Header from '../component/Header'

let AdminDisList = () => {
  return (
     <div>
       <Header></Header>
       <div className="contentalign">
       <h1>this is admindislist</h1>
        <button><Link to="/AdminDetail">move to admindetail</Link></button>
       </div>
      </div>
  )
};

export default AdminDisList;