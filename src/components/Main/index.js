import React, { useState } from "react";
import DeviceTable from "../DeviceTable";
import api from '../../service/api';
import { Dayjs } from "dayjs";
import { DateField } from "@mui/x-date-pickers";

function Main() {
    const [devices, setDevices] = useState([]);
    const [since, setSince] = useState(Dayjs);
    const [until, setUntil] = useState(Dayjs);

    function handleDateFields(date) {
        return date ? `${date.format('YYYY-MM-DD')}` : null;
    }

    async function handleDevices() {
        try {
            const response = await api.get('device', {
                params: {
                    since: handleDateFields(since),
                    until: handleDateFields(until)
                }
            });
            setDevices(response.data.devices);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <DateField onChange={setSince} value={since} label="Data inicial" format="DD-MM-YYYY" />
            <DateField onChange={setUntil} value={until} label="Data final" format="DD-MM-YYYY" />
            <button onClick={handleDevices} type="button">Buscar logs</button>
            {devices.map(device => (
                <DeviceTable key={device.deviceUUID} device={device} />
            ))}
        </>
    );
}

export default Main;