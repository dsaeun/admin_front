import React, { useState } from "react";
import {Link} from "react-router-dom";
import CompleteLogin from "./CompleteLogin";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function AdminLogin({history}) {

  const [inputID, setInputID] = useState("")
  const [inputPW, setInputPW] = useState("")
ck}>Login</button>
    </div>
  )
}

export default AdminLogin;