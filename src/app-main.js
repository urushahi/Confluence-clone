import { LitElement, html } from "lit";
import { outlet } from "lit-element-router";

export class Main extends outlet(LitElement) {
  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define("app-main", Main);
