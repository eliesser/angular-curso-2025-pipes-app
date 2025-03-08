import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import {
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  SlicePipe,
} from '@angular/common';

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
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe],
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
}
