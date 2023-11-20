import { EVENT_TYPE } from "..";

export interface WebsocketEvent {
    requestId: string;
    eventType: EVENT_TYPE;
    payload: any;
}