/* tslint:disable */
/* eslint-disable */
/**
 * Clash Bot Service
 * # Welcome to Clash Bot!   Where all of your League of Legends Clash scheduling needs are met!  ## Purpose  Clash Bot Webapp Service to support League of Legends Clash tournament scheduling with Discord.  ## Disclaimer  Clash-Bot is not endorsed by Riot Games and does not reflect the views or opinions of Riot Games or  anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games  are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc. 
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: rixxroid@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Metadata regarding the archive process.
 * @export
 * @interface ArchiveMetadata
 */
export interface ArchiveMetadata {
    /**
     * The number of Teams moved into the archive table.
     * @type {number}
     * @memberof ArchiveMetadata
     */
    teamsMoved?: number;
    /**
     * The number of Tentative Queues moved into the archive table.
     * @type {number}
     * @memberof ArchiveMetadata
     */
    tentativeQueuesMoved?: number;
    /**
     * The total time the process took in milliseconds
     * @type {string}
     * @memberof ArchiveMetadata
     */
    totalTime?: string;
}

/**
 * Check if a given object implements the ArchiveMetadata interface.
 */
export function instanceOfArchiveMetadata(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ArchiveMetadataFromJSON(json: any): ArchiveMetadata {
    return ArchiveMetadataFromJSONTyped(json, false);
}

export function ArchiveMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArchiveMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'teamsMoved': !exists(json, 'teamsMoved') ? undefined : json['teamsMoved'],
        'tentativeQueuesMoved': !exists(json, 'tentativeQueuesMoved') ? undefined : json['tentativeQueuesMoved'],
        'totalTime': !exists(json, 'totalTime') ? undefined : json['totalTime'],
    };
}

export function ArchiveMetadataToJSON(value?: ArchiveMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'teamsMoved': value.teamsMoved,
        'tentativeQueuesMoved': value.tentativeQueuesMoved,
        'totalTime': value.totalTime,
    };
}
