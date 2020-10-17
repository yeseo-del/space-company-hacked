Game.buildingData = (function () {

    var instance = {};

    var baseProducerBuilding = {
        type: BUILDING_TYPE.PRODUCER,
        unlocked: false,
        maxCount: Number.MAX_VALUE,
        costType: COST_TYPE.FIXED
    };

    // Energy
    instance.energyT1 = $.extend({}, baseProducerBuilding, {
        name: 'Charcoal Engine',
        desc: 'Burns Charcoal to produce a steady source of Energy.',
        resource: 'energy',
        resourcePerSecond: {
            'energy': 250,
            'charcoal': -1
        },
        cost: {
            'metal': 1,
            'gem': 1
        }
    });

    instance.energyT2 = $.extend({}, baseProducerBuilding, {
        name: 'Solar Panel',
        desc: 'Gains Energy slowly from the sun without using any resources.',
        resource: 'energy',
        resourcePerSecond: {
            'energy': 1.5
        },
        cost: {
            'metal': 1,
            'gem': 1
        }
    });

    instance.energyT3 = $.extend({}, baseProducerBuilding, {
        name: 'Methane Power Station',
        desc: 'Burn powerful methane from Venus to satisfy all your power needs.',
        resource: 'energy',
        resourcePerSecond: {
            'energy': 23,
            'methane': -1
        },
        cost: {
            'lunarite': 1,
            'titanium': 1
        }
    });

    instance.energyT4 = $.extend({}, baseProducerBuilding, {
        name: 'Nuclear Power Station',
        desc: 'Uses fission to create large amounts of power.',
        resource: 'energy',
        resourcePerSecond: {
            'energy': 153,
            'uranium': -1
        },
        cost: {
            'lunarite': 1,
            'titanium': 1
        }
    });

    instance.energyT5 = $.extend({}, baseProducerBuilding, {
        name: 'Magmatic Dynamo',
        desc: 'The Magmatic Dynamo is a method of producing power by using lava as a fuel. Because of the extreme temperature of lava, a lot of Energy can be produced at once.',
        resource: 'energy',
        resourcePerSecond: {
            'energy': 191,
            'lava': -1
        },
        cost: {
            'lunarite': 1,
            'gem': 1,
            'silver': 1
        }
    });

    instance.energyT6 = $.extend({}, baseProducerBuilding, {
        name: 'Fusion Reactor',
        desc: 'In a fusion reaction, Energy is released when two light atomic nuclei are fused together to form one heavier atom. This is the same reaction that occurs in stars and produces a lot of power.',
        resource: 'energy',
        resourcePerSecond: {
            'energy': 273,
            'hydrogen': -1,
            'helium': -1
        },
        cost: {
            'lunarite': 1,
            'titanium': 1,
            'silicon': 1
        }
    });

    // Plasma
    instance.plasmaT1 = $.extend({}, baseProducerBuilding, {
        name: 'Super-Heater',
        desc: 'The Super-Heater throws electricity at Hydrogen to turn it into a plasmatic substance.',
        resource: 'plasma',
        resourcePerSecond: {
            'energy': -1,
            'hydrogen': -1,
            'plasma': 250
        },
        cost: {
            'lunarite': 1,
            'gem': 1,
            'silicon': 1
        }
    });

    instance.plasmaT2 = $.extend({}, baseProducerBuilding, {
        name: 'Plasmatic Pit',
        desc: 'This contraption converts Helium into Plasma through firing intensive energy bolts at the gas cloud.',
        resource: 'plasma',
        resourcePerSecond: {
            'energy': -1,
            'helium': -1,
            'plasma': 10
        },
        cost: {
            'lunarite': 1,
            'silicon': 1,
            'meteorite': 1
        }
    });

    instance.plasmaT3 = $.extend({}, baseProducerBuilding, {
        name: 'Electron Bath',
        desc: 'Bathing in Electrons. What could go wrong?',
        resource: 'plasma',
        resourcePerSecond: {
            'energy': -1,
            'helium': -1,
            'hydrogen': -1,
            'plasma': 140
        },
        cost: {
            'lunarite': 1,
            'silicon': 1,
            'meteorite': 1
        }
    });

    // Uranium
    instance.uraniumT1 = $.extend({}, baseProducerBuilding, {
        name: 'Grinder',
        desc: 'Pulverizes Uranium for easy transportation out of deep mineshafts.',
        resource: 'uranium',
        resourcePerSecond: {
            'uranium': 250
        },
        cost: {
            'lunarite': 1,
            'titanium': 1,
            'gold': 1
        }
    });

    instance.uraniumT2 = $.extend({}, baseProducerBuilding, {
        name: 'Cubic Teleposer',
        desc: 'This teleposes blocks of rock from far underground to the surface so that Uranium can be mined more easily.',
        resource: 'uranium',
        resourcePerSecond: {
            'energy': -1,
            'uranium': 9
        },
        cost: {
            'lunarite': 1,
            'uranium': 1,
            'oil': 1
        }
    });

    instance.uraniumT3 = $.extend({}, baseProducerBuilding, {
        name: 'Uranium Enricher',
        desc: 'The Enricher increases the quality of uranium mined and thus allows more of the uranium in rocks to be used in your company.',
        resource: 'uranium',
        resourcePerSecond: {
            'energy': -1,
            'uranium': 61
        },
        cost: {
            'lunarite': 1,
            'titanium': 1,
            'silicon': 1
        }
    });

    instance.uraniumT4 = $.extend({}, baseProducerBuilding, {
        name: 'Yellowcake Recycler',
        desc: 'Recycles used-up Uranium to provide the resources with a second use. This greatly increases the amount of Uranium you can use per second.',
        resource: 'uranium',
        resourcePerSecond: {
            'energy': -1,
            'uranium': 235
        },
        cost: {
            'lunarite': 1,
            'methane': 1,
            'meteorite': 1
        }
    });

    // Lava
    instance.lavaT1 = $.extend({}, baseProducerBuilding, {
        name: 'Heat Resistant Crucible',
        desc: 'You can use a modified crucible to pick up lava and to store it for later use.',
        resource: 'lava',
        resourcePerSecond: {
            'lava': 250
        },
        cost: {
            'lunarite': 1,
            'gem': 1
        }
    });

    instance.lavaT2 = $.extend({}, baseProducerBuilding, {
        name: 'Lava Extractor',
        desc: 'This extracts lava from volcanoes automatically and quickly.',
        resource: 'lava',
        resourcePerSecond: {
            'energy': -1,
            'lava': 7
        },
        cost: {
            'lunarite': 1,
            'titanium': 1,
            'silicon': 1
        }
    });

    instance.lavaT3 = $.extend({}, baseProducerBuilding, {
        name: 'Igneous Extruder',
        desc: 'Instead of going out and finding lava, it can be more convenient to make it yourself with heat and pressure.',
        resource: 'lava',
        resourcePerSecond: {
            'energy': -1,
            'lava': 43
        },
        cost: {
            'lunarite': 1,
            'titanium': 1,
            'silicon': 1
        }
    });

    instance.lavaT4 = $.extend({}, baseProducerBuilding, {
        name: 'Volcanic Veluptuator',
        desc: 'A melting pot of misery, pouring lava out from mined rock.',
        resource: 'lava',
        resourcePerSecond: {
            'energy': -1,
            'lava': 187
        },
        cost: {
            'lunarite': 1,
            'gold': 1,
            'meteorite': 1
        }
    });

    /********************
     * Earth Resources  *
     ********************/

    // Oil
    instance.oilT1 = $.extend({}, baseProducerBuilding, {
        name: 'Small Pump',
        desc: 'Build a small pump to extract Oil from the ground.',
        resource: 'oil',
        resourcePerSecond: {
            'oil': 250
        },
        cost: {
            'metal': 1,
            'gem': 1
        }
    });

    instance.oilT2 = $.extend({}, baseProducerBuilding, {
        name: 'Pumpjack',
        desc: 'Pumpjacks are much bigger than small pumps and produce Oil on an industrial scale but they require a lot of Energy.',
        resource: 'oil',
        resourcePerSecond: {
            'energy': -1,
            'oil': 10
        },
        cost: {
            'metal': 1,
            'gem': 1,
            'oil': 1
        }
    });

    instance.oilT3 = $.extend({}, baseProducerBuilding, {
        name: 'Oil Field',
        desc: 'Oil Fields are large open spaces, usually found in deserts where vast oil wells can be found under the ground.',
        resource: 'oil',
        resourcePerSecond: {
            'energy': -1,
            'oil': 63
        },
        cost: {
            'lunarite': 1,
            'titanium': 1,
            'silicon': 1
        }
    });

    instance.oilT4 = $.extend({}, baseProducerBuilding, {
        name: 'Offshore Rig',
        desc: 'Offshore Rigs are megastructures floating in the oceans, extracting Oil from under the sea-beds.',
        resource: 'oil',
        resourcePerSecond: {
            'energy': -1,
            'oil': 246
        },
        cost: {
            'lunarite': 1,
            'titanium': 1,
            'meteorite': 1
        }
    });

    // Metal
    instance.metalT1 = $.extend({}, baseProducerBuilding, {
        name: 'Miner',
        desc: 'Build a pickaxe for your miner.',
        resource: 'metal',
        unlocked: true,
        resourcePerSecond: {
            'metal': 250
        },
        cost: {
            'metal': 1,
            'wood': 1
        }
    });

    instance.metalT2 = $.extend({}, baseProducerBuilding, {
        name: 'Heavy Drill',
        desc: 'Heavy Drills mine Metal at mass.',
        resource: 'metal',
        resourcePerSecond: {
            'energy': -1,
            'metal': 8
        },
        cost: {
            'metal': 1,
            'gem': 1,
            'oil': 1
        }
    });

    instance.metalT3 = $.extend({}, baseProducerBuilding, {
        name: 'Giga Drill',
        desc: 'Giga Drills extract Metal at colossal speeds.',
        resource: 'metal',
        resourcePerSecond: {
            'energy': -1,
            'metal': 108
        },
        cost: {
            'lunarite': 1,
            'gem': 1,
            'silicon': 1
        }
    });

    instance.metalT4 = $.extend({}, baseProducerBuilding, {
        name: 'Quantum Drill',
        desc: 'Quantum Drills bend the space-time continuum to get metal faster than physically possible.',
        resource: 'metal',
        resourcePerSecond: {
            'energy': -1,
            'metal': 427
        },
        cost: {
            'lunarite': 1,
            'gold': 1,
            'meteorite': 1
        }
    });

    // Gem
    instance.gemT1 = $.extend({}, baseProducerBuilding, {
        name: 'Gem Miner',
        desc: 'Build an improved pickaxe to mine Gems.',
        resource: 'gem',
        unlocked: true,
        resourcePerSecond: {
            'gem': 250
        },
        cost: {
            'metal': 1,
            'gem': 1
        }
    });

    instance.gemT2 = $.extend({}, baseProducerBuilding, {
        name: 'Advanced Drill',
        desc: 'Advanced Drills mine gem at mass. Because of the toughness of the drill needed it is slower than the heavy drill.',
        resource: 'gem',
        resourcePerSecond: {
            'energy': -1,
            'gem': 4
        },
        cost: {
            'metal': 1,
            'gem': 1,
            'oil': 1
        }
    });

    instance.gemT3 = $.extend({}, baseProducerBuilding, {
        name: 'Diamond Encrusted Drill',
        desc: 'The Diamond Encrusted Drill is one of the strongest drills in the solar system, and as such, can collect Gems faster than anything before it.',
        resource: 'gem',
        resourcePerSecond: {
            'energy': -1,
            'gem': 89
        },
        cost: {
            'lunarite': 1,
            'gem': 1,
            'silicon': 1
        }
    });

    instance.gemT4 = $.extend({}, baseProducerBuilding, {
        name: 'Carbyne Drill',
        desc: 'Carbyne Drills one of the strongest drills in the solar system, and as such, can collect Gems faster than anything before it.',
        resource: 'gem',
        resourcePerSecond: {
            'energy': -1,
            'gem': 358
        },
        cost: {
            'lunarite': 1,
            'gem': 1,
            'meteorite': 1
        }
    });

    // Charcoal
    instance.charcoalT1 = $.extend({}, baseProducerBuilding, {
        name: 'Woodburner',
        desc: 'Build a shovel for your woodburner.',
        resource: 'charcoal',
        resourcePerSecond: {
            'wood': -1,
            'charcoal': 250
        },
        cost: {
            'metal': 1,
            'wood': 1
        }
    });

    instance.charcoalT2 = $.extend({}, baseProducerBuilding, {
        name: 'Furnace',
        desc: 'Furnaces use electric heaters to produce heat to turn Wood into Charcoal. Because of the increased heat, the process is more efficient.',
        resource: 'charcoal',
        resourcePerSecond: {
            'energy': -1,
            'wood': -1,
            'charcoal': 4
        },
        cost: {
            'metal': 1,
            'wood': 1,
            'oil': 1
        }
    });

    instance.charcoalT3 = $.extend({}, baseProducerBuilding, {
        name: 'Industrial Kiln',
        desc: 'These large kilns are much for effective than previous methods of creating charcoal and use less wood to make the same amount as a furnace.',
        resource: 'charcoal',
        resourcePerSecond: {
            'energy': -1,
            'wood': -1,
            'charcoal': 53
        },
        cost: {
            'lunarite': 1,
            'gem': 1,
            'silicon': 1
        }
    });

    instance.charcoalT4 = $.extend({}, baseProducerBuilding, {
        name: 'Forest Fryer',
        desc: 'Forests? What forests?',
        resource: 'charcoal',
        resourcePerSecond: {
            'energy': -1,
            'wood': -1,
            'charcoal': 210
        },
        cost: {
            'lunarite': 1,
            'lava': 1,
            'meteorite': 1
        }
    });

    // Wood
    instance.woodT1 = $.extend({}, baseProducerBuilding, {
        name: 'Woodcutter',
        desc: 'Build an axe for your woodcutter.',
        resource: 'wood',
        unlocked: true,
        resourcePerSecond: {
            'wood': 250
        },
        cost: {
            'metal': 1,
            'wood': 1
        }
    });

    instance.woodT2 = $.extend({}, baseProducerBuilding, {
        name: 'Laser Cutter',
        desc: 'Laser Cutters slice trees (and fingers) quicker than axes and produce a lot more wood.',
        resource: 'wood',
        resourcePerSecond: {
            'energy': -1,
            'wood': 6
        },
        cost: {
            'metal': 1,
            'gem': 1,
            'oil': 1
        }
    });

    instance.woodT3 = $.extend({}, baseProducerBuilding, {
        name: 'Mass Deforester',
        desc: 'This machine is the reason we\'re losing our rainforests. At least we get lots of wood!',
        resource: 'wood',
        resourcePerSecond: {
            'energy': -1,
            'wood': 74
        },
        cost: {
            'lunarite': 1,
            'titanium': 1,
            'silicon': 1
        }
    });

    instance.woodT4 = $.extend({}, baseProducerBuilding, {
        name: 'Biomass Infuser',
        desc: 'Creates Wood using old, useless materials found everywhere on Earth by crushing them and packing what remains as densely as possible until it can be used as Wood again.',
        resource: 'wood',
        resourcePerSecond: {
            'energy': -1,
            'wood': 297
        },
        cost: {
            'lunarite': 1,
            'oil': 1,
            'meteorite': 1
        }
    });

    // Silicon
    instance.siliconT1 = $.extend({}, baseProducerBuilding, {
        name: 'Empowered Blowtorch',
        desc: 'This type of blowtorch instantly turns sand into Silicon, but only on a small scale. To make it, extraterrestrial resources are required.',
        resource: 'silicon',
        resourcePerSecond: {
            'silicon': 250
        },
        cost: {
            'lunarite': 1,
            'titanium': 1
        }
    });

    instance.siliconT2 = $.extend({}, baseProducerBuilding, {
        name: 'Seaside Scorcher',
        desc: 'This tool almost melts parts of beaches to get silicon at a larger scale.',
        resource: 'silicon',
        resourcePerSecond: {
            'energy': -1,
            'silicon': 9
        },
        cost: {
            'lunarite': 1,
            'gem': 1,
            'oil': 1
        }
    });

    instance.siliconT3 = $.extend({}, baseProducerBuilding, {
        name: 'Beach Annihilator',
        desc: 'This weapon of mass destruction has been re-labelled and now hovers above coast-lines, or what is now left of them.',
        resource: 'silicon',
        resourcePerSecond: {
            'energy': -1,
            'silicon': 40
        },
        cost: {
            'lunarite': 1,
            'gem': 1,
            'silver': 1
        }
    });

    instance.siliconT4 = $.extend({}, baseProducerBuilding, {
        name: 'Desert Destroyer',
        desc: 'This large ship orbits around the planet, focused in the Sahara Desert, tearing up sand from Earth and turning it into Silicon under intense heat.',
        resource: 'silicon',
        resourcePerSecond: {
            'energy': -1,
            'silicon': 157
        },
        cost: {
            'lunarite': 1,
            'silicon': 1,
            'meteorite': 1
        }
    });

    /******************************
     * Inner Planetary Resources  *
     ******************************/

    // Lunarite
    instance.lunariteT1 = $.extend({}, baseProducerBuilding, {
        name: 'Native Moon Worker',
        desc: 'Bribe local workers to mine your Lunarite.',
        resource: 'lunarite',
        resourcePerSecond: {
            'lunarite': 250
        },
        cost: {
            'gem': 1
        }
    });

    instance.lunariteT2 = $.extend({}, baseProducerBuilding, {
        name: 'Low-Gravity Drill',
        desc: 'These drills practically float!',
        resource: 'lunarite',
        resourcePerSecond: {
            'energy': -1,
            'lunarite': 10
        },
        cost: {
            'metal': 1,
            'gem': 1,
            'oil': 1
        }
    });

    instance.lunariteT3 = $.extend({}, baseProducerBuilding, {
        name: 'Moon Quarry',
        desc: 'This quarry tears up the surface of the moon so much that it can be seen from Earth.',
        resource: 'lunarite',
        resourcePerSecond: {
            'energy': -1,
            'lunarite': 53
        },
        cost: {
            'lunarite': 1,
            'gem': 1,
            'silicon': 1
        }
    });

    instance.lunariteT4 = $.extend({}, baseProducerBuilding, {
        name: 'Planetary Excavator',
        desc: 'This large machine dives deep into the Earth to find large pools of Lunarite found near the core. This is originally where the metal on the Moon comes from.',
        resource: 'lunarite',
        resourcePerSecond: {
            'energy': -1,
            'lunarite': 207
        },
        cost: {
            'titanium': 1,
            'ice': 1,
            'meteorite': 1
        }
    });

    // Methane
    instance.methaneT1 = $.extend({}, baseProducerBuilding, {
        name: 'Vacuum Cleaner',
        desc: 'Sucks in methane and cleans the planet at the same time!',
        resource: 'methane',
        resourcePerSecond: {
            'methane': 250
        },
        cost: {
            'lunarite': 1
        }
    });

    instance.methaneT2 = $.extend({}, baseProducerBuilding, {
        name: 'Suction Excavator',
        desc: 'Sucks more than anything!',
        resource: 'methane',
        resourcePerSecond: {
            'energy': -1,
            'methane': 8
        },
        cost: {
            'lunarite': 1,
            'gem': 1,
            'oil': 1
        }
    });

    instance.methaneT3 = $.extend({}, baseProducerBuilding, {
        name: 'Space Cow Plantation',
        desc: 'These hold cows genetically moodified to produce methane constantly',
        resource: 'methane',
        resourcePerSecond: {
            'energy': -1,
            'methane': 37
        },
        cost: {
            'lunarite': 1,
            'titanium': 1,
            'silicon': 1
        }
    });

    instance.methaneT4 = $.extend({}, baseProducerBuilding, {
        name: 'Hydrothermal Vent',
        desc: 'Collect gas from deep sea vents on the ocean floor of Titan.',
        resource: 'methane',
        resourcePerSecond: {
            'energy': -1,
            'methane': 149
        },
        cost: {
            'lunarite': 1,
            'helium': 1,
            'meteorite': 1
        }
    });

    // Titanium
    instance.titaniumT1 = $.extend({}, baseProducerBuilding, {
        name: 'Explorer',
        desc: 'Hire explorers to search for Titanium on the surface, uncovered by winds on Mars.',
        resource: 'titanium',
        resourcePerSecond: {
            'titanium': 250
        },
        cost: {
            'gem': 1
        }
    });

    instance.titaniumT2 = $.extend({}, baseProducerBuilding, {
        name: 'Lunarite Drill',
        desc: 'These Lunarite Drills are extremely powerful, needed to mine out Titanium from inside Mars\' crust.',
        resource: 'titanium',
        resourcePerSecond: {
            'energy': -1,
            'titanium': 9
        },
        cost: {
            'lunarite': 1,
            'gem': 1,
            'oil': 1
        }
    });

    instance.titaniumT3 = $.extend({}, baseProducerBuilding, {
        name: 'Penta-Drill',
        desc: 'This is a mining machine modified to have 5 drills on its face. This allows for a massive increase in resources gained per second.',
        resource: 'titanium',
        resourcePerSecond: {
            'energy': -1,
            'titanium': 49
        },
        cost: {
            'lunarite': 1,
            'gem': 1,
            'silicon': 1
        }
    });

    instance.titaniumT4 = $.extend({}, baseProducerBuilding, {
        name: 'Drill of Titans',
        desc: 'This mighty drill is said to have been wielded by Titans themselves, many milennia ago.',
        resource: 'titanium',
        resourcePerSecond: {
            'energy': -1,
            'titanium': 197
        },
        cost: {
            'lunarite': 1,
            'gold': 1,
            'meteorite': 1
        }
    });

    // Gold
    instance.goldT1 = $.extend({}, baseProducerBuilding, {
        name: 'Rocket Droid',
        desc: 'Powered by Methane, this droid scouts the asteroids for gold deposits.',
        resource: 'gold',
        resourcePerSecond: {
            'gold': 250
        },
        cost: {
            'gem': 1,
            'methane': 1
        }
    });

    instance.goldT2 = $.extend({}, baseProducerBuilding, {
        name: 'Asteroid Destroyer',
        desc: 'Mines through asteroids to find Gold. It is much more effective than the simple droid.',
        resource: 'gold',
        resourcePerSecond: {
            'energy': -1,
            'gold': 8
        },
        cost: {
            'lunarite': 1,
            'gem': 1,
            'oil': 1
        }
    });

    instance.goldT3 = $.extend({}, baseProducerBuilding, {
        name: 'Death Star Jr',
        desc: 'That\'s no moon! That\'s a Space Station! This cuts through asteroids to expose all of the Gold in the centers.',
        resource: 'gold',
        resourcePerSecond: {
            'energy': -1,
            'gold': 51
        },
        cost: {
            'lunarite': 1,
            'silver': 1,
            'silicon': 1
        }
    });

    instance.goldT4 = $.extend({}, baseProducerBuilding, {
        name: 'Chronal Actuator',
        desc: 'Speeds up time through quantum physics in order to produce even more Gold.',
        resource: 'gold',
        resourcePerSecond: {
            'energy': -1,
            'gold': 211
        },
        cost: {
            'lunarite': 1,
            'helium': 1,
            'meteorite': 1
        }
    });

    // Silver
    instance.silverT1 = $.extend({}, baseProducerBuilding, {
        name: 'Scout Ship',
        desc: 'The Scout Ship searches through the asteroid field for pieces of silver embedded in asteroids.',
        resource: 'silver',
        resourcePerSecond: {
            'silver': 250
        },
        cost: {
            'lunarite': 1,
            'titanium': 1
        }
    });

    instance.silverT2 = $.extend({}, baseProducerBuilding, {
        name: 'Interplanetary Laser',
        desc: 'Cuts through asteroids to find silver deposits in their cores.',
        resource: 'silver',
        resourcePerSecond: {
            'energy': -1,
            'silver': 13
        },
        cost: {
            'lunarite': 1,
            'gem': 1,
            'oil': 1
        }
    });

    instance.silverT3 = $.extend({}, baseProducerBuilding, {
        name: 'Big Bertha',
        desc: 'This large, space drill, named after the World War One Howitzer built almost a milienia ago, is a silver seeking machine specially designed for mining asteroids.',
        resource: 'silver',
        resourcePerSecond: {
            'energy': -1,
            'silver': 53
        },
        cost: {
            'lunarite': 1,
            'silver': 1,
            'silicon': 1
        }
    });

    instance.silverT4 = $.extend({}, baseProducerBuilding, {
        name: 'Atomic Cannon',
        desc: 'This powerful cannon orbits Neptune and can atomise the surface of asteroids, revealing the silver within.',
        resource: 'silver',
        resourcePerSecond: {
            'energy': -1,
            'silver': 208
        },
        cost: {
            'lunarite': 1,
            'oil': 1,
            'meteorite': 1
        }
    });

    /******************************
     * Outer Planetary Resources  *
     ******************************/

    // Hydrogen
    instance.hydrogenT1 = $.extend({}, baseProducerBuilding, {
        name: 'Hydrogen Collector',
        desc: 'This collector travels around Jupiter seeking Hydrogen to store to bring back to Earth.',
        resource: 'hydrogen',
        resourcePerSecond: {
            'hydrogen': 250
        },
        cost: {
            'lunarite': 1,
            'titanium': 1
        }
    });

    instance.hydrogenT2 = $.extend({}, baseProducerBuilding, {
        name: 'Gaseous Magnet',
        desc: 'The magnet attracts the Hydrogen to it to increase the amount collected per second.',
        resource: 'hydrogen',
        resourcePerSecond: {
            'energy': -1,
            'hydrogen': 5
        },
        cost: {
            'lunarite': 1,
            'titanium': 1,
            'silicon': 1
        }
    });

    instance.hydrogenT3 = $.extend({}, baseProducerBuilding, {
        name: 'Electrolytic Cell',
        desc: 'These are made here on Earth and can turn water into hydrogen with a constant supply of Energy.',
        resource: 'hydrogen',
        resourcePerSecond: {
            'energy': -1,
            'hydrogen': 28
        },
        cost: {
            'silver': 1,
            'gold': 1,
            'silicon': 1
        }
    });

    instance.hydrogenT4 = $.extend({}, baseProducerBuilding, {
        name: 'Hindenburg Excavation',
        desc: 'Somehow, it works.',
        resource: 'hydrogen',
        resourcePerSecond: {
            'energy': -1,
            'hydrogen': 113
        },
        cost: {
            'lunarite': 1,
            'methane': 1,
            'meteorite': 1
        }
    });

    // Helium
    instance.heliumT1 = $.extend({}, baseProducerBuilding, {
        name: 'Helium Drone',
        desc: 'The Helium Drone scouts out the area on Saturn and picks out spots high in Helium which are then mined slowly by it.',        resource: 'helium',
        resourcePerSecond: {
            'helium': 250
        },
        cost: {
            'lunarite': 1,
            'titanium': 1
        }
    });

    instance.heliumT2 = $.extend({}, baseProducerBuilding, {
        name: 'Helium Tanker',
        desc: 'This huge tanker holds large amounts of Helium and transports it from Saturn to Earth through the vacuum of space.',
        resource: 'helium',
        resourcePerSecond: {
            'energy': -1,
            'helium': 11
        },
        cost: {
            'lunarite': 1,
            'titanium': 1,
            'silicon': 1
        }
    });

    instance.heliumT3 = $.extend({}, baseProducerBuilding, {
        name: 'Morphic Compressor',
        desc: 'The Compressor packs helium densely into a small space so that it can be easily transported back to Earth.',
        resource: 'helium',
        resourcePerSecond: {
            'energy': -1,
            'helium': 57
        },
        cost: {
            'lunarite': 1,
            'titanium': 1,
            'silicon': 1
        }
    });

    instance.heliumT4 = $.extend({}, baseProducerBuilding, {
        name: 'Gas Giant Skimmer',
        desc: 'Flying into Gas Giants\' atmospheres with a big bucket is the best plan we\'ve had yet!',
        resource: 'helium',
        resourcePerSecond: {
            'energy': -1,
            'helium': 232
        },
        cost: {
            'lunarite': 1,
            'titanium': 1,
            'meteorite': 1
        }
    });

    // Ice
    instance.iceT1 = $.extend({}, baseProducerBuilding, {
        name: 'Ice Pickaxe',
        desc: 'The Ice Pickaxe is the simplest way of mining frozen water, and although it is the cheapest, it is the slowest.',
        resource: 'ice',
        resourcePerSecond: {
            'ice': 250
        },
        cost: {
            'lunarite': 1,
            'gem': 1
        }
    });

    instance.iceT2 = $.extend({}, baseProducerBuilding, {
        name: 'Ice Drill',
        desc: 'The Ice Drill is more effective than the Pickaxe and gains much more Ice every second. However, it does use electricity.',
        resource: 'ice',
        resourcePerSecond: {
            'energy': -1,
            'ice': 9
        },
        cost: {
            'lunarite': 1,
            'titanium': 1,
            'silicon': 1
        }
    });

    instance.iceT3 = $.extend({}, baseProducerBuilding, {
        name: 'Ocean Freezer',
        desc: 'With advanced technology, you are now able to turn Earth\'s water into high-quality Ice, previously only found on Pluto.',
        resource: 'ice',
        resourcePerSecond: {
            'energy': -1,
            'ice': 65
        },
        cost: {
            'lunarite': 1,
            'titanium': 1,
            'silicon': 1
        }
    });

    instance.iceT4 = $.extend({}, baseProducerBuilding, {
        name: 'Mr Freeze',
        desc: 'This robot is the coolest guy in the solar system.',
        resource: 'ice',
        resourcePerSecond: {
            'energy': -1,
            'ice': 278
        },
        cost: {
            'wood': 1,
            'helium': 1,
            'meteorite': 1
        }
    });

    // Meteorite
    instance.meteoriteT1 = $.extend({}, baseProducerBuilding, {
        name: 'Meteorite Printer',
        desc: 'Contruct an automated way of producing meteorite without you having to do anything.',
        resource: 'meteorite',
        resourcePerSecond: {
            'plasma': -1,
            'meteorite': 1
        },
        cost: {
            'lunarite': 1,
            'silicon': 1
        }
    });

    instance.meteoriteT2 = $.extend({}, baseProducerBuilding, {
        name: 'Meteorite Web',
        desc: 'The Meteorite Web uses nano-fibres made while submerged in highly radioactive liquids to become strong enough to physically catch meteors from the Asteroid Belt. Plasma is required to refine the asteroids into Meteorite Ore, which can be usable.',
        resource: 'meteorite',
        resourcePerSecond: {
            'plasma': -1,
            'meteorite': 8
        },
        cost: {
            'lunarite': 1,
            'uranium': 1,
            'silicon': 1
        }
    });

    // Research
    instance.scienceT1 = $.extend({}, baseProducerBuilding, {
        name: 'Home Science Kit',
        desc: 'Build a small laboratory of your very own to start producing science. Each one produces 0.1 science per second.',
        resource: 'science',
        resourcePerSecond: {
            'science': 0.1
        },
        cost: {
            'metal': 1,
            'gem': 1,
            'wood': 1
        }
    });

    instance.scienceT2 = $.extend({}, baseProducerBuilding, {
        name: 'High School Science',
        desc: 'Build a more effective laboratory to continue your quest into the realm of science at a significantly faster speed. Each one produces 1 science per second.',
        resource: 'science',
        resourcePerSecond: {
            'science': 1
        },
        cost: {
            'metal': 1,
            'gem': 1,
            'wood': 1
        }
    });

    instance.scienceT3 = $.extend({}, baseProducerBuilding, {
        name: 'University Laboratory',
        desc: 'Build an even better version of the old laboratory to further your exploration of the realm of science. Each one produces 10 science per second.',
        resource: 'science',
        resourcePerSecond: {
            'science': 10
        },
        cost: {
            'metal': 1,
            'gem': 1,
            'wood': 1
        }
    });

    // Solar System
    instance.rocketFuelT1 = $.extend({}, baseProducerBuilding, {
        name: 'Chemical Plant',
        desc: 'Chemical plants are used to make rocket fuel automatically.',
        resource: 'rocketFuel',
        resourcePerSecond: {
            'rocketFuel': 0.2
        },
        cost: {
            'metal': 1,
            'gem': 1,
            'wood': 1
        }
    });

    instance.rocketFuelT2 = $.extend({}, baseProducerBuilding, {
        name: 'Oxidisation Chamber',
        desc: 'Oxidisation Chambers make rocket fuel faster and more efficiently than chemical plants.',
        resource: 'rocketFuel',
        resourcePerSecond: {
            'rocketFuel': 1.5
        },
        cost: {
            'metal': 1,
            'gem': 1,
            'wood': 1
        }
    });

    instance.rocketFuelT3 = $.extend({}, baseProducerBuilding, {
        name: 'Hydrazine Catalyst',
        desc: 'These speed up the chemical reactions needed to make rocket fuel by using greenhouse gases such as methane.',
        resource: 'rocketFuel',
        resourcePerSecond: {
            'rocketFuel': 20
        },
        cost: {
            'titanium': 1,
            'silicon': 1,
            'gold': 1
        }
    });
    
    return instance;
}());
