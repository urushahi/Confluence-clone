import {LitElement, html, css} from 'lit';

export class AppButton extends LitElement {
  static styles = css`
    .btn {
      display: flex;
      align-items: center;
      padding: 0 0.675rem;
      border-radius: 4px;
      background-color: white;
      font-weight: 600;
      border: none;
      cursor: pointer;
      outline: none;
      height: 2rem;
    }
    .btn .icon {
      font-size: 1.25rem;
      margin-right: 0.25rem;
    }
  `;

  static properties = {
    icon: '',
  };

  render() {
    return html`
      <button class="btn">
        ${this.icon && html`<mwc-icon class="icon">${this.icon}</mwc-icon>`}
        <p>
          <slot></slot>
        </p>
      </button>
    `;
  }
}

customElements.define('app-button', AppButton);
