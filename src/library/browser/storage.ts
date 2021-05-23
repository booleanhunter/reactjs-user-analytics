import localforage from 'localforage';
import UserInteractionResource from '../resources/userInteractionResource';

export function retrieveData(key: string) {
    return localforage.getItem(key)
}

export function saveData(key: string, data: UserInteractionResource[]) : Promise<void> {
    return localforage.setItem(key, data)
        .then((result) => {
            // console.log(result)
        })
        .catch((err) => {
            console.error("Error saving data", err)
        });
}

export function clearData() {
    localforage.clear()
}

export async function initializeBeacon(dataKey: string, apiUrl: string) {
    document.addEventListener('visibilitychange', async function () {
        if (document.visibilityState === 'hidden') {
            const eventsData = await retrieveData(dataKey) as any[];
            if (eventsData) {
                var blob = new Blob([JSON.stringify(eventsData)], { type: "text/plain" });
                const returnValue = navigator.sendBeacon(apiUrl, blob);

                if (returnValue) {
                    clearData();
                }
            }
        }
    });
}
