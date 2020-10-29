import React from 'react'
import '../App.css'
import Header from '../component/common/Header'
import AdminDisList from './AdminDisList'
import AdminDetail from './AdminDetail'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DiseaseAddContainer from '../container/Disease/DiseaseAddContatiner'
import DiseaseEditContainer from '../container/Disease/DiseaseEditContainer'
import SymManage from './SymManage'
import PartManage from './PartManage'
import SubjectManage from './SubjectManage'
import UserManage from "./UserManage";

let CompleteLogin = () => {
  return (
    <Router>
      <div className="viewContain">
        <Header/>
        <div className="contentalign">
          <Switch>
            <Route exact path="/" component={AdminDisList}/>
            <Route path="/AdminDisList" component={AdminDisList}/>
            <Route path="/AdminDetail/:id" component={AdminDetail}/>
            <Route
              path="/AdminDisEditForm/:id"
              component={DiseaseEditContainer}
            />
            <Route
              path="/AdminDisAddForm"
              component={DiseaseAddContainer}
            />
            <Route path="/SymManage" component={SymManage}/>
            <Route path="/PartManage" component={PartManage}/>
            <Route path="/SubjectManage" component={SubjectManage}/>
            <Route path="/UserManage" component={UserManage}/>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default CompleteLogin
