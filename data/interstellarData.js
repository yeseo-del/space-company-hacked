Game.interstellarCategoryData = (function () {

    var instance = {};

    instance.general = {
        title: 'Interstellar',
        category: 'general'
    };

    instance.faction = {
        title: 'Faction Star Systems',
        category: 'faction',
    };

    return instance;

}());

Game.interstellarData = (function(){

	var instance = {};

	instance.comms = {
		name: 'Communications',
		desc: 'This is where you learn about other systems to travel to. <br><b>NB: The first star, Alpha Centauri is 4.3 LY away. 1 IRS will not get you there.</b>',
		category: 'general',
		unlocked: false
	};

	instance.rocket = {
		name: 'Rockets',
		desc: 'This is where you can construct your transport to the stars.',
		category: 'general',
		built: 'Not Built',
		unlocked: false
	};

	instance.antimatter = {
		name: 'Antimatter',
		desc: 'Your fuel for interstellar travel is produced here. Unfortunately, you can only handle 100k Antimatter per Star System as it is incredibly volatile.<br><br><button class="btn btn-default" onclick="toggleAntimatter()">Toggle Antimatter <span id="antimatterToggled">On</span></button>',
		category: 'general',
		unlocked: false
	};

	instance.travel = {
		name: 'Travel',
		desc: 'Here, you can travel across the cosmos to your heart\'s desire. When you explore a star system, it will appear in the respective faction tab, where you can gain control of it for boosts in the resources present. The number in () after the distance is the antimatter needed to travel there.',
		category: 'general',
		unlocked: false
	};

	instance.military = {
		name: 'Military',
		desc: 'This is where you can build up your fleet of ships to invade other systems. Your total fleet\'s attributes are based on which ships you own.',
		category: 'general',
		unlocked: false
	};

	instance.carnelian = {
		name: "Carnelian Resistance",
		desc: "A ruthless faction with a fierce anger towards the ones in power, most notable, the Prasnian Empire. They are incessant in their opposition and focus their whole force towards attacking their enemies. Because of this, what they offer comprises mostly of upgrades tending towards a more active gameplay.",
		category: "faction",
		opinion: 0,
		unlocked: false
	};

	instance.prasnian = {
		name: "Prasnian Empire",
		desc: "The current leader in the galaxy and the faction most focused on keeping things as they are. Opposed to change, they have an authoritarian regime and offer mainly upgrades concerning structures such as the Dysons or Wonders",
		category: "faction",
		opinion: 0,
		unlocked: false
	};

	instance.hyacinite = {
		name: "Hyacinite Congregation",
		desc: "The Hyacinite Congregationg is a science loving society, proud of all advances in technology and always looking to the future. They fight for the truth and are welcoming to anyone who shares their beliefs.",
		category: "faction",
		opinion: 0,
		unlocked: false
	};

	instance.kitrinos = {
		name: "Kitrinos Corporation",
		desc: "This private company has grown powerful over the galaxy and is inspired by profits, with allies to those who can support their aims. Upgrades offered focus on passive gains, with a large amount of automation.",
		category: "faction",
		opinion: 0,
		unlocked: false
	};

	instance.moviton = {
		name: "Moviton Syndicate",
		desc: "The Moviton Syndicate is an expansionist centred faction, with a goal of conquest over the galaxy. They often play both sides of a conflict, hoping to gain from the chaos. They offer improvements in your travel, including rocket building and interstellar travel.",
		category: "faction",
		opinion: 0,
		unlocked: false
	};

	instance.overlord = {
		name: "Overlord Cult",
		desc: "This faction is shrowded in mystery. While not much is known, a great sense of power overlooks the whole galaxy, seemingly above the other 5 factions and their 'petty' squables. The upgrades from your loyalty to the Overlord are not constrained to a type and vary greatly.",
		category: "faction",
		opinion: 0,
		unlocked: false
	};

	return instance;

}());

Game.commsData = (function(){

	var instance = {};

	instance.astroBreakthrough = {
		entryName: 'astroBreakthrough',
		name: 'Astronomical Breakthrough',
		desc: 'A huge problem with the theory of interstellar space travel is on the verge of being broken. Make it happen with this upgrade. This is a one time upgrade, increasing your exploration range by 5 Light Years.',
		category: 'comms',
		unlocked: true,
		displayNeedsUpdate: true,
		max: 1,
		completed: false,
		cost: {
			'metal': 1,
			'ice': 1,
			'meteorite': 1
		},
		defaultCost: {
			'metal': 1,
			'ice': 1,
			'meteorite': 1
		}
	};

	instance.IRS = {
		entryName: 'IRS',
		name: 'Interstellar Radar Scanner',
		desc: 'The Overlord gifts you with the technology to discover stars in outer space by using the IRS. Each one increases the exploration range by 1 Light Year.',
		category: 'comms',
		unlocked: true,
		displayNeedsUpdate: true,
		cost: {
			'metal': 1,
			'ice': 1,
			'meteorite': 1
		},
		defaultCost: {
			'metal': 1,
			'ice': 1,
			'meteorite': 1
		}
	};

	return instance;

}());

Game.rocketData = (function(){

	var instance = {};

	instance.tier1Rocket = {
		name: 'Rocket Ship',
		desc: 'The Rocket Ship can travel to Stars in the Milky Way, but cannot land on objects within the systems.',
		category: 'rocket',
		max: 1,
		unlocked: true,
		built: false,
		displayNeedsUpdate: true,
		cost: {
			'shield': 50,
			'engine': 25,
			'aero': 15
		}
	};

	return instance;

}());

Game.rocketPartsData = (function(){

	var instance = {};

	instance.shield = {
		name: 'Shield Plating',
		entryName: 'shield',
		desc: 'This plating combats the Sun\'s radiation, and can protect anyone inside from the frigid cold of space.',
		category: 'rocketParts',
		max: 50,
		unlocked: true,
		displayNeedsUpdate: true,
		cost: {
			'lunarite': 1,
			'titanium': 1,
			'metal': 1
		},
		defaultCost: {
			'lunarite': 1,
			'titanium': 1,
			'metal': 1
		}
	};

	instance.engine = {
		name: 'Engine Unit',
		entryName: 'engine',
		desc: 'These combine antimatter with matter in a controlled reaction to create propulsion that will carry you to the stars.',
		category: 'rocketParts',
		max: 25,
		unlocked: true,
		displayNeedsUpdate: true,
		cost: {
			'silicon': 1,
			'meteorite': 1,
			'hydrogen': 1
		},
		defaultCost: {
			'silicon': 1,
			'meteorite': 1,
			'hydrogen': 1
		}
	};

	instance.aero = {
		name: 'Aerodynamic Sections',
		entryName: 'aero',
		desc: 'These allow for easy takeoffs and landings out of atmospheres so that you don\'t have to worry about air resistance.',
		category: 'rocketParts',
		max: 15,
		unlocked: true,
		displayNeedsUpdate: true,
		cost: {
			'silver': 1,
			'ice': 1,
			'gem': 1
		},
		defaultCost: {
			'silver': 1,
			'ice': 1,
			'gem': 1
		}
	};

	return instance;

}());

Game.antimatterData = (function(){

	var instance = {};

	instance.drive = {
		entryName: 'drive',
		name: 'Alcubierre Drive',
		desc: 'This powerful reactor can turn high-energy plasma into the most efficient fuel we can imagine.',
		category: 'antimatter',
		unlocked: true,
		displayNeedsUpdate: true,
		resourcePerSecond: {
            'antimatter': 0.5,
            'plasma': -100,
            'ice': -12000
        },
		cost: {
			'silver': 1,
			'oil': 1,
			'meteorite': 1
		},
		defaultCost: {
			'silver': 1,
			'oil': 1,
			'meteorite': 1
		}
	};

	return instance;

}());

Game.militaryData = (function(){

	var instance = {};

	instance.scout = {
		entryName: 'scout',
		name: 'Scout',
		desc: 'Scout ships are the smallest and fastest ships and cost the least of all. Despite their seemingly little worth, they are important in battle and in numbers, can be deadly.',
		category: 'military',
		unlocked: true,
		displayNeedsUpdate: true,
		stats: {
			'power': 3,
			'defense': 2,
			'speed': 15
		},
		cost: {
			'metal': 1,
			'gem': 1,
			'silver': 1
		},
		defaultCost: {
			'metal': 1,
			'gem': 1,
			'silver': 1
		}
	};

	instance.frigate = {
		entryName: 'frigate',
		name: 'Frigate',
		desc: 'Larger than scouts, Frigates are among the smaller side of ship warefare. They have more power than scouts, but are significantly slower.',
		category: 'military',
		unlocked: true,
		displayNeedsUpdate: true,
		stats: {
			'power': 5,
			'defense': 6,
			'speed': 12
		},
		cost: {
			'gold': 1,
			'lunarite': 1,
			'meteorite': 1
		},
		defaultCost: {
			'gold': 1,
			'lunarite': 1,
			'meteorite': 1
		}
	};

	instance.corvette = {
		entryName: 'corvette',
		name: 'Corvette',
		desc: 'The Corvette is a mid-sized ship with decent speed, given its other attributes. What it lacks in defense, it makes up for in power and speed and is a good ship to populate your fleets with.',
		category: 'military',
		unlocked: true,
		displayNeedsUpdate: true,
		stats: {
			'power': 8,
			'defense': 4,
			'speed': 10
		},
		cost: {
			'titanium': 1,
			'ice': 1,
			'silicon': 1
		},
		defaultCost: {
			'titanium': 1,
			'ice': 1,
			'silicon': 1
		}
	};

	instance.battlecruiser = {
		entryName: 'battlecruiser',
		name: 'Battle Cruiser',
		desc: 'The Battle Cruiser is a costly investment, but pays off with a balanced mix of power, defense and speed. It is a high-end ship, both in terms of attributes and cost.',
		category: 'military',
		unlocked: true,
		displayNeedsUpdate: true,
		stats: {
			'power': 15,
			'defense': 13,
			'speed': 9
		},
		cost: {
			'metal': 1,
			'uranium': 1,
			'hydrogen': 1
		},
		defaultCost: {
			'metal': 1,
			'uranium': 1,
			'hydrogen': 1
		}
	};

	instance.capitalship = {
		entryName: 'capitalship',
		name: 'Capital Ship',
		desc: 'The Capital Ship is a Defense-heavy ship, but can still pack a punch with it\'s large attack force. The main downside is the slow speed, dragging the fleet\'s manouverability down.',
		category: 'military',
		unlocked: true,
		displayNeedsUpdate: true,
		stats: {
			'power': 57,
			'defense': 62,
			'speed': 5
		},
		cost: {
			'lunarite': 1,
			'helium': 1,
			'meteorite': 1
		},
		defaultCost: {
			'lunarite': 1,
			'helium': 1,
			'meteorite': 1
		}
	};

	return instance;

}());
