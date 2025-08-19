import React from 'react';
import Navigation from '@/components/Navigation';

const CookiePolicy: React.FC = () => {
  return (
    <>
      <Navigation />
      <div className="container mx-auto max-w-4xl px-6 py-20 text-white">
        <h1 className="mb-8 text-4xl font-light md:text-5xl">Cookie Policy</h1>

        <section className="space-y-6">
          <p>
            This document is drafted by Lucano's Co. (hereinafter "the Controller"), as the Data Controller for personal data derived from browsing this Website (hereinafter "the Site").
          </p>
          <p>
            The Controller intends to inform the user that the Site uses technical cookies to ensure an optimal browsing experience. This cookie policy ("Cookie Policy"), as a supplement to the information provided in the Privacy Policy ("Privacy Notice for Website Visitors"), describes the types of cookies in use on the Site, as well as the reasons and conditions for their use.
          </p>
          <p>
            These cookies are necessary to enable correct browsing of the Site.
          </p>
          <p>
            The User can, however, prevent the installation of cookies by configuring their browser settings or by disabling their use through the browser itself, as specified below.
          </p>

          <h2 className="text-2xl font-semibold">Use of Cookies</h2>
          <p>
            The "Site" uses cookies to make the display of pages on{' '}
            <a href="https://www.lucanos.it" className="underline hover:text-gray-300">
              www.lucanos.it
            </a>{' '}
            simpler and more effective. When the User browses the Site, the Site sends minimal amounts of information to the User's terminal—whether a computer or a mobile device—inserted into small text files called "cookies," which are stored in the directories used by the User's web browser.
          </p>
          <p>
            There are different types of cookies, some used to allow for a more effective use of the site, while others are used to enable specific functionalities.
          </p>
          <p>
            The cookies used here fall into the category of so-called technical cookies and so-called third-party analytics cookies. A general description is provided below.
          </p>

          <h2 className="text-2xl font-semibold">Types of Cookies Used</h2>
          <h3 className="text-xl font-medium">Technical Cookies</h3>
          <p>
            This type of cookie allows certain sections of the Site to function correctly.
            They come in two categories (persistent and session):
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>Persistent</strong>: These are cookies that, once the browser is closed, are not destroyed but remain until a preset expiration date.
            </li>
            <li>
              <strong>Session</strong>: These are destroyed every time the browser is closed.
            </li>
          </ul>
          <p>
            These cookies, always sent from our domain, are necessary to correctly display the pages of the Site. They are sent by default, unless the User modifies the cookie settings within their browser (thereby, however, compromising the browsing of the Site itself).
            It is specified that for the installation of technical cookies, user consent is not required.
          </p>

          <h3 className="text-xl font-medium">Third-party Analytics Cookies</h3>
          <p>
            These cookies are used to collect anonymous information about the use of the Site by Users: visited pages, time spent, origin of traffic, geographical location. These cookies are sent from third-party domains external to the Site, and for this type, user consent is not required.
          </p>

          <h3 className="text-xl font-medium">Cookies for Integrating Third-Party Software Products and Functions</h3>
          <p>
            This type of cookie integrates functionalities developed by third parties within the Site's pages, such as icons and preferences expressed in social networks for the purpose of sharing Site content or for the use of third-party software services (such as those for generating maps, and other software that offers additional services). These cookies are sent from third-party domains and from partner sites that offer their functionalities among the Site's pages (regarding the management of information collected by "third parties," it is governed by their respective privacy policies, which you should refer to).
          </p>

          <h2 className="text-2xl font-semibold">How to Disable Cookies by Configuring Your Browser</h2>
          <p>
            To learn more about how your browser stores cookies during your browsing, please refer to the specific links to the Provider's websites:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">
                Google Chrome
              </a>
            </li>
            <li>
              <a href="https://windows.microsoft.com/it-it/windows-vista/block-or-allow-cookies" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">
                Internet Explorer
              </a>
            </li>
            <li>
              <a href="https://support.apple.com/kb/PH17191" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">
                Safari 6/7 Mavericks
              </a>
            </li>
            <li>
              <a href="https://support.apple.com/kb/PH19214" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">
                Safari 8 Yosemite
              </a>
            </li>
            <li>
              <a href="https://support.apple.com/it-it/HT201265" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">
                Safari on iPhone, iPad, or iPod touch
              </a>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default CookiePolicy;