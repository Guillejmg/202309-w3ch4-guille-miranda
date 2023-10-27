import {repo} from '../data/repo';
import {Card} from './card';
import {Serie} from '../model/series';
import { Component } from './component';

export class List extends Component {
	constructor(selector: string) {
		super(selector);
		this.template = this.createTemplate();
		this.render();
	}

	manageComponent(){}

	render() {
		super.render();
		const elements = repo().map((item)=> new Card('ul',item as Serie));
		console.log(elements)
	}

	createTemplate() {
		return '<ul class="character-list row list-unstyled"></ul>';
	}
}
