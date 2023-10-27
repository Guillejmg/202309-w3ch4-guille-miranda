/* eslint-disable no-new */
import './styles.css';
import {Main} from './components/mainc';
import {Header} from './components/header';
import {Pending} from './components/pending';

function main() {
	new Header('.container');
	new Main('.container');
	new Pending('.container');
}

main();
