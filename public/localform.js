// This function will handle the form submission
const form = document.getElementById('subscribe-form');

form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Impedisce l'invio predefinito del form
    
    // Raccogli i dati del form
    const formData = new FormData(form);
    const data = {
        fullName: formData.get('FNAME') || null,
        email: formData.get('EMAIL') || null,
        phone: formData.get('PHONE') || null,
        company: formData.get('COMPANY') || null,
        inquiry: formData.get('INQUIRY') || null,
        privacyConsent: formData.get('PRIVACY') === 'Yes'
    };
    
   // Sostituisci "your-hostname.com" con l'hostname che configurerai nel tuo DNS.
   // Esempio: 'http://api.miosito.it/cust/'
   const apiUrl = 'https://api.lucanos.it:40000/cust/';

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify([data]), // Invia i dati come un array, come richiesto dalla tua API
        });

        if (response.ok) {
            // Sostituisci alert() con la chiamata a sonnerToast
            if (window.sonnerToast) {
                window.sonnerToast.success('Success! Your inquiry has been sent.');
            }
            form.reset();
        } else {
            // Sostituisci alert() con la chiamata a sonnerToast
            if (window.sonnerToast) {
                window.sonnerToast.error('Submission failed, please fill in the form or email andrea@lucanos.it :) .');
            }
        }
    } catch (error) {
        console.error('Error:', error);
        // Sostituisci alert() con la chiamata a sonnerToast
        if (window.sonnerToast) {
            window.sonnerToast.error('Network error. Our service is up only during working hours. Please email andrea@lucanos.it :) .');
        }
    }
});