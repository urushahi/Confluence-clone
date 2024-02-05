import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

export class CardList extends LitElement {
  static styles = css`
    p {
      margin: 0;
      color: #6b778c;
    }
    .card {
      border-radius: 4px;
      border: 1px solid #dfe1e6;
      padding: 1rem;
      display: block;
      cursor: pointer;
      text-decoration: none;
    }
    .card-title {
      display: flex;
    }
    .card-title .icon {
      color: #2684ff;
      font-size: 1.75rem;
      margin-right: 0.25rem;
    }
    .card:hover {
      box-shadow: 0px 1px 1px rgba(9, 30, 66, 0.25);
    }
    .title {
      font-size: 0.875rem;
      font-weight: 500;
      color: #172b4d;
    }
    .title-desc {
      font-size: 0.675rem;
    }
    .date {
      margin-top: 0.5rem;
      font-size: 0.675rem;
      color: #6b778c;
    }
  `;

  static properties = {
    title: '',
    team: '',
    visitedAt: '',
    link: '',
  };

  render() {
    return html`
      <a class="card" href=${this.link} target="blank" noopener noreferrer>
        <div class="card-title">
          <mwc-icon class="icon">article</mwc-icon>
          <div class="desc">
            <p class="title">${this.title}</p>
            <p class="title-desc">${this.team}</p>
          </div>
        </div>
        <div class="date">Visited ${this.visitedAt}</div>
      </a>
    `;
  }
}

customElements.define('card-list', CardList);
