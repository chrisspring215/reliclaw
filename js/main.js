
/////////////////
// NAV FACTORY //
/////////////////

// SETS UP GLOBAL NAV LINKS
const globalNavigationLinks = {
    links: ['Home', 'Approach', 'Practice Areas', 'Attoneys', 'Engage Relic' ],
    addresses: ['index.html', 'index.html', 'index.html', 'index.html', 'index.html' ]
}

// BUILDS MOBILE AND GLOBAL NAV
function buildGlobalNavigation(a) {
    var globalNavigationLength = globalNavigationLinks.links.length;
    var globalNavigation = '';
    for (var i = 0; i < globalNavigationLength; i++) {
        var linkElement = '<a class="global-navigation__link" href="' + globalNavigationLinks.addresses[i] + '">' + globalNavigationLinks.links[i] + '</a>'
        globalNavigation = globalNavigation + linkElement
    }

    document.getElementsByTagName(a)[0].innerHTML = 
    '<span class="global-navigation__link mobile-control" id="mobileNavControl" href="">MENU</span>\
    <nav class="global-navigation hidden" id="globalNav"  data-active="closed">' + 
    globalNavigation + 
    '</nav>' + 
    document.getElementsByTagName(a)[0].innerHTML;

    var mobileNavControl = document.getElementById('mobileNavControl')
    mobileNavControl.addEventListener("click", toggleMobileNav, false);
}

// TOGGLES THE MOBILE NAV STATE
function toggleMobileNav() {
    var globalNav = document.getElementById('globalNav');
    var mobileNavControl = document.getElementById('mobileNavControl')
    
    if (globalNav.getAttribute('data-active') === 'closed') {
        globalNav.setAttribute('class','global-navigation');
        globalNav.setAttribute('data-active','open');
        mobileNavControl.innerHTML = "CLOSE";
    }

    else {
        globalNav.setAttribute('class','global-navigation hidden');
        globalNav.setAttribute('data-active','closed');
        mobileNavControl.innerHTML = "MENU";
    }

    mobileNavControl.addEventListener("click", toggleMobileNav, false);
}

////////////////////////
// PAGE TITLE FACTORY //
////////////////////////

// BUILDS THE PAGE TITLES
function buildPageTitle(a) {
    var pageTitleElement = document.getElementsByClassName(a)
    pageTitleElement[0].getElementsByTagName('h1')[0].setAttribute('class', a + '__title');
    pageTitleElement[0].getElementsByTagName('p')[0].setAttribute('class', a + '__sub-title');

}

//////////////////////////
// COMPANY INFO FACTORY //
//////////////////////////

// BUILDS THE CONTACT INFO
function buildContactInfo(a) {
    var contactInfo = document.getElementsByClassName('contact-info')
   
    for (i = 1; i < contactInfo[0].childNodes.length; i+=2) {
        var className = contactInfo[0].childNodes[i].getAttribute('class')
        
        
        contactInfo[0].childNodes[i].setAttribute('class', a + '__' + className)
    }
}

///////////////////
// PAGE BUILDING //
///////////////////

// Pages are built by creating elements and targeting them either through tag name for required elements
// or through BLOCK level class names (BEM)
function buildPageElements() {
    
    var pageHeader = document.getElementsByTagName("header")
    if(pageHeader.length > 1) { console.log("Page out of spec: Too many <header> elements.") }
    else { buildGlobalNavigation('header') }

    var pageTitle = document.getElementsByClassName('page-title')
    if(pageTitle.length !== 1) { console.log("Page out of spec: A page must have exactlly 1 Page-Title elements.") }
    else { buildPageTitle('page-title') }

    var contactInfo = document.getElementsByClassName('contact-info')
    if(contactInfo.length < 1) { console.log('Page out of spec: There are no Company-Info (<address class="contact-info">) elements on this page.') }
    else { buildContactInfo('contact-info') }

}

buildPageElements()


if (window.innerWidth > 768) {
    var globalNav = document.getElementById('globalNav');
    var mobileNavControl = document.getElementById('mobileNavControl')
    
    globalNav.setAttribute('class','global-navigation');
    mobileNavControl.setAttribute('style', 'display: none;')
}
