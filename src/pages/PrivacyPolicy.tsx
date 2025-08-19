import React from 'react';
import Navigation from '../components/Navigation'; // Adjust the path as needed

const PrivacyPolicy: React.FC = () => {
    return (
        <>
            <Navigation />
            {/* This div acts as a container for your text, similar to your other pages. */}
            <div className="container mx-auto max-w-4xl px-6 py-20 text-white">
                <h1 className="mb-8 text-4xl font-light md:text-5xl">Privacy Notice for Website Visitors</h1>
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Introduction</h2>
                    <p>
                        This privacy notice – provided in accordance with applicable personal data protection legislation, specifically Article 13 of Regulation (EU) 2016/679 (hereinafter also referred to as the “Regulation”) – is intended to inform users of the website{' '}
                        <strong>www.lucanos.it</strong> (hereinafter, the “Site”) about the processing of personal data arising from browsing the Site or from filling out specific contact forms.
                    </p>

                    <h2 className="text-2xl font-semibold">Data Controller</h2>
                    <p>
                        <strong>Lucano's Co</strong>, with registered office at <strong>Via Benedetto Croce 1, 20090 Trezzano sul Naviglio (MI)</strong>, VAT number <strong>13619460960</strong>, acts as the Data Controller.
                    </p>
                    <p>
                        Contact methods:
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>By registered mail to the company's registered office</li>
                            <li>Data Protection Officer: <strong>Andrea Lucano</strong> - Email: <a href="mailto:andrea@lucanos.it" className="text-primary underline hover:text-orange-500">andrea@lucanos.it</a></li>
                        </ul>
                    </p>
                    {/* ... (Rest of your policy text content) ... */}
                    <h2 className="text-2xl font-semibold">Source and Nature of Processed Personal Data</h2>
                    <h3 className="text-xl font-medium">Browsing Data</h3>
                    <p>
                        Includes IP addresses, browser types, referring domain names, URI addresses of requested resources, server interaction methods, response file details, operating system and device environment details, access time, and time spent per page. This data is used only for anonymous statistical purposes. See our cookie policy for more information.
                    </p>

                    <h3 className="text-xl font-medium">Additional Data</h3>
                    <p>
                        If the user fills out the contact form, we collect voluntarily provided data (e.g., name, surname, email) and message content, used exclusively to process the request.
                    </p>

                    <h2 className="text-2xl font-semibold">Purpose and Legal Basis for Processing</h2>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li><strong>To provide and operate the Site</strong> – Legal basis: legitimate interest of the Controller.</li>
                        <li><strong>To respond to user inquiries</strong> – Legal basis: user’s consent provided through the contact form.</li>
                        <li><strong>To comply with legal obligations</strong> or respond to cybercrime-related authority requests.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold">Processing Methods</h2>
                    <p>
                        Data is processed using automated tools and authorized personnel. Measures are taken to prevent unauthorized access, misuse, or data loss.
                    </p>

                    <h2 className="text-2xl font-semibold">Data Disclosure</h2>
                    <p>
                        Data may be accessed by:
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>Authorized internal staff</li>
                            <li>External technical consultants</li>
                            <li>Service providers for technical maintenance or support</li>
                        </ul>
                        These parties may be appointed as Data Processors or act as independent Controllers.
                    </p>
                    <p>
                        To request a list of appointed Data Processors, contact:{' '}
                        <a href="mailto:andrea@lucanos.it" className="text-primary underline hover:text-orange-500">
                            andrea@lucanos.it
                        </a>
                        .<br />
                        <strong>No data is transferred outside the EU.</strong>
                    </p>

                    <h2 className="text-2xl font-semibold">Data Retention</h2>
                    <p>
                        Browsing data is stored only as long as needed and in accordance with our cookie policy.<br />
                        Voluntarily provided data is retained only as long as necessary to respond to the user's request or fulfill legal requirements.
                    </p>

                    <h2 className="text-2xl font-semibold">Data Subject Rights</h2>
                    <p>
                        Users may contact Lucano's Co at <strong>Via Benedetto Croce 1, 20090 Trezzano sul Naviglio (MI)</strong> or email{' '}
                        <a href="mailto:andrea@lucanos.it" className="text-primary underline hover:text-orange-500">
                            andrea@lucanos.it
                        </a>{' '}
                        to exercise the following rights under Articles 15–22 of the Regulation:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li>Access their personal data</li>
                        <li>Request origin, purpose, and methods of processing</li>
                        <li>Request rectification, integration, or deletion of data</li>
                        <li>Request restriction of processing</li>
                        <li>Request data portability</li>
                        <li>Object to data processing</li>
                        <li>Withdraw consent at any time</li>
                        <li>Lodge a complaint with the Italian Data Protection Authority (Garante)</li>
                    </ul>
                    <p>
                        The Controller will inform third parties (where applicable) of any corrections or deletions requested, in compliance with Article 19 of the Regulation.
                    </p>
                </section>
            </div>
        </>
    );
};

export default PrivacyPolicy;