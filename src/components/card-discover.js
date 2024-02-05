import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

export class CardDiscover extends LitElement {
  render() {
    return html`
      <style>
        p {
          margin: 0;
        }
        .section-discover {
          margin-top: 1.5rem;
        }
        .card-discover {
          border-radius: 4px;
          border: 1px solid #dfe1e6;
          padding: 1rem;
          display: flex;
          cursor: pointer;
        }
        .card-discover:hover {
          box-shadow: 0px 1px 1px rgba(9, 30, 66, 0.25);
        }
        .card-avatar {
          height: 2rem;
          width: 2rem;
          border-radius: 50%;
          object-fit: contain;
          flex-shrink: 0;
          overflow: hidden;
          margin-right: 1rem;
        }
        .card-avatar img {
          height: 100%;
          width: 100%;
        }

        .card-content .title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.875rem;
          color: #6b778c;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid #dfe1e6;
        }
        .card-content .name {
          color: #172b4d;
          font-weight: 500;
        }
        .desc .desc-content {
          font-size: 0.875rem;
          color: #6b778c;
        }
        .desc-title {
          display:flex;
          align-items:end;
          color: #172b4d;
          font-weight: 500;
          font-size: 14px;
          margin: 0.5rem 0 0.25rem;
        }
        .desc-title .icon {
          color: #2684ff;
          font-size: 1.75rem;
          margin-right: 0.25rem;
        }
        .desc-owner {
          font-size: 0.875rem;
          color: #6b778c;
          margin-bottom: 0.75rem;
        }
        .desc-content {
          font-size: 0.875rem;
          color: #6b778c;
        }
        .reaction-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .reaction-wrapper .comments {
          font-size: 0.75rem;
          color: #6b778c;
        }
      </style>
      <section class="section-discover">
        <div class="card-discover">
          <div class="card-avatar">
            <img src="src/assets/image/user.jpg" alt="User" />
          </div>
          <div class="card-content">
            <div class="title">
              <div>
                <span class="name">Sabnam Buddhacharya</span>
                edited 3 times
                <span>3 hours ago</span>
              </div>
              <p>3 recent actions</p>
            </div>
            <div class="desc">
              <div>
                <div class="desc-title">
                  <mwc-icon class="icon">article</mwc-icon>
                  <span> Worklog Guidelines</span>
                </div>
                <div class="desc-owner">Owned by Sabnam Buddhacharya</div>
              </div>
              <div class="desc-content">
                We understand that daily worklogs might seem like just another
                task on your to-do list, but we believe they can be both
                valuable and painless. Our goal is to make worklog submission as
                straightforward and meaningful as possible and to understand and
                celebrate the fantastic work you do everyday. Here's a quick
                guide to help you breeze through your
              </div>
              <div class="reaction-wrapper">
                <div class="emoji"></div>
                <div class="comments">
                  <span class="icon"></span>
                  <span>3 comments </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('card-discover', CardDiscover);
