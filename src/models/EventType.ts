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


/**
 * The type of event.
 * @export
 */
export const EventType = {
    Created: 'CREATED',
    Joined: 'JOINED',
    Removed: 'REMOVED',
    Updated: 'UPDATED',
    Deleted: 'DELETED'
} as const;
export type EventType = typeof EventType[keyof typeof EventType];


export function EventTypeFromJSON(json: any): EventType {
    return EventTypeFromJSONTyped(json, false);
}

export function EventTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventType {
    return json as EventType;
}

export function EventTypeToJSON(value?: EventType | null): any {
    return value as any;
}

