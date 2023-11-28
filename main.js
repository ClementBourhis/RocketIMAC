const menuSection = document.querySelector('#menu');
const spacexSection = document.querySelector('#spacex');
const rocketSection = document.querySelector('#rocket');
const launchSection = document.querySelector('#launch');
const congratulationSection = document.querySelector('#congratulation');
const solarSystemSection = document.querySelector('#solarsystem');
const spacexButton = document.querySelector('.button-spacex');
const buttonSpacex = document.querySelector('.spacex-button');
let state = "menu";
let sectionPosition = "menu";

/*--------------------Background--------------------*/
const changeBackground = () => {
        switch (state){
                case 'menu' :
                        document.body.style.backgroundImage = "url(img/menu_background.png)";
                break;

                case 'spacex' :
                        document.body.style.backgroundImage = "url(img/spacex_background.jpg)";
                break;

                case 'rocket' :
                        document.body.style.backgroundImage = "url(img/rocket_background.png)";
                break;

                case 'solarsystem' :
                        document.body.style.backgroundImage = "url(img/solarsystem_background.png)";
                break;
        }
}


/*--------------------Entete--------------------*/
const menuEntete = document.querySelector('#entete-bienvenue');
const spacexEntete = document.querySelector('#entete-spacex');
const rocketEntete = document.querySelector('#entete-rocket');
const solarSystemEntete = document.querySelector('#system-name');
const congratulationEntete = document.querySelector('#entete-congratulation');

/*--------------------Menu--------------------*/
const menuQuestion = document.querySelector ('#menuquestion');
const menuReponseNon = document.querySelector ('#reponse-non');
const menuReponseOui = document.querySelector ('#reponse-oui');
const menuBtnReponseOui = document.querySelectorAll('.menu-question-choix-oui');
const menuBtnReponseNon = document.querySelectorAll('.menu-question-choix-non');
let vraimentCounter = 0;

const affMenuReponseNon = () => {
        var menuReponseNonTitle = document.querySelector('#menu-question-title-non');
        menuQuestion.classList.add('menuquestion-hide');
        menuReponseNon.classList.add('response-non-show');
        menuReponseNonTitle.textContent = 'vraiment ' + menuReponseNonTitle.textContent;
        vraimentCounter++;

        if(vraimentCounter > 10) {
                menuReponseNonTitle.textContent = 'Vraiment X' +  vraimentCounter + ' ?';
                var terminal = document.querySelector('.terminal');
                terminal.classList.add('terminal-show');
        }

        var terminaldialog = document.querySelector('.terminaldialog');
        
        switch (vraimentCounter){
                case 10 :
                        var botdiag = document.createElement('h2');
                        botdiag.classList.add('menu-question-title-non2')
                        botdiag.textContent = '<B.O.T.I.M.A.C> : Allez appui sur le bouton';
                        terminaldialog.appendChild(botdiag);
                break;

                case 30 :
                        var botdiag = document.createElement('h2');
                        botdiag.classList.add('menu-question-title-non2')
                        botdiag.textContent = '<B.O.T.I.M.A.C> : Je peux continuer longtemps tu sais...';
                        terminaldialog.appendChild(botdiag);
                break;

                case 60 :
                        var botdiag = document.createElement('h2');
                        botdiag.classList.add('menu-question-title-non2')
                        botdiag.textContent = '<B.O.T.I.M.A.C> : On peu jouer si tu veux, vas y montre moi combien de fois tu peu apuyer sur ce bouton';
                        terminaldialog.appendChild(botdiag);
                break;

                case 100 :
                        var botdiag = document.createElement('h2');
                        botdiag.classList.add('menu-question-title-non2')
                        botdiag.textContent = "<B.O.T.I.M.A.C> : Eh beh tu t'emmerde vraiment toi...";
                        terminaldialog.appendChild(botdiag);
                break;

                case 130 :
                        var botdiag = document.createElement('h2');
                        botdiag.classList.add('menu-question-title-non2')
                        botdiag.textContent = "<B.O.T.I.M.A.C> : Tu sais t'as juste a appuyer sur le bouton vert et puis je t'embête plus";
                        terminaldialog.appendChild(botdiag);
                break;

                case 150 :
                        var botdiag = document.createElement('h2');
                        botdiag.classList.add('menu-question-title-non2')
                        botdiag.textContent = "<B.O.T.I.M.A.C> : Nan mais sérieux, sort, fais un truc... Reste pas à appuyé sur un bouton !";
                        terminaldialog.appendChild(botdiag);
                break;

                case 180 :
                        var botdiag = document.createElement('h2');
                        botdiag.classList.add('menu-question-title-non2')
                        botdiag.textContent = "<B.O.T.I.M.A.C> : bon ok on vas jouer... si tu appuis 300 fois sur ce bouton tu auras une petite surprise";
                        terminaldialog.appendChild(botdiag);
                break;

                case 300 :
                        var botdiag = document.createElement('h2');
                        botdiag.classList.add('menu-question-title-non2')
                        botdiag.textContent = "<B.O.T.I.M.A.C> : Mais c'est que tu l'as fait en plus... bon, chose promis chose dû voila ton cadeau :";
                        terminaldialog.appendChild(botdiag);
                        var gift = document.querySelector('.terminal-gift');
                        gift.classList.add('gift-show');
                break;
        }
}

const affMenuReponseOui = () => {
        menuQuestion.classList.add('menuquestion-hide');
        menuReponseNon.classList.remove('response-non-show');
        menuReponseOui.classList.add('response-oui-show');
}

menuBtnReponseNon.forEach( i => i.addEventListener("click", affMenuReponseNon));
menuBtnReponseOui.forEach( i => i.addEventListener("click", affMenuReponseOui));

/*--------------------SpaceX--------------------*/
/*----------API----------*/
const spacexElementSelection =  document.querySelector('.spacexelement-selection');
const spaceXTab = document.querySelector('.spacexelement-tableau');
let spacexTabCells;
let spaceXTabNbCells=0;
let spaceXTabCellsType;
let positionCounter = 1;

const createSpacexElementButton = (TypeElement, NameElement, index) => {
        spaceXTabCellsType=TypeElement;
        spacexElementSelection.classList.add('spacexelement-selection-hide');
        spaceXTab.classList.add('spacextab-show');

        if (NameElement === '' || NameElement === null){
                NameElement ='No name';
        }

        var newbutton = document.createElement('button');
        newbutton.id = TypeElement + index;
        newbutton.classList.add('spacexelement-element-button');
        newbutton.classList.add('spaceXtab-column'+ positionCounter);

        var newImage = document.createElement('img');
        newImage.classList.add('spacexelement-selection-button-img');
        switch(TypeElement){
                case 'capsule':
                        newImage.src = 'img/capsuleicon.png';
                        newImage.alt = 'capsule';
                break;
                case 'core':
                        newImage.src = 'img/coreicon.png';
                        newImage.alt = 'core';
                break;
                case 'landingpad':
                        newImage.src = 'img/landingpadicon.png';
                        newImage.alt = 'landingpad';
                break;
        }

        var newTitle = document.createElement('p');
        newTitle.textContent = NameElement;

        newbutton.appendChild(newImage);
        newbutton.appendChild(newTitle);
        newbutton.addEventListener("click", (e) => {getElementNumber(e)});
        spaceXTab.appendChild(newbutton);

        if(positionCounter<4){
                positionCounter++;
        }
        else{
                positionCounter=1;
        }
}

/*-----GetCapsule-----*/
const spacexCapsuleButton = document.querySelector('.spacexelement-selection-capsules');
async function getCapsules() {
        const request = await fetch('https://api.spacexdata.com/v3/capsules');

        const body = await request.json();

        try {
                spacexTabCells=body;
                console.log(body);
                nbCapsules = body.length;
                spaceXTabNbCells = nbCapsules;
                i=0;
                while ( i<nbCapsules){
                        createSpacexElementButton('capsule', body[i].capsule_serial, i);
                        i++;
                }
        }
        catch {
                console.log("Une erreur est survenue");
        }
}
spacexCapsuleButton.addEventListener('click', getCapsules);

/*-----GetCore-----*/
const spacexCoreButton = document.querySelector('.spacexelement-selection-cores');
async function getCores() {
        const request = await fetch('https://api.spacexdata.com/v3/cores');

        const body = await request.json();

        try {   
                spacexTabCells=body;
                console.log(body);
                nbCores = body.length;
                spaceXTabNbCells = nbCores;
                i=0;
                while ( i<nbCores){
                        createSpacexElementButton('core', body[i].core_serial, i);
                        i++;
                }
        }
        catch {
                console.log("Une erreur est survenue");
        }
}
spacexCoreButton.addEventListener('click', getCores);

/*-----GetLandingpad-----*/
const spacexLandingpadButton = document.querySelector('.spacexelement-selection-landingpad');
async function getLandingpads() {
        const request = await fetch('https://api.spacexdata.com/v3/landpads');

        const body = await request.json();

        try {   
                spacexTabCells=body;
                console.log(body);
                nblandingpad = body.length;
                spaceXTabNbCells = nblandingpad;
                i=0;
                while ( i<nblandingpad){
                        createSpacexElementButton('landingpad', body[i].id, i);
                        i++;
                }
        }
        catch {
                console.log("Une erreur est survenue");
        }
}
spacexLandingpadButton.addEventListener('click', getLandingpads);

/*-----RemoveCells-----*/
const removespacexTabCells = (typeCells, nbCells) =>{
        i=0;
        while( i<nbCells){
                var cellToRemove=document.querySelector('#'+typeCells+i);
                spaceXTab.removeChild(cellToRemove);
                i++;
        }
}

/*-----backtoselection-----*/
const spacexTabBackButton = document.querySelector('.spacexelement-tableau-backbutton');

const backToSpacexSelection = () => {
        removespacexTabCells(spaceXTabCellsType, spaceXTabNbCells);
        spaceXTabNbCells=0;
        spaceXTabCellsType="";
        positionCounter = 1;
        spacexElementSelection.classList.remove('spacexelement-selection-hide');
        spaceXTab.classList.remove('spacextab-show');
}

spacexTabBackButton.addEventListener("click", backToSpacexSelection);

/*-----Create Id Card------*/
const spacexElementList = document.querySelector(".spacexelement-info-specs");
const spacexLandingList = document.querySelector(".spacexelement-info-specs-landing");
const spacexIdCard = document.querySelector(".spacexelement-infos");
let spacexIdCardList;

const spacexIdCardShow = (element) => {
        spacexIdCard.classList.add("spacexelement-infos-show");
        spaceXTab.classList.remove('spacextab-show');

        var name = document.querySelector(".spacexelement-info-name");
        var id = document.querySelector(".spec-id");
        var divid = document.querySelector(".info-spec-id");
        var type = document.querySelector(".spec-type");
        var divtype = document.querySelector(".info-spec-type");
        var detail = document.querySelector(".spec-detail");
        var divdetail = document.querySelector(".info-spec-detail");
        var launch = document.querySelector(".spec-launch");
        var divlaunch = document.querySelector(".info-spec-launch");
        var reuse = document.querySelector(".spec-reuse");
        var divreuse = document.querySelector(".info-spec-reuse");
        var status = document.querySelector(".spec-status");
        var divstatus = document.querySelector(".info-spec-status");
        var block = document.querySelector(".spec-block");
        var divblock = document.querySelector(".info-spec-block");
        var water = document.querySelector(".spec-water");
        var divwater = document.querySelector(".info-spec-water");
        var fullname = document.querySelector(".spec-fullname");
        var divfullname = document.querySelector(".info-spec-fullname");
        var attempt = document.querySelector(".spec-attempt");
        var divattempt = document.querySelector(".info-spec-attempt");
        var success = document.querySelector(".spec-success");
        var divsuccess = document.querySelector(".info-spec-success");
        var location = document.querySelector(".info-spec-location");
        var locationName = document.querySelector(".spec-location-name");
        var locationRegion = document.querySelector(".spec-location-region");
        var locationLatitude = document.querySelector(".spec-location-latitude");
        var locationLongitude = document.querySelector(".spec-location-longitude");
        var wiki = document.querySelector(".spec-wiki");
        var divwiki = document.querySelector(".info-spec-wiki");
        var img = document.querySelector(".spacexelement-info-image");

        switch(spaceXTabCellsType){
                case 'capsule' :                        
                        name.textContent = 'Capsule ' + element.capsule_serial;
                        id.textContent="Capsule id : "+element.capsule_id;
                        divid.classList.add("info-spec-show");
                        type.textContent="Type : "+element.type;
                        divtype.classList.add("info-spec-show");
                        detail.textContent="Details : "+element.details;
                        divdetail.classList.add("info-spec-show");
                        launch.textContent="Original launch : "+element.original_launch;
                        divlaunch.classList.add("info-spec-show");
                        reuse.textContent="Reuse count : "+element.reuse_count;
                        divreuse.classList.add("info-spec-show");
                        status.textContent="Status : "+element.status;
                        divstatus.classList.add("info-spec-show");
                        img.src="img/capsuleicon.png";
                break;

                case 'core' :                        
                        name.textContent = 'Core ' + element.core_serial;
                        block.textContent="Block : "+element.block;
                        divblock.classList.add("info-spec-show");
                        water.textContent="Water landing : "+element.water_landing;
                        divwater.classList.add("info-spec-show");
                        detail.textContent="Details : "+element.details;
                        divdetail.classList.add("info-spec-show");
                        launch.textContent="Original launch : "+element.original_launch;
                        divlaunch.classList.add("info-spec-show");
                        reuse.textContent="Reuse count : "+element.reuse_count;
                        divreuse.classList.add("info-spec-show");
                        status.textContent="Status : "+element.status;
                        divstatus.classList.add("info-spec-show");
                        img.src="img/coreicon.png";
                break;

                case 'landingpad' :                        
                        name.textContent = 'Landing pad  ' + element.id;
                        fullname.textContent="Full name : "+element.full_name;
                        divfullname.classList.add("info-spec-show");
                        type.textContent="Type : "+element.landing_type;
                        divtype.classList.add("info-spec-show");
                        detail.textContent="Details : "+element.details;
                        divdetail.classList.add("info-spec-show");
                        attempt.textContent="Attempted landing : "+element.attempted_landings;
                        divattempt.classList.add("info-spec-show");
                        success.textContent="Success landing : "+element.successful_landings;
                        divsuccess.classList.add("info-spec-show");
                        locationName.textContent="Name : "+element.location.name;
                        locationRegion.textContent="Region : "+element.location.region;
                        locationLatitude.textContent="Latitude : "+element.location.latitude;
                        locationLongitude.textContent="Longitude : "+element.location.longitude;
                        location.classList.add("info-spec-show");
                        wiki.textContent="Lien wikipédia";
                        wiki.href=element.wikipedia;
                        divwiki.classList.add("info-spec-show");
                        status.textContent="Status : "+element.status;
                        divstatus.classList.add("info-spec-show");
                        img.src="img/landingpadicon.png";
                break;
        }
        spacexIdCardList= document.querySelectorAll(".info-spec-show");
}

const getElementNumber = (e) => {
        var id = e.currentTarget.id;
        var n;
        switch(spaceXTabCellsType){
                case 'capsule' :
                        n=id.substr(7);
                break;

                case 'core' :
                        n=id.substr(4);
                break;

                case 'landingpad' :
                        n=id.substr(10);
                break;
        }
        spacexIdCardShow(spacexTabCells[n]);
}

/*-----backtoselection-----*/
const spacexInfoBackButton = document.querySelector('.spacexelement-info-backbutton');

const backToSpacexTab = () => {
        spacexIdCard.classList.remove("spacexelement-infos-show");
        spacexElementList.classList.remove("spacexcapsulecist-show");
        spacexIdCardList.forEach(i => i.classList.remove("info-spec-show"));
        spaceXTab.classList.add('spacextab-show');
}

spacexInfoBackButton.addEventListener("click", backToSpacexTab);

/*--------------------Rocket--------------------*/

/*-----Rocket-Build-Item-----*/
const itemCapsuleSelection = document.querySelector('.rocket-build-item-selection-capsule');
const itemCoreSelection = document.querySelector('.rocket-build-item-selection-core');
const itemBoosterSelection = document.querySelector('.rocket-build-item-selection-booster');
const itemTabButtons = document.querySelectorAll('.rocket-build-item-tab button');
const itemCapsuleButton = document.querySelectorAll('.item-capsule');
const itemCoreButton = document.querySelectorAll('.item-core');
const itemBoosterButton = document.querySelectorAll('.item-booster');
const itemDualBoosterButton = document.querySelectorAll('.item-dual-boosters');

/*initialisation*/
itemTabButtons.forEach(i => i.classList.add("item-tab-button-hide"));
itemCapsuleButton.forEach(i => i.classList.remove("item-tab-button-hide"));

/*selection*/
const itemTabSelection = (typeItem) => {
    itemTabButtons.forEach(i => i.classList.add("item-tab-button-hide"));
    switch(typeItem){
        case 'capsule':
            itemCapsuleButton.forEach(i => i.classList.remove("item-tab-button-hide"));
        break;
        case 'core':
            itemCoreButton.forEach(i => i.classList.remove("item-tab-button-hide"));
        break;
        case 'booster':
            itemBoosterButton.forEach(i => i.classList.remove("item-tab-button-hide"));
            itemDualBoosterButton.forEach(i => i.classList.remove("item-tab-button-hide"));
        break;
    }
}

itemCapsuleSelection.addEventListener("click", () => itemTabSelection("capsule") );
itemCoreSelection.addEventListener("click", () => itemTabSelection("core"));
itemBoosterSelection.addEventListener("click", () => itemTabSelection("booster"));

/*-----Rocket-Build-Assemblage-----*/
let rocketAssemblage = document.querySelector('.rocket-build-assemblage');

/*CreateRocketElement*/
const createRocketElement = (typeElement,img) => {
    var newElement;
    if(typeElement === 'dual-boosters'){
        newElement = document.createElement('div');
        newElement.classList.add('rocket-element');
        newElement.classList.add(typeElement);

        var BoosterLeft = document.createElement('img');
        BoosterLeft.classList.add('dual-booster-left');
        BoosterLeft.src = img;
        BoosterLeft.alt = typeElement;
        var BoosterRight = document.createElement('img');
        BoosterRight.classList.add('dual-booster-right');
        BoosterRight.src = img;
        BoosterRight.alt = typeElement;

        newElement.appendChild(BoosterLeft);
        newElement.appendChild(BoosterRight);
    }
    else{
        newElement = document.createElement('img');
        newElement.classList.add('rocket-element');
        newElement.classList.add(typeElement);
        newElement.src = img;
        newElement.alt = typeElement;
    }
    newElement.addEventListener('click', (e) => {removeRocketElement(e)});
    rocketAssemblage.appendChild(newElement);
}

const rocketElementSelection = (e) => {
    var typeElement = e.currentTarget.classList[0].substr(5);
    var imgElement = e.currentTarget.children[0].src;
    createRocketElement(typeElement,imgElement);
}

itemTabButtons.forEach(i => i.addEventListener("click", (e) => {rocketElementSelection(e)}));

/*RemoveRocketElement*/
const removeRocketElement = (e) => {
        if(state !== 'launch'){
                rocketAssemblage.removeChild(e.currentTarget);
        }
}

const deleteButton = document.querySelector('.delete-button');

const removeAllRocketElement = () => {
    while(rocketAssemblage.firstChild){
        rocketAssemblage.removeChild(rocketAssemblage.firstChild);
    }
}

deleteButton.addEventListener('click', removeAllRocketElement);














/*-------------------------------------SOLAR-SYSTEM------------------------------------------*/
/*----------Management----------*/
const managementAdd = document.querySelector('.management-add');
const managementForm = document.querySelector('.management-form');
let managementShowState = 'off';

const managementShow = () => {
        if(managementShowState=='off'){
                managementForm.classList.add('management-form-show');
                managementAdd.classList.add('turn45');
                managementShowState='on';
        }
        else{
                managementForm.classList.remove('management-form-show');
                managementAdd.classList.remove('turn45');
                managementShowState='off'
        }
}
managementAdd.addEventListener('click', managementShow);

/*----------System-Element-Option----------*/
const removeBtns = document.querySelectorAll('.system-element-option-remove');
let removeBtnsState='off';
const addBtns = document.querySelectorAll('.system-element-option-add');
const systemElementOptions = document.querySelectorAll('.system-element-option');

const onRemoveButtonState = () => {
        removeBtnsState = 'on';
        setTimeout(offRemoveButtonState, 5);
}

const offRemoveButtonState = () => {
        removeBtnsState = 'off';
}

systemElementOptions.forEach( i => i.addEventListener("click", onRemoveButtonState ));

/*----------Element-section----------*/

const system = document.querySelector('.system');
const systemElements = document.querySelectorAll('.system-element');
const backSystem = document.querySelectorAll('.back-system');
let nbElementSection = 0;
let elementSection;

const elementSectionShow = (e) => {
        if(nbElementSection === 0 && removeBtnsState === 'off'){
                elementSection = document.querySelector("#"+e.currentTarget.id+"-section");
                elementSection.classList.add('element-section-show');
                system.classList.add('system-hide');
                nbElementSection = 1;
        }
}
systemElements.forEach( i => i.addEventListener("click", (e) => {elementSectionShow(e)} ));

const elementSectionHide = () => {
        elementSection.classList.remove('element-section-show');
        system.classList.remove('system-hide');
        nbElementSection = 0;
}
backSystem.forEach( i => i.addEventListener("click", (e) => {elementSectionHide(e)} ));

/*----------SUBManagement----------*/
let subManagementShowState = 'off';

const subManagementShow = (e) => {
        var subManagementForm = e.currentTarget.nextElementSibling;
        if(subManagementShowState=='off'){
                subManagementForm.classList.add('submanagement-form-show');
                subManagementShowState='on';
        }
        else{
                subManagementForm.classList.remove('submanagement-form-show');
                subManagementShowState='off';
        }
}

addBtns.forEach( i => i.addEventListener("click", (e) => {subManagementShow(e)} ));

/*----------Create-Planet-----------*/
const allSystemElements = document.querySelector('.system-elements');
const btnCreatePlanet = document.querySelector('#management-planet-create');

const createPlanet = (planetName, planetSize) => {
        if (planetName === '' || planetName === null){
                planetName ='Unnamed';
        }

        if (planetSize === null){
                planetSize ='medium';
        }
        /*Création d'un nouveau lien*/
        var newLink = document.createElement('div');
        newLink.classList.add('system-element-link');

        /*Initialisation de l'id et taille de la planete*/
        var newPlanet = document.createElement('div');
        newPlanet.id = planetName.replace(/ /g, "");
        newPlanet.classList.add('system-element');
        newPlanet.classList.add('planet-'+planetSize);

        /*Création des bouttons d'options*/
        var buttons = document.createElement('div');
        buttons.classList.add('system-element-option');
        buttons.addEventListener("click", onRemoveButtonState );

        //remove
        var remove = document.createElement("button");
        remove.classList.add('system-element-option-button');
        remove.classList.add('system-element-option-remove');
        remove.addEventListener("click", (e) => {removePlanet(e)} );

        //addplanet
        var addsubplanet = document.createElement("div");
        addsubplanet.classList.add('system-element-option-addsubplanet');

        var btnaddsubplanet = document.createElement("button");
        btnaddsubplanet.classList.add('system-element-option-button');
        btnaddsubplanet.classList.add('system-element-option-add');
        btnaddsubplanet.addEventListener("click", (e) => {subManagementShow(e)} )
        var newsubbmanagement = document.createElement("div");
        newsubbmanagement.classList.add('submanagement-form');
        var newnameinput = document.createElement("input");
        newnameinput.classList.add('management-form-input');
        newnameinput.classList.add('management-subplanet-name');
        newnameinput.type = 'text';
        newnameinput.placeholder = 'Name your Subplanet';
        var newbtnCreateSubplanet = document.createElement("button");
        newbtnCreateSubplanet.classList.add('management-form-input');
        newbtnCreateSubplanet.classList.add('management-subplanet-create');
        newbtnCreateSubplanet.textContent = 'Create Subplanet';
        newbtnCreateSubplanet.addEventListener("click", (e) => {createSubplanet(e)} );
        
        newsubbmanagement.appendChild(newnameinput);
        newsubbmanagement.appendChild(newbtnCreateSubplanet);
        addsubplanet.appendChild(btnaddsubplanet);
        addsubplanet.appendChild(newsubbmanagement);

        buttons.appendChild(addsubplanet);
        buttons.appendChild(remove);

        /*Création du titre*/
        var title = document.createElement("h2");
        title.textContent = planetName;

        /*Création d'un espace subplanet*/
        var newsuplanetSpace = document.createElement("div");
        newsuplanetSpace.classList.add('subplanets');
        newsuplanetSpace.id = planetName.replace(/ /g, "")+'-subplanets';

        /*Insertion des éléments dans la nouvelle planete*/
        newPlanet.appendChild(buttons);
        newPlanet.appendChild(title);
        newPlanet.appendChild(newsuplanetSpace);
        
        allSystemElements.appendChild(newLink);
        allSystemElements.appendChild(newPlanet);
}

const lireManagement = () => {
        var planetName=document.querySelector('#management-planet-name').value;
        var planetSize=document.querySelector('#management-planet-size').value;
        createPlanet(planetName, planetSize);
}

btnCreatePlanet.addEventListener('click', lireManagement);

/*----------Remove-Planet----------*/

const removePlanet = (e) => {
        var planetToRemove = document.querySelector('#'+e.currentTarget.parentNode.parentNode.id);
        var grpElement = e.currentTarget.parentNode.parentNode.parentNode.classList[0];
        if( grpElement === 'subplanets'){
                var subplanet = document.querySelector("#" +e.currentTarget.parentNode.parentNode.parentNode.id);
                subplanet.removeChild(planetToRemove.previousElementSibling);
                subplanet.removeChild(planetToRemove);
        }
        else{
                allSystemElements.removeChild(planetToRemove.previousElementSibling);
                allSystemElements.removeChild(planetToRemove);
        }
}

removeBtns.forEach( i => i.addEventListener("click", (e) => {removePlanet(e)} ));

/*---------Create-Subplanet---------*/
const btnCreateSubplanet = document.querySelectorAll('.management-subplanet-create');

const createSubplanet = (e) =>{
        var parentPlanet = e.currentTarget.parentNode.parentNode.parentNode.parentNode.id;
        var planetSubplanet = document.querySelector('#'+parentPlanet+"-subplanets")

        var subplanetName=e.currentTarget.previousElementSibling.value;

        if (subplanetName === ''){
                subplanetName ='Unnamed';
        }

        var newSubLink = document.createElement('div');
        newSubLink.classList.add('system-element-subplanet-link');

        var newSubPlanet = document.createElement('div');
        newSubPlanet.id = subplanetName;
        newSubPlanet.classList.add('system-element');
        newSubPlanet.classList.add('moon');

        var buttons = document.createElement('div');
        buttons.classList.add('system-element-option');
        buttons.addEventListener("click", onRemoveButtonState );

        var remove = document.createElement("button");
        remove.classList.add('system-element-option-button');
        remove.classList.add('system-element-option-remove');
        remove.addEventListener("click", (e) => {removePlanet(e)} );
        buttons.appendChild(remove);

        var title = document.createElement("h4");
        title.textContent = subplanetName;

        newSubPlanet.appendChild(buttons);
        newSubPlanet.appendChild(title);

        planetSubplanet.appendChild(newSubLink);
        planetSubplanet.appendChild(newSubPlanet);        
}

btnCreateSubplanet.forEach( i => i.addEventListener("click", (e) => {createSubplanet(e)} ));

/*----------AJAX----------*/
const btnaddplanetfromweb = document.querySelector('#btnaddplanetfromweb');
const btnsendplanettoweb = document.querySelector('#btnsendplanettoweb');

/*GetPlanet*/
async function getSystemElement() {
        const request = await fetch('https://planets-api-webimac2020.vercel.app/api/get-planets.js');

        const body = await request.json();

        try {
                body.planets.forEach( i => createPlanet(i.name, i.size));
        }
        catch {
                console.log("Une erreur est survenue");
        }
}

btnaddplanetfromweb.addEventListener('click', getSystemElement);

/*Sendplanet*/
const pushPlanet = async _ => {
        var size = document.querySelector('#management-planet-size').value;
        var name = document.querySelector('#management-planet-name').value;
      
        const url = 'https://planets-api-webimac2020.vercel.app/api/add-planet.js';
        await fetch(
          url,
          {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ size, name })
          }
        );
        createPlanet(name, size);
};

btnsendplanettoweb.addEventListener('click', pushPlanet);























/*--------------------Switch section--------------------*/

/*-----backtoBuild-----*/
const spacexSelectionBackButton = document.querySelector('.spacexelement-selection-back');

const backToBuild = () => {
        spacexSection.classList.remove('spacex-section-show');
        spacexEntete.classList.remove('spacex-entete-show');
        switch(sectionPosition){
                case 'menu':
                        menuSection.classList.remove('menu-section-hide');
                        menuEntete.classList.remove('menu-entete-hide');
                        state = "menu";
                break;

                case 'rocket':
                        rocketSection.classList.add('rocket-section-show');
                        rocketEntete.classList.add('rocket-entete-show');
                        state = "rocket";
                break;
        }
        spacexButton.classList.remove('spacexbutton-hide');
        changeBackground();
}

spacexSelectionBackButton.addEventListener("click", backToBuild);

/*----------SpaceXButton----------*/
const goToSpacexSection = () => {
        menuSection.classList.add('menu-section-hide');
        menuEntete.classList.add('menu-entete-hide');
        rocketSection.classList.remove('rocket-section-show');
        rocketEntete.classList.remove('rocket-entete-show');
        spacexSection.classList.add('spacex-section-show');
        spacexEntete.classList.add('spacex-entete-show');
        spacexButton.classList.add('spacexbutton-hide');
        state = "spacex";
        changeBackground();
}

spacexButton.addEventListener('click', goToSpacexSection);
buttonSpacex.addEventListener('click', goToSpacexSection);

/*----------GoToRocket----------*/
const blessButton = document.querySelector('.menu-question-bless');
const enteteName = document.querySelector('.entete-rocket-name');
const solarSystemBackbutton = document.querySelector('.solarsystem-backbutton');
let rocketName;

const goToRocket = () => {
        menuSection.classList.add('menu-section-hide');
        menuEntete.classList.add('menu-entete-hide');
        solarSystemSection.classList.remove('solarsystem-section-show');
        solarSystemEntete.classList.remove('solarsystem-entete-show');
        goButton.forEach(i => i.classList.remove('solarsystem-launchbutton-show'));
        launchInstruction.classList.remove('solar-instruction-show');
        rocketSection.classList.add('rocket-section-show');
        rocketEntete.classList.add('rocket-entete-show');
        rocketName = document.querySelector('#menu-question-name').value;
        if(rocketName === ""){
                enteteName.textContent="Unnamed";
        }
        else{
                enteteName.textContent=rocketName;
        }
        state="rocket";
        sectionPosition="rocket";
        changeBackground();
}

blessButton.addEventListener('click', goToRocket);
solarSystemBackbutton.addEventListener('click', goToRocket);

/*----------GoToSolarSystem----------*/ 
const solarButton = document.querySelector('.solar-button');

const goToSolarSystem = () => {
        rocketSection.classList.remove('rocket-section-show');
        rocketEntete.classList.remove('rocket-entete-show');
        solarSystemSection.classList.add('solarsystem-section-show');
        solarSystemEntete.classList.add('solarsystem-entete-show');
        state='solarsystem';
        changeBackground();
}

solarButton.addEventListener('click', goToSolarSystem);

/*----------Launch----------*/
const launchButton = document.querySelector('.launch-button');
const goButton = document.querySelectorAll('.solarsystem-launchbutton');
const launchInstruction = document.querySelector('.solar-instruction');

const setDestination = () => {
        goToSolarSystem();
        goButton.forEach(i => i.classList.add('solarsystem-launchbutton-show'));
        launchInstruction.classList.add('solar-instruction-show');
}

launchButton.addEventListener('click', setDestination);

/*--launch-animation---*/
const spaceship = document.querySelector('.spaceship');
const destinationName = document.querySelector('.end-name');
const destinationImg = document.querySelector('.end-img');

const spaceshipLaunch = (planetImg, planetName) =>{
        assemblage = document.querySelector('.rocket-build-assemblage');
        if(assemblage.firstElementChild === null){
                var errortxt = document.createElement('p');
                errortxt.id='errortxt';
                errortxt.textContent="Il faut construire une fussée pour voyager dans l'espace";
                errortxt.style.backgroundColor='#ff0000';
                solarSystemEntete.appendChild(errortxt);
                setTimeout(goToRocket, 3000);
                setTimeout(deleteError, 2500);
        }
        else{
                spaceship.appendChild(assemblage);
                destinationName.textContent=planetName;
                destinationImg.src=planetImg;
                destinationImg.alt=planetName;
                solarSystemSection.classList.remove('solarsystem-section-show');
                solarSystemEntete.classList.remove('solarsystem-entete-show');
                goButton.forEach(i => i.classList.remove('solarsystem-launchbutton-show'));
                launchInstruction.classList.remove('solar-instruction-show');
                launchSection.classList.add('launch-section-show');
                spaceship.classList.add('spaceship-animation');
                state="launch";
                setTimeout(congratulation,16000);
        }
}

const deleteError= () => {
        var errortxt = document.querySelector('#errortxt');
        solarSystemEntete.removeChild(errortxt);
}


let NamePlanet;
let ImgPlanet;
const planetChoose = (e) =>{
        var planetImg = e.currentTarget.previousElementSibling.children[3].firstElementChild.src;
        var planetName = e.currentTarget.previousElementSibling.firstElementChild.textContent;
        ImgPlanet=planetImg;
        NamePlanet=planetName;
        spaceshipLaunch(planetImg, planetName);
}

goButton.forEach( i => i.addEventListener("click", (e) => {planetChoose(e)} ));

/*----------Congratulation----------*/
const spaceshipArrival = document.querySelector('.spaceship-arrival');
const planetArrivalImg = document.querySelector('.planet-arrival-img');
const congratulationTitle = document.querySelector('.entete-congratulation-title');

const congratulation = () =>{
        assemblage = document.querySelector('.rocket-build-assemblage');
        spaceshipArrival.appendChild(assemblage);
        planetArrivalImg.src=ImgPlanet;
        planetArrivalImg.alt=NamePlanet;
        congratulationTitle.textContent="Félicitation, "+enteteName.textContent+" est arrivé sur "+NamePlanet; 
        launchSection.classList.remove('launch-section-show');
        spaceship.classList.remove('spaceship-animation');
        congratulationSection.classList.add('congratulation-section-show');
        congratulationEntete.classList.add('congratulation-entete-show');
}

/*----------backtomenu----------*/
const backToMenuButton = document.querySelector('.backtomenu-button');
const rocketBuild = document.querySelector('.rocket-build');

const backToMenu = () => {
        spaceshipArrival.removeChild(spaceshipArrival.firstElementChild);
        var newRocketAssemblage= document.createElement('div');
        newRocketAssemblage.classList.add('rocket-build-assemblage');
        rocketBuild.appendChild(newRocketAssemblage);
        rocketAssemblage = document.querySelector('.rocket-build-assemblage');
        congratulationSection.classList.remove('congratulation-section-show');
        congratulationEntete.classList.remove('congratulation-entete-show');
        menuReponseOui.classList.remove('response-oui-show');
        menuQuestion.classList.remove('menuquestion-hide');
        menuSection.classList.remove('menu-section-hide');
        menuEntete.classList.remove('menu-entete-hide');
        state='menu';
        sectionPosition="menu";
        changeBackground();
}

backToMenuButton.addEventListener('click', backToMenu);