import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{}} >
            <Scene key="root" hideNavBar>
                <Scene key="auth" >
                    <Scene key="login" component={LoginForm} title="Please Login" />
                </Scene>
                <Scene key="main" >
                    <Scene 
                        onRight={() => console.log('DERECHO!!!')}
                        rightTitle='Add'
                        key="employeeList" 
                        component={EmployeeList} 
                        title="Employee List" 
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
