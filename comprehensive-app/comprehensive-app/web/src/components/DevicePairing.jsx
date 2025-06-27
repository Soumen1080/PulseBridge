import React, { useState } from 'react';

const DevicePairing = () => {
    const [deviceId, setDeviceId] = useState('');
    const [status, setStatus] = useState('');

    const handlePairDevice = () => {
        // Logic for pairing the device goes here
        // This could involve API calls to the backend
        setStatus(`Device ${deviceId} paired successfully!`);
    };

    return (
        <div>
            <h2>Device Pairing</h2>
            <input
                type="text"
                placeholder="Enter Device ID"
                value={deviceId}
                onChange={(e) => setDeviceId(e.target.value)}
            />
            <button onClick={handlePairDevice}>Pair Device</button>
            {status && <p>{status}</p>}
        </div>
    );
};

export default DevicePairing;