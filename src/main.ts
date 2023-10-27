/* eslint-disable no-new */
import './styles.css';
import {Header} from './components/header';
import {Main} from './components/mainc';
import {Pending} from './components/pending';

function main() {
	new Header('.container');
	new Main('.container');
	new Pending('.series');
}

main();
