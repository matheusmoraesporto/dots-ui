import React from "react";
import "./styles.css";

function padTo2Digit(num) {
    return num.toString().padStart(2, '0');
}

function formatDate(dateISO) {
    const date = new Date(dateISO);
    return `${padTo2Digit(date.getDate())}/${padTo2Digit(date.getMonth() + 1)}/${date.getFullYear()}`;
}

function DeviceTable({ device }) {
    return (
        <div className="tableContainer">
            <table>
                <thead>
                    <tr>
                        <th colSpan={2} className="deviceUUID">Device: {device.deviceUUID}</th>
                    </tr>
                    <tr>
                        <th className="logFields">Data</th>
                        <th className="logFields">Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        device.signals.map(signal => {
                            return signal.logs.map((log, i) =>
                                <tr key={i}>
                                    <td>{formatDate(log.date)}</td>
                                    <td>{log.value}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default DeviceTable;