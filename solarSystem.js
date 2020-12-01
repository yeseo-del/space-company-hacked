// Solar System Tab

function getChemicalPlant(){
	if(metal >= chemicalPlantMetalCost && gem >= chemicalPlantGemCost && oil >= chemicalPlantOilCost){
		metal -= chemicalPlantMetalCost;
		gem -= chemicalPlantGemCost;
		oil -= chemicalPlantOilCost;
		chemicalPlant += 1000;
		updateFuelProductionCost();
	}
}

function getOxidisation(){
	if(metal >= oxidisationMetalCost && gem >= oxidisationGemCost && oil >= oxidisationOilCost){
		metal -= oxidisationMetalCost;
		gem -= oxidisationGemCost;
		oil -= oxidisationOilCost;
		oxidisation += 1000;
		updateFuelProductionCost();
	}
}

function getHydrazine(){
	if(titanium >= hydrazineTitaniumCost && silicon >= hydrazineSiliconCost && gold >= hydrazineGoldCost){
		titanium -= hydrazineTitaniumCost;
		silicon -= hydrazineSiliconCost;
		gold -= hydrazineGoldCost;
		hydrazine += 1000;
		updateFuelProductionCost();
	}
}

function updateFuelProductionCost(){
    chemicalPlantOilCost = Math.floor(1 * Math.pow(1.1,chemicalPlant));
    chemicalPlantGemCost = Math.floor(1 * Math.pow(1.1,chemicalPlant));
    chemicalPlantMetalCost = Math.floor(1 * Math.pow(1.1,chemicalPlant));

    oxidisationOilCost = Math.floor(1 * Math.pow(1.1,oxidisation));
    oxidisationGemCost = Math.floor(1 * Math.pow(1.1,oxidisation));
    oxidisationMetalCost = Math.floor(1 * Math.pow(1.1,oxidisation));

    hydrazineGoldCost = Math.floor(1 * Math.pow(1.1,hydrazine));
    hydrazineSiliconCost = Math.floor(1 * Math.pow(1.1,hydrazine));
    hydrazineTitaniumCost = Math.floor(1 * Math.pow(1.1,hydrazine));
}

function getRocket(){
	if(metal >= 1 && gem >= 1 && oil >= 1){
		metal -= 1;
		gem -= 1;
		oil -= 1;
		rocket = 1;
		document.getElementById("rocket").textContent = "Built";
		document.getElementById("rocketRocketCost").className = "";
		document.getElementById("solarRocket").className = "hidden";
	}
}

function launchRocket(){
	if(rocket >= 1 && getResource(RESOURCE.RocketFuel) >= 1){
		Game.resources.takeResource(RESOURCE.RocketFuel, 1);
		rocket -= 1;
		document.getElementById("spaceRocket").className = "hidden";
		document.getElementById("collapseInner").className ="collapseInner";
		document.getElementById("moon").className = "inner";
		document.getElementById("mercury").className = "inner";
		document.getElementById("venus").className = "inner";
		document.getElementById("mars").className = "inner";
		document.getElementById("asteroidBelt").className = "inner";
		rocketLaunched = true;
	}
}

function explore(planet){
	var planetsData = {
		Moon: {fuel: 1, area: "innerPlanet", resource: "lunarite"},
		Venus: {fuel: 1, area: "innerPlanet", resource: "methane"},
		Mars: {fuel: 1, area: "innerPlanet", resource: "titanium,silicon"},
		AsteroidBelt: {fuel: 1, area: "innerPlanet", resource: "gold,silver"},
		WonderStation: {fuel: 1},
		Jupiter: {fuel: 1, area: "outerPlanet", resource: "hydrogen"},
		Saturn: {fuel: 1, area: "outerPlanet", resource: "helium"},
		Pluto: {fuel: 1, area: "outerPlanet", resource: "ice"},
		KuiperBelt: {fuel: 1, area: "outerPlanet"},
		SolCenter: {fuel: 1}
	};

	if(!planetsData[planet]) return console.error("Cannot explore \"" + planet + "\", data not found.");
	if (getResource(RESOURCE.RocketFuel) >= planetsData[planet].fuel) {
		Game.resources.takeResource(RESOURCE.RocketFuel, planetsData[planet].fuel);
		document.getElementById("explore" + planet).className = "hidden";
		buttonsHidden.push("explore" + planet);
		explored.push(planet.substring(0, 1).toLowerCase() + planet.substring(1));

		// Planet/Area specific code
		switch(planet) {
			case "Moon":
				document.getElementById("collapseInnerPlanet").className = "collapseInnerPlanet";
				resourcesUnlocked.push("collapseInnerPlanet");
				break;
			case "Venus":
				document.getElementById("methanePower").className = "";
				resourcesUnlocked.push("methanePower");
				break;
			case "AsteroidBelt":
				document.getElementById("wonderStation").className = "inner";
				document.getElementById("collapseOuter").className = "collapseOuter";
				document.getElementById("jupiter").className = "outer";
				document.getElementById("saturn").className = "outer";
				document.getElementById("uranus").className = "outer";
				document.getElementById("neptune").className = "outer";
				document.getElementById("pluto").className = "outer";
				document.getElementById("kuiperBelt").className = "outer";
				break;
			case "WonderStation":
				document.getElementById("wonderTab").className = "";
				tabsUnlocked.push("wonderTab");
				Game.statistics.add('tabsUnlocked');
				newUnlock("wonder");
				Game.notifySuccess("New Tab!", "You've unlocked the Wonders Tab!");
				break;
			case "Jupiter":
				document.getElementById("collapseOuterPlanet").className = "collapseOuterPlanet";
				document.getElementById("fusionPower").className = "";
				resourcesUnlocked.push("collapseOuterPlanet", "fusionPower");
				break;
			case "KuiperBelt":
				document.getElementById("solCenter").className = "outer";
				resourcesUnlocked.push("solCenter");
				refreshResources();
				break;
			case "SolCenter":
				document.getElementById("solCenterTopTab").className = "";
				resourcesUnlocked.push("solCenterTopTab");
				refreshResources();
				Game.statistics.add('tabsUnlocked');
				newUnlock("solCenter");
				Game.notifySuccess("New Tab!", "You've unlocked the Sol Center Tab!");
				break;
		}

		// Resource(s)
		if (planetsData[planet].resource) {
			var toAdd = planetsData[planet].resource.split(',');
			for(var i = 0; i < toAdd.length; i++) {
				switch(Game.resourceData[toAdd[i]].category) {
					case "earth":
						document.getElementById(toAdd[i] + "Nav").className = "earth";
						break;
					case "innerSol":
						document.getElementById(toAdd[i] + "Nav").className = "innerPlanet";
						break;
					case "outerSol":
						document.getElementById(toAdd[i] + "Nav").className = "outerPlanet";
						break;
					default:
						// Should never happen
						throw new Error("Invalid resource area: \"" + Game.resourceData[toAdd[i]].category + "\" while unlocking resource \"" + toAdd[i] + "\"");
				}
				resourcesUnlocked.push(toAdd[i] + "Nav");
			}
			refreshResources();
			newUnlock("resources");
			Game.statistics.add('resourcesUnlocked', toAdd.length);
		}
		Game.statistics.add('placesExplored');
	}
}
