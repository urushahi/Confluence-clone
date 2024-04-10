import {LitElement, html, css} from 'lit';
import {navigator} from 'lit-element-router';

export class Link extends navigator(LitElement) {
  static get properties() {
    return {
      href: {type: String},
    };
  }
  static get styles() {
    return css`
      a {
        margin: 5px;
        text-decoration: none;
        color: inherit;
      }
    `;
  }
  constructor() {
    super();
    this.href = '';
  }
  render() {
    return html`
      <a href="${this.href}" @click="${this.linkClick}">
        <slot></slot>
      </a>
    `;
  }
  linkClick(event) {
    event.preventDefault();
    this.navigate(this.href);
  }
}

customElements.define('app-link', Link);
