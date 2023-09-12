import React from "react";

function padTo2Digit(num) {
    return num.toString().padStart(2, '0');
}

function formatDate(dateISO) {
    const date = new Date(dateISO);
    return `${padTo2Digit(date.getDate())}/${padTo2Digit(date.getMonth() + 1)}/${date.getFullYear()}`;
}

function DeviceTable({ device }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>{device.deviceUUID}</th>
                </tr>
                <tr>
                    <th>Data</th>
                    <th>Valor</th>
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
    );
}

export default DeviceTable;