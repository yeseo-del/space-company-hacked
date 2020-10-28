// Sol Center Tab

function unlockPlasmaResearch(){
	if(getResource(RESOURCE.Hydrogen) >= 1 && getResource(RESOURCE.Uranium) >= 1 && getResource(RESOURCE.Oil) >= 1 && getResource(RESOURCE.Wood) >= 1){
		Game.resources.takeResource(RESOURCE.Hydrogen, 1);
		Game.resources.takeResource(RESOURCE.Uranium, 1);
		Game.resources.takeResource(RESOURCE.Oil, 1);
		Game.resources.takeResource(RESOURCE.Wood, 1);
		document.getElementById("researchPlasma").className = "hidden";
		document.getElementById("unlockPlasma").className = "";
		Game.tech.unlockTech("unlockPlasma");
		newUnlock("research");
		buttonsHidden.push("researchPlasma");
	}
}

function unlockEmcResearch(){
	if(getResource(RESOURCE.Energy) >= 1 && getResource(RESOURCE.Plasma) >= 1){
		Game.resources.takeResource(RESOURCE.Energy, 1);
		Game.resources.takeResource(RESOURCE.Plasma, 1);
		document.getElementById("researchEmc").className = "hidden";
		document.getElementById("unlockEmc").className = "";
		Game.tech.unlockTech("unlockEmc");
		newUnlock("research");
		buttonsHidden.push("researchEmc");
	}
}

function unlockDysonResearch(){
	if(getResource(RESOURCE.Energy) >= 1 && getResource(RESOURCE.Plasma) >= 1){
		Game.resources.takeResource(RESOURCE.Energy, 1);
		Game.resources.takeResource(RESOURCE.Plasma, 1);
		document.getElementById("researchDyson").className = "hidden";
		document.getElementById("unlockDyson").className = "";
		Game.tech.unlockTech("unlockDyson");
		newUnlock("research");
		buttonsHidden.push("researchDyson");
	}
}

function changeEmcAmount(event){
	if (event.button === 2) {
		emcAmount /= 10;
		
		if (emcAmount < 1) {
			emcAmount = "Max";
		}
		if(emcAmount !== emcAmount){
			emcAmount = Math.pow(10, Math.floor(Math.log10(getMaxEnergy())));
		}
		
	} else {
		emcAmount *= 10;
		if(emcAmount > getMaxEnergy()){
			emcAmount = "Max";
		}
		if(emcAmount !== emcAmount){
			emcAmount = 1;
		}
		
	}

    refreshConversionDisplay();
}

function refreshConversionDisplay() {
	var maxEnergy = getMaxEnergy();
	var maxPlasma = getMaxPlasma();
	for (var i = 0; i < resources.length; i++) {
		var amountElement = $('#' + resources[i] + 'EmcAmount');
		var costElement = $('#' + resources[i] + 'EmcVal');
		var storageElement = $('#' + resources[i] + 'Conv');

		// meteorites are a special case because the conversion uses plasma
		var emcCostResource;
		var emcCostMax;
		if (resources[i] === 'meteorite') {
			emcCostResource = getResource(RESOURCE.Plasma);
			emcCostMax = maxPlasma;
		} else {
			emcCostResource = getResource(RESOURCE.Energy);
			emcCostMax = maxEnergy;
		}

		var value = window[resources[i] + 'EmcVal'];
		var current = getResource(resources[i]);
		var capacity = getStorage(resources[i]);
		var emcValue;
		if (emcAmount === 'Max') {
			emcValue = Math.floor(emcCostResource / value);
			costElement.text(Game.settings.format(Math.floor(emcValue * value)));
			amountElement.text(Game.settings.format(emcValue));
		} else {
			emcValue = value * emcAmount;
			costElement.text(Game.settings.format(emcValue));
			amountElement.text(Game.settings.format(emcAmount));
		}

		storageElement.removeClass('green');
		storageElement.removeClass('red');
		if (emcAmount > capacity || current >= capacity) {
			storageElement.addClass('green');
		} else if (emcCostMax < emcValue) {
			storageElement.addClass('red');
		}
	}

	var emcAmountBtn = $('#emcButton');
	if (emcAmount === 'Max') {
		emcAmountBtn.text('Max');
	} else {
		emcAmountBtn.text(Game.settings.format(emcAmount));
	}
}

function convertEnergy(resourceName, notification){
	var current = getResource(resourceName);
	var capacity = getStorage(resourceName);
	var emcValue = window[resourceName + "EmcVal"];
	var amount;
	if(emcAmount === "Max"){
		amount = Math.floor(Math.min(Math.floor(getResource(RESOURCE.Energy)/emcValue), capacity - current));
	}
	else{
		amount = Math.floor(Math.min(emcAmount, capacity - current));
	}
	
	var requiredEnergy = amount * emcValue;

	if(amount > 0 && getResource(RESOURCE.Energy) >= requiredEnergy){
		Game.resources.takeResource(RESOURCE.Energy, requiredEnergy);
		Game.resources.addResource(resourceName, amount);
		if(notification != false){
			Game.notifyInfo('Energy Conversion', 'Gained ' + Game.settings.format(amount) + ' ' + Game.utils.capitaliseFirst(resourceName));
		}

		refreshConversionDisplay();
	}
}

function convertPlasma(resourceName, notification){
	var current = getResource(resourceName);
	var capacity = getStorage(resourceName);
	var emcValue = window[resourceName + "EmcVal"];
	var amount;
	if(emcAmount === "Max"){
		amount = Math.floor(Math.min(Math.floor(getResource(RESOURCE.Plasma)/emcValue), capacity - current) - 3333); // Retains 10,000 plasma
	}
	else{
		amount = Math.floor(Math.min(emcAmount, capacity - current));
	}

	var requiredPlasma = amount*emcValue;

	if(amount > 0 && getResource(RESOURCE.Plasma) >= requiredPlasma){
		Game.resources.takeResource(RESOURCE.Plasma, requiredPlasma);
		Game.resources.addResource(resourceName, amount);
		if(notification != false){
			Game.notifyInfo('Plasma Conversion', 'Gained ' + Game.settings.format(parseFloat(amount)) + ' ' + Game.utils.capitaliseFirst(resourceName));
		}

		refreshConversionDisplay();
	}
}

$('input[type="checkbox"]').on('change', function() {
	$('input[class="autoEmc"]').not(this).prop('checked', false);
	autoResource = this.id.substring(0,this.id.indexOf("Auto"));
	if($(this).is(":checked") == false){
		autoResource = null;
	}
});

function gainAutoEmc(){
	if(autoResource == null){
		return;
	}
	emcAmount = "Max";
	if(autoResource != "meteorite"){
		convertEnergy(autoResource, false);
	} else {
		convertPlasma(autoResource, false);
	}
}

var dyson = 0; var dysonTitaniumCost = 1; var dysonGoldCost = 1; var dysonSiliconCost = 1; var dysonMeteoriteCost = 1; var dysonIceCost = 1;

const ringTitaniumCost = 1; const ringGoldCost = 1; const ringSiliconCost = 1; const ringMeteoriteCost = 1; const ringIceCost = 1; const ringSegmentCost = 1; const ringRocketFuelCost = 1;

const swarmTitaniumCost = 1; const swarmGoldCost = 1; const swarmSiliconCost = 1; const swarmMeteoriteCost = 1; const swarmIceCost = 1; const swarmSegmentCost = 1; const swarmRocketFuelCost = 1;

const sphereTitaniumCost = 1; const sphereGoldCost = 1; const sphereSiliconCost = 1; const sphereMeteoriteCost = 1; const sphereIceCost = 1; const sphereSegmentCost = 1; const sphereRocketFuelCost = 1;

function updateDysonCost(){
	dysonTitaniumCost = Math.floor(1 * Math.pow(1.02,dyson));
	dysonGoldCost = Math.floor(1 * Math.pow(1.02,dyson));
	dysonSiliconCost = Math.floor(1 * Math.pow(1.02,dyson));
	dysonMeteoriteCost = Math.floor(1 * Math.pow(1.02,dyson));
	dysonIceCost = Math.floor(1 * Math.pow(1.02,dyson));
}

function getDyson(){
	if (getResource(RESOURCE.Titanium) >= dysonTitaniumCost && getResource(RESOURCE.Gold) >= dysonGoldCost && getResource(RESOURCE.Silicon) >= dysonSiliconCost && getResource(RESOURCE.Meteorite) >= dysonMeteoriteCost && getResource(RESOURCE.Ice) >= dysonIceCost) {
		Game.resources.takeResource(RESOURCE.Titanium, dysonTitaniumCost);
		Game.resources.takeResource(RESOURCE.Gold, dysonGoldCost);
		Game.resources.takeResource(RESOURCE.Silicon, dysonSiliconCost);
		Game.resources.takeResource(RESOURCE.Meteorite, dysonMeteoriteCost);
		Game.resources.takeResource(RESOURCE.Ice, dysonIceCost);
		dyson += 250;

		updateDysonCost();

		return true;
	}
	else{
		return false;
	}
}

function buildDysonTo(n) {
	while (dyson < n && getDyson()){}
}

function buildRing(){
	if(dyson >= ringSegmentCost && getResource(RESOURCE.RocketFuel) >= ringRocketFuelCost){
		dyson -= ringSegmentCost;
		Game.resources.takeResource(RESOURCE.RocketFuel, ringRocketFuelCost);
		ring++;

		updateDysonCost();
	}
}

function buildQuickRing(){
	if (getResource(RESOURCE.Titanium) >= ringTitaniumCost && getResource(RESOURCE.Gold) >= ringGoldCost && getResource(RESOURCE.Silicon) >= ringSiliconCost && getResource(RESOURCE.Meteorite) >= ringMeteoriteCost && getResource(RESOURCE.Ice) >= ringIceCost) {
		if(getResource(RESOURCE.RocketFuel) >= ringRocketFuelCost){
			Game.resources.takeResource(RESOURCE.Titanim, ringTitaniumCost);
			Game.resources.takeResource(RESOURCE.Gold, ringGoldCost);
			Game.resources.takeResource(RESOURCE.Silicon, ringSiliconCost);
			Game.resources.takeResource(RESOURCE.Meteorite, ringMeteoriteCost);
			Game.resources.takeResource(RESOURCE.Ice, ringIceCost);
			Game.resources.takeResource(RESOURCE.RocketFuel, ringRocketFuelCost);
			ring++;
		}
	}
	else{
		buildDysonTo(ringSegmentCost);
		buildRing();
	}
}		

function buildSwarm(){
	if(dyson >= swarmSegmentCost && getResource(RESOURCE.RocketFuel) >= swarmRocketFuelCost){
		dyson -= swarmSegmentCost;
		Game.resources.takeResource(RESOURCE.RocketFuel, swarmRocketFuelCost);
		swarm++;

		updateDysonCost();
	}
}

function buildQuickSwarm(){
	if (getResource(RESOURCE.Titanium) >= swarmTitaniumCost && getResource(RESOURCE.Gold) >= swarmGoldCost && getResource(RESOURCE.Silicon) >= swarmSiliconCost && getResource(RESOURCE.Meteorite) >= swarmMeteoriteCost && getResource(RESOURCE.Ice) >= swarmIceCost) {
		if(getResource(RESOURCE.RocketFuel) >= swarmRocketFuelCost){
			Game.resources.takeResource(RESOURCE.Titanim, swarmTitaniumCost);
			Game.resources.takeResource(RESOURCE.Gold, swarmGoldCost);
			Game.resources.takeResource(RESOURCE.Silicon, swarmSiliconCost);
			Game.resources.takeResource(RESOURCE.Meteorite, swarmMeteoriteCost);
			Game.resources.takeResource(RESOURCE.Ice, swarmIceCost);
			Game.resources.takeResource(RESOURCE.RocketFuel, swarmRocketFuelCost);
			swarm++;
		}
	}
	else{
		buildDysonTo(swarmSegmentCost);
		buildSwarm();
	}
}

function buildSphere(){
	if(dyson >= sphereSegmentCost && getResource(RESOURCE.RocketFuel) >= sphereRocketFuelCost && sphere <= Game.interstellar.stars.systemsConquered){
		dyson -= sphereSegmentCost;
		Game.resources.takeResource(RESOURCE.RocketFuel, sphereRocketFuelCost);
		sphere++;

		updateDysonCost();

		if(Game.stargaze.unlocked != true){
			document.getElementById("stargazeTab").className = "";
			Game.stargaze.unlocked = true;
			newUnlock('stargaze');
		}
	}
}

function buildQuickSphere(){
	if (getResource(RESOURCE.Titanium) >= sphereTitaniumCost && getResource(RESOURCE.Gold) >= sphereGoldCost && getResource(RESOURCE.Silicon) >= sphereSiliconCost && getResource(RESOURCE.Meteorite) >= sphereMeteoriteCost && getResource(RESOURCE.Ice) >= sphereIceCost) {
		if(getResource(RESOURCE.RocketFuel) >= sphereRocketFuelCost && sphere <= Game.interstellar.stars.systemsConquered){
			Game.resources.takeResource(RESOURCE.Titanim, sphereTitaniumCost);
			Game.resources.takeResource(RESOURCE.Gold, sphereGoldCost);
			Game.resources.takeResource(RESOURCE.Silicon, sphereSiliconCost);
			Game.resources.takeResource(RESOURCE.Meteorite, sphereMeteoriteCost);
			Game.resources.takeResource(RESOURCE.Ice, sphereIceCost);
			Game.resources.takeResource(RESOURCE.RocketFuel, sphereRocketFuelCost);
			sphere++;
			if(Game.stargaze.unlocked != true){
				document.getElementById("stargazeTab").className = "";
				Game.stargaze.unlocked = true;
				newUnlock('stargaze');
			}
		}
	}
	else{
		buildDysonTo(sphereSegmentCost);
		buildSphere();
	}
}
