/**
 * Initialize Crisp Chat Widget
 * 
 * Instructions:
 * 1. Sign up for a free account at https://crisp.chat
 * 2. Get your website ID from the Crisp dashboard
 * 3. Replace 'VOTRE_ID_CRISP_ICI' below with your actual Crisp website ID
 * 4. The chat widget will appear automatically on your site
 */

export const initCrisp = () => {
  // Check if Crisp is already initialized
  if (window.$crisp) {
    console.log('Crisp is already initialized');
    return;
  }

  // Initialize Crisp
  window.$crisp = [];
  window.CRISP_WEBSITE_ID = "VOTRE_ID_CRISP_ICI"; // TODO: Replace with your Crisp website ID
  
  // Create and inject the Crisp script
  const script = document.createElement("script");
  script.src = "https://client.crisp.chat/l.js";
  script.async = true;
  
  // Add script to page
  document.getElementsByTagName("head")[0].appendChild(script);
  
  console.log('Crisp chat widget initialized');
};

/**
 * Optional: Custom Crisp configuration functions
 * Uncomment and use these to customize Crisp behavior
 */

// Set user information
export const setCrispUser = (email, name) => {
  if (window.$crisp) {
    window.$crisp.push(["set", "user:email", [email]]);
    window.$crisp.push(["set", "user:nickname", [name]]);
  }
};

// Open the chat box programmatically
export const openCrispChat = () => {
  if (window.$crisp) {
    window.$crisp.push(["do", "chat:open"]);
  }
};

// Close the chat box programmatically
export const closeCrispChat = () => {
  if (window.$crisp) {
    window.$crisp.push(["do", "chat:close"]);
  }
};

// Send a message automatically
export const sendCrispMessage = (message) => {
  if (window.$crisp) {
    window.$crisp.push(["do", "message:send", ["text", message]]);
  }
};
