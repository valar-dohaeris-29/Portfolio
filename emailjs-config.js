// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

const EMAILJS_CONFIG = {
    // Your EmailJS Public Key (found in Account > General)
    PUBLIC_KEY: "Rlnnj9zdo5R3ayFct",
    
    // Your EmailJS Service ID (created in Email Services)
    SERVICE_ID: "service_873gmxf",
    
    // Your EmailJS Template ID (created in Email Templates)
    TEMPLATE_ID: "template_6llsbdu",
    
    // Your email address where messages will be sent
    TO_EMAIL: "montie2206@gmail.com"
};

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EMAILJS_CONFIG;
}