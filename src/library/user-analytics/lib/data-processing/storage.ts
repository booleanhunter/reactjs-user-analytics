// localforage
import localforage from 'localforage';

import UserInteractionResource from '../resources/userInteractionResource';
import { init } from './web-worker';

const worker = init();

interface StorageSettings {
    resourceLimit: number;
    apiUrl: string;
    dataKey?: string;
}

const STORAGE_SETTINGS_DEFAULTS : Required<StorageSettings> = {
    resourceLimit: 0,
    apiUrl: "",
    dataKey: "events",
}

export const StorageClient = (function () {
    let storageSettings : Required<StorageSettings> = STORAGE_SETTINGS_DEFAULTS;
    
    return {
        init: function (options: StorageSettings) {
            if (storageSettings.resourceLimit === 0) {
                storageSettings = {
                    ...options,
                    dataKey: options.dataKey ? options.dataKey : storageSettings.dataKey
                };
            }

            return this;
        },

        getConfig: function() {
            return storageSettings;
        },

        handle: async function(
            event: React.MouseEvent<HTMLElement, MouseEvent>, data: UserInteractionResource
        ) {
            let eventsData = await retrieveData(storageSettings.dataKey) as any[];

            if(eventsData) {
                if(eventsData.length < storageSettings.resourceLimit) {
                    saveData(storageSettings.dataKey, [data, ...eventsData]);
                } else {
                    if(window.navigator.onLine) {
                        const compressedData = await worker.gzip(eventsData) as Uint8Array;
                        
                        syncData(storageSettings.apiUrl, compressedData)
                            .then((res) => {
                                clearData();
                                saveData(storageSettings.dataKey, [data]);
                            })
                            .catch(err => {
                                saveData(storageSettings.dataKey, [data, ...eventsData])
                            })     
                    }
                    else {
                        saveData(storageSettings.dataKey, [data, ...eventsData]);
                    }
                }
            } else {
                saveData(storageSettings.dataKey, [data]);
            }
            
        }
    };
})();


function retrieveData(key: string) {
    return localforage.getItem(key)
}

function saveData(key: string, data: UserInteractionResource[]) : Promise<void> {
    return localforage.setItem(key, data)
        .then((result) => {
            // console.log(result)
        })
        .catch((err) => {
            console.error("Error saving data", err)
        });
}

function clearData() {
    localforage.clear()
        .then((data) => {
            console.log("data has been deleted successfully", data)
        })
}

export async function syncData(url: string, data: Uint8Array) {
    const response = await fetch(url, {
            method: 'POST',
            //mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
                'Content-Encoding': "gzip",
            
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: data
        });
    return response.json();
}