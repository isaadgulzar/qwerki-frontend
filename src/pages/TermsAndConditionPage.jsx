import { right } from "../assets/icons"

import FooterSection from "../components/FooterSection";
import HeaderSection from "../components/HeaderSection";


const TermsAndConditionPage = () => {
  return (
    <div>
      <HeaderSection />
      <section className="page-margin flex flex-col pb-96">
        <div className="h-[220px] lg:h-[300px] my-6 lg:my-16 flex items-center justify-center">
          <h1 className="main-heading">
            Terms and conditions
          </h1>
        </div>
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-0 items-start my-5 lg:my-10 w-full">
          <div className="flex flex-col gap-2.5 py-5 lg:py-10 px-7 w-full rounded-xl bg-[#F5F5F5] max-w-sm mx-auto">
            <a href="#acceptance-of-terms" className="index-link">
              <p>Acceptance of Terms</p>
              <img src={right} alt="right-icon" />
            </a>
            <a href="#use-of-the-app" className="index-link">
              <p>Use of the App</p>
              <img src={right} alt="right-icon" />
            </a>
            <a href="#intellectual-property" className="index-link">
              <p>Intellectual Property</p>
              <img src={right} alt="right-icon" />
            </a>
            <a href="#privacy-an-data-collection" className="index-link">
              <p>Privacy and Data Collection</p>
              <img src={right} alt="right-icon" />
            </a>
            <a href="#disclaimer-of-liability" className="index-link">
              <p>Disclaimer of Liability</p>
              <img src={right} alt="right-icon" />
            </a>
            <a href="#limitation-of-liability" className="index-link">
              <p>Limitation of Liability</p>
              <img src={right} alt="right-icon" />
            </a>
            <a href="#third-party-content" className="index-link">
              <p>Third-Party Content</p>
              <img src={right} alt="right-icon" />
            </a>
            <a href="#indemnification" className="index-link">
              <p>Indemnification</p>
              <img src={right} alt="right-icon" />
            </a>
            <a href="#modifications-and-updates" className="index-link">
              <p>Modifications and Updates</p>
              <img src={right} alt="right-icon" />
            </a>
            <a href="#governing-law" className="index-link">
              <p>Governing Law</p>
              <img src={right} alt="right-icon" />
            </a>
            <a href="#contact-us" className="index-link">
              <p>Contact Us</p>
              <img src={right} alt="right-icon" />
            </a>
          </div>
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              <div className="pill blue-pill">
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
          </div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default TermsAndConditionPage;
