/* tslint:disable */
/* eslint-disable */
export * from './models/index';

export const enum EVENT_TYPE {
    CREATE_TEAM = 'CREATE_TEAM',
    UPDATE_TEAM = 'UPDATE_TEAM',
    DELETE_TEAM = 'DELETE_TEAM',
    CREATE_TENTATIVE_QUEUE = 'CREATE_TENTATIVE_QUEUE',
    UPDATE_TENTATIVE_QUEUE = 'UPDATE_TENTATIVE_QUEUE',
    DELETE_TENTATIVE_QUEUE = 'DELETE_TENTATIVE_QUEUE'
};

export interface EventPayload {
    url: string,
    payload: any,
    event: EVENT_TYPE
    uuid: string
}