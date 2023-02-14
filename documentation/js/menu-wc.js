'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs_desde0 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-d33f12af6f8fdd1623a479ca173ddb5ab1fd43a8287a95bd7e0b3181ae10f0e3d1843f42dad306e38bbe1c317b668b9a60c072cd88bfa18e2759157e00a2b289"' : 'data-target="#xs-controllers-links-module-AppModule-d33f12af6f8fdd1623a479ca173ddb5ab1fd43a8287a95bd7e0b3181ae10f0e3d1843f42dad306e38bbe1c317b668b9a60c072cd88bfa18e2759157e00a2b289"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-d33f12af6f8fdd1623a479ca173ddb5ab1fd43a8287a95bd7e0b3181ae10f0e3d1843f42dad306e38bbe1c317b668b9a60c072cd88bfa18e2759157e00a2b289"' :
                                            'id="xs-controllers-links-module-AppModule-d33f12af6f8fdd1623a479ca173ddb5ab1fd43a8287a95bd7e0b3181ae10f0e3d1843f42dad306e38bbe1c317b668b9a60c072cd88bfa18e2759157e00a2b289"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-d33f12af6f8fdd1623a479ca173ddb5ab1fd43a8287a95bd7e0b3181ae10f0e3d1843f42dad306e38bbe1c317b668b9a60c072cd88bfa18e2759157e00a2b289"' : 'data-target="#xs-injectables-links-module-AppModule-d33f12af6f8fdd1623a479ca173ddb5ab1fd43a8287a95bd7e0b3181ae10f0e3d1843f42dad306e38bbe1c317b668b9a60c072cd88bfa18e2759157e00a2b289"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-d33f12af6f8fdd1623a479ca173ddb5ab1fd43a8287a95bd7e0b3181ae10f0e3d1843f42dad306e38bbe1c317b668b9a60c072cd88bfa18e2759157e00a2b289"' :
                                        'id="xs-injectables-links-module-AppModule-d33f12af6f8fdd1623a479ca173ddb5ab1fd43a8287a95bd7e0b3181ae10f0e3d1843f42dad306e38bbe1c317b668b9a60c072cd88bfa18e2759157e00a2b289"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-10ea3e0edc41b7bd1df92266a41d6993cecda5fe9e56141133f57ab758cce5f5dabe16f363d744b7fb4e84d892c059f9fbf69ff37b9fe937a83d29f8a8ec4fab"' : 'data-target="#xs-injectables-links-module-AuthModule-10ea3e0edc41b7bd1df92266a41d6993cecda5fe9e56141133f57ab758cce5f5dabe16f363d744b7fb4e84d892c059f9fbf69ff37b9fe937a83d29f8a8ec4fab"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-10ea3e0edc41b7bd1df92266a41d6993cecda5fe9e56141133f57ab758cce5f5dabe16f363d744b7fb4e84d892c059f9fbf69ff37b9fe937a83d29f8a8ec4fab"' :
                                        'id="xs-injectables-links-module-AuthModule-10ea3e0edc41b7bd1df92266a41d6993cecda5fe9e56141133f57ab758cce5f5dabe16f363d744b7fb4e84d892c059f9fbf69ff37b9fe937a83d29f8a8ec4fab"' }>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BooksModule.html" data-type="entity-link" >BooksModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-BooksModule-f6152a056f459bf7a9554d434514bec3fa1525c682a9f18fb61e7e3aeb74ace249bdde9f40e37cc3d371a72a434f799efc0d5275a0f1b6421ba39be1ed37bcb5"' : 'data-target="#xs-controllers-links-module-BooksModule-f6152a056f459bf7a9554d434514bec3fa1525c682a9f18fb61e7e3aeb74ace249bdde9f40e37cc3d371a72a434f799efc0d5275a0f1b6421ba39be1ed37bcb5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BooksModule-f6152a056f459bf7a9554d434514bec3fa1525c682a9f18fb61e7e3aeb74ace249bdde9f40e37cc3d371a72a434f799efc0d5275a0f1b6421ba39be1ed37bcb5"' :
                                            'id="xs-controllers-links-module-BooksModule-f6152a056f459bf7a9554d434514bec3fa1525c682a9f18fb61e7e3aeb74ace249bdde9f40e37cc3d371a72a434f799efc0d5275a0f1b6421ba39be1ed37bcb5"' }>
                                            <li class="link">
                                                <a href="controllers/BooksController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BooksController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-BooksModule-f6152a056f459bf7a9554d434514bec3fa1525c682a9f18fb61e7e3aeb74ace249bdde9f40e37cc3d371a72a434f799efc0d5275a0f1b6421ba39be1ed37bcb5"' : 'data-target="#xs-injectables-links-module-BooksModule-f6152a056f459bf7a9554d434514bec3fa1525c682a9f18fb61e7e3aeb74ace249bdde9f40e37cc3d371a72a434f799efc0d5275a0f1b6421ba39be1ed37bcb5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BooksModule-f6152a056f459bf7a9554d434514bec3fa1525c682a9f18fb61e7e3aeb74ace249bdde9f40e37cc3d371a72a434f799efc0d5275a0f1b6421ba39be1ed37bcb5"' :
                                        'id="xs-injectables-links-module-BooksModule-f6152a056f459bf7a9554d434514bec3fa1525c682a9f18fb61e7e3aeb74ace249bdde9f40e37cc3d371a72a434f799efc0d5275a0f1b6421ba39be1ed37bcb5"' }>
                                        <li class="link">
                                            <a href="injectables/BooksService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BooksService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BooksController.html" data-type="entity-link" >BooksController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Book.html" data-type="entity-link" >Book</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Book.html" data-type="entity-link" >Book</a>
                            </li>
                            <li class="link">
                                <a href="classes/Book-1.html" data-type="entity-link" >Book</a>
                            </li>
                            <li class="link">
                                <a href="classes/BookDto.html" data-type="entity-link" >BookDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConfigService.html" data-type="entity-link" >ConfigService</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBookDto.html" data-type="entity-link" >CreateBookDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateBookDto.html" data-type="entity-link" >UpdateBookDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BooksService.html" data-type="entity-link" >BooksService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});