import React from 'react';
import logo from './logo.svg';
import './App.css';
import StartPage from "./components/StartPage";
import Header from "./components/Header";
import InformationPage from "./components/pages/InformationPage";
import ParticipantsPage from "./components/pages/ParticipantsPage";
import ManagersPage from "./components/pages/ManagersPage";
import {connect} from "react-redux";
import {pages} from "./const/PagesConst";

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <div className="App-nav">
                    <Header/>
                </div>
                <div className="App-content">
                    {renderContent(this.props.page)}
                </div>
            </div>
        );
    }
}

const renderContent = type => {
    switch (type) {
        case pages.MAIN :
            return <StartPage/>;
        case pages.INFORMATION:
            return (<InformationPage/>);
        case pages.PARTICIPANTS:
            return (<ParticipantsPage/>);
        case pages.MANAGERS:
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
