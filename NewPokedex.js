const fuzz = require('fuzzball');
const Discord = require('discord.js');
const client = new Discord.Client();
const names = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran♀", "Nidorina", "Nidoqueen", "Nidoran♂", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch’d", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew", "Chikorita", "Bayleef", "Meganium", "Cyndaquil", "Quilava", "Typhlosion", "Totodile", "Croconaw", "Feraligatr", "Sentret", "Furret", "Hoothoot", "Noctowl", "Ledyba", "Ledian", "Spinarak", "Ariados", "Crobat", "Chinchou", "Lanturn", "Pichu", "Cleffa", "Igglybuff", "Togepi", "Togetic", "Natu", "Xatu", "Mareep", "Flaaffy", "Ampharos", "Bellossom", "Marill", "Azumarill", "Sudowoodo", "Politoed", "Hoppip", "Skiploom", "Jumpluff", "Aipom", "Sunkern", "Sunflora", "Yanma", "Wooper", "Quagsire", "Espeon", "Umbreon", "Murkrow", "Slowking", "Misdreavus", "Unown", "Wobbuffet", "Girafarig", "Pineco", "Forretress", "Dunsparce", "Gligar", "Steelix", "Snubbull", "Granbull", "Qwilfish", "Scizor", "Shuckle", "Heracross", "Sneasel", "Teddiursa", "Ursaring", "Slugma", "Magcargo", "Swinub", "Piloswine", "Corsola", "Remoraid", "Octillery", "Delibird", "Mantine", "Skarmory", "Houndour", "Houndoom", "Kingdra", "Phanpy", "Donphan", "Porygon2", "Stantler", "Smeargle", "Tyrogue", "Hitmontop", "Smoochum", "Elekid", "Magby", "Miltank", "Blissey", "Raikou", "Entei", "Suicune", "Larvitar", "Pupitar", "Tyranitar", "Lugia", "Ho-Oh", "Celebi", "Treecko", "Grovyle", "Sceptile", "Torchic", "Combusken", "Blaziken", "Mudkip", "Marshtomp", "Swampert", "Poochyena", "Mightyena", "Zigzagoon", "Linoone", "Wurmple", "Silcoon", "Beautifly", "Cascoon", "Dustox", "Lotad", "Lombre", "Ludicolo", "Seedot", "Nuzleaf", "Shiftry", "Taillow", "Swellow", "Wingull", "Pelipper", "Ralts", "Kirlia", "Gardevoir", "Surskit", "Masquerain", "Shroomish", "Breloom", "Slakoth", "Vigoroth", "Slaking", "Nincada", "Ninjask", "Shedinja", "Whismur", "Loudred", "Exploud", "Makuhita", "Hariyama", "Azurill", "Nosepass", "Skitty", "Delcatty", "Sableye", "Mawile", "Aron", "Lairon", "Aggron", "Meditite", "Medicham", "Electrike", "Manectric", "Plusle", "Minun", "Volbeat", "Illumise", "Roselia", "Gulpin", "Swalot", "Carvanha", "Sharpedo", "Wailmer", "Wailord", "Numel", "Camerupt", "Torkoal", "Spoink", "Grumpig", "Spinda", "Trapinch", "Vibrava", "Flygon", "Cacnea", "Cacturne", "Swablu", "Altaria", "Zangoose", "Seviper", "Lunatone", "Solrock", "Barboach", "Whiscash", "Corphish", "Crawdaunt", "Baltoy", "Claydol", "Lileep", "Cradily", "Anorith", "Armaldo", "Feebas", "Milotic", "Castform", "Kecleon", "Shuppet", "Banette", "Duskull", "Dusclops", "Tropius", "Chimecho", "Absol", "Wynaut", "Snorunt", "Glalie", "Spheal", "Sealeo", "Walrein", "Clamperl", "Huntail", "Gorebyss", "Relicanth", "Luvdisc", "Bagon", "Shelgon", "Salamence", "Beldum", "Metang", "Metagross", "Regirock", "Regice", "Registeel", "Latias", "Latios", "Kyogre", "Groudon", "Rayquaza", "Jirachi", "Deoxys", "Turtwig", "Grotle", "Torterra", "Chimchar", "Monferno", "Infernape", "Piplup", "Prinplup", "Empoleon", "Starly", "Staravia", "Staraptor", "Bidoof", "Bibarel", "Kricketot", "Kricketune", "Shinx", "Luxio", "Luxray", "Budew", "Roserade", "Cranidos", "Rampardos", "Shieldon", "Bastiodon", "Burmy", "Wormadam", "Mothim", "Combee", "Vespiquen", "Pachirisu", "Buizel", "Floatzel", "Cherubi", "Cherrim", "Shellos", "Gastrodon", "Ambipom", "Drifloon", "Drifblim", "Buneary", "Lopunny", "Mismagius", "Honchkrow", "Glameow", "Purugly", "Chingling", "Stunky", "Skuntank", "Bronzor", "Bronzong", "Bonsly", "Mime Jr.", "Happiny", "Chatot", "Spiritomb", "Gible", "Gabite", "Garchomp", "Munchlax", "Riolu", "Lucario", "Hippopotas", "Hippowdon", "Skorupi", "Drapion", "Croagunk", "Toxicroak", "Carnivine", "Finneon", "Lumineon", "Mantyke", "Snover", "Abomasnow", "Weavile", "Magnezone", "Lickilicky", "Rhyperior", "Tangrowth", "Electivire", "Magmortar", "Togekiss", "Yanmega", "Leafeon", "Glaceon", "Gliscor", "Mamoswine", "Porygon-Z", "Gallade", "Probopass", "Dusknoir", "Froslass", "Rotom", "Uxie", "Mesprit", "Azelf", "Dialga", "Palkia", "Heatran", "Regigigas", "Giratina", "Cresselia", "Phione", "Manaphy", "Darkrai", "Shaymin", "Arceus", "Victini", "Snivy", "Servine", "Serperior", "Tepig", "Pignite", "Emboar", "Oshawott", "Dewott", "Samurott", "Patrat", "Watchog", "Lillipup", "Herdier", "Stoutland", "Purrloin", "Liepard", "Pansage", "Simisage", "Pansear", "Simisear", "Panpour", "Simipour", "Munna", "Musharna", "Pidove", "Tranquill", "Unfezant", "Blitzle", "Zebstrika", "Roggenrola", "Boldore", "Gigalith", "Woobat", "Swoobat", "Drilbur", "Excadrill", "Audino", "Timburr", "Gurdurr", "Conkeldurr", "Tympole", "Palpitoad", "Seismitoad", "Throh", "Sawk", "Sewaddle", "Swadloon", "Leavanny", "Venipede", "Whirlipede", "Scolipede", "Cottonee", "Whimsicott", "Petilil", "Lilligant", "Basculin", "Sandile", "Krokorok", "Krookodile", "Darumaka", "Darmanitan", "Maractus", "Dwebble", "Crustle", "Scraggy", "Scrafty", "Sigilyph", "Yamask", "Cofagrigus", "Tirtouga", "Carracosta", "Archen", "Archeops", "Trubbish", "Garbodor", "Zorua", "Zoroark", "Minccino", "Cinccino", "Gothita", "Gothorita", "Gothitelle", "Solosis", "Duosion", "Reuniclus", "Ducklett", "Swanna", "Vanillite", "Vanillish", "Vanilluxe", "Deerling", "Sawsbuck", "Emolga", "Karrablast", "Escavalier", "Foongus", "Amoonguss", "Frillish", "Jellicent", "Alomomola", "Joltik", "Galvantula", "Ferroseed", "Ferrothorn", "Klink", "Klang", "Klinklang", "Tynamo", "Eelektrik", "Eelektross", "Elgyem", "Beheeyem", "Litwick", "Lampent", "Chandelure", "Axew", "Fraxure", "Haxorus", "Cubchoo", "Beartic", "Cryogonal", "Shelmet", "Accelgor", "Stunfisk", "Mienfoo", "Mienshao", "Druddigon", "Golett", "Golurk", "Pawniard", "Bisharp", "Bouffalant", "Rufflet", "Braviary", "Vullaby", "Mandibuzz", "Heatmor", "Durant", "Deino", "Zweilous", "Hydreigon", "Larvesta", "Volcarona", "Cobalion", "Terrakion", "Virizion", "Tornadus", "Thundurus", "Reshiram", "Zekrom ", "Landorus", "Kyurem", "Keldeo", "Meloetta", "Genesect", "Chespin", "Quilladin", "Chesnaught", "Fennekin", "Braixen", "Delphox", "Froakie", "Frogadier", "Greninja", "Bunnelby", "Diggersby", "Fletchling", "Fletchinder", "Talonflame", "Scatterbug", "Spewpa", "Vivillon", "Litleo", "Pyroar", "Flabebe", "Floette", "Florges", "Skiddo", "Gogoat", "Pancham", "Pangoro", "Furfrou", "Espurr", "Meowstic", "Honedge", "Doublade", "Aegislash", "Spritzee", "Aromatisse", "Swirlix", "Slurpuff", "Inkay", "Malamar", "Binacle", "Barbaracle", "Skrelp", "Dragalge", "Clauncher", "Clawitzer", "Helioptile", "Heliolisk", "Tyrunt", "Tyrantrum", "Amaura", "Aurorus", "Sylveon", "Hawlucha", "Dedenne", "Carbink", "Goomy", "Sliggoo", "Goodra", "Klefki", "Phantump", "Trevenant", "Pumpkaboo", "Gourgeist", "Bergmite", "Avalugg", "Noibat", "Noivern", "Xerneas", "Yveltal", "Zygarde", "Diancie", "Hoopa", "Volcanion", "Rowlet", "Dartrix", "Decidueye", "Litten", "Torracat", "Incineroar", "Popplio", "Brionne", "Primarina", "Pikipek", "Trumbeak", "Toucannon", "Yungoos", "Gumshoos", "Grubbin", "Charjabug", "Vikavolt", "Crabrawler", "Crabominable", "Oricorio", "Cutiefly", "Ribombee", "Rockruff", "Lycanroc", "Wishiwashi", "Mareanie", "Toxapex", "Mudbray", "Mudsdale", "Dewpider", "Araquanid", "Fomantis", "Lurantis", "Morelull", "Shiinotic", "Salandit", "Salazzle", "Stufful", "Bewear", "Bounsweet", "Steenee", "Tsareena", "Comfey", "Oranguru", "Passimian", "Wimpod", "Golisopod", "Sandygast", "Palossand", "Pyukumuku", "Type: Null", "Silvally", "Minior", "Komala", "Turtonator", "Togedemaru", "Mimikyu", "Bruxish", "Drampa", "Dhelmise", "Jangmo-o", "Hakamo-o", "Kommo-o", "Tapu Koko", "Tapu Lele", "Tapu Bulu", "Tapu Fini", "Cosmog", "Cosmoem", "Solgaleo", "Lunala", "Nihilego", "Buzzwole", "Pheromosa", "Xurkitree", "Celesteela", "Kartana", "Guzzlord", "Necrozma", "Magearna", "Marshadow"]


/**
 * WHO'S THAT POKEMON!?
 * Function to try to guess which pokemon the user is trying to type in
 * @param poke - the user's input.  Can be #111, 111, or text
 * @returns the ID of the pokemon they typed in
 */
function interpretPoke(poke) {
    console.log("==INTERPRET POKEMON:  " + poke + "==")
    let pokeID = 0;

    //Add shortcut names here.
    switch (poke) {
        case 'ttar':
            poke = 'tyranituar';
            break;
        case 'zap':
            poke = 'zapdos';
            break;
    }

    if (parseInt(poke) > 0 && parseInt(poke) <= names.length) {
        console.log("==\twas a number that was between 1 and " + names.length)
        pokeID = parseInt(poke);
    } else {
        console.log("==\tBegin fuzzy search")
        let options = {
            scorer: fuzz.token_set_ratio
        };
        let match = fuzz.extract(poke, names, options)[0]
        console.log("==\tBest match is: " + match)
        if (match[1] >= 50) { // pretty sure we figured it out
            console.log("==\tHigh Enough Score to say this is probably it.")
            pokeID = match[2] + 1; //index, but Pokemon start at a non-zero index (Bulbasaur = 1, not 0)
        } else {
            console.log("&&\tNo idea.  returning what we started with.")
            pokeID = poke;
        }
    }
    return pokeID;
}



client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content.toLowerCase() === 'ping') {
        message.reply('pong');
    }
});

//
// Pokemon Typing
//
class PokeType {

    constructor(author, color, supereffective, noteffective, resistant, weak) {
        this.emb = new Discord.RichEmbed()
            .setAuthor(author)
            .setColor(color)
            .addField("Super Effective Against:", supereffective)
            .addField("Not Very Effective Against:", noteffective)
            .addField("Resistant to:", resistant)
            .addField("Weak to:", weak)
    }
}

class Pokemon {
    constructor(pokeID, color, types, raidLevel, topCounters, weakTo, resistantTo, moveSetGrades, highestCP) {
        this.emb = new Discord.RichEmbed()
            .setAuthor(`#${pokeID} ${names[pokeID-1]}`, `https:\/\/raw.githubusercontent.com/kvangent/PokeAlarm/master/icons/${pokeID}.png`)
            .setColor(color)
            .setThumbnail(`https:\/\/raw.githubusercontent.com/kvangent/PokeAlarm/master/icons/${pokeID}.png`)
        if (raidLevel > 0) {
            this.emb.setDescription("**Type:**" + types + "\nRaid Level " + raidLevel)
        } else {
            this.emb.setDescription("**Type:**" + types)
        }
        this.emb.addField("Best Counters:", topCounters)
            .addField("Weak to:", weakTo)
            .addField("Resistant to:", resistantTo)
            .addField("Moveset Grades (**Attack/Defense**):", moveSetGrades)
            .addField("Perfect Catchable CP: " + highestCP, "[More Info](https:\/\/pokemongo.gamepress.gg/pokemon/" + pokeID + ")")
    }
}

// Type objects
let types = {
    normal: new PokeType("Normal Type", 0x80847d, "None", "Rock, Steel, Ghost (x2)", "Ghost(x2)", "Fighting"),
    fighting: new PokeType("Fighting Type", 0xa50000, "Dark, Ice, Normal, Rock, Steel", "Bug, Fairy, Flying, Poison, Psychic, Ghost (x2)", "Bug, Dark, Rock", "Fairy, Flying, Psychic"),
    flying: new PokeType("Flying Type", 0x708ee0, "Bug, Fighting, Grass", "Electric, Rock, Steel", "Bug, Fighting, Grass, Ground (x2)", "Electric, Ice, Rock"),
    poison: new PokeType("Poison Type", 0xe064e0, "Grass, Fairy", "Ghost, Ground, Poison, Rock, Steel (x2)", "Bug, Fairy, Fighting, Grass, Poison", "Ground, Psychic"),
    ground: new PokeType("Ground Type", 0x966622, "Electric, Fire, Poison, Rock, Steel", "Bug, Grass, Flying (x2)", "Poison, Rock, Electric (x2)", "Grass, Ice, Water"),
    rock: new PokeType("Rock Type", 0xba9560, "Bug, Flying, Fire, Ice", "Fighting, Ground, Steel", "Fire, Flying, Normal, Poison", "Fighting, Grass, Ground, Steel, Water"),
    bug: new PokeType("Bug Type", 0x82f722, "Psychic, Grass, Dark", "Fighting, Fire, Flying, Ghost, Poison, Steel, Fairy", "Fighting, Grass, Ground", "Fire, Flying, Rock"),
    ghost: new PokeType("Ghost Type", 0x7526d6, "Ghost, Psychic", "Dark, Normal (x2)", "Bug, Poison, Normal (x2), Fighting (x2)", "Ghost, Dark"),
    steel: new PokeType("Steel Type", 0x005791, "Fairy, Ice, Rock", "Electric, Fire, Steel, Water", "Bug, Dragon, Fairy, Flying, Grass, Ice, Normal, Psychic, Rock, Steel, Poison (x2)", "Fighting, Fire, Ground"),
    fire: new PokeType("Fire Type", 0xff7b00, "Bug, Grass, Ice, Steel", "Dragon, Fire, Rock, Water", "Bug, Fairy, Fire, Grass, Ice, Steel", "Ground, Rock, Water"),
    water: new PokeType("Water Type", 0x0902e5, "Fire, Ground, Rock", "Dragon, Grass, Water", "Fire, Ice, Steel, Water", "Electric, Grass"),
    grass: new PokeType("Grass Type", 0x017208, "Ground, Rock, Water", "Bug, Dragon, Fire, Flying, Grass, Poison, Steel", "Electric, Grass, Ground, Water", "Bug, Fire, Flying, Ice, Poison"),
    electric: new PokeType("Electric Type", 0xfff600, "Flying, Water", "Dragon, Electric, Grass, Ground (x2)", "Electric, Flying, Steel", "Ground"),
    psychic: new PokeType("Psychic Type", 0xff494c, "Fighting, Poison", "Psychic, Steel, Dark (x2)", "Fighting, Psychic", "Bug, Dark, Ghost"),
    ice: new PokeType("Ice Type", 0x509fd8, "Dragon, Flying, Grass, Ground", "Fire, Ice, Steel, Water", "Ice", "Fighting, Fire, Rock, Steel"),
    dark: new PokeType("Dark Type", 0x252728, "Ghost, Psychic", "Dark, Fighting, Fairy", "Dark, Ghost, Psychic (x2)", "Bug, Fighting, Fairy"),
    dragon: new PokeType("Dragon Type", 0x036fa5, "Dragon", "Steel, Fairy (x2)", "Electric, Fire, Grass, Water", "Dragon, Ice, Fairy"),
    fairy: new PokeType("Fairy Type", 0xf9b6ee, "Dark, Dragon, Fighting", "Fire, Poison, Steel", "Bug, Dark, Fighting, Dragon (x2)", "Poison, Steel")
}

let pokemon = {
    1: undefined,
    2: undefined,
    3: undefined,
    4: undefined,
    5: undefined,
    6: new Pokemon(6, 0xff7b00, 'Fire / Flying', 4, 'Golem - (Rock Throw, Mud Slap, Mud Shot) / (Stone Edge, Rock Blast)', 'Electric, Rock (x2), Water', 'Bug (x2), Fire, Grass (x2), Fairy, Ground, Steel, Fighting', '**A / B** -  Fire Spin / Overheat\n**A- / B-** - Air Slash / Overheat\n**A- / D** - Wing Attack\* / Overheat\n**A- / C** - Ember\* / Overheat', 1535),
    7: undefined,
    8: undefined,
    9: undefined,
    10: undefined,
    11: undefined,
    12: undefined,
    13: undefined,
    14: undefined,
    15: undefined,
    16: undefined,
    17: undefined,
    18: undefined,
    19: undefined,
    20: undefined,
    21: undefined,
    22: undefined,
    23: undefined,
    24: undefined,
    25: undefined,
    26: undefined,
    27: undefined,
    28: undefined,
    29: undefined,
    30: undefined,
    31: undefined,
    32: undefined,
    33: undefined,
    34: undefined,
    35: undefined,
    36: undefined,
    37: undefined,
    38: undefined,
    39: undefined,
    40: undefined,
    41: undefined,
    42: undefined,
    43: undefined,
    44: undefined,
    45: undefined,
    46: undefined,
    47: undefined,
    48: undefined,
    49: undefined,
    50: undefined,
    51: undefined,
    52: undefined,
    53: undefined,
    54: undefined,
    55: undefined,
    56: undefined,
    57: undefined,
    58: undefined,
    59: undefined,
    60: undefined,
    61: undefined,
    62: undefined,
    63: undefined,
    64: undefined,
    65: undefined,
    66: undefined,
    67: undefined,
    68: undefined,
    69: undefined,
    70: undefined,
    71: undefined,
    72: undefined,
    73: undefined,
    74: undefined,
    75: undefined,
    76: undefined,
    77: undefined,
    78: undefined,
    79: undefined,
    80: undefined,
    81: undefined,
    82: undefined,
    83: undefined,
    84: undefined,
    85: undefined,
    86: undefined,
    87: undefined,
    88: undefined,
    89: undefined,
    90: undefined,
    91: undefined,
    92: undefined,
    93: undefined,
    94: undefined,
    95: undefined,
    96: undefined,
    97: undefined,
    98: undefined,
    99: undefined,
    100: undefined,
    101: undefined,
    102: undefined,
    103: undefined,
    104: undefined,
    105: undefined,
    106: undefined,
    107: undefined,
    108: undefined,
    109: undefined,
    110: undefined,
    111: undefined,
    112: new Pokemon(112, 0x7F8290, 'Ground / Rock', 4, 'Vaporeon - Water Gun / (Hydro Pump Aqua Tail)\nMeganium - Razor Leaf / (Solar Beam, Petal Blizzard)\nPoliwrath - (Bubble, Rock Smash) / (Hydro Pump, Dynamic Punch)\nMachamp - (Counter, Karate Chop) / (Dynamic Punch, Close Combat, Cross Chop)', 'Grass (x2), Ground, Steel, Fight, Ice, Water (x2)', 'Electric (x2), Fire, Normal, Rock, Flying, Poison (x2)', '**A/C** - Frost Breath / Blizzard\n**A/B** - Frost Breath / Ice Beam\n**A-/F** - Water Gun / Hydro Pump\n**B/F** - Water Gun / Blizzard\n**B/D** - Water Gun / Ice Beam\n**B/C** - Frost Breath / Hydro Pump', 1886),
    113: undefined,
    114: undefined,
    115: undefined,
    116: undefined,
    117: undefined,
    118: undefined,
    119: undefined,
    120: undefined,
    121: undefined,
    122: undefined,
    123: undefined,
    124: undefined,
    125: undefined,
    126: undefined,
    127: undefined,
    128: undefined,
    129: undefined,
    130: undefined,
    131: new Pokemon(131, 0x57A6D7, 'Ice / Water', 4, 'Machamp - (Counter, Karate Chop) / (Dynamic Punch, Close Combat, Cross Chop)\nMewtwo - (Confusion, Psycho Cut) / (Focus Blast, Shadow Ball)\nZapdos - Charge Beam / (Thunderbolt, Zap Cannon)', 'Electric, Grass, Rock, Fight', 'Ice (x2), Water', '**A/C** - Frost Breath / Blizzard\n**A/B** - Frost Breath / Ice Beam\n**A-/F** - Water Gun / Hydro Pump\n**B/F** - Water Gun / Blizzard\n**B/D** - Water Gun / Ice Beam\n**B/C** - Frost Breath / Hydro Pump', 1487),
    132: undefined,
    133: undefined,
    134: undefined,
    135: undefined,
    136: undefined,
    137: undefined,
    138: undefined,
    139: undefined,
    140: undefined,
    141: undefined,
    142: undefined,
    143: new Pokemon(143, 0x2F6C88, 'Normal', 4, 'Mewtwo - (Confusion or Psycho Cut) / Focus Blast\nMachamp - (Counter or Karate Chop) / (Dynamic Punch, Close Combat, Cross Chop)\nMoltres - Fire Spin / Overheat', 'Fight', 'Ghost (x2)', '**A/B-** - Lick / Hyper Beam\n**B/B** - Zen Headbutt / Hyper Beam\n**C/B** - Lick / Heavy Slam\n**C/A** - Zen Headbutt / Heavy Slam\n**D/D** - Lick / Earthquake\n**D/C** - Zen Headbutt / Earthquake', 1917),
    144: new Pokemon(144, 0x509fd8, "Flying / Ice", 5, "Omastar - Rock Throw / Rock Slide or Rock Blast", "Rock (x2), Electric, Fire, Steel", "Ground (x2), Bug, Grass", "**A** - Frost Breath / Blizzard\n**A** - Frost Breath / Ice Beam\n**C** - Frost Breath / Icy Wind", 1676),
    145: new Pokemon(145, 0xfff600, "Flying / Electric", 5, "Golem - Rock Throw / Stone Edge\nGolem - Rock Throw / Rock Blast", "Rock, Ice", "Bug, Grass, Flying, Ground, Steel, Fight", "**A** - Charge Beam / Thunderbolt\n**A-** - Charge Beam / Zap Cannon\n**B** - Charge Beam / Thunder", 1902),
    146: new Pokemon(146, 0xff7b00, "Flying / Fire", 5, "Golem - Rock Throw / Stone Edge\nGolem - Rock Throw / Rock Blast\nOmastar - (Rock Throw or Water Gun) / (Rock Slide, Rock Blast, or Hydro Pump)", "Electric, Rock (x2), Water", "Bug (x2), Fire, Grass (x2), Fairy, Ground, Steel, Fight", "**A** - Fire Spin / Overheat\n**B** - Fire Spin / Fire Blast\n**C** - Fire Spin / Heat Wave", 1870),
    147: undefined,
    148: undefined,
    149: undefined,
    150: new Pokemon(150, 0xDAD2E0, 'Psychic', 5, "Mewtwo - (Confusion or Psycho Cut) / Shadow Ball\nTyranitar - Bite / (Crunch or Stone Edge)\nLugia - (Extrasensory or Dragon Tail) / Sky Attack", "Bug, Dark, Ghost", "Fight, Psychic", "**A** - Confusion / Shadow Ball\n**A** - Psycho Cut / Shadow Ball\n**B** - Confusion / Focus Blast\n**B** - Psycho Cut / Focus Blast\n**C** - Psycho Cut / Psychic\n**C** - Confusion / Psychic\n**F** - Psycho Cut / Hyper Beam\n**F** - Confusion / Hyper Beam", 2275),
    151: undefined,
    152: undefined,
    153: undefined,
    154: undefined,
    155: undefined,
    156: undefined,
    157: undefined,
    158: undefined,
    159: undefined,
    160: undefined,
    161: undefined,
    162: undefined,
    163: undefined,
    164: undefined,
    165: undefined,
    166: undefined,
    167: undefined,
    168: undefined,
    169: undefined,
    170: undefined,
    171: undefined,
    172: undefined,
    173: undefined,
    174: undefined,
    175: undefined,
    176: undefined,
    177: undefined,
    178: undefined,
    179: undefined,
    180: undefined,
    181: undefined,
    182: undefined,
    183: undefined,
    184: undefined,
    185: undefined,
    186: undefined,
    187: undefined,
    188: undefined,
    189: undefined,
    190: undefined,
    191: undefined,
    192: undefined,
    193: undefined,
    194: undefined,
    195: undefined,
    196: undefined,
    197: undefined,
    198: undefined,
    199: undefined,
    200: undefined,
    201: undefined,
    202: undefined,
    203: undefined,
    204: undefined,
    205: undefined,
    206: undefined,
    207: undefined,
    208: undefined,
    209: undefined,
    210: undefined,
    211: undefined,
    212: undefined,
    213: undefined,
    214: undefined,
    215: undefined,
    216: undefined,
    217: undefined,
    218: undefined,
    219: undefined,
    220: undefined,
    221: undefined,
    222: undefined,
    223: undefined,
    224: undefined,
    225: undefined,
    226: undefined,
    227: undefined,
    228: undefined,
    229: undefined,
    230: undefined,
    231: undefined,
    232: undefined,
    233: undefined,
    234: undefined,
    235: undefined,
    236: undefined,
    237: undefined,
    238: undefined,
    239: undefined,
    240: undefined,
    241: undefined,
    242: undefined,
    243: new Pokemon(243, 0xF5CC54, "Electric", 5, "Golem - (Mud Slap, Mud Shot, Rock Throw) / Earthquake\nRhydon - Mud Slap / Earthquake", "Ground", "Electric, Flying, Steel", "**A** - Thunder Shock / Wild Charge\n**A** - Volt Switch / Wild Charge\n**A-** - Thunder Shock / Thunderbolt\n**A-** - Volt Switch / Thunderbolt\n**B** - Thunder Shock / Thunder\n**B** - Volt Switch / Thunder", 1913),
    244: undefined,
    245: undefined,
    246: undefined,
    247: undefined,
    248: new Pokemon(248, 0xa4b68e, "Dark / Rock", 4, "Machamp - (Counter or Karate Chop) / (Dynamic Punch or Close Combat or Cross Chop)\nPoliwrath - (Rock Smash or Bubble) / Dynamic Punch", "Bug, Grass, Fairy, Ground, Steel, Fight (x2), Water", "Fire, Normal, Dark, Flying, Poison, Ghost, Psychic (x2)", "**A/C** - Bite / Crunch\n**A/C** - Bite / Stone Edge\n**C/D** - Bite / Fire Blast\n**C/A** - Iron Tail / Crunch\n**C/A** - Iron Tail / Stone Edge\n**D/B** - Iron Tail / Fire Blast", 2097),
    249: new Pokemon(249, 0xf1EEF7, "Flying / Psychic", 5, "Mewtwo - (Confusion or Psycho Cut) / Shadow Ball\nTyranitar - Bite / (Stone Edge or Crunch)\nZapdos - Charge Beam / (Thunderbolt / Thunder)", "Electric, Rock, Dark, Ghost, Ice", "Grass, Ground (x2), Fight (x2), Psychic", "**A** - Extrasensory / Sky Attack\n**A** - Extrasensory / Future Sight\n**B** - Dragon Tail / Sky Attack\n**B** - Dragon Tail / Future Sight\n**C** - Extrasensory / Hydro Pump\n**C-** - Dragon Tail / Hydro Pump", 2056),
    250: undefined,
    251: undefined,
    252: undefined,
    253: undefined,
    254: undefined,
    255: undefined,
    256: undefined,
    257: undefined,
    258: undefined,
    259: undefined,
    260: undefined,
    261: undefined,
    262: undefined,
    263: undefined,
    264: undefined,
    265: undefined,
    266: undefined,
    267: undefined,
    268: undefined,
    269: undefined,
    270: undefined,
    271: undefined,
    272: undefined,
    273: undefined,
    274: undefined,
    275: undefined,
    276: undefined,
    277: undefined,
    278: undefined,
    279: undefined,
    280: undefined,
    281: undefined,
    282: undefined,
    283: undefined,
    284: undefined,
    285: undefined,
    286: undefined,
    287: undefined,
    288: undefined,
    289: undefined,
    290: undefined,
    291: undefined,
    292: undefined,
    293: undefined,
    294: undefined,
    295: undefined,
    296: undefined,
    297: undefined,
    298: undefined,
    299: undefined,
    300: undefined,
    301: undefined,
    302: undefined,
    303: undefined,
    304: undefined,
    305: undefined,
    306: undefined,
    307: undefined,
    308: undefined,
    309: undefined,
    310: undefined,
    311: undefined,
    312: undefined,
    313: undefined,
    314: undefined,
    315: undefined,
    316: undefined,
    317: undefined,
    318: undefined,
    319: undefined,
    320: undefined,
    321: undefined,
    322: undefined,
    323: undefined,
    324: undefined,
    325: undefined,
    326: undefined,
    327: undefined,
    328: undefined,
    329: undefined,
    330: undefined,
    331: undefined,
    332: undefined,
    333: undefined,
    334: undefined,
    335: undefined,
    336: undefined,
    337: undefined,
    338: undefined,
    339: undefined,
    340: undefined,
    341: undefined,
    342: undefined,
    343: undefined,
    344: undefined,
    345: undefined,
    346: undefined,
    347: undefined,
    348: undefined,
    349: undefined,
    350: undefined,
    351: undefined,
    352: undefined,
    353: undefined,
    354: undefined,
    355: undefined,
    356: undefined,
    357: undefined,
    358: undefined,
    359: undefined,
    360: undefined,
    361: undefined,
    362: undefined,
    363: undefined,
    364: undefined,
    365: undefined,
    366: undefined,
    367: undefined,
    368: undefined,
    369: undefined,
    370: undefined,
    371: undefined,
    372: undefined,
    373: undefined,
    374: undefined,
    375: undefined,
    376: undefined,
    377: undefined,
    378: undefined,
    379: undefined,
    380: undefined,
    381: undefined,
    382: undefined,
    383: undefined,
    384: undefined,
    385: undefined,
    386: undefined,
    387: undefined,
    388: undefined,
    389: undefined,
    390: undefined,
    391: undefined,
    392: undefined,
    393: undefined,
    394: undefined,
    395: undefined,
    396: undefined,
    397: undefined,
    398: undefined,
    399: undefined,
    400: undefined,
    401: undefined,
    402: undefined,
    403: undefined,
    404: undefined,
    405: undefined,
    406: undefined,
    407: undefined,
    408: undefined,
    409: undefined,
    410: undefined,
    411: undefined,
    412: undefined,
    413: undefined,
    414: undefined,
    415: undefined,
    416: undefined,
    417: undefined,
    418: undefined,
    419: undefined,
    420: undefined,
    421: undefined,
    422: undefined,
    423: undefined,
    424: undefined,
    425: undefined,
    426: undefined,
    427: undefined,
    428: undefined,
    429: undefined,
    430: undefined,
    431: undefined,
    432: undefined,
    433: undefined,
    434: undefined,
    435: undefined,
    436: undefined,
    437: undefined,
    438: undefined,
    439: undefined,
    440: undefined,
    441: undefined,
    442: undefined,
    443: undefined,
    444: undefined,
    445: undefined,
    446: undefined,
    447: undefined,
    448: undefined,
    449: undefined,
    450: undefined,
    451: undefined,
    452: undefined,
    453: undefined,
    454: undefined,
    455: undefined,
    456: undefined,
    457: undefined,
    458: undefined,
    459: undefined,
    460: undefined,
    461: undefined,
    462: undefined,
    463: undefined,
    464: undefined,
    465: undefined,
    466: undefined,
    467: undefined,
    468: undefined,
    469: undefined,
    470: undefined,
    471: undefined,
    472: undefined,
    473: undefined,
    474: undefined,
    475: undefined,
    476: undefined,
    477: undefined,
    478: undefined,
    479: undefined,
    480: undefined,
    481: undefined,
    482: undefined,
    483: undefined,
    484: undefined,
    485: undefined,
    486: undefined,
    487: undefined,
    488: undefined,
    489: undefined,
    490: undefined,
    491: undefined,
    492: undefined,
    493: undefined,
    494: undefined,
    495: undefined,
    496: undefined,
    497: undefined,
    498: undefined,
    499: undefined,
    500: undefined,
    501: undefined,
    502: undefined,
    503: undefined,
    504: undefined,
    505: undefined,
    506: undefined,
    507: undefined,
    508: undefined,
    509: undefined,
    510: undefined,
    511: undefined,
    512: undefined,
    513: undefined,
    514: undefined,
    515: undefined,
    516: undefined,
    517: undefined,
    518: undefined,
    519: undefined,
    520: undefined,
    521: undefined,
    522: undefined,
    523: undefined,
    524: undefined,
    525: undefined,
    526: undefined,
    527: undefined,
    528: undefined,
    529: undefined,
    530: undefined,
    531: undefined,
    532: undefined,
    533: undefined,
    534: undefined,
    535: undefined,
    536: undefined,
    537: undefined,
    538: undefined,
    539: undefined,
    540: undefined,
    541: undefined,
    542: undefined,
    543: undefined,
    544: undefined,
    545: undefined,
    546: undefined,
    547: undefined,
    548: undefined,
    549: undefined,
    550: undefined,
    551: undefined,
    552: undefined,
    553: undefined,
    554: undefined,
    555: undefined,
    556: undefined,
    557: undefined,
    558: undefined,
    559: undefined,
    560: undefined,
    561: undefined,
    562: undefined,
    563: undefined,
    564: undefined,
    565: undefined,
    566: undefined,
    567: undefined,
    568: undefined,
    569: undefined,
    570: undefined,
    571: undefined,
    572: undefined,
    573: undefined,
    574: undefined,
    575: undefined,
    576: undefined,
    577: undefined,
    578: undefined,
    579: undefined,
    580: undefined,
    581: undefined,
    582: undefined,
    583: undefined,
    584: undefined,
    585: undefined,
    586: undefined,
    587: undefined,
    588: undefined,
    589: undefined,
    590: undefined,
    591: undefined,
    592: undefined,
    593: undefined,
    594: undefined,
    595: undefined,
    596: undefined,
    597: undefined,
    598: undefined,
    599: undefined,
    600: undefined,
    601: undefined,
    602: undefined,
    603: undefined,
    604: undefined,
    605: undefined,
    606: undefined,
    607: undefined,
    608: undefined,
    609: undefined,
    610: undefined,
    611: undefined,
    612: undefined,
    613: undefined,
    614: undefined,
    615: undefined,
    616: undefined,
    617: undefined,
    618: undefined,
    619: undefined,
    620: undefined,
    621: undefined,
    622: undefined,
    623: undefined,
    624: undefined,
    625: undefined,
    626: undefined,
    627: undefined,
    628: undefined,
    629: undefined,
    630: undefined,
    631: undefined,
    632: undefined,
    633: undefined,
    634: undefined,
    635: undefined,
    636: undefined,
    637: undefined,
    638: undefined,
    639: undefined,
    640: undefined,
    641: undefined,
    642: undefined,
    643: undefined,
    644: undefined,
    645: undefined,
    646: undefined,
    647: undefined,
    648: undefined,
    649: undefined,
    650: undefined,
    651: undefined,
    652: undefined,
    653: undefined,
    654: undefined,
    655: undefined,
    656: undefined,
    657: undefined,
    658: undefined,
    659: undefined,
    660: undefined,
    661: undefined,
    662: undefined,
    663: undefined,
    664: undefined,
    665: undefined,
    666: undefined,
    667: undefined,
    668: undefined,
    669: undefined,
    670: undefined,
    671: undefined,
    672: undefined,
    673: undefined,
    674: undefined,
    675: undefined,
    676: undefined,
    677: undefined,
    678: undefined,
    679: undefined,
    680: undefined,
    681: undefined,
    682: undefined,
    683: undefined,
    684: undefined,
    685: undefined,
    686: undefined,
    687: undefined,
    688: undefined,
    689: undefined,
    690: undefined,
    691: undefined,
    692: undefined,
    693: undefined,
    694: undefined,
    695: undefined,
    696: undefined,
    697: undefined,
    698: undefined,
    699: undefined,
    700: undefined,
    701: undefined,
    702: undefined,
    703: undefined,
    704: undefined,
    705: undefined,
    706: undefined,
    707: undefined,
    708: undefined,
    709: undefined,
    710: undefined,
    711: undefined,
    712: undefined,
    713: undefined,
    714: undefined,
    715: undefined,
    716: undefined,
    717: undefined,
    718: undefined,
    719: undefined,
    720: undefined,
    721: undefined,
    722: undefined,
    723: undefined,
    724: undefined,
    725: undefined,
    726: undefined,
    727: undefined,
    728: undefined,
    729: undefined,
    730: undefined,
    731: undefined,
    732: undefined,
    733: undefined,
    734: undefined,
    735: undefined,
    736: undefined,
    737: undefined,
    738: undefined,
    739: undefined,
    740: undefined,
    741: undefined,
    742: undefined,
    743: undefined,
    744: undefined,
    745: undefined,
    746: undefined,
    747: undefined,
    748: undefined,
    749: undefined,
    750: undefined,
    751: undefined,
    752: undefined,
    753: undefined,
    754: undefined,
    755: undefined,
    756: undefined,
    757: undefined,
    758: undefined,
    759: undefined,
    760: undefined,
    761: undefined,
    762: undefined,
    763: undefined,
    764: undefined,
    765: undefined,
    766: undefined,
    767: undefined,
    768: undefined,
    769: undefined,
    770: undefined,
    771: undefined,
    772: undefined,
    773: undefined,
    774: undefined,
    775: undefined,
    776: undefined,
    777: undefined,
    778: undefined,
    779: undefined,
    780: undefined,
    781: undefined,
    782: undefined,
    783: undefined,
    784: undefined,
    785: undefined,
    786: undefined,
    787: undefined,
    788: undefined,
    789: undefined,
    790: undefined,
    791: undefined,
    792: undefined,
    793: undefined,
    794: undefined,
    795: undefined,
    796: undefined,
    797: undefined,
    798: undefined,
    799: undefined,
    800: undefined,
    801: undefined,
    802: undefined,
    803: undefined
}


client.on('message', message => {
    //only do something if it starts with a ? and doesn't come from self.
    if (message.content.startsWith('?') && message.author.id != client.user.id) {
        console.log("Pokedex from " + message.author.username + ":\t" + message.content);

        //Is it a type?
        if (types[message.content.toLowerCase().substr(1)]) {
            message.reply({ embed: types[message.content.toLowerCase().substr(1)].emb })
        }
        //nope. not a type.  Maybe a pokemon? 
        //let's find out what pokemon it is..
        else {
            let pokeID = interpretPoke(message.content.substr(1))
            if (pokemon[pokeID]) {
                message.reply({ embed: pokemon[pokeID].emb })
            }
            //Darned if I know what's going on. 
            else {
                message.author.createDM().then((dm) => { dm.send("Sorry, I couldn't understand your message.\n" + message.content) }).catch(console.error)
            }
        }
    }
});


client.login('Your Token Here');
