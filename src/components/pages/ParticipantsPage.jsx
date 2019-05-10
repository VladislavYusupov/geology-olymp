import React, {Component} from "react";
import './ParticipantsPage.css';
import eat from '../../images/eat-water.png';
import runner from '../../images/begunok.png';
import prize from '../../images/prize.png';

export default class ParticipantsPage extends Component
{
    render() {
        return (
            <div>
                <section className="sectionOne">
                    <div>
                        <h1>Нет необходимости регистрироваться на сайте, на олимпиаду тебя зарегистрирует
                            руководитель!</h1>
                    </div>
                </section>
                <section className="sectionTwo">
                    <div className="description">
                        <h2>Позаботься о питании</h2>
                        <p>Перед тем, как приехать на олимпиаду, не забудь взять с собой воду и что-нибудь
                            перекусить, ведь ты захочешь есть раньше, чем закончится мероприятие</p>
                    </div>
                    <div>
                        <img src={eat}></img>
                    </div>
                </section>
                <section className="sectionThree">
                    <div>
                        <img src={runner}></img>
                    </div>
                    <div className="description">
                        <h2>Получи бегунок</h2>
                        <p>После твоего приезда на место проведения олимпиады подойди с руководителем к столу
                            регистрации
                            для получения бегунка</p>
                    </div>
                </section>
                <section className="sectionFour">
                    <div className="description">
                        <h2>Побеждай</h2>
                        <p>Бегунок необходим для прохождения станций и получения баллов, не потеряй его!
                            Если ты попадешь в тройку лучших по своему возрасту на станции или в общем зачете, то
                            будешь удостоен награды, поэтому советую хорошо подготовиться!
                        </p>
                    </div>
                    <div>
                        <img src={prize}></img>
                    </div>
                </section>
            </div>
        );
    }
}
