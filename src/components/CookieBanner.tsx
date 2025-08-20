import React, { useState, useEffect } from 'react';

const COOKIE_ACCEPTED_KEY = 'cookies_accepted';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem(COOKIE_ACCEPTED_KEY);
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_ACCEPTED_KEY, 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm rounded-lg bg-gray-900 p-4 shadow-xl">
      <p className="text-sm leading-relaxed text-white">
        To ensure our website functions correctly, we use technical cookies. These are essential for providing you with the best possible browsing experience. For more details about the cookies we use, please refer to our{' '}
        <a
          href={`${import.meta.env.BASE_URL}privacy-policy`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-300"
        >
          Privacy Policy
        </a>{' '}
        and{' '}
        <a
          href={`${import.meta.env.BASE_URL}cookie-policy`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-300"
        >
          Cookie Policy
        </a>
        .
      </p>
      <div className="mt-4 flex justify-end">
        <button
          onClick={handleAccept}
          className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-orange-500"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;