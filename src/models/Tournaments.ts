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
import type { DetailedTournament } from './DetailedTournament';
import {
    DetailedTournamentFromJSON,
    DetailedTournamentFromJSONTyped,
    DetailedTournamentToJSON,
} from './DetailedTournament';

/**
 * A list of Tournaments
 * @export
 * @interface Tournaments
 */
export interface Tournaments {
    /**
     * 
     * @type {number}
     * @memberof Tournaments
     */
    count?: number;
    /**
     * 
     * @type {Array<DetailedTournament>}
     * @memberof Tournaments
     */
    tournaments?: Array<DetailedTournament>;
}

/**
 * Check if a given object implements the Tournaments interface.
 */
export function instanceOfTournaments(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TournamentsFromJSON(json: any): Tournaments {
    return TournamentsFromJSONTyped(json, false);
}

export function TournamentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Tournaments {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'tournaments': !exists(json, 'tournaments') ? undefined : ((json['tournaments'] as Array<any>).map(DetailedTournamentFromJSON)),
    };
}

export function TournamentsToJSON(value?: Tournaments | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'tournaments': value.tournaments === undefined ? undefined : ((value.tournaments as Array<any>).map(DetailedTournamentToJSON)),
    };
}

