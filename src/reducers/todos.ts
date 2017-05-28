import * as todo from '../actions/todos';

export interface State {
  isSelected: boolean,
  items: string[]
};

export const initialState: State = {
  isSelected: false,
  items: []
};

export function reducer(state = initialState, action: todo.Actions): State {
  switch (action.type) {
    case todo.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload ]
      };
    default: {
      return state;
    }
  }
}

