import React, {Component} from 'react';
import '../css/Header.css';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../reducers";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: false
        };
        this.handleOver = this.handleOver.bind(this);
    }

    handleOver() {

    }

    render() {
        return (
            <div className="Navigation-panel">
                <div className="Brand" onMouseOver={this.handleOver}>
                    <h2 onClick={() => this.props.selectPage('Main')}>
                        Олимпиада</h2>
                </div>
                <nav className="Link-bar">
                    <a className="Link-item" onClick={() => this.props.selectPage('Information')}>Информация о
                        проведении</a>
                    <a className="Link-item" onClick={() => this.props.selectPage('Managers')}>Руководителям</a>
                    <a className="Link-item" onClick={() => this.props.selectPage('Participants')}>Участникам</a>
                </nav>
                <div className="Login">Вход в систему</div>
            </div>
        );
    }
}

export default connect(
    null,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Header);
