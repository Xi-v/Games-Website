// always round up
BigNumber.set({ ROUNDING_MODE: 2})

const ASCENSION_RATE = 10_000_000_000 // get 1.00 ascension every
const GOLDEN_REWARD_BASE_INTERVAL = 90 // show every random [INTERVAL - RANGE, INTERVAL + RANGE]
const GOLDEN_REWARD_RANGE = 30
const GOLDEN_REWARD_SWARM_INTERVAL = 60 * 12
const NOTIFICATION_TIME = 7
const MAX_RETURNING_REWARD_SECONDS = 60 * 60 * 3 // 3 hours
const BACKGROUNDS_COUNT = 5

// used for the ad button if no SDK is used
// const FOLLOW_URL = "https://cyfo.itch.io"

var duckets = new BigNumber(localStorage.hasOwnProperty("duckets")? localStorage.getItem("duckets") : "0")
var power = new BigNumber(localStorage.hasOwnProperty("power")? localStorage.getItem("power") : "1")
var autoclicker = new BigNumber(localStorage.hasOwnProperty("autoclicker")? localStorage.getItem("autoclicker") : "0")

var multiplier = new BigNumber(localStorage.hasOwnProperty("multiplier")? localStorage.getItem("multiplier") : "1.0")
var ascension = new BigNumber(localStorage.hasOwnProperty("ascension")? localStorage.getItem("ascension") : "0.2")
var double = false

var doubleTimer = 0
var background = localStorage.hasOwnProperty("b")? parseInt(localStorage.getItem("b")) : 1
document.getElementById("game").style.backgroundImage = "url(img/background/background" + background + ".svg)"

var totalClicks = parseInt(localStorage.hasOwnProperty("tc")? localStorage.getItem("tc") : 0)
var totalRewards = parseInt(localStorage.hasOwnProperty("tr")? localStorage.getItem("tr") : 0)

var upgradeCounterTotal = [] // actual count
var upgradeCounter = [] // visible count, reset with each ascension

var achievements = []

var autoSelectHats = localStorage.hasOwnProperty("as0")? localStorage.getItem("as0") == 1 : true
document.getElementById("autoselect-hats-btn").checked = autoSelectHats

var autoSelectGlasses = localStorage.hasOwnProperty("as1")? localStorage.getItem("as1") == 1 : true
document.getElementById("autoselect-glasses-btn").checked = autoSelectGlasses

var autoSelectNecklaces = localStorage.hasOwnProperty("as2")? localStorage.getItem("as2") == 1 : true
document.getElementById("autoselect-necklaces-btn").checked = autoSelectNecklaces

var autoSelectFrames = localStorage.hasOwnProperty("as3")? localStorage.getItem("as3") == 1 : true
document.getElementById("autoselect-frames-btn").checked = autoSelectFrames


// load upgrade counter stats
for (let i = 0; i < UPGRADES.length; i++) {
    let key = "u" + i.toString()
    upgradeCounter.push(localStorage.hasOwnProperty(key)? parseInt(localStorage.getItem(key)) : 0)

    key = "t" + key
    upgradeCounterTotal.push(localStorage.hasOwnProperty(key)? parseInt(localStorage.getItem(key)) : 0)
}

// load achievements
for (let i = 0; i < ACHIEVEMENTS.length; i++) {
    let key = "a" + i
    achievements.push(localStorage.hasOwnProperty(key)? localStorage.getItem(key) : false)
    document.getElementById("costume-" + ACHIEVEMENTS[i].costume).disabled = !achievements[i]
    document.getElementById("achievement-" + i).disabled = !achievements[i]
}

// call every 1 second
setInterval(() => {
    // autoclicker
    if (autoclicker.isGreaterThan("0")) {
        click(autoclicker.multipliedBy(multiplier.multipliedBy(double? "2":"1")), false)

        localStorage.setItem("t", getTimeSeconds())
    }

    // double timer
    if (doubleTimer > -1){
        doubleTimer--;
        onDoubleTimerChanged()
    }
}, 1000)



// golden rewards
function goldeDuckRoutine() {
    return setTimeout(()=> {
        // add ducks if the user is actively playing
        addGoldenDuck()

        // repeat
        goldeDuckRoutine()
        
        // random time
    }, (GOLDEN_REWARD_BASE_INTERVAL + (Math.random() * 2 - 1) * GOLDEN_REWARD_RANGE) * 1000
    )
}

goldeDuckRoutine()

// swarm rewards
setInterval(swarmGoldenDuckets, GOLDEN_REWARD_SWARM_INTERVAL * 1000)


// settings
Howler.volume(localStorage.hasOwnProperty("sound-volume")? localStorage.getItem("sound-volume") : 0.5)

// elements
var ducketsLabel = document.querySelector("#ducket-stat p")
var powerLabel = document.querySelector("#power-stat p")
var autoclickerLabel = document.querySelector("#auto-stat p")
var multiplierLabel = document.getElementById("multiplier-stat")
var ascensionButton = document.getElementById("ascend-btn")
var ascensionLabel = document.querySelector("#ascend-btn p")
var secondarySettings = document.getElementById("settings-menu")
var secondaryAscension = document.getElementById("ascension-menu")
var secondaryAd = document.getElementById("ad-menu")
var notification = document.getElementById("notification")
var notificationImage = document.querySelector("#notification img")
var notificationText = document.querySelector("#notification p")


// sounds
var clickSound = new Howl({src: ["sfx/click.mp3"]})
var shopSound = new Howl({src: ["sfx/buy.mp3"]})
var rewardSound = new Howl({src: ["sfx/reward.mp3"]})
var uiClickSound = new Howl({src: ["sfx/ui-click.mp3"]})
var uiCheckSound = new Howl({src: ["sfx/ui-check.mp3"]})
var achievementSound = new Howl({src: ["sfx/achievement.mp3"]})

// game
function click(amount, withSound) {
    if (withSound) {
        clickSound.play()
    }    

    // add money
    duckets = duckets.plus(amount.toFixed(0))
    onDucketChanged()

    // animation
    playBounceDuckAnimation()

    // add ascension value
    ascension = ascension.plus(amount.dividedBy(ASCENSION_RATE))
    onAscensionChanged()
}

function buy(id) {
    if (duckets.isGreaterThanOrEqualTo(UPGRADES[id].price)) {
        shopSound.play()

        // add click
        totalClicks += 1
        onTotalClicksChanged()

        // deduct the price (literally only wanted to say deduc[k]t)
        duckets = duckets.minus(UPGRADES[id].price)
        onDucketChanged()

        // add the value
        if (UPGRADES[id].type == UPGRADE_TYPE.POWER) {
            power = power.plus(UPGRADES[id].amount)
            onPowerChanged()
        } else {
            autoclicker = autoclicker.plus(UPGRADES[id].amount)
            onAutoclickerChanged()
        }

        // add to counter
        upgradeCounter[id]++
        upgradeCounterTotal[id]++
        onUpgradeCounterChanged(id)
    }
}

function ascend(){
    // add to multiplier
    multiplier = multiplier.plus(ascension)
    ascension = new BigNumber("0")
    
    // reset money
    duckets = new BigNumber("0")
    power = new BigNumber("1")
    autoclicker = new BigNumber("0")

    // update UI
    onDucketChanged()
    onPowerChanged()
    onAutoclickerChanged()
    onMultiplierChanged()
    onAscensionChanged()

    // reset visible upgrade counters
    for (let i = 0; i < UPGRADES.length; i++) {
        upgradeCounter[i] = 0
        onUpgradeCounterChanged(i)
    }
}

let duckHat = document.getElementById("duck-hat")
let duckGlasses = document.getElementById("duck-glasses")
let duckNecklace = document.getElementById("duck-necklace")
let duckFrame = document.getElementById("duck-frame")

function setCostume(id) {
    // set to none
    let target
    if (id < 0)
    {
        let type
        switch (id) {
            case -1:        
                target = duckHat
                type = COSTUME_TYPE.HAT
                break
            case -2:
                target = duckGlasses
                type = COSTUME_TYPE.GLASSES
                break
            case -3:
                target = duckNecklace
                type = COSTUME_TYPE.NECKLACE
                break
            case -4:
                target = duckFrame
                type = COSTUME_TYPE.FRAME
                break
        }

        target.style.display = "none"
        onCostumeChanged(type, id)
    
    // set to target
    } else {
        let costume = COSTUMES[id]
        switch (costume.type) {
            case COSTUME_TYPE.HAT:        
                target = duckHat
                break
            case COSTUME_TYPE.GLASSES:
                target = duckGlasses
                break
            case COSTUME_TYPE.NECKLACE:
                target = duckNecklace
                break
            case COSTUME_TYPE.FRAME:
                target = duckFrame
                break
        }

        target.style.display = "none"
        target.style.width = `${costume.costumeWidth}vw`
        target.style.left = `${costume.position.x}vw`
        target.style.top = `${costume.position.y}vw`
        target.src = costume.image
        target.style.display = "block"

        target.style.zIndex = (costume.z != null)? costume.z : 1;
    
        onCostumeChanged(costume.type, id)
    }
}

function completeAchievement(id) {
    // update ui
    let costume = ACHIEVEMENTS[id].costume
    document.getElementById("costume-" + costume).disabled = false
    document.getElementById("achievement-" + id).disabled = false
    
    // save the achievement
    achievements[id] = true
    localStorage.setItem("a" + id, true)
    
    // set the counter
    onAchievementsCounterChanged()

    // notify user
    showNotification(COSTUMES[costume].image, COSTUMES[costume].imageWidth, getAchievementText(ACHIEVEMENTS[id]), costume)
    
    // set new costume
    switch (COSTUMES[ACHIEVEMENTS[id].costume].type) {
        case COSTUME_TYPE.HAT:
            if (autoSelectHats){
                setCostume(ACHIEVEMENTS[id].costume)
            }
            break
            
        case COSTUME_TYPE.GLASSES:
            if (autoSelectGlasses){
                setCostume(ACHIEVEMENTS[id].costume)
            }
            break
            
        case COSTUME_TYPE.NECKLACE:
            if (autoSelectNecklaces){
                setCostume(ACHIEVEMENTS[id].costume)
            }
            break
            
            case COSTUME_TYPE.FRAME:
                if (autoSelectGlasses){
                    setCostume(ACHIEVEMENTS[id].costume)
            }
            break
    }
}

let timeout = null
let timeoutFunction = () => {
    notification.classList.remove("show")
}

function showNotification(img, imgWidth, text, costume) {
    achievementSound.play()

    if (timeout) {
        clearTimeout(timeout)
    }

    notificationImage.src = img
    if (imgWidth != null) {
        notificationImage.style.width = imgWidth + "vw"
    }
    notificationText.textContent = text
    notificationText.setAttribute("data-content", notificationText.textContent)

    if (costume != null) {
        notification.onclick = () => {
            uiSelectCostume(costume)
        }
    } else {
        notification.onclick = nofunction
    }

    notification.classList.add("show")

    timeout = setTimeout(timeoutFunction, NOTIFICATION_TIME * 1000)
}
    
// callbacks
function onDucketChanged() {
    // update the label
    ducketsLabel.textContent = duckets.toFormat(0) + " DUCKETS"
    ducketsLabel.setAttribute("data-content", ducketsLabel.textContent)
    
    // save
    localStorage.setItem("duckets", duckets.toFixed())
    
    // update buttons
    let id = 0
    UPGRADES.forEach(upgrade => {
        document.querySelector(`#upgrade-${id++}`).disabled = duckets.isLessThan(upgrade.price)
    });
    
    // achievements
    filteredAchievements[ACHIEVEMENT_TYPE.DUCKETS_AMOUNT].forEach((item)=>{
        if (!achievements[item.id] && duckets.isGreaterThanOrEqualTo(item.achievement.amount)) {
            completeAchievement(item.id)
        }
    })
}

function onPowerChanged() {
    // update the label
    powerLabel.textContent = power.multipliedBy(multiplier.multipliedBy(double? "2":"1")).toFormat(0) + " DUCK POWER"
    powerLabel.setAttribute("data-content", powerLabel.textContent)
    
    // animation
    playPowerLabelAnimation()
    
    // save
    localStorage.setItem("power", power.toFixed())
    
    // achievements
    filteredAchievements[ACHIEVEMENT_TYPE.POWER_AMOUNT].forEach((item)=>{
        if (!achievements[item.id] && power.isGreaterThanOrEqualTo(item.achievement.amount)) {
            completeAchievement(item.id)
        }
    })
}

function onAutoclickerChanged() {
    // update the label
    autoclickerLabel.textContent = autoclicker.multipliedBy(multiplier.multipliedBy(double? "2":"1")).toFormat(0) + " AUTODUCKER"
    autoclickerLabel.setAttribute("data-content", autoclickerLabel.textContent)
    
    //animation
    playAutoclickerLabelAnimation()
    
    // save
    localStorage.setItem("autoclicker", autoclicker.toFixed())
    
    // achievements
    filteredAchievements[ACHIEVEMENT_TYPE.AUTOCLICKER_AMOUNT].forEach((item)=>{
        if (!achievements[item.id] && autoclicker.isGreaterThanOrEqualTo(item.achievement.amount)) {
            completeAchievement(item.id)
        }
    })
}

function onMultiplierChanged(){
    // update the label
    multiplierLabel.textContent = "MULTIPLIER: X" + multiplier.multipliedBy(double? "2":"1").toFormat(2)
    multiplierLabel.setAttribute("data-content", multiplierLabel.textContent)
    
    // save
    localStorage.setItem("multiplier", multiplier.toFixed())
    
    // achievements
    filteredAchievements[ACHIEVEMENT_TYPE.ASCENSION_AMOUNT].forEach((item)=>{
        if (!achievements[item.id] && multiplier.minus("1").isGreaterThanOrEqualTo(item.achievement.amount)) {
            completeAchievement(item.id)
        }
    })
}

function onAscensionChanged() {
    if (ascension.isGreaterThanOrEqualTo("1")){
        // show button
        ascensionButton.style.display = "block"
        
        // update the label
        ascensionLabel.textContent = "ASCEND: X" + ascension.multipliedBy(double? "2":"1").toFormat(2)
        ascensionLabel.setAttribute("data-content", ascensionLabel.textContent)
    } else {
        // hide button
        ascensionButton.style.display = "none"
    }
    
    // save
    localStorage.setItem("ascension", ascension.toFixed())
}

function onUpgradeCounterChanged(id) {
    // update text
    let element = document.querySelector(`#upgrade-counter-${id}`)
    element.textContent = upgradeCounter[id]
    element.setAttribute("data-content", element.textContent)
    
    // save
    let key = "u" + id.toString()
    localStorage.setItem(key, upgradeCounter[id])
    localStorage.setItem("t"+key, upgradeCounterTotal[id])
    
    // achievements
    filteredAchievements[ACHIEVEMENT_TYPE.UPGRADE_AMOUNT].forEach((item)=>{
        if (!achievements[item.id] && item.achievement.upgrade == id && upgradeCounterTotal[id] >= item.achievement.amount) {
            completeAchievement(item.id)
        }
    })
    
    for (let i = 0; i < upgradeCounterTotal.length; i++){
        if (upgradeCounterTotal[i] == 0) {
            // not completed
            return
        }
    }
    
    // completed
    filteredAchievements[ACHIEVEMENT_TYPE.UPGRADE_ALL].forEach((item)=>{
        if (!achievements[item.id]) {
            completeAchievement(item.id)
        }
    })
}

let doubleText = document.getElementById("double-text")
doubleText.style.display = "none"
let hideDoubleText = ()=> doubleText.style.display = "none"

function onDoubleChanged() {
    onAutoclickerChanged()
    onPowerChanged()
    onMultiplierChanged()
    
    if (double) {
        doubleText.style.display = "block"
        doubleText.classList.remove("pop-out")
        void doubleText.offsetWidth;
        doubleText.classList.add("pop-in")
    } else {
        doubleText.classList.remove("pop-in")
        void doubleText.offsetWidth;
        doubleText.classList.add("pop-out")

        setTimeout(hideDoubleText, 1000)
    }
}

let adButton = document.getElementById("ad-button")
let adButtonText = document.querySelector("#ad-button p")
let adButtonImg = document.querySelector("#ad-button img")
function onDoubleTimerChanged() {
    if (doubleTimer > 0) {
        // enable double earning
        if (!double) {
            double = true
            onDoubleChanged()
        }
        
        // update ad button
        let formattedTime = secondsToMMSS(doubleTimer)
        adButtonText.textContent = formattedTime;
        adButtonText.setAttribute("data-content", formattedTime)
    } else {
        if (double) {
            // disable double earning
            double = false
            onDoubleChanged()
            
            // update button text
            let text = "FOLLOW ME"
            if (HAS_SDK) {
                text = "GET X2"
            }
            
            adButtonText.textContent = text;
            adButtonText.setAttribute("data-content", text)
        }
    }
}

function onCostumeChanged(type, id) {
    switch(type) {
        case COSTUME_TYPE.HAT:
            localStorage.setItem("hat", id)
            break
        case COSTUME_TYPE.GLASSES:
            localStorage.setItem("glasses", id)
            break
        case COSTUME_TYPE.NECKLACE:
            localStorage.setItem("necklace", id)
            break
        case COSTUME_TYPE.FRAME:
            localStorage.setItem("frame", id)
            break
        }
}
        
function onTotalClicksChanged() {
    localStorage.setItem("tc", parseInt(totalClicks))

    // achievements
    filteredAchievements[ACHIEVEMENT_TYPE.CLICK_AMOUNT].forEach((item)=>{
        if (!achievements[item.id] && totalClicks >= item.achievement.amount) {
        completeAchievement(item.id)
        }
    })
}

function onRewardCollected() {
    totalRewards++
    localStorage.setItem("tr", totalRewards)

    // achievements
    filteredAchievements[ACHIEVEMENT_TYPE.REWARD_AMOUNT].forEach((item)=>{
        if (!achievements[item.id] && totalRewards >= item.achievement.amount) {
        completeAchievement(item.id)
        }
    })
}

let achievementCount = document.getElementById("achievements-count")
function onAchievementsCounterChanged() {
    // count effieciently
    let count = 0
    for (let i = 0; i < achievements.length; i++) {
        if (achievements[i]){
            count++
        }
    }

    // update counter
    achievementCount.textContent = count + "/" + achievements.length
    achievementCount.setAttribute("data-content", achievementCount.textContent)
}

// ad button
let text = ""
if (HAS_SDK) {
    // ad button
    text = "GET X2"
    adButtonImg.src = "img/UI/btn-watch.svg"
    adButton.onclick = () => {
        uiClickSound.play()
        showSecondary()
        selectSecondadryMenu(2)
    }
} else {
    // follow button
    text = "FOLLOW ME"
    adButtonImg.src = "img/UI/follow.svg"
    adButton.onclick = () => {
        uiClickSound.play()
        window.open(FOLLOW_URL, "_blank")
    }
}
adButtonText.textContent = text;
adButtonText.setAttribute("data-content", text)

document.getElementById("ad-back-btn").onclick = () => {
    uiClickSound.play()
    showMain()
}

document.getElementById("ad-confirm-btn").onclick = () => {
    onAdRequested()
    showMain()
}

function init() {
    // get returning bonus
    if (localStorage.hasOwnProperty("t")) {
        let time = Math.min(getTimeSeconds() - localStorage.getItem("t"), MAX_RETURNING_REWARD_SECONDS)
        let amount = autoclicker.multipliedBy(multiplier).multipliedBy(time)

        showNotification("img/UI/wave.svg", null, `WELCOME BACK! YOU HAVE MADE ${amount.toFormat(0)} DUCKETS WHILE YOU WERE AWAY!`)

    }

    onDucketChanged()
    onPowerChanged()
    onAutoclickerChanged()
    onMultiplierChanged()
    onAscensionChanged()
    onAchievementsCounterChanged()
    
    for (let i = 0; i < UPGRADES.length; i++) {
        onUpgradeCounterChanged(i)
    }

    if (localStorage.hasOwnProperty("hat")) {
        setCostume(parseInt(localStorage.getItem("hat")))
    }

    if (localStorage.hasOwnProperty("glasses")) {
        setCostume(parseInt(localStorage.getItem("glasses")))
    }

    if (localStorage.hasOwnProperty("necklace")) {
        setCostume(parseInt(localStorage.getItem("necklace")))
    }

    if (localStorage.hasOwnProperty("frame")) {
        setCostume(parseInt(localStorage.getItem("frame")))
    }
}

// event listeners
let duckZoneElement = document.getElementById("duck-zone")
let petText = document.getElementById("pet-text")

let registerClick = () => {
    // click the duck
    click(power.multipliedBy(multiplier.multipliedBy(double? "2":"1")), true)
        
    // add click
    totalClicks += 1
    onTotalClicksChanged()

    // remove the pet text when clicked
    if (petText) {
        petText.classList.add("pop-out")
        
        let element = petText
        setTimeout(()=>{
            element.remove()
        }, 1000)

        petText = null
    }
}

// click area events
var touchTimer = 0;
duckZoneElement.addEventListener("mousedown", () => {
    // only register clicks if not touched
    if (getTimeSeconds() - touchTimer > 1) {
        registerClick()
    }
})

duckZoneElement.addEventListener("touchstart", (event) => {
    touchTimer = getTimeSeconds()
    registerClick()
})


let selectSecondadryMenu = (id) => {
    secondarySettings.style.display = "none"
    secondaryAscension.style.display = "none"
    secondaryAd.style.display = "none"

    switch (id) {
        case 0:
            secondarySettings.style.display = "flex"
            break;
        case 1:
            secondaryAscension.style.display = "flex"
            break
        case 2:
            secondaryAd.style.display = "flex"
            break
    }
}
// settings button
document.getElementById("settings-btn").onclick = () => {
    uiClickSound.play()
    showSecondary()
    selectSecondadryMenu(0)
}

// settings background
document.getElementById("settings-background-btn").onclick = () => {
    uiClickSound.play()
    background++
    if (background > BACKGROUNDS_COUNT) {
        background = 1
    }

    document.getElementById("game").style.backgroundImage = "url(img/background/background" + background + ".svg)"

    localStorage.setItem("b", background)
}

// settings back button
document.getElementById("settings-back-btn").onclick = () => {
    uiClickSound.play()
    showMain()
}

// volume slider
let volumeInput = document.getElementById("volume-input")
volumeInput.value = Howler.volume()
volumeInput.oninput = (event) => {
    Howler.volume(event.target.value)
}

volumeInput.onchange = (event) => {
    let value = event.target.value
    Howler.volume(value)
    uiClickSound.play()
    localStorage.setItem("sound-volume", value)
}

// fullscreen button
document.getElementById("fullscreen-btn").onclick = (event) => {
    uiCheckSound.play()
    event.target.checked = !document.fullscreenElement
    if (document.fullscreenElement)
        document.exitFullscreen()
    else
        document.querySelector('body').requestFullscreen()

}
// ascension
ascensionButton.onclick = ()=> {
    uiClickSound.play()
    showSecondary()
    selectSecondadryMenu(1)
}

document.getElementById("ascension-back-btn").onclick = () => {
    showMain()
    uiClickSound.play()
}

document.getElementById("ascension-confirm-btn").onclick = () => {
    ascend()
    showMain()
    uiClickSound.play()
}

// costumes
let currentList = 0
function switchList(target) {
    uiClickSound.play()
    // go to default
    if (currentList == target){
        showList(0)
        currentList = 0
    // change to target
    } else {
        showList(target)
        currentList = target
    }
}
document.getElementById("hats-btn").onclick = () => {
    switchList(1)
}

document.getElementById("glasses-btn").onclick = () => {
    switchList(2)
}

document.getElementById("necklaces-btn").onclick = () => {
    switchList(3)
}

document.getElementById("frames-btn").onclick = () => {
    switchList(4)
}

document.getElementById("achievements-btn").onclick = () => {
    switchList(5)
}


let sideBack = () => {
    uiClickSound.play()
    switchList(0)

}

document.querySelectorAll(".side-back-btn").forEach((button) => {
    button.onclick = sideBack
})

document.getElementById("autoselect-hats-btn").onclick = (e) => {
    uiCheckSound.play()
    autoSelectHats = e.target.checked
    localStorage.setItem("as0", autoSelectHats? 1: 0)
}