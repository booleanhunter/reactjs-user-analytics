import { default as UserInteractionResource } from '../resources/userInteractionResource';
export interface StorageSettings {
    resourceLimit: number;
    ttl: number;
    apiUrl: string;
    dataKey?: string;
}
export declare function start(options: StorageSettings): Promise<void>;
export declare function init(options: StorageSettings): void;
export declare function getConfig(): Required<StorageSettings>;
export declare function handle(data: UserInteractionResource): Promise<void>;
export declare function onAppClose(): void;
export declare function syncData(url: string, data: Uint8Array): Promise<any>;
