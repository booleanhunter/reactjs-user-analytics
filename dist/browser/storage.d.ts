import UserInteractionResource from '../resources/userInteractionResource';
export declare function retrieveData(key: string): Promise<unknown>;
export declare function saveData(key: string, data: UserInteractionResource[]): Promise<void>;
export declare function clearData(): void;
export declare function initializeBeacon(dataKey: string, apiUrl: string): Promise<void>;
//# sourceMappingURL=storage.d.ts.map