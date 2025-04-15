export interface OSDetails {
    name: string;
    version: string;
}
/**
 * Returns the Operating System information
 *
 */
export declare function getUserOS(): OSDetails;
