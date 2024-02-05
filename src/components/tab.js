import {LitElement, html, css} from 'lit';

export class Tab extends LitElement {
  static styles = css`
    .tab {
      display: flex;
      list-style: none;
      align-items: center;
      padding-left: 0;
      margin: 0.5rem 0 1rem;
    }
    .tab li {
      border-radius: 100px;
      border: 1px solid;
      color: #42526e;
      background-color: rgba(9, 30, 66, 0.04);
      font-size: 0.875rem;
      padding: 0.5rem;
      cursor: pointer;
      border: none;
    }
    .tab li:not(:last-child) {
      margin-right: 0.5rem;
    }
    .tab li:hover {
      background-color: #ebecf0;
    }
    .tab li.active {
      color: #0052cc;
      border: 1px solid #0052cc;
    }
    .tab li.active:hover {
      background-color: #deebff;
    }
  `;
  render() {
    return html`
      <style></style>
      <ul class="tab">
        <li class="active">Following</li>
        <li>Popular</li>
        <li>Annoucements</li>
      </ul>
    `;
  }
}

customElements.define('app-tab', Tab);
