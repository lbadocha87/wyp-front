import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import Container from "../components/Conteiner";
import Button from "../components/Button";
import style from "../style/VivesOrder.module.scss"

export default function VivesOrder() {
    const [status, setStatus] = useState([]);

    function listMachines() {
        axios.get('http://127.0.0.1:8080/machines/all')
            .then((res) => {
                setStatus(res.data)
            })
    };

    useEffect(() => {
        listMachines()
    }, [])

    return (

        <Container>
            {status.map(machine => {
                return (
                    <div className={style.contentVivesOrder} key={machine._id}>
                        <h3>
                            {machine.machineName}
                        </h3>
                        <table >
                            <thead>
                                <tr>
                                    <td
                                        colSpan="9">
                                        Dane maszyny
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={style.heder}>
                                    <td colSpan="3">
                                        Nazwa
                                    </td>
                                    <td colSpan="3">
                                        Model
                                    </td>
                                    <td colSpan="3">
                                        Dostępność
                                    </td>
                                </tr>

                                <tr>
                                    <td colSpan="3">
                                        {machine.machineName}
                                    </td>
                                    <td colSpan="3">
                                        {machine.model}
                                    </td>
                                    <td colSpan="3">
                                        {machine.quanitity} szt.
                                    </td>

                                </tr>
                                <tr className={style.hederTwo}>
                                <td colSpan="9" >
                                        Aplikacje
                                    </td>
                                </tr>
                                <tr className={style.heder}>
                                    <td>
                                        Imię
                                    </td>
                                    <td>
                                        Nazwisko
                                    </td>
                                    <td>
                                        Numer Pesel
                                    </td>
                                    <td>
                                        Numer kontaktowy
                                    </td>
                                    <td>
                                        Data rozpoczęcia wynajmu
                                    </td>
                                    <td>
                                        Data zakończenia wynajmu
                                    </td>
                                    <td>
                                        Status
                                    </td>
                                    <td>
                                        Akcje
                                    </td>
                                </tr>
                                {machine.aplication.map((order) => {
                                    return (
                                        <tr key={order._id}>
                                            <td>
                                                {order.firstName}
                                            </td>
                                            <td>
                                                {order.lastName}
                                            </td>
                                            <td>
                                                {order.numberId}
                                            </td>
                                            <td>
                                                {order.phoneNumber}
                                            </td>
                                            <td>
                                                {moment(order.startDate).format('DD/MM/YYY')}
                                            </td>
                                            <td>
                                                {moment(order.endDate).format('DD/MM/YYY')}
                                            </td>
                                            <td>
                                                {order.oderStan}
                                            </td>
                                            <td>
                                                <Button>
                                                    Odpowiedź
                                                </Button>

                                            </td>
                                        </tr>

                                    )
                                })}

                            </tbody>

                        </table>

                    </div>
                )
            })}
        </Container>
    )
}