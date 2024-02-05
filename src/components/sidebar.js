import '@material/mwc-icon';
import {LitElement, html} from 'lit';

export class Sidebar extends LitElement {
  render() {
    return html`
      <style>
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
          border-radius: 8px;
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
      </style>
      <div class="sidebar">
        <ul>
          <li class="active">
            <span class="icon">
              <mwc-icon class="material-symbols-outlined"> home </mwc-icon>
            </span>
            <p>Overview</p>
          </li>
          <li>
            <span class="icon">
              <mwc-icon> schedule </mwc-icon>
            </span>
            <p>Recent</p>
          </li>
          <li>
            <span class="icon">
              <mwc-icon> star_outline </mwc-icon>
            </span>
            <p>Starred</p>
          </li>
          <li>
            <span class="icon">
              <mwc-icon> notes </mwc-icon>
            </span>
            <p>Drafts</p>
          </li>
          <li>
            <span class="icon">
              <mwc-icon> check_box </mwc-icon>
            </span>
            <p>Task</p>
          </li>
        </ul>
        <h2 class="title">SPACES</h2>
        <ul>
          <li>
            <span class="icon">
              <img src="src/assets/image/leapfrog-ic-sq.svg" />
            </span>
            <p>Leapfrog Staffing Management</p>
          </li>
          <li>
            <span class="icon">
              <img src="src/assets/image/leapfrog-ic-sq.svg" />
            </span>
            Vyaguta
          </li>
          <li>
            <span class="icon">
              <img src="src/assets/image/leapfrog-ic-sq.svg" />
            </span>
            Leapfrog
          </li>
        </ul>
      </div>
    `;
  }
}

customElements.define('app-sidebar', Sidebar);
