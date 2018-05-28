import {MDCRipple} from '@material/ripple';
import {MDCTopAppBar} from '@material/top-app-bar/index';
import {MDCPersistentDrawer, MDCPersistentDrawerFoundation, util} from '@material/drawer';

// Material Top-app-bar
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

// Material button
const ripple = new MDCRipple(document.querySelector('.foo-button'));

// Material Drawer
const drawer = new MDCPersistentDrawer(document.querySelector('.mdc-drawer--persistent'));
document.querySelector('.menu').addEventListener('click', () => (drawer.open ? drawer.open = false : drawer.open = true));