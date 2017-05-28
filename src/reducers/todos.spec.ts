import { reducer, State as IState} from './todos';
import * as actions from './../actions/todos';
describe('todos reducers', () => {
  it('should add an item', () => {
    const state: IState = {
      isSelected: false,
      items: []
    }
    const newState = reducer(state, new actions.AddAction('item'));
    expect(newState.items.length).toBe(1);
    expect(newState.items[0]).toBe('item');
    expect(newState.isSelected).toBeFalsy();
  });

  it('should return the same state', () => {
    const newState = reducer(undefined, <any>{type: 'any'});
    expect(newState.items.length).toBe(0);
    expect(newState.isSelected).toBeFalsy();
  });
});
