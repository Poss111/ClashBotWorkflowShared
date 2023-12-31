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
import type { EventType } from './EventType';
import {
    EventTypeFromJSON,
    EventTypeFromJSONTyped,
    EventTypeToJSON,
} from './EventType';
import type { Team } from './Team';
import {
    TeamFromJSON,
    TeamFromJSONTyped,
    TeamToJSON,
} from './Team';
import type { Tentative } from './Tentative';
import {
    TentativeFromJSON,
    TentativeFromJSONTyped,
    TentativeToJSON,
} from './Tentative';

/**
 * 
 * @export
 * @interface TeamEvent
 */
export interface TeamEvent {
    /**
     * 
     * @type {Team}
     * @memberof TeamEvent
     */
    team?: Team;
    /**
     * 
     * @type {Tentative}
     * @memberof TeamEvent
     */
    tentative?: Tentative;
    /**
     * 
     * @type {EventType}
     * @memberof TeamEvent
     */
    eventType: EventType;
}

/**
 * Check if a given object implements the TeamEvent interface.
 */
export function instanceOfTeamEvent(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "eventType" in value;

    return isInstance;
}

export function TeamEventFromJSON(json: any): TeamEvent {
    return TeamEventFromJSONTyped(json, false);
}

export function TeamEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): TeamEvent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'team': !exists(json, 'team') ? undefined : TeamFromJSON(json['team']),
        'tentative': !exists(json, 'tentative') ? undefined : TentativeFromJSON(json['tentative']),
        'eventType': EventTypeFromJSON(json['eventType']),
    };
}

export function TeamEventToJSON(value?: TeamEvent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'team': TeamToJSON(value.team),
        'tentative': TentativeToJSON(value.tentative),
        'eventType': EventTypeToJSON(value.eventType),
    };
}

