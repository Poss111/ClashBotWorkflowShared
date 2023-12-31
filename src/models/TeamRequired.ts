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
import type { TeamPlayerDetails } from './TeamPlayerDetails';
import {
    TeamPlayerDetailsFromJSON,
    TeamPlayerDetailsFromJSONTyped,
    TeamPlayerDetailsToJSON,
} from './TeamPlayerDetails';

/**
 * 
 * @export
 * @interface TeamRequired
 */
export interface TeamRequired {
    /**
     * Unique identifier for a Team.
     * @type {string}
     * @memberof TeamRequired
     */
    id?: string;
    /**
     * The name of the Team.
     * @type {string}
     * @memberof TeamRequired
     */
    name?: string;
    /**
     * 
     * @type {TeamPlayerDetails}
     * @memberof TeamRequired
     */
    playerDetails: TeamPlayerDetails;
    /**
     * The Discord server id that the Team belongs to.
     * @type {string}
     * @memberof TeamRequired
     */
    serverId: string;
    /**
     * 
     * @type {BaseTournament}
     * @memberof TeamRequired
     */
    tournament: BaseTournament;
    /**
     * The timestamp that the object was updated at
     * @type {Date}
     * @memberof TeamRequired
     */
    lastUpdatedAt?: Date;
}

/**
 * Check if a given object implements the TeamRequired interface.
 */
export function instanceOfTeamRequired(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "playerDetails" in value;
    isInstance = isInstance && "serverId" in value;
    isInstance = isInstance && "tournament" in value;

    return isInstance;
}

export function TeamRequiredFromJSON(json: any): TeamRequired {
    return TeamRequiredFromJSONTyped(json, false);
}

export function TeamRequiredFromJSONTyped(json: any, ignoreDiscriminator: boolean): TeamRequired {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'playerDetails': TeamPlayerDetailsFromJSON(json['playerDetails']),
        'serverId': json['serverId'],
        'tournament': BaseTournamentFromJSON(json['tournament']),
        'lastUpdatedAt': !exists(json, 'lastUpdatedAt') ? undefined : (new Date(json['lastUpdatedAt'])),
    };
}

export function TeamRequiredToJSON(value?: TeamRequired | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'playerDetails': TeamPlayerDetailsToJSON(value.playerDetails),
        'serverId': value.serverId,
        'tournament': BaseTournamentToJSON(value.tournament),
        'lastUpdatedAt': value.lastUpdatedAt === undefined ? undefined : (value.lastUpdatedAt.toISOString()),
    };
}

