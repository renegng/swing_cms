import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar/index';
import { MDCPersistentDrawer, MDCPersistentDrawerFoundation, MDCPermanentDrawer, MDCPermanentDrawerFoundation, MDCTemporaryDrawer, MDCTemporaryDrawerFoundation, util } from '@material/drawer';
import { isNull } from 'util';

// Material Top-app-bar
var topAppBar = null;
if (!isNull(document.querySelector('.mdc-top-app-bar'))) {
    topAppBar = new MDCTopAppBar(document.querySelector('.mdc-top-app-bar'));
}

// Material button
var ripple = null;
if (!isNull(document.querySelector('.foo-button'))) {
    ripple = new MDCRipple(document.querySelector('.foo-button'));
}

// Material Drawer
var drawer = null;
if (!isNull(document.querySelector('.mdc-drawer--persistent'))) {
    drawer = new MDCPersistentDrawer(document.querySelector('.mdc-drawer--persistent'));
} else if (!isNull(document.querySelector('.mdc-drawer--temporary'))) {
    drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
} else if (!isNull(document.querySelector('.mdc-drawer--permanent'))) {
    drawer = new MDCPermanentDrawer(document.querySelector('.mdc-drawer--permanent'));
}
if (drawer != null){
    document.querySelector('.menu').addEventListener('click', () => (drawer.open ? drawer.open = false : drawer.open = true));
}