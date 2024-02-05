// import {} from "@webcomponents/webcomponentsjs/webcomponents-loader.js";

import {LitElement, html} from 'lit-element';
import {router} from 'lit-element-router';

import './app-link';
import './app-main';
import './components/app-header';
import './components/app-body';

export class App extends router(LitElement) {
  static get properties() {
    return {
      route: {type: String},
      params: {type: Object},
      query: {type: Object},
      data: {type: Object},
    };
  }

  static get routes() {
    return [
      {
        name: 'home',
        pattern: '',
        data: {title: 'Home'},
      },
      {
        name: 'info',
        pattern: 'info',
      },
      {
        name: 'user',
        pattern: 'user/:id',
      },
      {
        name: 'not-found',
        pattern: '*',
      },
    ];
  }

  constructor() {
    super();
    this.route = '';
    this.params = {};
    this.query = {};
    this.data = {};
  }

  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    this.data = data;
  }

  render() {
    return html`
      <app-header></app-header>
      <!-- <app-link href="/"> Homeq </app-link>
      <app-link href="/info">Info</app-link>
      <app-link href="/info?data=12345">Info?data=12345</app-link>
      <app-link href="/user/14">user/14</app-link> -->

      <app-main active-route=${this.route}>
        <section route="home">
          <app-body></app-body>
        </section>
        <section route="info">Info ${this.query.data}</section>
        <section route="user">User ${this.params.id}</section>
        <section route="not-found">Not Found</section>
      </app-main>
    `;
  }
}

customElements.define('my-app', App);
