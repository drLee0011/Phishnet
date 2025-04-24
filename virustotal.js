async function checkWithVirusTotal(url) {
  const apiKey = "b7b39c03daf5553591d926492ffbee461d3574d3294c5f246cb18a9abecf056b";

  try {
    const encodedUrl = btoa(url); // Base64 encode the full URL
    const reportUrl = `https://www.virustotal.com/api/v3/urls/${encodedUrl}`;

    // Submit the URL for scanning (if needed)
    await fetch("https://www.virustotal.com/api/v3/urls", {
      method: "POST",
      headers: {
        "x-apikey": apiKey,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `url=${encodeURIComponent(url)}`
    });

    // Wait 1 second before checking report
    await new Promise(resolve => setTimeout(resolve, 1000));

    const response = await fetch(reportUrl, {
      method: "GET",
      headers: {
        "x-apikey": apiKey
      }
    });

    const data = await response.json();

    // Check how many engines flagged it as phishing/malware
    const stats = data?.data?.attributes?.last_analysis_stats;
    const malicious = stats?.malicious || 0;
    const suspicious = stats?.suspicious || 0;

    console.log("[VirusTotal] Scan result:", stats);

    return {
      isPhish: malicious > 0 || suspicious > 0,
      sourcesFlagged: malicious + suspicious
    };

  } catch (err) {
    console.error("[PhishNet] VirusTotal API error:", err);
    return { isPhish: false, sourcesFlagged: 0 };
  }
}
