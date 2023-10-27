import {Component} from './component';
import '../styles.css';

export class Main extends Component {
	constructor(selector: string) {
		super(selector);
		this.template = this.createTemplate();
		this.render();
	}

	createTemplate() {
		return `
  <main class="main">
    <section class="series">
      <h2 class="section-title">Series list</h2>
    </section>
  </main>
      `;
	}
}
