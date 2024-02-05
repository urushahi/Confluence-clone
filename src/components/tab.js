import {LitElement, html, css} from 'lit';
import './tabComponents/card-folllowing';
import './tabComponents/card-popular';
import './tabComponents/card-annoucement';
import '@material/mwc-icon';

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
      display: flex;
      align-items: center;
      border-radius: 100px;
      border: 1px solid;
      color: #42526e;
      background-color: rgba(9, 30, 66, 0.04);
      font-size: 0.875rem;
      padding: 0.5rem;
      cursor: pointer;
      border: none;
    }
    .tab li .icon {
      font-size: 1rem;
      margin-right: 0.5rem;
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

  static properties = {
    activeTab: {type: Number},
  };

  constructor() {
    super();
    this.activeTab = 0;
  }

  changeTab(index) {
    this.activeTab = index;
  }

  get tabs() {
    return [
      {title: 'Following', icon: 'groups'},
      {title: 'Popular', icon: 'trending_up'},
      {title: 'Annoucements', icon: 'campaign'},
    ];
  }

  get activeTabContent() {
    switch (this.activeTab) {
      case 0:
        return html`<card-following></card-following>`;
      case 1:
        return html`<card-popular></card-popular>`;
      case 2:
        return html`<card-announcement></card-announcement>`;
      default:
        return html``;
    }
  }
  render() {
    return html`
      <style></style>
      <ul class="tab">
        ${this.tabs.map(
          (tab, index) => html`
            <li
              class=" ${this.activeTab === index ? 'active' : ''}"
              @click="${() => this.changeTab(index)}"
            >
              <mwc-icon class="icon">${tab?.icon}</mwc-icon>
              <span> ${tab?.title}</span>
            </li>
          `
        )}
      </ul>
      <div class="tab-content">${this.activeTabContent}</div>
    `;
  }
}

customElements.define('app-tab', Tab);
