import {Component} from './component';
import '../styles.css';

export class Pending extends Component {
	constructor(selector: string) {
		super(selector);
		this.template = this.createTemplate();
		this.render();
	}

	createTemplate() {
		return `
      <section class="series-pending">
          <h3 class="subsection-title">Pending series</h3>
          <p class="info">You have 4 series pending to watch</p>
          <p class="info">Congrats! You've watched all your series</p>
      </section>
      `;
	}
}
