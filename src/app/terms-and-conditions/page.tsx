import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Medcode",
  description: `In order to receive information about your Personal Data, the purposes
          and the parties the Data is shared with, contact the Owner`,
  openGraph: {
    title: "Terms & Conditions | Medcode",
    description: `In order to receive information about your Personal Data, the purposes
          and the parties the Data is shared with, contact the Owner`,
  },
};
const page = () => {
  return (
    <div className="py-32 bg-light px-8 sm:px-5">
      <div className="mt-10 sm:mt-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 sm:text-2xl">
          Terms and Conditions
        </h1>
        <p className="text-sm text-gray-600 mb-8">
          Last updated: September 03, 2024
        </p>
        <p className="text-gray-700 mb-6">
          Please read these terms and conditions carefully before using Our
          Service.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Interpretation and Definitions
        </h2>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Interpretation
        </h3>
        <p className="text-gray-700 mb-6">
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in
          singular or in plural.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Definitions
        </h3>
        <p className="text-gray-700 mb-4">
          For the purposes of these Terms and Conditions:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li className="mb-2">
            <strong>Affiliate</strong> means an entity that controls, is
            controlled by or is under common control with a party, where control
            means ownership of 50% or more of the shares, equity interest or
            other securities entitled to vote for election of directors or other
            managing authority.
          </li>
          <li className="mb-2">
            <strong>Country</strong> refers to: Morocco
          </li>
          <li className="mb-2">
            <strong>Company</strong> (referred to as either the Company, We, Us
            or Our in this Agreement) refers to medcode.
          </li>
          <li className="mb-2">
            <strong>Device</strong> means any device that can access the Service
            such as a computer, a cellphone or a digital tablet.
          </li>
          <li className="mb-2">
            <strong>Service</strong> refers to the Website.
          </li>
          <li className="mb-2">
            <strong>Terms and Conditions</strong> (also referred as Terms) mean
            these Terms and Conditions that form the entire agreement between
            You and the Company regarding the use of the Service. This Terms and
            Conditions agreement has been created with the help of the{" "}
            <a
              href="https://www.termsfeed.com/terms-conditions-generator/"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms and Conditions Generator
            </a>
            .
          </li>
          <li className="mb-2">
            <strong>Third-party Social Media Service</strong> means any services
            or content (including data, information, products or services)
            provided by a third-party that may be displayed, included or made
            available by the Service.
          </li>
          <li className="mb-2">
            <strong>Website</strong> refers to medcode, accessible from{" "}
            <a
              href="https://www.medcode.dev"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="external nofollow noopener"
            >
              https://www.medcode.dev
            </a>
          </li>
          <li className="mb-2">
            <strong>You</strong> means the individual accessing or using the
            Service, or the company, or other legal entity on behalf of which
            such individual is accessing or using the Service, as applicable.
          </li>
        </ul>

        {/* Continue with similar styling for the rest of the sections */}

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Acknowledgment
        </h2>
        <p className="text-gray-700 mb-6">
          These are the Terms and Conditions governing the use of this Service
          and the agreement that operates between You and the Company. These
          Terms and Conditions set out the rights and obligations of all users
          regarding the use of the Service.
        </p>
        <p className="text-gray-700 mb-6">
          Your access to and use of the Service is conditioned on Your
          acceptance of and compliance with these Terms and Conditions. These
          Terms and Conditions apply to all visitors, users and others who
          access or use the Service.
        </p>
        {/* ... more content goes here, styled similarly ... */}

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-700 mb-4">
          If you have any questions about these Terms and Conditions, You can
          contact us:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li className="mb-2">
            By visiting this page on our website:{" "}
            <a
              href="https://www.medcode.dev/contact_us"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="external nofollow noopener"
            >
              https://www.medcode.dev/contact_us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
