import React, {Component} from "react";
import "../css/Start.css";
import "bootstrap/dist/css/bootstrap.css";
import {Button} from "react-bootstrap";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {actionCreators} from "../reducers";
import {pages} from "../const/PagesConst";

class StartPage extends Component {
    render() {
        return (
            <div className="Main-text">
                <h1>Добро пожаловать на сайт проведения Уральской геологической олимпиады</h1>
                <Button bsPrefix="Main-button" onClick={() => this.props.selectPage(pages.INFORMATION)}>Информация о проведении</Button>
            </div>
        );
    }
}

export default connect(
    null,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(StartPage);
