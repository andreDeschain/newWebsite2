import { useEffect } from "react";


const ContactSection = () => {

// This hook runs AFTER the component and its children (the form) are in the DOM.
  useEffect(() => {
    // It creates a new script element and loads your localform.js file.
    const script = document.createElement("script");
    script.src = "/src/localform.js";
    script.async = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []); // The empty array [] means this effect runs only once, after initial render


  return (
    <section id="contact" className="py-20 px-6 relative min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-light text-white mb-4">
            CONTACT
            <span className="text-primary ml-4">US</span>
          </h2>
          <p className="text-gray-400">
            Let's get to know each other!
          </p>
        </div>
        
      <div className="max-w-md mx-auto">
  <form id="subscribe-form" name="subscribe-form" className="validate" method="POST">
    <div id="mc_embed_signup_scroll" className="space-y-4">
      <div className="mc-field-group">
        <label htmlFor="mce-FNAME" className="sr-only">Name and Surname</label>
        <input
          type="text"
          name="FNAME"
          id="mce-FNAME"
          placeholder="NAME AND SURNAME"
          className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:border-primary focus:outline-none transition-colors"
        />
      </div>

      <div className="mc-field-group">
        <label htmlFor="mce-EMAIL" className="sr-only">Email</label>
        <input
          type="email"
          name="EMAIL"
          id="mce-EMAIL"
          placeholder="EMAIL"
          className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:border-primary focus:outline-none transition-colors"
          required
        />
      </div>

      <div className="mc-field-group">
        <label htmlFor="mce-PHONE" className="sr-only">Phone</label>
        <input
          type="tel"
          name="PHONE"
          id="mce-PHONE"
          placeholder="PHONE"
          className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:border-primary focus:outline-none transition-colors"
        />
      </div>

      <div className="mc-field-group">
        <label htmlFor="mce-COMPANY" className="sr-only">Company</label>
        <input
          type="text"
          name="COMPANY"
          id="mce-COMPANY"
          placeholder="COMPANY"
          className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:border-primary focus:outline-none transition-colors"
        />
      </div>

      <div className="mc-field-group">
        <label htmlFor="mce-INQUIRY" className="sr-only">Inquiry</label>
        <textarea
          name="INQUIRY"
          id="mce-INQUIRY"
          placeholder="INQUIRY"
          rows={4}
          className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:border-primary focus:outline-none transition-colors resize-none"
        />
      </div>

      <div className="mc-field-group input-group flex items-center space-x-6 text-white text-sm py-2">
        <strong>Can we contact you?</strong>
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            name="PRIVACY"
            id="mce-PRIVACY0"
            value="Yes" // Changed value to 'Yes' to match JS logic
            className="accent-primary"
          />
          <label htmlFor="mce-PRIVACY0">Yes</label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            name="PRIVACY"
            id="mce-PRIVACY1"
            value="No" // Changed value to 'No'
            className="accent-primary"
          />
          <label htmlFor="mce-PRIVACY1">No</label>
        </div>
      </div>

      <div className="clear foot">
        <button
          type="submit" // Reverted to type="submit" to trigger the JS listener
          name="subscribe"
          id="mc-embedded-subscribe"
          className="w-full bg-primary text-black py-3 rounded-lg font-medium hover:bg-orange-500 transition-transform transform hover:scale-105"
        >
          Send inquiry
        </button>
      </div>
    </div>
  </form>
</div>
        
        <div className="text-center mt-16 text-xs text-gray-500">
          All rights reserved © Lucano's co - VAT IT13619460960<br></br>
          Via Benedetto Croce 1, 20090 Trezzano sul Naviglio (MI), Italy
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
