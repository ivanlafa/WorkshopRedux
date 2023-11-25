import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Person } from './models/person.model';
import { AppState } from './reducer/person.reducer';

import * as PersonActions from '../app/actions/person.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  people$ = this.store.select((state) => state.app.people);

  constructor(private store: Store<AppState>) {}

  addPerson(person: Person) {
    this.store.dispatch(PersonActions.addPerson({ person }));
  }

  editPerson(id: number, person: Person) {
    this.store.dispatch(PersonActions.editPerson({ id, person }));
  }

  deletePerson(id: number) {
    this.store.dispatch(PersonActions.deletePerson({ id }));
  }

  personFormModel: Person = { id: 0, name: '', age: 0, email: '', phone:0};
  editMode = false;

  onSubmit() {
    if (this.editMode) {
      this.editPerson(this.personFormModel.id, this.personFormModel);
    } else {
      this.addPerson({ ...this.personFormModel, id: 0 });
    }
    this.resetForm();
  }

  editPersonForm(person: Person) {
    this.personFormModel = { ...person };
    this.editMode = true;
  }

  resetForm() {
    this.personFormModel = { id: 0, name: '', age: 0, email: '', phone:0};
    this.editMode = false;
  }
}


