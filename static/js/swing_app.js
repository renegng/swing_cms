import AOS from 'aos';
import { MDCMenu, Corner } from '@material/menu';
import { MDCPersistentDrawer, MDCPersistentDrawerFoundation, MDCPermanentDrawer, MDCPermanentDrawerFoundation, MDCTemporaryDrawer, MDCTemporaryDrawerFoundation, util } from '@material/drawer';
import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar/index';
import { isNull } from 'util';

// Initialize AOS
AOS.init();

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

// Material Menu
var shareMenu = null;
var shareMenuButton = null;
if (!isNull(document.querySelector('#shareMenu'))){
   shareMenu = new MDCMenu(document.querySelector('#shareMenu'));
   shareMenuButton = document.querySelector('#shareButton');
}
if (shareMenuButton != null){
    shareMenuButton.addEventListener('click', () => (shareMenu.open = !shareMenu.open));
    shareMenu.setAnchorCorner(Corner.BOTTOM_START);
    document.querySelector('#shareMenu').addEventListener('MDCMenu:selected', evt => shareRedirect(evt));
}

// Material Ripple
var shareButtonRipple = null;
var loginButtonRipple = null;
if (!isNull(document.querySelector('#shareButton').classList.contains('#topAppBar-button'))) {
    shareButtonRipple = new MDCRipple(document.querySelector('#shareButton'));
}
if (!isNull(document.querySelector('#loginButton'))) {
    loginButtonRipple = new MDCRipple(document.querySelector('#loginButton'));
}

// Material Top-app-bar
var topAppBar = null;
if (!isNull(document.querySelector('.mdc-top-app-bar'))) {
    topAppBar = new MDCTopAppBar(document.querySelector('.mdc-top-app-bar'));
}

// Social Media Share Redirect
// Applications URLs
const emailShareUrl = "mailto:?body=";
const facebookShareUrl = "https://www.facebook.com/sharer/sharer.php?u=";
const googlePlusShareURL = "https://plus.google.com/share?url=";
const linkedInShareURL = "https://www.linkedin.com/shareArticle?mini=true&url=";
const twitterShareURL = "https://twitter.com/share?ref_src=twsrc%5Etfw&text=";
const whatsAppShareURL = "https://wa.me/?text=";

function shareRedirect(e) {
    // Default text of the share message
    var shareText = "Check this out!";
    shareText = encodeURIComponent(shareText);

    // Share parameters
    var shareMyURL = location.href;
    shareMyURL = encodeURIComponent(shareMyURL);

    var shareTitle = document.title;
    shareTitle = encodeURIComponent(shareTitle);
    
    // Open a new window to share the content
    var shareAppName = e.detail.item.lastChild.textContent;
    shareAppName = shareAppName.toLowerCase().trim();

    switch (shareAppName){
        case 'email':
            window.open(emailShareUrl +  shareTitle + " - " + shareMyURL + "&subject=" + shareText + " - " + shareTitle);
            break;
        case 'facebook':
            window.open(facebookShareUrl +  shareMyURL);
            break;
        case 'google+':
            window.open(googlePlusShareURL + shareMyURL);
            break;
        case 'linkedin':
            window.open(linkedInShareURL + shareMyURL + "&title=" + shareTitle);
            break;
        case 'twitter':
            window.open(twitterShareURL + shareText + " - " + shareTitle);
            break;
        case 'whatsapp':
            window.open(whatsAppShareURL + shareText + " - " + shareTitle + ": " + shareMyURL);
            break;
        default:
            console.log("No implementation for SHARING to app named: " + shareAppName);
    }
}
