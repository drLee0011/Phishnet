if (typeof phishingKeywords === "undefined") {
  var phishingKeywords = [
    // Phishing-specific triggers
    "verify-identity", "account-alert", "account-suspend", "account-locked", "unusual-activity",
    "reset-password", "account-recovery", "update-info", "confirm-details", "urgent-action",
    "security-checkpoint", "unauthorized-access", "validate-account", "authentication-required",
  
    // Financial urgency or fraud indicators
    "payment-declined", "payment-failure", "transaction-error", "invoice-alert", "billing-dispute",
    "credit-card-update", "bank-login", "wallet-update", "payout-issue", "refund-request",
    "chargeback-alert", "debit-hold", "bank-verification", "financial-verification",
  
    // Brand-specific targeted terms (less generic)
    "paypal-alert", "google-warning", "microsoft-verification", "amazon-billing", "apple-security",
    "facebook-notice", "outlook-recovery", "office365-verify", "icloud-reset", "dropbox-login",
    "linkedin-warning", "snapchat-login",
  
    // Social engineering & login deception
    "security-warning", "locked-out", "email-suspicious", "webmail-access", "login-error",
    "validate-now", "click-confirm", "verify-now", "secure-login", "update-immediately",
    "login-request", "confirm-activity", "suspicious-behavior", "identity-check",
  
    // Phishing bait techniques
    "free-gift-card", "claim-now", "bonus-unlock", "prize-alert", "account-breach", "verify-session",
    "authentication-failure", "unusual-login", "secure-auth", "auth-warning", "sign-in-attempt"
  ];
}