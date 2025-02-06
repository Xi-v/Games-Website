const UPGRADE_TYPE = {
    POWER: 0,
    AUTOCLICKER: 1,
}

const UPGRADES = [
    {
        text: "TINY DUCKLING",
        type: UPGRADE_TYPE.POWER,
        price: 50,
        amount: 1,
    },

    {
        text: "DUCK COOP",
        type: UPGRADE_TYPE.AUTOCLICKER,
        price: 120,
        amount: 1,
    },

    {
        text: "YOUNG DUCKLING",
        type: UPGRADE_TYPE.POWER,
        price: 600,
        amount: 5,
    },

    {
        text: "DUCK POND",
        type: UPGRADE_TYPE.AUTOCLICKER,
        price: 1_200,
        amount: 5,
    },

    {
        text: "ASPIRING DUCK",
        type: UPGRADE_TYPE.POWER,
        price: 7_000,
        amount: 50,
    },

    {
        text: "DUCK PARK",
        type: UPGRADE_TYPE.AUTOCLICKER,
        price: 30_000,
        amount: 40,
    },

    {
        text: "SMART DUCK",
        type: UPGRADE_TYPE.POWER,
        price: 50_000,
        amount: 120,
    },

    {
        text: "DUCK FARM",
        type: UPGRADE_TYPE.AUTOCLICKER,
        price: 90_000,
        amount: 120,
    },

    {
        text: "ADULT DUCK",
        type: UPGRADE_TYPE.POWER,
        price: 1_800_000,
        amount: 1_000,
    },

    {
        text: "DUCK MACHINE",
        type: UPGRADE_TYPE.AUTOCLICKER,
        price: 4_000_000,
        amount: 2_000,
    },

    {
        text: "CEO DUCK",
        type: UPGRADE_TYPE.POWER,
        price: 8_000_000,
        amount: 6_500,
    },

    {
        text: "DUCK INDUSTRY",
        type: UPGRADE_TYPE.AUTOCLICKER,
        price: 100_000_000,
        amount: 40_000,
    },

    {
        text: "PRESIDENT DUCK",
        type: UPGRADE_TYPE.POWER,
        price: 180_000_000,
        amount: 14_000,
    },

    {
        text: "DUCK COUNTRY",
        type: UPGRADE_TYPE.AUTOCLICKER,
        price: 700_000_000,
        amount: 120_000,
    },

    {
        text: "LEADER DUCK",
        type: UPGRADE_TYPE.POWER,
        price: 1_500_000_000,
        amount: 80_000,
    },

    {
        text: "DUCK CONTINENT",
        type: UPGRADE_TYPE.AUTOCLICKER,
        price: 6_500_000_000,
        amount: 300_000,
    },

    {
        text: "SCIENCE DUCK",
        type: UPGRADE_TYPE.POWER,
        price: 13_500_000_000,
        amount: 190_000,
    },

    {
        text: "DUCK PLANET",
        type: UPGRADE_TYPE.AUTOCLICKER,
        price: 85_000_000_000,
        amount: 1_200_000,
    },

    {
        text: "ASTRONAUT DUCK",
        type: UPGRADE_TYPE.POWER,
        price: 125_000_000_000,
        amount: 800_000,
    },

    {
        text: "DUCK GALAXY",
        type: UPGRADE_TYPE.AUTOCLICKER,
        price: 3_000_000_000_000,
        amount: 8_500_000,
    },

    {
        text: "COSMIC DUCK",
        type: UPGRADE_TYPE.POWER,
        price: 100_000_000_000_000,
        amount: 100_000_000,
    },

    {
        text: "DUCK UNIVERSE",
        type: UPGRADE_TYPE.AUTOCLICKER,
        price: 800_000_000_000_000,
        amount: 100_000_000,
    },
]

const COSTUME_TYPE = {
    HAT: 0,
    GLASSES: 1,
    NECKLACE: 2,
    FRAME: 3,
}

const COSTUMES = [
    // HATS
    {
        text: "APPLE",
        image: "img/hats/apple.svg",
        type: COSTUME_TYPE.HAT,
        imageWidth: 3,
        costumeWidth: 5,
        position: { x: 11, y: -4 },
    },

    {
        text: "ASCOT",
        image: "img/hats/ascot.svg",
        type: COSTUME_TYPE.HAT,
        imageWidth: null,
        costumeWidth: 7,
        position: { x: 10, y: -1 },
    },

    {
        text: "BANANA",
        image: "img/hats/banana.svg",
        type: COSTUME_TYPE.HAT,
        imageWidth: 4,
        costumeWidth: 8,
        position: { x: 9.5, y: -5 },
    },

    {
        text: "BEANIE",
        image: "img/hats/beanie.svg",
        type: COSTUME_TYPE.HAT,
        imageWidth: 4,
        costumeWidth: 8,
        position: { x: 9.5, y: -5 },
    },

    {
        text: "BERET",
        image: "img/hats/beret.svg",
        type: COSTUME_TYPE.HAT,
        imageWidth: null,
        costumeWidth: 9,
        position: { x: 9.2, y: -2 },
    },

    {
        text: "BOWTIE",
        image: "img/hats/bowtie.svg",
        type: COSTUME_TYPE.HAT,
        imageWidth: 3.5,
        costumeWidth: 6,
        position: { x: 8.5, y: -1.2 },
    },

    {
        text: "BUCKER",
        image: "img/hats/bucker.svg",
        type: COSTUME_TYPE.HAT,
        imageWidth: null,
        costumeWidth: 8,
        position: { x: 9.3, y: -4.5 },
    },

    {
        text: "BUNNY EARS",
        image: "img/hats/bunny-ears.svg",
        type: COSTUME_TYPE.HAT,
        imageWidth: 4,
        costumeWidth: 7.5,
        z: -1,
        position: { x: 9.6, y: -2.5 },
    },

    {
        text: "CAP",
        image: "img/hats/cap.svg",
        type: COSTUME_TYPE.HAT,
        imageWidth: null,
        costumeWidth: 10,
        position: { x: 9.4, y: -2.5 },
    },

    {
        text: "CHERRY",
        image: "img/hats/cherry.svg",
        type: COSTUME_TYPE.HAT,
        imageWidth: 2,
        costumeWidth: 3,
        position: { x: 11.5, y: -1.8 },
    },

    {
        text: "CROWN",
        image: "img/hats/crown.svg",
        type: COSTUME_TYPE.HAT,
        imageWidth: null,
        costumeWidth: 7,
        position: { x: 9.7, y: -2.5 },
    },

    {
        text: "CURLY HAIR",
        image: "img/hats/curly-hair.svg",
        type: COSTUME_TYPE.HAT,
        imageWidth: null,
        costumeWidth: 10,
        position: { x: 8.8, y: -5.5 },
    },
    
    {
        text: "DUCKET",
        image: "img/hats/ducket.svg",
        type: COSTUME_TYPE.HAT,
        imageWidth: null,
        costumeWidth: 7,
        position: { x: 10.5, y: -4 },
    },

    {
        text: "FEDORA",
        image: "img/hats/fedora.svg",
        type: COSTUME_TYPE.HAT,
        imageWidth: null,
        costumeWidth: 11,
        position: { x: 7.9, y: -5 },
    },

    {
        text: "FEZ",
        image: "img/hats/fez.svg",
        type: COSTUME_TYPE.HAT,
        imageWidth: null,
        costumeWidth: 9,
        position: { x: 7.8, y: -3.2 },
    },

    {
        text: "FLOWER",
        image: "img/hats/flower.svg",
        type: COSTUME_TYPE.HAT,
        imageWidth: 3,
        costumeWidth: 4,
        position: { x: 9, y: -0.5 },
    },

    {
        text: "HAIR",
        image: "img/hats/hair.svg",
        type: COSTUME_TYPE.HAT,
        imageWidth: null,
        costumeWidth: 7,
        position: { x: 10, y: -1 },
    },

    {
        text: "HEADBAND",
        image: "img/hats/headband.svg",
        type: COSTUME_TYPE.HAT,
        imageWidth: null,
        costumeWidth: 7.5,
        position: { x: 9.6, y: 1 },
    },

    {
        text: "HORNS",
        image: "img/hats/horns.svg",
        type: COSTUME_TYPE.HAT,
        imageWidth: 4,
        costumeWidth: 7,
        position: { x: 9.8, y: -3 },
        z: -1,
    },

    {
        text: "LAPTOP",
        image: "img/hats/laptop.svg",
        type: COSTUME_TYPE.HAT,
        imageWidth: null,
        costumeWidth: 9,
        position: { x: 9, y: -5 },
    },

    {
        text: "MAGICIAN HAT",
        image: "img/hats/magician-hat.svg",
        type: COSTUME_TYPE.HAT,
        imageWidth: null,
        costumeWidth: 8,
        position: { x: 9.4, y: -4 },
    },

    {
        text: "PANAMA",
        image: "img/hats/panama.svg",
        type: COSTUME_TYPE.HAT,
        imageWidth: null,
        costumeWidth: 11,
        position: { x: 8, y: -4.5 },
    },

    {
        text: "RING",
        image: "img/hats/ring.svg",
        type: COSTUME_TYPE.HAT,
        imageWidth: 3.5,
        costumeWidth: 8,
        position: { x: 9.3, y: -1.8    },
    },

    {
        text: "STRAW HAT",
        image: "img/hats/straw-hat.svg",
        type: COSTUME_TYPE.HAT,
        imageWidth: null,
        costumeWidth: 9,
        position: { x: 8.9, y: -3 },
    },

    // GLASSES
    
    {
        text: "EARRINGS",
        image: "img/glasses/earrings.svg",
        type: COSTUME_TYPE.GLASSES,
        imageWidth: 1.5,
        costumeWidth: 2,
        position: { x: 10, y: 3 },
    },

    {
        text: "MUSTACHE",
        image: "img/glasses/mustache.svg",
        type: COSTUME_TYPE.GLASSES,
        imageWidth: 2,
        costumeWidth: 3,
        position: { x: 14.9, y: 2.9 },
    },

    {
        text: "BLUE",
        image: "img/glasses/blue.svg",
        type: COSTUME_TYPE.GLASSES,
        imageWidth: 4,
        costumeWidth: 7,
        position: { x: 10.9, y: 1.5 },
    },

    {
        text: "GOLDEN",
        image: "img/glasses/golden.svg",
        type: COSTUME_TYPE.GLASSES,
        imageWidth: null,
        costumeWidth: 7,
        position: { x: 10.9, y: 1.5 },
    },

    {
        text: "GREEN",
        image: "img/glasses/green.svg",
        type: COSTUME_TYPE.GLASSES,
        imageWidth: 4,
        costumeWidth: 7,
        position: { x: 10.9, y: 1.5 },
    },

    {
        text: "PINK",
        image: "img/glasses/pink.svg",
        type: COSTUME_TYPE.GLASSES,
        imageWidth: 4,
        costumeWidth: 7,
        position: { x: 10.9, y: 1.5 },
    },

    {
        text: "RED",
        image: "img/glasses/red.svg",
        type: COSTUME_TYPE.GLASSES,
        imageWidth: null,
        costumeWidth: 7,
        position: { x: 10.9, y: 1.5 },
    },

    {
        text: "SUNGLASSES",
        image: "img/glasses/sunglasses.svg",
        type: COSTUME_TYPE.GLASSES,
        imageWidth: null,
        costumeWidth: 7,
        position: { x: 10.9, y: 1.5 },
    },

    {
        text: "WHITE",
        image: "img/glasses/white.svg",
        type: COSTUME_TYPE.GLASSES,
        imageWidth: 4,
        costumeWidth: 7,
        position: { x: 10.9, y: 1.5 },
    },

    // NECKLACES

    {
        text: "DIAMOND",
        image: "img/necklaces/diamond.svg",
        type: COSTUME_TYPE.NECKLACE,
        imageWidth: null,
        costumeWidth: 9,
        position: { x: 7.8, y: 4.8 },
    },

    {
        text: "FIRE",
        image: "img/necklaces/fire.svg",
        type: COSTUME_TYPE.NECKLACE,
        imageWidth: null,
        costumeWidth: 9,
        position: { x: 7.8, y: 4.8 },
    },

    {
        text: "GOLD",
        image: "img/necklaces/gold.svg",
        type: COSTUME_TYPE.NECKLACE,
        imageWidth: null,
        costumeWidth: 9,
        position: { x: 7.8, y: 4.8 },
    },

    {
        text: "HEART",
        image: "img/necklaces/heart.svg",
        type: COSTUME_TYPE.NECKLACE,
        imageWidth: null,
        costumeWidth: 9,
        position: { x: 7.8, y: 4.8 },
    },

    {
        text: "PEARLS GOLD",
        image: "img/necklaces/pearls-gold.svg",
        type: COSTUME_TYPE.NECKLACE,
        imageWidth: 4.5,
        costumeWidth: 9,
        position: { x: 7.8, y: 4.8 },
    },

    {
        text: "PEARLS RED",
        image: "img/necklaces/pearls-red.svg",
        type: COSTUME_TYPE.NECKLACE,
        imageWidth: 4.5,
        costumeWidth: 9,
        position: { x: 7.8, y: 4.8 },
    },

    {
        text: "PEARLS",
        image: "img/necklaces/pearls.svg",
        type: COSTUME_TYPE.NECKLACE,
        imageWidth: null,
        costumeWidth: 9,
        position: { x: 7.8, y: 4.8 },
    },

    {
        text: "SILVER",
        image: "img/necklaces/silver.svg",
        type: COSTUME_TYPE.NECKLACE,
        imageWidth: null,
        costumeWidth: 9,
        position: { x: 7.8, y: 4.8 },
    },

    // FRAMES

    {
        text: "BALLOONS",
        image: "img/frames/balloons.svg",
        type: COSTUME_TYPE.FRAME,
        imageWidth: 4,
        z: -1,
        costumeWidth: 25,
        position: { x: -5, y: -5 },
    },

    {
        text: "BLUE",
        image: "img/frames/blue.svg",
        type: COSTUME_TYPE.FRAME,
        imageWidth: 4,
        z: -1,
        costumeWidth: 23,
        position: { x: -2, y: -2},
    },

    {
        text: "BURGER",
        image: "img/frames/burger.svg",
        type: COSTUME_TYPE.FRAME,
        imageWidth: 4,
        z: -1,
        costumeWidth: 27,
        position: { x: -4, y: -7},
    },

    {
        text: "CLOUDS",
        image: "img/frames/clouds.svg",
        type: COSTUME_TYPE.FRAME,
        imageWidth: 4,
        z: -1,
        costumeWidth: 23,
        position: { x: -2, y: -5},
    },

    {
        text: "GREEN",
        image: "img/frames/green.svg",
        type: COSTUME_TYPE.FRAME,
        imageWidth: 4,
        z: -1,
        costumeWidth: 23,
        position: { x: -2, y: -3},
    },

    {
        text: "STARS",
        image: "img/frames/stars.svg",
        type: COSTUME_TYPE.FRAME,
        imageWidth: 4,
        z: -1,
        costumeWidth: 25,
        position: { x: -2, y: -5},
    },

    {
        text: "WHITE",
        image: "img/frames/white.svg",
        type: COSTUME_TYPE.FRAME,
        imageWidth: 4,
        z: -1,
        costumeWidth: 25,
        position: { x: -2, y: -5},
    },
]

const ACHIEVEMENT_TYPE = {
    CLICK_AMOUNT: 0,
    POWER_AMOUNT: 1,
    AUTOCLICKER_AMOUNT: 2,
    UPGRADE_AMOUNT: 3,
    UPGRADE_ALL: 4,
    DUCKETS_AMOUNT: 5,
    ASCENSION_AMOUNT: 6,
    REWARD_AMOUNT: 7,
}

const ACHIEVEMENTS = [
    {
        type: ACHIEVEMENT_TYPE.CLICK_AMOUNT,
        amount: 100,
        costume: 15,
    },

    {
        type: ACHIEVEMENT_TYPE.POWER_AMOUNT,
        amount: 200,
        costume: 0,
    },

    {
        type: ACHIEVEMENT_TYPE.AUTOCLICKER_AMOUNT,
        amount: 100,
        costume: 12,
    },

    {
        type: ACHIEVEMENT_TYPE.REWARD_AMOUNT,
        amount: 5,
        costume: 5,
    },

    {
        type: ACHIEVEMENT_TYPE.DUCKETS_AMOUNT,
        amount: 10000,
        costume: 25,
    },

    {
        type: ACHIEVEMENT_TYPE.UPGRADE_AMOUNT,
        amount: 50,
        upgrade: 0,
        costume: 26,
    },

    {
        type: ACHIEVEMENT_TYPE.CLICK_AMOUNT,
        amount: 1000,
        costume: 40,
    },

    {
        type: ACHIEVEMENT_TYPE.POWER_AMOUNT,
        amount: 2000,
        costume: 47,
    },

    {
        type: ACHIEVEMENT_TYPE.AUTOCLICKER_AMOUNT,
        amount: 1000,
        costume: 7,
    },

    {
        type: ACHIEVEMENT_TYPE.REWARD_AMOUNT,
        amount: 30,
        costume: 42,
    },

    {
        type: ACHIEVEMENT_TYPE.DUCKETS_AMOUNT,
        amount: 1000000,
        costume: 43,
    },

    {
        type: ACHIEVEMENT_TYPE.UPGRADE_AMOUNT,
        amount: 100,
        upgrade: 7,
        costume: 39,
    },

    {
        type: ACHIEVEMENT_TYPE.UPGRADE_AMOUNT,
        amount: 100,
        upgrade: 9,
        costume: 2,
    },

    {
        type: ACHIEVEMENT_TYPE.CLICK_AMOUNT,
        amount: 5000,
        costume: 4,
    },

    {
        type: ACHIEVEMENT_TYPE.POWER_AMOUNT,
        amount: 50000,
        costume: 45,
    },

    {
        type: ACHIEVEMENT_TYPE.AUTOCLICKER_AMOUNT,
        amount: 25000,
        costume: 46,
    },

    {
        type: ACHIEVEMENT_TYPE.REWARD_AMOUNT,
        amount: 100,
        costume: 36,
    },

    {
        type: ACHIEVEMENT_TYPE.DUCKETS_AMOUNT,
        amount: 500_000_000,
        costume: 3,
    },

    {
        type: ACHIEVEMENT_TYPE.UPGRADE_AMOUNT,
        amount: 150,
        upgrade: 10,
        costume: 32,
    },

    {
        type: ACHIEVEMENT_TYPE.CLICK_AMOUNT,
        amount: 10_000,
        costume: 44,
    },

    {
        type: ACHIEVEMENT_TYPE.POWER_AMOUNT,
        amount: 200_000,
        costume: 8,
    },

    {
        type: ACHIEVEMENT_TYPE.AUTOCLICKER_AMOUNT,
        amount: 100_000,
        costume: 9,
    },

    {
        type: ACHIEVEMENT_TYPE.REWARD_AMOUNT,
        amount: 150,
        costume: 41,
    },

    {
        type: ACHIEVEMENT_TYPE.DUCKETS_AMOUNT,
        amount: 1_000_000_000,
        costume: 11,
    },

    {
        type: ACHIEVEMENT_TYPE.UPGRADE_AMOUNT,
        amount: 200,
        upgrade: 14,
        costume: 14,
    },

    {
        type: ACHIEVEMENT_TYPE.CLICK_AMOUNT,
        amount: 15_000,
        costume: 31,
    },

    {
        type: ACHIEVEMENT_TYPE.POWER_AMOUNT,
        amount: 1_000_000,
        costume: 29,
    },

    {
        type: ACHIEVEMENT_TYPE.AUTOCLICKER_AMOUNT,
        amount: 500_000,
        costume: 24,
    },

    {
        type: ACHIEVEMENT_TYPE.REWARD_AMOUNT,
        amount: 200,
        costume: 33,
    },

    {
        type: ACHIEVEMENT_TYPE.ASCENSION_AMOUNT,
        amount: 1,
        costume: 1,
    },

    {
        type: ACHIEVEMENT_TYPE.DUCKETS_AMOUNT,
        amount: 500_000_000_000,
        costume: 35,
    },

    {
        type: ACHIEVEMENT_TYPE.UPGRADE_AMOUNT,
        amount: 250,
        upgrade: 17,
        costume: 34,
    },

    {
        type: ACHIEVEMENT_TYPE.CLICK_AMOUNT,
        amount: 20_000,
        costume: 6,
    },

    {
        type: ACHIEVEMENT_TYPE.POWER_AMOUNT,
        amount: 1_000_000_000,
        costume: 17,
    },

    {
        type: ACHIEVEMENT_TYPE.AUTOCLICKER_AMOUNT,
        amount: 500_000_000,
        costume: 20,
    },

    {
        type: ACHIEVEMENT_TYPE.REWARD_AMOUNT,
        amount: 250,
        costume: 18,
    },

    {
        type: ACHIEVEMENT_TYPE.REWARD_AMOUNT,
        amount: 300,
        costume: 38,
    },
    
    {
        type: ACHIEVEMENT_TYPE.DUCKETS_AMOUNT,
        amount: 1_000_000_000_000,
        costume: 13,
    },

    {
        type: ACHIEVEMENT_TYPE.DUCKETS_AMOUNT,
        amount: 1_000_000_000_000_000,
        costume: 27,
    },
    
    {
        type: ACHIEVEMENT_TYPE.UPGRADE_AMOUNT,
        amount: 300,
        upgrade: 20,
        costume: 10,
    },

    {
        type: ACHIEVEMENT_TYPE.UPGRADE_AMOUNT,
        amount: 300,
        upgrade: 21,
        costume: 30,
    },

    {
        type: ACHIEVEMENT_TYPE.CLICK_AMOUNT,
        amount: 25_000,
        costume: 28,
    },

    {
        type: ACHIEVEMENT_TYPE.CLICK_AMOUNT,
        amount: 30_000,
        costume: 21,
    },
    
    {
        type: ACHIEVEMENT_TYPE.ASCENSION_AMOUNT,
        amount: 9,
        costume: 16,
    },

    {
        type: ACHIEVEMENT_TYPE.ASCENSION_AMOUNT,
        amount: 99,
        costume: 37,
    },

    {
        type: ACHIEVEMENT_TYPE.ASCENSION_AMOUNT,
        amount: 999,
        costume: 19,
    },

    {
        type: ACHIEVEMENT_TYPE.ASCENSION_AMOUNT,
        amount: 99999,
        costume: 22,
    },

    {
        type: ACHIEVEMENT_TYPE.UPGRADE_ALL,
        costume: 23,
    },

    
]

// ADD UPGRADES TO SHOP
let shop = document.getElementById("shop-list")
let id = 0
let shopContent = ""

// dynamically create buttons
UPGRADES.forEach(upgrade => {
    shopContent +=
    `
        <button class="item-button" id="upgrade-${id}" onclick="buy(${id})">
            <img src="img/shop/${id + 1}.svg" class="side">
            <div class="grow flex-col">
                <p class="stroke upgrade-counter" id="upgrade-counter-${id}"></p>
                <p class="stroke item-title">${upgrade.text}</p>
                <p class="stroke">${BigNumber(upgrade.amount).toFormat()}/${upgrade.type == UPGRADE_TYPE.POWER? "CLICK" : "SEC"}</p>  
                <p class="stroke">${BigNumber(upgrade.price).toFormat()}$</p>
            </div>
        </button>
    `

    id++;
});

shop.innerHTML = shopContent

// dynamically fill up the lists
let selectNoneButton = (id) => {
    return `
    <button class="item-button" onclick="uiSelectCostume(${id})">
        <div class="side">

        </div>
        <div>
            <p class="stroke item-title">None</p>
        </div>
    </button>
    `
}

let hatsContent = selectNoneButton(-1)
let glassesContent = selectNoneButton(-2)
let necklacesContent = selectNoneButton(-3)
let framesContent = selectNoneButton(-4)

function uiSelectCostume(id){
    uiCheckSound.play()
    setCostume(id)
}

id = 0;
COSTUMES.forEach(costume => {
    let content = `
    <button class="item-button" id="costume-${id}" onclick="uiSelectCostume(${id})">
        <div class="side">
            <img src="${costume.image}" style="${costume.imageWidth != null? `width: ${costume.imageWidth}vw` : ""}">
        </div>
        <div>
            <p class="stroke item-title">${costume.text}</p>
        </div>
    </button>
    `

    id++;
    switch (costume.type){
        case COSTUME_TYPE.HAT:
            hatsContent += content
            break
            
        case COSTUME_TYPE.GLASSES:
            glassesContent += content
            break

        case COSTUME_TYPE.NECKLACE:
            necklacesContent += content
            break

        case COSTUME_TYPE.FRAME:
            framesContent += content    
            break
    }

})


document.getElementById("hats-list").innerHTML = hatsContent
document.getElementById("glasses-list").innerHTML = glassesContent
document.getElementById("necklaces-list").innerHTML = necklacesContent
document.getElementById("frames-list").innerHTML = framesContent

// dynamically fill achievements
let achievementsContent = ''

let getAchievementText = (achievement) => {
    switch (achievement.type) {
        case ACHIEVEMENT_TYPE.ASCENSION_AMOUNT:
            return `ASCEND TO X${(new BigNumber(achievement.amount + 1)).toFormat(0)}`
        
        case ACHIEVEMENT_TYPE.AUTOCLICKER_AMOUNT:
            return `REACH ${(new BigNumber(achievement.amount)).toFormat(0)} PER SECOND`
    
        case ACHIEVEMENT_TYPE.CLICK_AMOUNT:
            return `CLICK ${(new BigNumber(achievement.amount)).toFormat(0)} TIMES`
        
        case ACHIEVEMENT_TYPE.DUCKETS_AMOUNT:
            return `REACH ${(new BigNumber(achievement.amount)).toFormat(0)} DUCKETS`
        
        case ACHIEVEMENT_TYPE.POWER_AMOUNT:
            return `REACH ${(new BigNumber(achievement.amount)).toFormat(0)} PER CLICK`
    
        case ACHIEVEMENT_TYPE.REWARD_AMOUNT:
            return `COLLECT ${(new BigNumber(achievement.amount)).toFormat(0)} GOLDEN DUCKETS`
        
        case ACHIEVEMENT_TYPE.UPGRADE_ALL:
            return `BUY ALL UPGRADES AT LEAST ONCE`
        
        case ACHIEVEMENT_TYPE.UPGRADE_AMOUNT:
            return `BUY "${UPGRADES[achievement.upgrade].text}" A TOTAL OF ${(new BigNumber(achievement.amount)).toFormat(0)} TIMES`
            
        default:
            break;
    }
}


var filteredAchievements = {}
for (let type in ACHIEVEMENT_TYPE) {
    filteredAchievements[ACHIEVEMENT_TYPE[type]] = []
}

id = 0
ACHIEVEMENTS.forEach((achievement) => {
    achievementsContent += `
    <button class="item-button" id="achievement-${id}" onclick="uiSelectCostume(${achievement.costume})">
        <div class="side">
            <img src="${COSTUMES[achievement.costume].image}" style="${COSTUMES[achievement.costume].imageWidth != null? `width: ${COSTUMES[achievement.costume].imageWidth}vw` : ""}">
        </div>
        <div>
            <p class="stroke">${getAchievementText(achievement)}</p>
        </div>
    </button>
    `

    filteredAchievements[achievement.type].push({
        achievement: achievement,
        id: id
    })

    id++
})

achievementsContent += `
<div id="credits">
    <p class="stroke">GAME BY: HAMDY ELZANQALI</p>
    <p class="stroke">FONT: NISKALA HURUF</p>
    <p class="stroke">SFX: FLORAPHONIC(PIXABAY)</p>
    <br>
    <p class="stroke">JAVASCRIPT LIBRARIES</p>
    <p class="stroke">-HOWLERJS</p>
    <p class="stroke">-BIGNUMBERJS</p>
    <br>
    <div style="text-align: center">
        <p class="stroke">THANKS FOR PLAYING!</p>
        <br>
        <img src="img/shop/duckroll.svg" style="width:7vw">
    <div>
</div>
`

document.getElementById("achievements-list").innerHTML = achievementsContent

// Golden Duck rewards
let container = document.body.querySelector("#golden-rewards")

function addGoldenDuck(){
    if (document.visibilityState == "hidden") {
        return
    }
    // create element
    let element = document.createElement("div")
    element.classList.add("reward")
    element.innerHTML = `
        <div>
            <img src="img/golden-ducket.svg">
        </div>
    `

    // randomize the position
    element.style.top = (Math.random() * 90).toString() + "vh"

    // randomize the speed
    element.style.animationDuration = (30 + Math.random() * 30).toString() + "s" //[30s, 60s]

    // add the element to the game
    container.appendChild(element)

    element.onclick = () => {
        if (Math.random() < 0.3){
            //30% chance of getting 30 seconds double
            doubleTimer += 32;
            addFadingText("30 SECONDS", getComputedStyle(element).left, element.style.top)
        } else {
            // (current_clicker + current_power) * [5, 15]
            let amount = autoclicker.plus(power).multipliedBy(multiplier.multipliedBy(double? "2":"1").multipliedBy(5 + Math.random() * 10))
            click(amount, false)

            addFadingText(amount.toFormat(0) + "$", getComputedStyle(element).left, element.style.top)
        }

        rewardSound.play()

        // play animation
        element.classList.add("collected")

        onRewardCollected()

        // remove after delay
        setTimeout(()=>{
            element.remove()
        }, 1000)
    }

    // remove when it gets off-screen
    element.onanimationend = () => {
        element.remove()
    }
}

function swarmGoldenDuckets() {
    for (let i = 0; i < 10 + Math.random() * 10; i++){
        setTimeout(addGoldenDuck, Math.random() * 10_000)
    }
}

function addFadingText(text, x, y) {
    // create element
    let element = document.createElement("p")
    element.className = "stroke pop-out reward-text"
    
    // set text
    element.textContent = text
    element.setAttribute("data-content", text)
    
    // set position
    element.style.position = "absolute"
    element.style.top = y
    element.style.left = x

    container.appendChild(element)

    setTimeout(() => element.remove(), 1000)
}

// animations
let duckImg = document.querySelector("#duck")
let ducketStat = document.querySelector("#ducket-stat")
let powerStat = document.querySelector("#power-stat")
let autoclickerStat = document.querySelector("#auto-stat")

let bounceTime = 0
function playBounceDuckAnimation() {
    // skip if it's playing too fast and temporarily prevent the autoclicker from
    // playing animation while the player is actively clicking
    if (getTimeSeconds() - bounceTime < 0.1) {
        return
    }

    bounceTime = getTimeSeconds()

    // duck
    duckImg.classList.remove('bounce-duck-animation'); // reset animation
    void duckImg.offsetWidth; // trigger reflow
    duckImg.classList.add('bounce-duck-animation'); // start animation

    // duckets text
    ducketStat.classList.remove('bounce-stat-animation');
    void ducketStat.offsetWidth;
    ducketStat.classList.add('bounce-stat-animation');
}

function playPowerLabelAnimation() {
    powerStat.classList.remove('bounce-stat-animation');
    void powerStat.offsetWidth;
    powerStat.classList.add('bounce-stat-animation');
}

function playAutoclickerLabelAnimation() {
    autoclickerStat.classList.remove('bounce-stat-animation');
    void autoclickerStat.offsetWidth;
    autoclickerStat.classList.add('bounce-stat-animation');
}


var nofunction = () => {}

function showMain() {
    secondaryScreen.classList.add("hide")
    
    secondaryScreen.ontransitionend = () => {
        secondaryScreen.style.zIndex = -10
        mainScreen.style.zIndex = 0

        void mainScreen.offsetWidth;
        mainScreen.classList.remove("hide")
    }

    mainScreen.ontransitionend = nofunction

    notification.classList.remove("wide")
}

function showSecondary() {
    mainScreen.classList.add("hide")
    
    mainScreen.ontransitionend = () => {
        mainScreen.style.zIndex = -10
        secondaryScreen.style.zIndex = 0

        void secondaryScreen.offsetWidth;
        secondaryScreen.classList.remove("hide")
    }

    secondaryScreen.ontransitionend = nofunction

    notification.classList.add("wide")
}

let upgrades = document.getElementById("upgrades")
let hats = document.getElementById("hats")
let glasses = document.getElementById("glasses")
let necklaces = document.getElementById("necklaces")
let frame = document.getElementById("frames")
let achievement = document.getElementById("achievements")

function showList(list) {
    upgrades.classList.remove("show")
    hats.classList.remove("show")
    glasses.classList.remove("show")
    necklaces.classList.remove("show")
    frame.classList.remove("show")
    achievement.classList.remove("show")

    switch (list) {
        case 0:
            upgrades.classList.add("show")
            break
        case 1:
            hats.classList.add("show")
            break
        case 2:
            glasses.classList.add("show")
            break
        case 3:
            necklaces.classList.add("show")
            break
        case 4:
            frame.classList.add("show")
            break
        case 5:
            achievement.classList.add("show")
            break
    }
}