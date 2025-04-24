chrome.storage.local.get(["currentUrl", "currentRisk"], (data) => {
    const url = data.currentUrl || "URL not available";
    const risk = data.currentRisk || "Status not available";
  
    document.getElementById("url").innerText = `URL: ${url}`;
    const riskElem = document.getElementById("risk");
    riskElem.innerText = risk;
  
    if (risk.includes("Phishing")) {
      riskElem.style.color = "red";
      riskElem.style.fontWeight = "bold";
    } else if (risk.includes("Safe")) {
      riskElem.style.color = "green";
      riskElem.style.fontWeight = "normal";
    } else {
      riskElem.style.color = "gray";
      riskElem.style.fontStyle = "italic";
    }
  });
  