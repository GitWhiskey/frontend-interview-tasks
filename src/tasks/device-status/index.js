import { useState, useEffect } from 'react';
import { loadDeviceStatus } from './deviceUtils';

export default function DeviceStatus({ deviceId }) {
  // state
  const [loading, setLoading] = useState(true);
  const [deviceStatus, setDeviceStatus] = useState({
    deviceId,
    connection: 'UNKNOWN',
    batteryLevel: 'UNKNOWN',
    signalLevel: 'UNKNOWN',
  });

  // effects
  useEffect(
    () => {    
      setInterval(
        () => {
          loadDeviceStatus(deviceId).then((loadedDeviceStatus) => {
            setDeviceStatus(loadedDeviceStatus);
            setLoading(false);
          });
        },
        2000,
      );
    },
    [],
  );

  // render
  return (
    <div className="container">
        <h3>Device status</h3>
        { loading
         ? <div>Loading...</div>
         : Object.entries(deviceStatus).map(([key, value]) => (
              <div>{key}: <b>{value}</b></div>
           ))
        }
    </div>
  );
};