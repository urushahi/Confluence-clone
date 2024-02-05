import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '../../components/card-discover';

import '@material/mwc-icon';

export class Popular extends LitElement {
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

  static get properties() {
    return {
      cardDiscover: {type: Array},
    };
  }

  constructor() {
    super();

    this.cardDiscover = [
      {
        user: 'Pratik Shrestha',
        title: 'Template - Trouble shooting article',
        ownedBy: 'Pratik Shrestha',
        editedAt: '6 hours ago',
        desc: "We understand that daily worklogs might seem like just another task on your to-do list, but we believe they can be both valuable and painless. Our goal is to make worklog submission asstraightforward and meaningful as possible and to understand an celebrate the fantastic work you do everyday. Here's a quickguide to help you breeze through your",
      },
      {
        user: 'Sabina Maharjan',
        title: 'Guilds',
        ownedBy: 'Sabnam Buddhacharya',
        editedAt: '11 hours ago',
        desc: 'Group of people with similar interest/hobby working together. Leapfrog Agile Go-to person Designation @Arpan Basnet Project Manager Product Management Go-to person Designation TBD Open Source Go-to person Designation @Swechhya Bista Principal Engineer LF Music Go-to person Designation @sunnymahat Senior Manager, Marketing &amp; Communications LF Sports',
      },
      {
        user: 'Manasha Shakya',
        title: 'Vyaguta Maintenance Plan',
        ownedBy: 'Manasha Shakya',
        editedAt: '23 hours ago',
        desc: 'Infrastructure Maintenance Plan Date Description Author 02/04/2024 Infrastructure Maintenance EKS upgrade from v25 to v29 Maintenance Details: Maintenance Date/Time NPT: Sunday (Start Time: 11:00 AM) Maintenance Team @Bipin Pandey Release Version EKS v29.00.00 Maintenance Coordinator @Bipin Pandey Release Assignee @Bipin Pandey Notify To (Tag peopl',
      },
    ];
  }

  render() {
    return html`
      <section class="section-discover">
        ${this.cardDiscover.map(
          (item) =>
            html`<card-discover
              user=${item.user}
              title=${item.title}
              ownedBy=${item.ownedBy}
              desc=${item.desc}
              editedAt=${item.editedAt}
            ></card-discover>`
        )}
      </section>
    `;
  }
}

customElements.define('card-popular', Popular);
