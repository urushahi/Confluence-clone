import {LitElement, html, css} from 'lit';
import '@material/mwc-icon';

export class Sidebar extends LitElement {
  static styles = css`
    p {
      margin: 0;
    }
    .sidebar {
      padding: 1.5rem 0 0 1rem;
    }
    .sidebar ul {
      list-style: none;
      padding: 0;
    }
    .sidebar ul li {
      position: relative;
      display: flex;
      align-items: center;
      font-size: 0.875rem;
      color: #172b4d;
      padding: 0.5rem;
      cursor: pointer;
      border-radius: 4px;
    }
    .sidebar ul li:hover {
      background-color: #f4f5f7;
    }
    .sidebar ul li.active {
      color: #0c66e4;
      background-color: #deebff;
    }
    .sidebar ul li.active::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 4px;
      height: 16px;
      -webkit-transform: translateY(-50%);
      -moz-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      background-color: #0c66e4;
      border-radius: 4px;
    }
    .sidebar ul li.active:hover {
      background-color: #cce0ff;
    }
    .sidebar ul li p {
      width: 200px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow-x: hidden;
    }
    .sidebar ul li mwc-icon {
      font-size: 1.25rem;
    }
    .sidebar .title {
      font-size: 0.75rem;
      color: #626f86;
      font-weight: 700;
    }
    .icon {
      display: block;
      height: 20px;
      width: 20px;
      overflow: hidden;
      object-fit: contain;
      margin-right: 0.75rem;
    }
    .icon img {
      height: 100%;
      width: 100%;
    }
  `;

  static get properties() {
    return {
      sidebarItems: {type: Array},
      spacesList: {type: Array},
    };
  }

  constructor() {
    super();
    this.sidebarItems = [
      {
        title: 'Overview',
        icon: 'home',
        active: true,
        url: '/',
      },
      {
        title: 'Recent',
        icon: 'schedule',
        url: '/',
      },
      {
        title: 'Starred',
        icon: 'star_outline',
        components: '',
        url: '/',
      },
      {
        title: 'Drafts',
        icon: 'notes',
        url: '/',
      },
      {
        title: 'Tasks',
        icon: 'check_box <',
        url: '/',
      },
    ];
    this.spacesList = [
      {
        title: 'Leapfrog Staffing management',
        url: '/',
      },
      {
        title: 'Vyaguta',
        url: '/',
      },
      {
        title: 'Leapfrog',
        components: '',
        url: '/',
      },
    ];
  }
  render() {
    return html`
      <div class="sidebar">
        <ul>
          ${this.sidebarItems.map(
            (item) =>
              html` <li>
                <span class="icon">
                  <mwc-icon class="material-symbols-outlined">
                    ${item?.icon}
                  </mwc-icon>
                </span>
                <p>${item?.title}</p>
              </li>`
          )}
        </ul>
        <h2 class="title">SPACES</h2>
        <ul>
          ${this.spacesList.map(
            (item) =>
              html` <li class=${item?.active && 'active'}>
                <span class="icon">
                  <img src="src/assets/image/leapfrog-ic-sq.svg" />
                </span>
                <p>${item?.title}</p>
              </li>`
          )}
        </ul>
      </div>
    `;
  }
}

customElements.define('app-sidebar', Sidebar);
