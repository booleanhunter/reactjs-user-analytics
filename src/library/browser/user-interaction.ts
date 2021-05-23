import UserInteractionResource from '../resources/userInteractionResource';

import { gzip } from '../data-processing/compression';

import { retrieveData, saveData, clearData } from '../browser/storage';

declare let self: WorkerGlobalScope;

(function (self) {
    console.log("WorkerGlobalScope: ", WorkerGlobalScope)
    console.log("self: ", self);
})(self);

export interface StorageSettings {
    resourceLimit: number;
    ttl: number;
    apiUrl: string;
    dataKey?: string;
}

const STORAGE_SETTINGS_DEFAULTS : Required<StorageSettings> = {
    resourceLimit: 0,
    ttl: 5000,
    apiUrl: "",
    dataKey: "events",

}

let storageSettings : Required<StorageSettings> = STORAGE_SETTINGS_DEFAULTS;
let isAppLoaded : boolean = true;

export async function start(options: StorageSettings) {
    init(options);

    reAttemptSync(storageSettings.apiUrl, storageSettings.ttl, storageSettings.dataKey);
}

export function init(options: StorageSettings) {
    if (storageSettings.resourceLimit === 0) {
        storageSettings = {
            ...options,
            dataKey: options.dataKey ? options.dataKey : storageSettings.dataKey,
        };
    }
}

export function getConfig() {
    return storageSettings;
}

export async function handle(data: UserInteractionResource) {
    let eventsData = await retrieveData(storageSettings.dataKey) as any[];

    if(eventsData) {
        if(eventsData.length < storageSettings.resourceLimit) {
            saveData(storageSettings.dataKey, [data, ...eventsData]);
        } else {
            if(self.navigator.onLine) {
                const compressedData = gzip(eventsData) as Uint8Array;

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

export function onAppClose() {
    isAppLoaded = false;
    reAttemptSync(storageSettings.apiUrl, storageSettings.ttl, storageSettings.dataKey);
}

function reAttemptSync(url: string, ttl: number, key: string) {
    
    async function compressAndSend(){
        if(self.navigator.onLine) {
            const eventsData = await retrieveData(key) as any[];
            if(eventsData) {
                const compressedData = gzip(eventsData) as Uint8Array;

                syncData(url, compressedData)
                    .then((res) => {
                        clearData();
                    })
                    .catch(err => {
                        console.log("error is", err)
                    });
            } else {
                if (!isAppLoaded) {
                    // @ts-ignore
                    self.close(); // kill web worker
                }
            }
        }
    }

    const interval = setInterval(compressAndSend, ttl);

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
