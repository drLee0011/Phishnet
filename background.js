importScripts("keywords.js", "virustotal.js");

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    const url = changeInfo.url.toLowerCase();
    console.log("[PhishNet] Checking URL:", url);

    const badTLDs = [".tk", ".ml", ".gq", ".cf", ".ga", ".xyz"];
    const spoofedBrands = ["paypal", "google", "facebook", "att", "microsoft"];

    const isKeywordHit = phishingKeywords.some(keyword => url.includes(keyword));
    const isBadTLD = badTLDs.some(tld => url.endsWith(tld));
    const isBrandSpoof = spoofedBrands.some(brand => url.includes(brand) && !url.includes(`${brand}.com`));

    let isPhishy = isKeywordHit || isBadTLD || isBrandSpoof;

    // 🔍 Check VirusTotal
    const vt = await checkWithVirusTotal(url);
    if (vt.isPhish) {
      isPhishy = true;
      console.log(`[VirusTotal] Phishing detected by ${vt.sourcesFlagged} engines.`);
    }

    chrome.storage.local.set({
      currentUrl: url,
      currentRisk: isPhishy ? "⚠️ Phishing Risk Detected!" : "✅ Looks Safe"
    });

    chrome.action.setBadgeText({ tabId, text: isPhishy ? "⚠️" : "" });
    chrome.action.setBadgeBackgroundColor({
      tabId,
      color: isPhishy ? "#FF0000" : "#00C853"
    });
  }
});
