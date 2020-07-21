import React, {Component} from 'react';
import '../css/Header.css';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../reducers";
import {pages} from "../const/PagesConst";

class Header extends Component {
    render() {
        return (
            <div className="Navigation-panel">
                <div className="Brand">
                    <h2 onClick={() => this.props.selectPage(pages.MAIN)}>
                        Олимпиада</h2>
                </div>
                <nav className="Link-bar">
                    <a className="Link-item" onClick={() => this.props.selectPage(pages.INFORMATION)}>Информация о
                        проведении</a>
                    <a className="Link-item" onClick={() => this.props.selectPage(pages.MANAGERS)}>Руководителям</a>
                    <a className="Link-item" onClick={() => this.props.selectPage(pages.PARTICIPANTS)}>Участникам</a>
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
