import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import { State as IItems } from '../../reducers/todos';
import * as actions from '../../actions/todos';

@Component({
  selector: 'page-home',
  templateUrl: './home.page.html',
})
export class HomePage {

  constructor(private navCtrl: NavController,
    private store: Store<fromRoot.State> ) {

  }

  ngOnInit() {
    this.store.select('todos')
      .subscribe((todos: IItems) => {
        console.log('todos', todos.items);
    });
    this.store.dispatch(new actions.AddAction('hola'));
  }

}
