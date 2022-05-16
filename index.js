/**
 * fields
 *  - ID
 *  - Name
 *  - Gender
 *  - Homeworld
 *  - Career
 *  - Fate Points
 * 
 *  - Health
 * 
 *  - W. Skill
 *  - B. Skill
 *  - Strength
 *  - Toughness
 *  - Agility
 *  - Intelligence
 *  - Perception
 *  - Willpower
 *  - Fellowship
 * 
 *  - Equipment
 *  - Skills
 *  - Traits
 * 
 *  - Description (Age, skin, hair, eyes, quirk)
 *  - Fortune
 */
const tableSize     = 100;
const minSeed       = 10000000;
const seedRange     = 67108864; // 2 ^ 26
const maxSeed       = minSeed + seedRange - 1;

let rollTable = [];

// indices
// don't change these, only add more
// or characters will no longer procedurally generate
const indices = {
    worldDie1:  0,
    worldDie2:  1,

    genderDie:  2,

    nameDie1:   3,
    nameDie2:   4,

    careerDie1: 5,
    careerDie2: 6,

    wsDie1:     7,
    wsDie2:     8,
    bsDie1:     9,
    bsDie2:     10,
    stDie1:     11,
    stDie2:     12,
    toDie1:     13,
    toDie2:     14,
    agDie1:     15,
    agDie2:     16,
    itDie1:     17,
    itDie2:     18,
    peDie1:     19,
    peDie2:     20,
    wiDie1:     21,
    wiDie2:     22,
    feDie1:     23,
    feDie2:     24,

    woundDie:   25,

    fateDie:    26,

    divDie1:    27,
    divDie2:    28,

    upgDie1:    29,
    upgDie2:    30,
    upgDie3:    31,
    upgDie4:    32,
    upgDie5:    33,
    upgDie6:    34,
    upgDie7:    35,
    upgDie8:    36,
    wepDie1:    37,
    wepDie2:    38,
    wepDie3:    39,
    wepDie4:    40,
    wepDie5:    41,
    wepDie6:    42,
    wepDie7:    43,
    wepDie8:    44,

    eqDie1:     45,
    eqDie2:     46,
    eqDie3:     47,
    eqDie4:     48,
    eqDie5:     49,


    ageDie1:    50,
    ageDie2:    51,
    ageDie3:    52,
    skinDie1:   53,
    skinDie2:   54,
    hairDie1:   55,
    hairDie2:   56,
    eyeDie1:    57,
    eyeDie2:    58,
    quirkDie1:  59,
    quirkDie2:  60,




    lastNameDie1: 98,
    lastNameDie2: 99
}

let indexedData = {
}



let characterData = {
    id: null,
    name: null,
    gender: null,
    genderIndex: null,
    homeworld: null,
    worldIndex: null,
    fatePoints: null,
    wounds: null,

    wsSkill: null,
    bsSkill: null,
    strength: null,
    toughness: null,
    agility: null,
    intelligence: null,
    perception: null,
    willpower: null,
    fellowship: null,
    
    equipment: [],
    skills: [],
    traits: [],

    divination: null,

    age: null,
    hair: null,
    skin: null,
    eyes: null
}

function init() {
    randomCharacter(
        new URLSearchParams(
            window.location.search
        ).get('id')
    );
    applyCharacter();
}

function applyCharacter() {
    for (let k of Object.keys(characterData)) {
        if (Array.isArray(characterData[k])) {
            let ele = document.getElementById(k + 'List');
            if (ele) {
                for (let i of characterData[k]) {
                    let lele = document.createElement("span");
                    lele.innerText = i;
                    ele.appendChild(lele);
                }
            }
        } else {
            let ele = document.getElementById(k + 'Field');
            if (ele) {
                ele.innerText = characterData[k];
            }
        }
    }
}

function randomCharacter(seed) {
    if (!seed || seed < minSeed || seed > maxSeed) {
        seed = getRandomId();
    }
    try {
        seed = parseInt(seed);
    } catch (e) {
        seed = getRandomId();
    }
    console.log(seed);

    // make sure this one happens
    document.getElementById("idField").value = seed;

    initializeRollTable(seed);

    characterData.id = seed;
    setHomeWorld();
    setGender();
    setName();
    setFatePoints();
    setWounds();
    setAttributes();
    setDivination();
    setUpgrades();

}

function integer(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomId() {
    return integer(minSeed, maxSeed);
}

function initializeRollTable(seed) {
    Math.seedrandom(seed);
    rollTable = [];
    for (let i = 0; i < tableSize; i++) {
        rollTable.push(integer(1, 10));
    }
    for (let k of Object.keys(indices)) {
        indexedData[k] = rollTable[indices[k]];
    }
}

function setHomeWorld() {
    let hwResult = d100(indexedData.worldDie1, indexedData.worldDie2);
    let world = worldTable.getResult(hwResult);
    characterData.homeworld = world.result;
    characterData.worldIndex = world.index;
}

function setGender() {
    characterData.genderIndex = indexedData.genderDie % 2;
    characterData.gender = characterData.genderIndex == 0 ? "Male" : "Female";
}

function setName() {
    let nWorldIndices = [0, 4, 3, 3];
    let nWorldIndex = nWorldIndices[characterData.worldIndex];
    characterData.name = 
        getName(characterData.genderIndex, characterData.worldIndex, indexedData.nameDie1, indexedData.nameDie2)
        + " " + 
        getName(characterData.genderIndex, nWorldIndex, indexedData.lastNameDie1, indexedData.lastNameDie2);
}

function getName(genderIndex, worldIndex, die1, die2) {
    let nameResult = d100(die1, die2);
    if (nameResult > 90) {
        genderIndex = 1 - genderIndex;
        nameResult = (d100(die2, die1) % 90) + 1;
    }
    let tableIndex = worldIndex * 2 + genderIndex;
    let result = nameTables[tableIndex].getResult(nameResult).result;
    if (worldIndex == 1) { // is hive 
        return '"' + result + '"';
    }
    return result;
}

function setFatePoints() {
    let fateIndex = Math.floor((indexedData.fateDie - 1) / 4);
    switch (characterData.worldIndex) {
        case 0:
            characterData.fatePoints = 1;
            if (fateIndex) {
                characterData.fatePoints++;
            }
        break;
        case 1:
            characterData.fatePoints = 1 + fateIndex;
        break;
        case 2:
            characterData.fatePoints = 2;
            if (fateIndex > 1) {
                characterData.fatePoints++;
            }
        break;
        case 3:
            characterData.fatePoints = 2;
            if (fateIndex) {
                characterData.fatePoints++;
            }
        break;
    }
}

function setWounds() {
    let woundTable = [9, 8, 8, 6];
    characterData.wounds = woundTable[characterData.worldIndex] + (indexedData.woundDie % 5);
}

function setAttributes() {
    characterData.wsSkill = 20 + indexedData.wsDie1 + indexedData.wsDie2;
    characterData.bsSkill = 20 + indexedData.bsDie1 + indexedData.bsDie2;
    characterData.strength = 20 + indexedData.stDie1 + indexedData.stDie2;
    characterData.toughness = 20 + indexedData.toDie1 + indexedData.toDie2;
    characterData.agility = 20 + indexedData.agDie1 + indexedData.agDie2;
    characterData.intelligence = 20 + indexedData.itDie1 + indexedData.itDie2;
    characterData.perception = 20 + indexedData.peDie1 + indexedData.peDie2;
    characterData.willpower = 20 + indexedData.wiDie1 + indexedData.wiDie2;
    characterData.fellowship = 20 + indexedData.feDie1 + indexedData.feDie2;

    switch (characterData.worldIndex) {
        case 0:
            characterData.strength += 5;
            characterData.toughness += 5;
            characterData.willpower -= 5;
            characterData.fellowship -= 5;
        break;
        case 1:
            characterData.toughness -= 5;
            characterData.fellowship += 5;
        break;
        case 3:
            characterData.willpower += 5;
            characterData.strength -= 5;
        break;
    }
}

function setDivination() {
    let divResult = d100(indexedData.divDie1, indexedData.divDie2);
    characterData.divination = divinationTable.getResult(divResult).result;
}

function setUpgrades() {
    let upgradeResults = [
        d100(indexedData.upgDie1, indexedData.upgDie2) - 1,
        d100(indexedData.upgDie3, indexedData.upgDie4) - 1,
        d100(indexedData.upgDie5, indexedData.upgDie6) - 1,
        d100(indexedData.upgDie7, indexedData.upgDie8) - 1
    ];
    let weaponResults = [
        indexedData.wepDie1 - 1, indexedData.wepDie2 - 1, indexedData.wepDie3 - 1
    ];

    for (let u of upgradeResults) {
        if (u < 10) {
            statUpgradeTable[u]();
        } else {
            characterData.skills.push(skillTable[(u - 10) % skillTable.length]);
        }
    }

    // consolidate skills
    for (let i = 0; i < characterData.skills.length - 1; i++) {
        let extras = 0;
        for (let j = i + 1; j < characterData.skills.length; j++) {
            if (characterData.skills[i] == characterData.skills[j]) {
                extras++;
                characterData.skills.splice(j, 1);
                j--;
            }
        }
        if (extras) {
            characterData.skills[i] += " +" + (extras * 5);
        }
    }

    // add weapons
    let weaponLevel = 0;
    let tables = [basicWeaponTable, betterWeaponTable, bestWeaponTable];

    for (let r of weaponResults) {
        if (r >= tables[weaponLevel].length) {
            weaponLevel++;
        } else {
            characterData.equipment.push(tables[weaponLevel][r]);
            weaponLevel = 0;
        }
    }

    if (weaponLevel) {
        characterData.equipment.push(tables[weaponLevel][0]);
    }

    characterData.equipment.sort();

    if (indexedData.eqDie5 <= armorTable.length) {
        characterData.equipment.push(armorTable[indexedData.eqDie5 - 1]);
    }
}

function d100(r1, r2) {
    return r1 * 10 + r2 - 10;
}

let statUpgradeTable = [
    ()=>characterData.wounds+=2,
    ()=>characterData.wsSkill+=5,
    ()=>characterData.bsSkill+=5,
    ()=>characterData.strength+=5,
    ()=>characterData.toughness+=5,
    ()=>characterData.agility+=5,
    ()=>characterData.intelligence+=5,
    ()=>characterData.perception+=5,
    ()=>characterData.willpower+=5,
    ()=>characterData.fellowship+=5,
]

let skillTable = [
    "Acrobatics (Ag)",
    "Awareness (Per)",
    //"Barter (Fel)",
    "Blather (Fel)",
    //"Carouse (T)",
    "Charm (Fel)",
    //"Chem-Use (Int)",
    //"Ciphers (Int)",
    "Climb (S)",
    //"Command (Fel)",
    //"Common Lore (Int)",
    "Concealment (Ag)",
    "Contortionist (Ag)",
    "Deceive (Fel)",
    //"Demolition (Int)",
    "Disguise (Fel)",
    "Dodge (Ag)",
    "Drive (Ag)",
    //"Evaluate",
    "Forbidden Lore (Int)",
    //"Gamble (Int)",
    "Inquiry (Fel)",
    "Interrogation (WP)",
    "Intimidate (S)",
    //"Invocation (WP)",
    //"Lip Reading (Per)",
    //"Literacy (Int)",
    "Logic (Int)",
    "Medicae (Int)",
    "Navigation (Int)",
    "Performer (Fel)",
    //"Pilot (Ag)",
    //"Psyniscience (Per)",
    //"Scholasic Lore (Int)",
    "Scrutiny (Per)",
    "Search (Per)",
    //"Secret Tongue (Int)",
    "Security (Ag)",
    "Shadowing (Ag)",
    "Silent Move (Ag)",
    "Sleight of Hand (Ag)",
    //"Speak Language (Int)",
    "Survival (Int)",
    "Swim (S)",
    "Tech-Use (Int)",
    "Tracking (Int)",
    //"Trade (Int)",
    "Wrangling (Int)", 
]

let basicWeaponTable = [
    "Knife (1d5)",
    "Chainword (1d10+2)",
    "Chainword (1d10+2)",
    "Laspistol (1d10+2)",
    "Laspistol (1d10+2)",
    "Shotgun (1d10+4)",
    "Shotgun (1d10+4)",
    "Flail (1d10+2)",
    "Flail (1d10+2)",
]

let betterWeaponTable = [
    "Grenade (2d10) x2",
    "Autopistol (1d10+2) (Auto)",
    "Autopistol (1d10+2) (Auto)",
    "Boltgun (1d10+5) (Semiauto)",
    "Boltgun (1d10+5) (Semiauto)",
    "Flamer (1d10+4, Pen 3) (Flame)",
    "Flamer (1d10+4, Pen 3) (Flame)",
    "Power Sword (1d10+6, Pen 6)",
    "Power Sword (1d10+6, Pen 6)",
]

let bestWeaponTable = [
    "Melta Bomb (6d10, Pen 12) (Flame)",
    "Heavy Bolter (2d10, Pen 5) (Auto)",
    "Heavy Bolter (2d10, Pen 5) (Auto)",
    "Meltagun (2d10+4, Pen 12)",
    "Meltagun (2d10+4, Pen 12)",
    "Plasma Gun (3d10+6, Pen 6) (Overheats)",
    "Plasma Gun (3d10+6, Pen 6) (Overheats)",
    "Rocket Launcher (2d10) (Blast)",
    "Rocket Launcher (2d10) (Blast)",
    "Lascannon (5d10+10, Pen 10)",
]

let armorTable = [
    "Padded Armor (2 AP)",
    "Leather Armor (2 AP)",
    "Light Armor (2 AP)",
    "Chain Armor (4 AP)",
    "Ballistic Armor (4 AP)",
    "Medium Armor (4 AP)",
    "Carapace Armor (5 AP)",
    "Plate Armor (5 AP)",
    "Heavy Armor (5 AP)"
]