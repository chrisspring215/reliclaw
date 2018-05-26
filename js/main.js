const globalNavigationLinks = {
    links: ['Home', 'Approach', 'Practice Areas', 'Attoneys', 'Engage Relic' ],
    addresses: ['/', '/', '/', '/', '/' ]
}

function buildGlobalNavigation(a) {
    var globalNavigationLength = globalNavigationLinks.links.length;
    var globalNavigation = '';
    for (var i = 0; i < globalNavigationLength; i++) {
        var linkElement = '<a class="global-navigation__link" href="' + globalNavigationLinks.addresses[i] + '">' + globalNavigationLinks.links[i] + '</a>'
        globalNavigation = globalNavigation + linkElement
    }
    document.getElementsByTagName(a)[0].innerHTML = '<nav class="global-navigation">' + globalNavigation + '</nav>' + document.getElementsByTagName(a)[0].innerHTML;
}

function buildPageTitle(a) {
    var pageTitleElement = document.getElementsByClassName(a)
    pageTitleElement[0].getElementsByTagName('h1')[0].setAttribute('class', 'page-title--title');
    pageTitleElement[0].getElementsByTagName('p')[0].setAttribute('class', 'page-title--sub-title');

}

// PAGE BUILDING
// Pages are built by creating elements and targeting them either through tag name for required elements
// or through BLOCK level class names (BEM)
function buildPageElements() {
    
    var pageHeader = document.getElementsByTagName("header")
    if(pageHeader.length > 1) { console.log("Page out of spec: Too many <header> elements.") }
    else { buildGlobalNavigation('header') }

    var pageTitle = document.getElementsByClassName('page-title')
    if(pageTitle.length !== 1) { console.log("Page out of spec: A page must have exactlly 1 Page-Title elements.") }
    else { buildPageTitle('page-title') }

}

buildPageElements()