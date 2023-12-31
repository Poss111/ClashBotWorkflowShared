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
import type { BaseTournament } from './BaseTournament';
import {
    BaseTournamentFromJSON,
    BaseTournamentFromJSONTyped,
    BaseTournamentToJSON,
} from './BaseTournament';
import type { TentativePlayer } from './TentativePlayer';
import {
    TentativePlayerFromJSON,
    TentativePlayerFromJSONTyped,
    TentativePlayerToJSON,
} from './TentativePlayer';

/**
 * 
 * @export
 * @interface TentativeRequired
 */
export interface TentativeRequired {
    /**
     * Unique identifier for the Tentative Queue.
     * @type {string}
     * @memberof TentativeRequired
     */
    id?: string;
    /**
     * The default Discord Server id for the player to use.
     * @type {string}
     * @memberof TentativeRequired
     */
    serverId: string;
    /**
     * 
     * @type {BaseTournament}
     * @memberof TentativeRequired
     */
    tournamentDetails: BaseTournament;
    /**
     * 
     * @type {Array<TentativePlayer>}
     * @memberof TentativeRequired
     */
    tentativePlayers: Array<TentativePlayer>;
    /**
     * The timestamp that the object was updated at
     * @type {Date}
     * @memberof TentativeRequired
     */
    lastUpdatedAt?: Date;
}

/**
 * Check if a given object implements the TentativeRequired interface.
 */
export function instanceOfTentativeRequired(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "serverId" in value;
    isInstance = isInstance && "tournamentDetails" in value;
    isInstance = isInstance && "tentativePlayers" in value;

    return isInstance;
}

export function TentativeRequiredFromJSON(json: any): TentativeRequired {
    return TentativeRequiredFromJSONTyped(json, false);
}

export function TentativeRequiredFromJSONTyped(json: any, ignoreDiscriminator: boolean): TentativeRequired {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'serverId': json['serverId'],
        'tournamentDetails': BaseTournamentFromJSON(json['tournamentDetails']),
        'tentativePlayers': ((json['tentativePlayers'] as Array<any>).map(TentativePlayerFromJSON)),
        'lastUpdatedAt': !exists(json, 'lastUpdatedAt') ? undefined : (new Date(json['lastUpdatedAt'])),
    };
}

export function TentativeRequiredToJSON(value?: TentativeRequired | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'serverId': value.serverId,
        'tournamentDetails': BaseTournamentToJSON(value.tournamentDetails),
        'tentativePlayers': ((value.tentativePlayers as Array<any>).map(TentativePlayerToJSON)),
        'lastUpdatedAt': value.lastUpdatedAt === undefined ? undefined : (value.lastUpdatedAt.toISOString()),
    };
}

