export function loadDeviceStatus(deviceId) {
    console.log('Loading status for device with id ' + deviceId);

    const signalLevels = ['LOW', 'MEDIUM', 'HIGH'];
    const randomSignalLevelIdx = Math.floor(Math.random() * 3);
    const deviceStatus = {
        deviceId,
        connection: 'ONLINE',
        batteryLevel: '95%',
        signalLevel: signalLevels[randomSignalLevelIdx],
    };

    return new Promise(resolve => setTimeout(() => resolve(deviceStatus), 1000));
}

