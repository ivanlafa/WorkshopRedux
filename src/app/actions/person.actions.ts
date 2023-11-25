import { Person } from "../models/person.model";
import { createAction, props } from '@ngrx/store';


export const addPerson = createAction('[Person] Add', props<{ person: Person }>());
export const editPerson = createAction('[Person] Edit', props<{ id: number, person: Person }>());
export const deletePerson = createAction('[Person] Delete', props<{ id: number }>());