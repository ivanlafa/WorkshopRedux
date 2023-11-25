import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { personReducer } from './reducer/person.reducer';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, StoreModule.forRoot({ app: personReducer })],
  bootstrap: [AppComponent],
})
export class AppModule {}
