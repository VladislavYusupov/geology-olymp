import React, {Component} from "react";
import './InformationPage.css';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {actionCreators} from "../../reducers";
import {pages} from "../../const/PagesConst";

class InformationPage extends Component {
    render() {
        return (
            <div>
                <section className="sectionInformationOne">
                    <div>
                        <h1>Олимпиада будет проходить в ДПШ им. Н.К.Крупской, расположенной по адресу:
                            Свердловский проспект 59, Челябинск, Челябинская обл.</h1>
                        <br/>
                        <p>Дата проведения </p>
                    </div>
                </section>
                <section className="sectionInformationTwo">
                    <div className="description">
                        <h2>Принять участие</h2>
                        <p>Для того, чтобы принять участие в олимпиаде, пожалуйста, ознакомтесь с
                            разделами {managersLink(this.props)} и {participantsLink(this.props)}</p>
                        <p>Желательно прибыть на олимпиаду за <strong>20-25 минут</strong> до начала проведения</p>

                    </div>
                </section>
                <section className="sectionInformationThree">
                    <div className="description">
                        <h2>Про станции</h2>
                        <p>На олимпиаде участникам необходимо пройти 5 станций:
                            <ul>
                                <li>Палеонтология</li>
                                <li>Полевая геология</li>
                                <li>Минералогия</li>
                                <li>Полезные ископаемые</li>
                                <li>Геологические процессы</li>
                            </ul>
                        </p>
                    </div>
                </section>
            </div>
        );
    }
}

const managersLink = props => {
    return (
        <a href="#" onClick={() => props.selectPage(pages.MANAGERS)}>Руководителям</a>
    );
}

const participantsLink = props => {
    return (
        <a href="#" onClick={() => props.selectPage(pages.PARTICIPANTS)}>Участникам</a>
    );
};

export default connect(
    null,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(InformationPage);
