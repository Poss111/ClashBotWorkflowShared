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
import type { Tentative } from './Tentative';
import {
    TentativeFromJSON,
    TentativeFromJSONTyped,
    TentativeToJSON,
} from './Tentative';

/**
 * A list of queues for Players unsure if they will play Clash for a given Tournament.
 * @export
 * @interface Tentatives
 */
export interface Tentatives {
    /**
     * 
     * @type {number}
     * @memberof Tentatives
     */
    count?: number;
    /**
     * 
     * @type {Array<Tentative>}
     * @memberof Tentatives
     */
    queues?: Array<Tentative>;
}

/**
 * Check if a given object implements the Tentatives interface.
 */
export function instanceOfTentatives(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TentativesFromJSON(json: any): Tentatives {
    return TentativesFromJSONTyped(json, false);
}

export function TentativesFromJSONTyped(json: any, ignoreDiscriminator: boolean): Tentatives {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'queues': !exists(json, 'queues') ? undefined : ((json['queues'] as Array<any>).map(TentativeFromJSON)),
    };
}

export function TentativesToJSON(value?: Tentatives | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'queues': value.queues === undefined ? undefined : ((value.queues as Array<any>).map(TentativeToJSON)),
    };
}

