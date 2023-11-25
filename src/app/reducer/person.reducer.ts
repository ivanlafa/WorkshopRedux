import { createReducer, on } from '@ngrx/store';
import { Person } from '../models/person.model';
import * as PersonActions from '../actions/person.actions'

export interface AppState {
    app: any;
    people: Person[];
  }
  
  export const initialState: AppState = {
      people: [],
      app: undefined
  };
  
  export const personReducer = createReducer(
    initialState,
    on(PersonActions.addPerson, (state, { person }) => ({
      ...state,
      people: [...state.people, { ...person, id: state.people.length + 1 }],
    })),
    on(PersonActions.editPerson, (state, { id, person }) => ({
      ...state,
      people: state.people.map((p) => (p.id === id ? { ...person, id } : p)),
    })),
    on(PersonActions.deletePerson, (state, { id }) => ({
      ...state,
      people: state.people.filter((p) => p.id !== id),
    }))
  );