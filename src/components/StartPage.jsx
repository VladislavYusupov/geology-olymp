import React, {Component} from "react";
import "../css/Start.css";
import {Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";

export default class StartPage extends Component {
    render() {
        return (
            <div className="Main-text">
                <h1>Добро пожаловать на сайт проведения Уральской геологической олимпиады</h1>
                <Button bsPrefix="Main-button">Информация о проведении</Button>
            </div>
        );
    }
}
