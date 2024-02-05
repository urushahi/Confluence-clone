import '@material/mwc-icon';
import {LitElement, html, css} from 'lit';
import '../components/tab';
import '../components/sidebar';
import '../components/card-list';
import '../components/card-discover';

export class AppBody extends LitElement {
  static styles = css`
    main {
      max-width: 1400px;
      margin: 0 auto;
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
    .link-blue {
      color: #0052cc;
      text-decoration: none;
    }
    .link-blue:hover {
      text-decoration: underline;
    }
  `;

  static get properties() {
    return {
      cardData: {type: Array},
      cardDiscover: {type: Array},
    };
  }

  constructor() {
    super();
    this.cardData = [
      {
        team: 'Vyaguta',
        title: 'OKR Module Documentation Index',
        visitedAt: '2 hours ago',
        link: 'https://docs.google.com/document/d/1WBQ8Q-4RRo96dm7tIc_nEWBLTZa3EY0HduiEFrKM5Q8/edit?usp=sharing',
      },
      {
        team: 'Staff management Team',
        title: 'Resume Preparation Checklist',
        visitedAt: '8 hours ago',
        link: 'https://docs.google.com/document/d/1WBQ8Q-4RRo96dm7tIc_nEWBLTZa3EY0HduiEFrKM5Q8/edit?usp=sharing',
      },
      {
        team: 'Leapfrog',
        title: 'Year 2024 - Company Strategies',
        visitedAt: '',
        link: 'https://docs.google.com/document/d/1WBQ8Q-4RRo96dm7tIc_nEWBLTZa3EY0HduiEFrKM5Q8/edit?usp=sharing',
      },
      {
        team: 'Staff management Team',
        title: 'Online Learning Accounts',
        visitedAt: 'January 30th, 2020',
        link: 'https://docs.google.com/document/d/1WBQ8Q-4RRo96dm7tIc_nEWBLTZa3EY0HduiEFrKM5Q8/edit?usp=sharing',
      },
      {
        team: 'Design',
        title: 'Meeting Notes 2021',
        visitedAt: 'January 25th, 2020',
        link: 'https://docs.google.com/document/d/1WBQ8Q-4RRo96dm7tIc_nEWBLTZa3EY0HduiEFrKM5Q8/edit?usp=sharing',
      },
      {
        team: 'Staff management Team',
        title: 'Online Learning Accounts',
        visitedAt: 'January 30th, 2020',
        link: 'https://docs.google.com/document/d/1WBQ8Q-4RRo96dm7tIc_nEWBLTZa3EY0HduiEFrKM5Q8/edit?usp=sharing',
      },
    ];

    this.cardDiscover = [
      {
        user: 'Sabnam Buddhacharya',
        title: 'Worklog Guidelines',
        ownedBy: 'Sabnam Buddhacharya',
        editedAt: '2 hours ago',
        desc: "We understand that daily worklogs might seem like just another task on your to-do list, but we believe they can be both valuable and painless. Our goal is to make worklog submission asstraightforward and meaningful as possible and to understand an celebrate the fantastic work you do everyday. Here's a quickguide to help you breeze through your",
      },
      {
        user: 'Sabina Maharjan',
        title: 'Guilds',
        ownedBy: 'Sabnam Buddhacharya',
        editedAt: '2 hours ago',
        desc: 'Group of people with similar interest/hobby working together. Leapfrog Agile Go-to person Designation @Arpan Basnet Project Manager Product Management Go-to person Designation TBD Open Source Go-to person Designation @Swechhya Bista Principal Engineer LF Music Go-to person Designation @sunnymahat Senior Manager, Marketing &amp; Communications LF Sports',
      },
      {
        user: 'Manasha Shakya',
        title: 'Vyaguta Maintenance Plan',
        ownedBy: 'Manasha Shakya',
        editedAt: '2 hours ago',
        desc: 'Infrastructure Maintenance Plan Date Description Author 02/04/2024 Infrastructure Maintenance EKS upgrade from v25 to v29 Maintenance Details: Maintenance Date/Time NPT: Sunday (Start Time: 11:00 AM) Maintenance Team @Bipin Pandey Release Version EKS v29.00.00 Maintenance Coordinator @Bipin Pandey Release Assignee @Bipin Pandey Notify To (Tag peopl',
      },
    ];
  }

  render() {
    return html`
      <main>
        <app-sidebar></app-sidebar>
        <div class="main-body">
          <h5 class="header-title">PICK UP WHERE YOU LEFT OFF</h5>

          <div class="card-container">
            ${this.cardData.map(
              (item) =>
                html`<card-list
                  title=${item.title}
                  team=${item.team}
                  visitedAt=${item.visitedAt}
                  link=${item.link}
                ></card-list>`
            )}
          </div>

          <div class="header-title">
            <h5>DISCOVER WHAT'S HAPPENING</h5>
            <a href="/" class="link-blue">Edit feed</a>
          </div>

          <app-tab></app-tab>
        </div>
      </main>
    `;
  }
}

customElements.define('app-body', AppBody);
