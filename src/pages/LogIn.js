import React, {Component} from 'react';

import AppBar from '../components/AppBar';
import CenterCard from '../components/CenterCard';

class LogIn extends Component{

    constructor(props){
        super(props);
        this.state = {
            userLoggedIn: false,
            userName:'',
            passWord:'',
            currentSelectedTab: 0,
        }
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onClickSubmit = this.onClickSubmit.bind(this);
    }

    onChangeUserName(e){
        e.preventDefault();
        this.setState({userName: e.target.value});
    }

    onChangePassword(e){
        e.preventDefault();
        let password = e.target.value;
        this.setState({passWord: password});
    }

    onClickSubmit(e) {
        alert('Lol don\'t trust this website for log in')
    }

    onClickTab = (e,value) =>{
        this.setState({currentSelectedTab: value});
    }

    render(){
        return(
            <div>
                <AppBar />
                
                
                <CenterCard    cardTitle="Welcome"
                                onChangeUsername={this.onChangeUserName}
                                onChangePassword={this.onChangePassword}
                                onClickSubmit={this.onClickSubmit}
                                value={this.state.currentSelectedTab}
                                onChangeTab={this.onClickTab}
                />

            </div>
    )}
}

export default LogIn;