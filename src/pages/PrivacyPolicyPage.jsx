import { right } from "../assets/icons"

import FooterSection from "../components/FooterSection";
import HeaderSection from "../components/HeaderSection";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <HeaderSection />
      <section className="page-margin flex flex-col pb-96">
        <div className="h-[220px] lg:h-[300px] my-6 lg:my-16 flex items-center justify-center">
          <h1 className="main-heading">
            Privacy policy
          </h1>
        </div>
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-0 items-start my-5 lg:my-10 w-full">
          <div className="flex flex-col gap-2.5 py-5 lg:py-10 px-7 w-full rounded-xl bg-[#F5F5F5] max-w-sm mx-auto">
            <a href="#acceptance-of-terms" className="index-link">
              <p>Intro</p>
              <img src={right} alt="right-icon" />
            </a>
            <a href="#collection-of-personal-information" className="index-link">
              <p>Collection of Personal Information</p>
              <img src={right} alt="right-icon" />
            </a>
            <a href="#purpose-of-collection" className="index-link">
              <p>Purpose of Collection</p>
              <img src={right} alt="right-icon" />
            </a>
            <a href="#use-and-disclosure" className="index-link">
              <p>Use and Disclosure</p>
              <img src={right} alt="right-icon" />
            </a>
            <a href="#data-security" className="index-link">
              <p>Data Security</p>
              <img src={right} alt="right-icon" />
            </a>
            <a href="#access-and-correction" className="index-link">
              <p>Access and Correction</p>
              <img src={right} alt="right-icon" />
            </a>
            <a href="#cookies-and-analytics" className="index-link">
              <p>Cookies and Analytics</p>
              <img src={right} alt="right-icon" />
            </a>
            <a href="#third-parties" className="index-link">
              <p>Third Parties</p>
              <img src={right} alt="right-icon" />
            </a>
            <a href="#direct-marketing" className="index-link">
              <p>Direct Marketing</p>
              <img src={right} alt="right-icon" />
            </a>
            <a href="#changes-to-privacy-policy" className="index-link">
              <p>Changes to Privacy Policy</p>
              <img src={right} alt="right-icon" />
            </a>
            <a href="#contact-us" className="index-link">
              <p>Contact Us</p>
              <img src={right} alt="right-icon" />
            </a>
          </div>
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              <div className="pill purple-pill">
                23rd of August, 2023
              </div>
              <h1 className="card-heading">
                Statement
              </h1>
              <div className="flex flex-col gap-5 text-[#686868]">
                <div id="acceptance-of-terms">
                  <h3 className="text-base lg:text-xl font-roboto font-medium">Acceptance of Terms</h3>
                  <p className="text-base lg:text-xl font-roboto">
                    By accessing or using the Qwerki app ("App"), you agree to
                    abide by these Terms & Conditions. If you do not agree with
                    these terms, please refrain from using the App.
                  </p>
                </div>
                <div id="use-of-the-app">
                  <h3 className="text-base lg:text-xl font-roboto font-medium">Use of the App</h3>
                  <p className="text-base lg:text-xl font-roboto">
                    You may use the App for personal or non-commercial purposes
                    only. You must not use the App for any unlawful or prohibited
                    activities.
                  </p>
                </div>
                <div id="intellectual-property">
                  <h3 className="text-base lg:text-xl font-roboto font-medium">Intellectual Property</h3>
                  <p className="text-base lg:text-xl font-roboto">
                    All intellectual property rights related to the App, including
                    but not limited to software, design, trademarks, and content,
                    are owned by Qwerki or its licensors. You may not reproduce,
                    modify, or distribute any part of the App without explicit
                    permission.
                  </p>
                </div>
                <div id="privacy-an-data-collection">
                  <h3 className="text-base lg:text-xl font-roboto font-medium">Privacy and Data Collection</h3>
                  <p className="text-base lg:text-xl font-roboto">
                    Your use of the App is subject to our Privacy Policy, which
                    outlines how we collect, use, and protect your personal
                    information in compliance with Australian privacy laws.
                  </p>
                </div>
                <div id="disclaimer-of-liability">
                  <h3 className="text-base lg:text-xl font-roboto font-medium">Disclaimer of Liability</h3>
                  <p className="text-base lg:text-xl font-roboto">
                    The App is provided "as is" without warranties of any kind.
                    Qwerki is not responsible for any direct, indirect, or
                    consequential damages resulting from the use or inability to
                    use the App.
                  </p>
                </div>
                <div id="limitation-of-liability">
                  <h3 className="text-base lg:text-xl font-roboto font-medium">Limitation of Liability</h3>
                  <p className="text-base lg:text-xl font-roboto">
                    To the extent permitted by law, Qwerki's liability for any
                    claim arising out of your use of the App is limited to the
                    amount paid, if any, by you to access the App.
                  </p>
                </div>
                <div id="third-party-content">
                  <h3 className="text-base lg:text-xl font-roboto font-medium">Third-Party Content</h3>
                  <p className="text-base lg:text-xl font-roboto">
                    The App may contain links to third-party websites or content.
                    Qwerki is not responsible for the content or practices of
                    these third parties and does not endorse or make any
                    representations about them.
                  </p>
                </div>
                <div id="indemnification">
                  <h3 className="text-base lg:text-xl font-roboto font-medium">Indemnification</h3>
                  <p className="text-base lg:text-xl font-roboto">
                    You agree to indemnify and hold Qwerki harmless from any
                    claims, damages, liabilities, or expenses arising from your
                    use of the App or your breach of these Terms & Conditions.
                  </p>
                </div>
                <div id="modifications-and-updates">
                  <h3 className="text-base lg:text-xl font-roboto font-medium">Modifications and Updates</h3>
                  <p className="text-base lg:text-xl font-roboto">
                    Qwerki reserves the right to modify, suspend, or discontinue
                    the App, or any part thereof, at any time without notice. We
                    may also update these Terms & Conditions, and you should
                    review them periodically.
                  </p>
                </div>
                <div id="governing-law">
                  <h3 className="text-base lg:text-xl font-roboto font-medium">Governing Law</h3>
                  <p className="text-base lg:text-xl font-roboto">
                    These Terms & Conditions are governed by and construed in
                    accordance with the laws of Australia. Any disputes arising
                    from your use of the App shall be subject to the exclusive
                    jurisdiction of the courts of Australia.
                  </p>
                </div>
                <div id="contact-us">
                  <h3 className="text-base lg:text-xl font-roboto font-medium">Contact Us</h3>
                  <p className="text-base lg:text-xl font-roboto">
                    If you have any questions or concerns about these Terms &
                    Conditions, please contact us at [contact details].
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5 text-[#686868]">
              <p
                id="intro"
                className="text-base lg:text-xl font-roboto"
              >
                At Qwerki, we are committed to protecting your privacy and
                complying with the Australian Privacy Principles (APPs) outlined
                in the Privacy Act 1988 (Cth). This Privacy Policy explains how
                we collect, use, and manage your personal information.
              </p>
              <div id="collection-of-personal-information">
                <h3 className="text-base lg:text-xl font-roboto font-medium">
                  Collection of Personal Information
                </h3>
                <p className="text-base lg:text-xl font-roboto">
                  We collect personal information that is reasonably necessary
                  for our functions and activities. This may include your name,
                  email address, and other details provided through interactions
                  with our website.
                </p>
              </div>
              <div id="purpose-of-collection">
                <h3 className="text-base lg:text-xl font-roboto font-medium">Purpose of Collection</h3>
                <p className="text-base lg:text-xl font-roboto">
                  We collect personal information to provide you with
                  information, updates, and services related to Qwerki. Your
                  information may also be used for communication and marketing
                  purposes, but only with your explicit consent.
                </p>
              </div>
              <div id="use-and-disclosure">
                <h3 className="text-base lg:text-xl font-roboto font-medium">Use and Disclosure</h3>
                <p className="text-base lg:text-xl font-roboto">
                  We will only use or disclose your personal information for the
                  purposes for which it was collected, unless you give us
                  permission or the use or disclosure is required by law.
                </p>
              </div>
              <div id="data-security">
                <h3 className="text-base lg:text-xl font-roboto font-medium">Data Security</h3>
                <p className="text-base lg:text-xl font-roboto">
                  We take reasonable steps to protect your personal information
                  from unauthorized access, modification, or disclosure. Our
                  security measures include encryption, access controls, and
                  regular security reviews.
                </p>
              </div>
              <div id="access-and-correction">
                <h3 className="text-base lg:text-xl font-roboto font-medium">Access and Correction</h3>
                <p className="text-base lg:text-xl font-roboto">
                  You have the right to access and correct the personal
                  information we hold about you. If you wish to do so, please
                  contact us using the details provided below.
                </p>
              </div>
              <div id="cookies-and-analytics">
                <h3 className="text-base lg:text-xl font-roboto font-medium">Cookies and Analytics</h3>
                <p className="text-base lg:text-xl font-roboto">
                  Our website may use cookies to improve user experience and
                  gather non-identifiable information about your browsing
                  behavior. We may also use analytics tools to analyze website
                  traffic and usage patterns.
                </p>
              </div>
              <div id="third-parties">
                <h3 className="text-base lg:text-xl font-roboto font-medium">Third Parties</h3>
                <p className="text-base lg:text-xl font-roboto">
                  We may share your personal information with trusted
                  third-party service providers to assist us in delivering our
                  services. These providers are contractually bound to handle
                  your information confidentially and securely.
                </p>
              </div>
              <div id="direct-marketing">
                <h3 className="text-base lg:text-xl font-roboto font-medium">Direct Marketing</h3>
                <p className="text-base lg:text-xl font-roboto">
                  We may use your personal information for direct marketing
                  purposes, such as sending you newsletters or promotional
                  emails. You have the option to opt out of such communications
                  at any time.
                </p>
              </div>
              <div id="changes-to-privacy-policy">
                <h3 className="text-base lg:text-xl font-roboto font-medium">Changes to Privacy Policy</h3>
                <p className="text-base lg:text-xl font-roboto">
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices or legal requirements. We encourage
                  you to review this policy regularly.
                </p>
              </div>
              <div id="contact-us">
                <h3 className="text-base lg:text-xl font-roboto font-medium">Contact Us</h3>
                <p className="text-base lg:text-xl font-roboto">
                  If you have questions, concerns, or wish to access or correct
                  your personal information, please contact our Privacy Officer
                  at [contact details]. Our Privacy Officer will respond to your
                  inquiries promptly and assist you with any privacy-related
                  matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default PrivacyPolicyPage;
