import {LitElement, html, css} from 'lit';

import '@material/mwc-icon';
export class CardDiscover extends LitElement {
  static styles = css`
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
      display: flex;
      align-items: end;
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
      margin-top: 0.5rem;
    }
    .reaction-wrapper .comments {
      font-size: 0.75rem;
      color: #6b778c;
    }
    .list-dotted:before {
      content: '';
      display: inline-block;
      height: 4px;
      width: 4px;
      border-radius: 50%;
      background-color: #6b778c;
      vertical-align: middle;
      margin: 0 0.375rem;
    }
    .emoji {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 1px solid #dfe1e6;
      border-radius: 20px;
      min-width: 32px;
      min-height: 24px;
    }
    .emoji:hover {
      background-color: #f4f5f7;
    }
    .emoji mwc-icon {
      font-size: 1rem;
      margin: 0 auto;
    }
  `;

  static properties = {
    user: '',
    title: '',
    ownedBy: '',
    desc: '',
    editedAt: '',
  };

  render() {
    return html`
      <section class="section-discover">
        <div class="card-discover">
          <div class="card-avatar">
            <img src="src/assets/image/user.jpg" alt="User" />
          </div>
          <div class="card-content">
            <div class="title">
              <div>
                <span class="name">${this.user}</span>
                edited<span class="list-dotted">${this.editedAt}</span>
              </div>
              <p>3 recent actions</p>
            </div>
            <div class="desc">
              <div>
                <div class="desc-title">
                  <mwc-icon class="icon">article</mwc-icon>
                  <span>${this.title}</span>
                </div>
                <div class="desc-owner">Owned by ${this.ownedBy}</div>
              </div>
              <div class="desc-content">${this.desc}</div>
              <div class="reaction-wrapper">
                <div class="emoji">
                  <mwc-icon>mood</mwc-icon>
                </div>
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
