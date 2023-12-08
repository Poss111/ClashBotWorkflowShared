/* tslint:disable */
/* eslint-disable */
export * from './runtime';
export * from './models/index';
export * from './events/index';

export const enum EVENT_TYPE {
    CREATE_TEAM = 'CREATE_TEAM',
    UPDATE_TEAM = 'UPDATE_TEAM',
    DELETE_TEAM = 'DELETE_TEAM',
    CREATE_TENTATIVE_QUEUE = 'CREATE_TENTATIVE_QUEUE',
    UPDATE_TENTATIVE_QUEUE = 'UPDATE_TENTATIVE_QUEUE',
    DELETE_TENTATIVE_QUEUE = 'DELETE_TENTATIVE_QUEUE'
};

export const enum SUBSCRIPTION_TYPE {
    WATCH_ALL = 'WATCH_ALL',
    ERROR_ONLY = 'ERROR_ONLY',
}

export interface EventPayload {
    url: string,
    payload: any,
    event: EVENT_TYPE
    uuid: string
}

export const enum TABLE_TYPES {
    TEAM = 'TEAM',
    TENTATIVE_QUEUE = 'TENTATIVE_QUEUE',
    TOURNAMENT = 'TOURNAMENT',
}