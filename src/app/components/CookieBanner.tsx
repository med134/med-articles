"use client";

import { useState, useEffect } from "react";

// Declare the gtag property on the window object
declare global {
  interface Window {
    gtag?: (
      command: string,
      hitType: string,
      eventParams: { [key: string]: string | number | boolean }
    ) => void;
  }
}
import { getLocalStorage, setLocalStorage } from "@/src/utils/Helper";
import { LiaCookieSolid } from "react-icons/lia";

// CookieBanner component that displays a banner for cookie consent.
export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Retrieve cookie consent status from local storage on component mount
  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", "");
    console.log("Cookie Consent retrieved from storage: ", storedCookieConsent);
    setCookieConsent(storedCookieConsent);
    setIsLoading(false);
  }, []);

  // Update local storage and Google Analytics consent status when cookieConsent changes
  useEffect(() => {
    if (cookieConsent !== null) {
      setLocalStorage("cookie_consent", cookieConsent.toString());
    }

    const newValue = cookieConsent ? "granted" : "denied";

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: newValue,
      });
    }
  }, [cookieConsent]);

  // Do not render the banner if loading or consent is already given
  if (isLoading || cookieConsent !== null) {
    return null;
  }

  return (
    <div
      className={`${
        cookieConsent == null ? "flex" : "hidden"
      } fixed bottom-0 right-0 flex items-center justify-center py-4 z-50 mx-4`}
    >
      <div className="flex md:flex-wrap items-center justify-stretch rounded-lg border bg-white dark:bg-gray-800 p-4">
        <div className="w-full flex items-center px-2">
          <span className="text-indigo-500 mr-4">
            <LiaCookieSolid className="w-8 h-8 fill-indigo-600" />
          </span>
          <div className="mb-6">
            <h3 className="text-lg font-bold text-black dark:text-white">
              We use cookies
            </h3>
            <p className="text-sm font-medium text-body-color dark:text-gray-300">
              Please accept our cookies so we can provide the best experience.
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center space-x-3 md:justify-end">
            <button
              onClick={() => setCookieConsent(false)}
              className="button bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-11 px-8 py-2"
            >
              Decline
            </button>
            <button
              onClick={() => setCookieConsent(true)}
              className="button bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white radius-round h-11 px-8 py-2"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
