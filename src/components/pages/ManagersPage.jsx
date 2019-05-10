import React, {Component} from "react";
import './ManagersPage.css';
import registration from '../../images/signup-icon.png';
import request from '../../images/request.png';
import result from '../../images/results.png';
import reception from '../../images/reception.png';

export default class ManagersPage extends Component {
    render() {
        return (
            <div>
                <section className="sectionOne">
                    <div>
                        <h2>Зарегистрируйтесь на сайте, это необходимо для возможности подать заявку на олимпиаду</h2>
                    </div>
                    <div>
                        <img src={registration}/>
                    </div>
                </section>
                <section className="sectionTwo">
                    <div className="description">
                        <h2>Создайте заявку</h2>
                        <p>После регистрации создайте заявку, прикрепив к ней участников.
                            В дальнейшем вы сможете отредактировать заявку если возникнет необходимость</p>
                    </div>
                    <div>
                        <img src={request}></img>
                    </div>
                </section>
                <section className="sectionThree">
                    <div>
                        <img src={reception}></img>
                    </div>
                    <div className="description">
                        <h2>Пройдите регистрацию</h2>
                        <p>Прибыв на место проведения олимпиады подойдите к столу регистрации.
                            Сообщите информацию о территории и об отсутствующих/новых участниках.
                            Желательно прибыть за 20-25 минут до начала олимпиады</p>
                    </div>
                </section>
                <section className="sectionManagersFour">
                    <div className="description">
                        <h2>Проверьте итоги</h2>
                        <p>Документ с итогами будет опубликован на сайте вечером после проведения.
                            Если найдете несоответствия, то сообщите данную информацию организаторам
                        </p>
                    </div>
                    <div>
                        <img src={result}></img>
                    </div>
                </section>
            </div>
        );
    }
}
