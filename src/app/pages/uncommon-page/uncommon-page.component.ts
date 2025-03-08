import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { interval, map, tap } from 'rxjs';

const client1 = {
  name: 'Eliesser',
  gender: 'male',
  age: 37,
  address: 'Spain, Ourense',
};

const client2 = {
  name: 'Gissel',
  gender: 'female',
  age: 35,
  address: 'Spain, Ourense',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [
    CardComponent,
    AsyncPipe,
    I18nPluralPipe,
    I18nSelectPipe,
    JsonPipe,
    KeyValuePipe,
    SlicePipe,
    TitleCasePipe,
    UpperCasePipe,
  ],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {
  client = signal(client1);

  invitationMap = {
    male: 'Mr.',
    female: 'Mrs.',
  };

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
    } else {
      this.client.set(client1);
    }
  }

  clientsMap = signal({
    '=0': 'we do not have any customers waiting',
    '=1': 'we have a customer waiting',
    '=2': 'we have 2 customers waiting',
    other: 'we have # customers waiting',
  });

  clients = signal(['Eliesser', 'Gissel', 'Samantha', 'Luan']);

  deleteClient() {
    this.clients.update((clients) => clients.slice(1));
  }

  // KeyValue Pipe
  profile = {
    name: 'Fernando',
    age: 39,
    address: 'Ottawa, Canada',
  };

  // Async Pipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject('Tenemos un error en la data');
      resolve('We have data from promise.');
      console.log('Finalized promise');
    }, 3500);
  });

  myObservableTimer = interval(2000).pipe(
    map((value) => value + 1),
    tap((value) => console.log('tap:', value))
  );
}
