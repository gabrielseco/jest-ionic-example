import { Action } from '@ngrx/store';

export const ADD_ITEM =  '@@TODO/ADD_ITEM';


/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class AddAction implements Action {
  readonly type = ADD_ITEM;

  constructor(public payload: string) { }
}


/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = AddAction;