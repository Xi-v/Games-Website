var adsenseScript=document.createElement('script');adsenseScript.async=true;adsenseScript.src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';adsenseScript.setAttribute('data-ad-client','ca-pub-8349441957149316');adsenseScript.setAttribute('data-ad-frequency-hint','60s');adsenseScript.setAttribute('crossorigin','anonymous');adsenseScript.setAttribute('data-ad-channel','9300291431');document.head.appendChild(adsenseScript);window.adsbygoogle=window.adsbygoogle||[];const adBreak=adConfig=function(o){adsbygoogle.push(o);}
var rewardReadyShowAds=null;adConfig({preloadAdBreaks:'on',sound:'on',onReady:()=>{console.log("AdConfig Ready");},});function InitSDKJs(){let adConfigPromise=new Promise((resolve,reject)=>adConfig({preloadAdBreaks:'on',onReady:()=>resolve(true)}));let timeoutPromise=new Promise((resolve,reject)=>{setTimeout(()=>{console.log("Ad timeout");resolve(false);},2000);});Promise.race([adConfigPromise,timeoutPromise]).then((shouldShowPreRoll)=>{if(shouldShowPreRoll){ShowPreRollJs();}else{console.log("start game called");LoadRewardedAdsJs();myGameInstance.SendMessage('RHMAdsManager','InitSucceed','ca-pub-8349441957149316');}});}
function ShowPreRollJs(){LoadRewardedAdsJs();myGameInstance.SendMessage('RHMAdsManager','InitSucceed','ca-pub-8349441957149316');}
function CallInterstitialAdsJs(){pauseGameBeforeAds();resumeGameAfterAds();}
function LoadRewardedAdsJs(){console.log("LoadRewardedAds");RewardedAdsLoaded();}
function CallRewardedAdsJs(){RewardedAdsLoaded();}
function RewardedAdsLoaded(){console.log("Rewarded Ads Available")
myGameInstance.SendMessage('RHMAdsManager','isRewardedAdsLoaded','true');}
function RewardedAdsNotLoaded(){console.log("Rewarded Ads Not Available")
myGameInstance.SendMessage('RHMAdsManager','isRewardedAdsLoaded','true');}
function RewardedAdsDismissed(){console.log("Reward Dismissed")
myGameInstance.SendMessage('RHMAdsManager','RewardedAdsFailed');}
function RewardSuccessful(){console.log("gainReward")
myGameInstance.SendMessage('RHMAdsManager','RewardedAdsSuccessfull');}
function pauseGameBeforeAds(){myGameInstance.SendMessage('RHMAdsManager','pauseGame');}
function resumeGameAfterAds(){myGameInstance.SendMessage('RHMAdsManager','resumeGame');}