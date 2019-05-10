import React from 'react';
import logo from './logo.svg';
import './App.css';
import StartPage from "./components/StartPage";
import Header from "./components/Header";
import back from './images/start-background.jpg';
import InformationPage from "./components/pages/InformationPage";
import ParticipantsPage from "./components/pages/ParticipantsPage";
import ManagersPage from "./components/pages/ManagersPage";
import {connect} from "react-redux";


class App extends React.Component{
    render() {
        return (
            <div className="App">
                <div className="App-nav">
                    <Header/>
                </div>
                <div className="App-content">
                    {/*<StartPage/>*/}
                    {renderContent(this.props.page)}

                    {/*<img src={back} alt="Logo"/>*/}

                </div>
            </div>
        );
    }
}

const renderContent = type => {
    switch (type) {
        case 'Main' :
            return <StartPage/>;
        case 'Information':
            return (<InformationPage/>);
        case 'Participants':
            return (<ParticipantsPage/>);
        case 'Managers' :
            return (<ManagersPage/>);
    }
};

const mapStateToProps = store => {
    return {
        page: store.page
    }
};

export default connect(
    mapStateToProps
)(App);
