import {LitElement, html} from 'lit';
import '@material/mwc-icon';

export class AppHeader extends LitElement {
  static get properties() {
    return {
      navItems: {type: Array},
    };
  }

  constructor() {
    super();
    this.navItems = [];
  }

  render() {
    return html` <style>
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
        .header-right ul li:not(:last-child) {
          margin-right: 1.5rem;
        }
        .logo {
          height: 30px;
          object-fit: contain;
          margin-right: 1.5rem;
        }
        .logo img {
          height: 100%;
        }
        .btn-create {
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
        .btn-create .icon {
          font-size: 1.25rem;
          margin-right: 0.25rem;
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
        }
      </style>
      <header class="header">
        <div class="header-right">
          <div class="menu">
            <mwc-icon>menu</mwc-icon>
          </div>
          <div class="logo">
            <img src="src/assets/image/logo.png" />
          </div>
          <ul class="navbar">
            <li>Home</li>
            <li>Recents</li>
            <li>Spaces</li>
            <li>Teams</li>
            <li>Apps</li>
            <li>
              <button class="btn btn-create">
                <mwc-icon class="icon">add</mwc-icon>
                <p>Create</p>
              </button>
            </li>
          </ul>
        </div>
        <div class="header-left">
          <div class="form-search">
            <mwc-icon class="icon"> search</mwc-icon>
            <input type="text" placeholder="Search" />
          </div>
          <div><mwc-icon> notifications</mwc-icon></div>
          <div><mwc-icon> help</mwc-icon></div>
          <div class="avatar-user">
            <img src="src/assets/image/user.jpg" />
          </div>
        </div>
      </header>`;
  }
}

customElements.define('app-header', AppHeader);
