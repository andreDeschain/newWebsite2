import { useEffect } from "react";

const ContactSection = () => {
  // Input validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sanitizeInput = (input: string): string => {
    return input.trim().replace(/[<>'"&]/g, '').slice(0, 500);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
  };

  useEffect(() => {
    // Form submission handler
    const form = document.getElementById('subscribe-form');
    
    const handleSubmit = async (event: Event) => {
      event.preventDefault(); // Prevent default form submission
      
      // Collect form data
      const formData = new FormData(form as HTMLFormElement);
      const rawData = {
        fullName: formData.get('FNAME') as string || '',
        email: formData.get('EMAIL') as string || '',
        phone: formData.get('PHONE') as string || '',
        company: formData.get('COMPANY') as string || '',
        inquiry: formData.get('INQUIRY') as string || '',
        privacyConsent: formData.get('PRIVACY') === 'Yes'
      };

      // Client-side validation
      if (!rawData.email || !validateEmail(rawData.email)) {
        if ((window as any).sonnerToast) {
          (window as any).sonnerToast.error('Please enter a valid email address.');
        }
        return;
      }

      if (rawData.phone && !validatePhone(rawData.phone)) {
        if ((window as any).sonnerToast) {
          (window as any).sonnerToast.error('Please enter a valid phone number.');
        }
        return;
      }

      if (!rawData.privacyConsent) {
        if ((window as any).sonnerToast) {
          (window as any).sonnerToast.error('Please consent to being contacted.');
        }
        return;
      }

      // Sanitize inputs
      const data = {
        fullName: sanitizeInput(rawData.fullName) || null,
        email: sanitizeInput(rawData.email) || null,
        phone: sanitizeInput(rawData.phone) || null,
        company: sanitizeInput(rawData.company) || null,
        inquiry: sanitizeInput(rawData.inquiry) || null,
        privacyConsent: rawData.privacyConsent
      };
      
      const apiUrl = import.meta.env.VITE_API_URL;

      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify([data]), // Send data as array as required by API
        });

        if (response.ok) {
          // Use sonner toast for success message
          if ((window as any).sonnerToast) {
            (window as any).sonnerToast.success('Success! Your inquiry has been sent.');
          }
          (form as HTMLFormElement).reset();
        } else {
          // Use sonner toast for error message
          if ((window as any).sonnerToast) {
            (window as any).sonnerToast.error('Submission failed, please fill in the form or email andrea@lucanos.it :) .');
          }
        }
      } catch (error) {
        console.error('Error:', error);
        // Use sonner toast for network error
        if ((window as any).sonnerToast) {
          (window as any).sonnerToast.error('Network error. Our service is up only during working hours. Please email andrea@lucanos.it :) .');
        }
      }
    };

    if (form) {
      form.addEventListener('submit', handleSubmit);
    }

    return () => {
      if (form) {
        form.removeEventListener('submit', handleSubmit);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20 px-6 relative min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-light text-white mb-4">
            CONTACT<span className="text-primary ml-4">US</span>
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
                    value="Yes"
                    className="accent-primary"
                  />
                  <label htmlFor="mce-PRIVACY0">Yes</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="PRIVACY"
                    id="mce-PRIVACY1"
                    value="No"
                    className="accent-primary"
                  />
                  <label htmlFor="mce-PRIVACY1">No</label>
                </div>
              </div>

              <div className="clear foot">
                <button
                  type="submit"
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
          All rights reserved © Lucano's co - VAT IT13619460960<br />
          Via Benedetto Croce 1, 20090 Trezzano sul Naviglio (MI), Italy
        </div>
      </div>
    </section>
  );
};

export default ContactSection;