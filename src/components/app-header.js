import {LitElement, html, css} from 'lit';

import '../components/button';
import '@material/mwc-icon';
import '../app-link';

export class AppHeader extends LitElement {
  static styles = css`
    body,
    p {
      padding: 0;
      margin: 0;
    }
    header {
      background-color: #038e43;
      padding: 0.5rem 1rem;
      background-color: #038e43;
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: sticky;
      top: 0;
      z-index: 2;
    }
    .header-right {
      display: flex;
      align-items: center;
    }
    .header-right ul {
      list-style: none;
      display: flex;
      align-items: center;
      padding-left: 0;
      margin: 0;
    }
    .navbar li {
      font-size: 0.875rem;
      position: relative;
      padding: 0.25rem;
      cursor: pointer;
      display: flex;
      align-items: center;
    }
    .navbar li:hover {
      background-color: #73817999;
      box-shadow: 0 0 0 2px transparent;
      color: #fff;
    }
    .navbar li.active::after {
      content: '';
      height: 3px;
      position: absolute;
      background-color: white;
      bottom: -14px;
      width: 100%;
      left: -1px;
      border-radius: 1px;
    }
    .header-right ul li:not(:last-child) {
      margin-right: 0.75rem;
    }
    .logo {
      height: 27px;
      width: 145px;
      object-fit: contain;
      margin-right: 1.5rem;
      overflow: hidden;
    }
    .logo img {
      height: 100%;
      width: 100%;
    }

    .form-search {
      position: relative;
    }
    .form-search input {
      padding: 0.5rem 1rem 0.5rem 2rem;
      border: 2px solid rgba(255, 255, 255, 0.5);
      background-color: transparent;
      border-radius: 4px;
      color: white;
      outline: none;
    }
    .form-search input::placeholder {
      color: white;
    }
    .form-search .icon {
      position: absolute;
      font-size: 1rem;
      top: 50%;
      transform: translate(-50%, -50%);
      left: 1rem;
    }
    .menu {
      margin-right: 0.5rem;
    }

    .header-left {
      display: flex;
      align-items: center;
    }
    .header-left div:not(:last-child) {
      margin-right: 0.5rem;
    }
    .avatar-user {
      border-radius: 50%;
      height: 28px;
      width: 28px;
      border: 1px solid #ffffff;
      object-fit: contain;
      overflow: hidden;
    }
    .avatar-user img {
      height: 100%;
      width: 100%;
      cursor: pointer;
    }

    .dropdown {
      position: relative;
    }
    .dropdown-menu {
      padding: 0;
      margin: 0;
      position: absolute;
      left: -2rem;
      color: #172b4d;
      list-style: none;
      border-radius: 4px;
      background: white;
      box-shadow: 0 4px 8px -2px rgba(9, 30, 66, 0.25);
      display: none;
      overflow: hidden;
    }
    .dropdown-menu.show {
      display: block;
    }
    .dropdown-menu li {
      font-size: 0.875rem;
      padding: 0.5rem;
      cursor: pointer;
    }
    .dropdown-menu li:hover {
      background: #f4f5f7;
    }
    .dropdown-menu li:not(:last-child) {
      border-bottom: 1px solid #bdbdbd;
    }
    .logout {
      display: flex;
      align-items: center;
      color: #cb3030;
    }

    .logout .icon {
      font-size: 0.75rem;
      color: #cb3030;
      margin-left: 0.5rem;
    }
  `;

  constructor() {
    super();
    this.activeRoute = '';
    // Install router
    this.addEventListener('location-changed', this.handleLocationChanged);
    this.navItem = [
      {
        title: 'Home',
        url: '/',
      },
      {
        title: 'Recents',
        hasChild: true,
        url: '/recents',
      },
      {
        title: 'Spaces',
        components: '',
        hasChild: true,
        url: '/spaces',
      },
      {
        title: 'Teams',
        url: '/teams',
      },
      {
        title: 'Apps',
        url: '/apps',
      },
    ];
  }
  static get properties() {
    return {
      navItem: {type: Array},
      dropdown: {type: Boolean},
      activeRoute: {type: String},
    };
  }

  _handleClick(e) {
    this.dropdown = !this.dropdown;
  }
  _handleLocationChanged(event) {
    this.activeRoute = event.detail.location.pathname;
    // You can also access query parameters and hash from event.detail.location if needed
    // event.detail.location.search
    // event.detail.location.hash
    console.log("working")
  }

  render() {
    return html` <header class="header">
      <div class="header-right">
        <div class="menu">
          <mwc-icon>apps</mwc-icon>
        </div>
        <div class="logo">
          <img src="src/assets/image/logo.png" />
        </div>
        <ul class="navbar">
          ${this.navItem.map(
            (item) =>
            html` <li>
                <app-link href=${item?.url}> ${item?.title} </app-link>
                ${item?.hasChild && html`<mwc-icon>expand_more</mwc-icon>`}
              </li>`
          )}
          <li>
            <h1>${this.activeRoute}</h1>
            <app-button icon="add">Create</app-button>
          </li>
        </ul>
      </div>
      <header class="header-left">
        <div class="form-search">
          <mwc-icon class="icon"> search</mwc-icon>
          <input type="text" placeholder="Search" />
        </div>
        <div><mwc-icon> notifications</mwc-icon></div>
        <div><mwc-icon> help</mwc-icon></div>
        <div class="dropdown">
          <div class="avatar-user" @click=${this._handleClick}>
            <img src="src/assets/image/user.jpg" />
          </div>
          <ul class=${`dropdown-menu ${this.dropdown ? 'show' : ''}`}>
            <li>Username</li>
            <li class="logout">
              Logout
              <mwc-icon class="icon">logout</mwc-icon>
            </li>
          </ul>
        </div>
      </header>
    </header>`;
  }
}

customElements.define('app-header', AppHeader);
