import {Component} from './component';
import '../styles.css';
export class Header extends Component {
	constructor(selector: string) {
		super(selector);
		this.template = this.createTemplate();
		this.render();
	}

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	manageComponent() {}

	render() {
		super.render();
	}

	createTemplate() {
		return `
    <header class="main-header">
      <h1 class="main-title">My Series</h1>
    </header>
    `;
	}
}
