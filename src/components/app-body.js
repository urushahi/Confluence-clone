import {LitElement, html, css} from 'lit';
import '../components/sidebar';
import '../components/card-discover';
import '../components/tab';
import '@material/mwc-icon';

export class AppBody extends LitElement {
  static styles = css`
    main {
      display: grid;
      grid-template-columns: 1fr 4fr;
    }
    ul,
    p,
    h5 {
      margin: 0;
    }
    .sidebar ul {
      list-style: none;
    }
    .sidebar ul li {
      font-size: 0.875rem;
      color: #172b4d;
      padding: 0.75rem;
    }
    .main-body {
      padding: 2rem;
    }
    .main-body .header-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
    }
    .card-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 1.5rem;
      margin: 1.5rem 0;
    }
    .card {
      border-radius: 4px;
      border: 1px solid #dfe1e6;
      padding: 1rem;
      cursor: pointer;
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
    }
    .title-desc {
      font-size: 0.675rem;
    }
    .date {
      margin-top: 0.5rem;
      font-size: 0.675rem;
    }
    .link-blue {
      color: #0052cc;
      text-decoration: none;
    }
    .link-blue:hover {
      text-decoration: underline;
    }
  `;
  render() {
    return html`
      <main>
        <app-sidebar></app-sidebar>
        <div class="main-body">
          <h5 class="header-title">PICK UP WHERE YOU LEFT OFF</h5>
          <div class="card-container">
            <div class="card">
              <div class="card-title">
                <mwc-icon class="icon">article</mwc-icon>
                <div class="desc">
                  <p class="title">Resume Preparation Checklist</p>
                  <p class="title-desc">Leapfrog Staffing Management</p>
                </div>
              </div>
              <div class="date">Visited 21 hours agp</div>
            </div>
            <div class="card">
              <div class="card-title">
                <mwc-icon class="icon">article</mwc-icon>
                <div class="desc">
                  <p class="title">Resume Preparation Checklist</p>
                  <p class="title-desc">Leapfrog Staffing Management</p>
                </div>
              </div>
              <div class="date">Visited 21 hours agp</div>
            </div>
            <div class="card">
              <div class="card-title">
                <mwc-icon class="icon">article</mwc-icon>
                <div class="desc">
                  <p class="title">Resume Preparation Checklist</p>
                  <p class="title-desc">Leapfrog Staffing Management</p>
                </div>
              </div>
              <div class="date">Visited 21 hours agp</div>
            </div>
            <div class="card">
              <div class="card-title">
                <mwc-icon class="icon">article</mwc-icon>
                <div class="desc">
                  <p class="title">Resume Preparation Checklist</p>
                  <p class="title-desc">Leapfrog Staffing Management</p>
                </div>
              </div>
              <div class="date">Visited 21 hours agp</div>
            </div>
            <div class="card">
              <div class="card-title">
                <mwc-icon class="icon">article</mwc-icon>
                <div class="desc">
                  <p class="title">Resume Preparation Checklist</p>
                  <p class="title-desc">Leapfrog Staffing Management</p>
                </div>
              </div>
              <div class="date">Visited 21 hours agp</div>
            </div>
            <div class="card">
              <div class="card-title">
                <mwc-icon class="icon">article</mwc-icon>
                <div class="desc">
                  <p class="title">Resume Preparation Checklist</p>
                  <p class="title-desc">Leapfrog Staffing Management</p>
                </div>
              </div>
              <div class="date">Visited 21 hours agp</div>
            </div>
          </div>
          <div>
            <div class="header-title">
              <h5>DISCOVER WHAT'S HAPPENING</h5>
              <a href="/" class="link-blue">Edit feed</a>
            </div>
            <app-tab></app-tab>
          </div>
          <card-discover></card-discover>
          <card-discover></card-discover>
          <card-discover></card-discover>
        </div>
      </main>
    `;
  }
}

customElements.define('app-body', AppBody);
