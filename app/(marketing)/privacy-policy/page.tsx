const effectiveDate = "February 15, 2026";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#FAF4F8] py-14 lg:py-20">
      <div className="container-max">
        <div className="rounded-3xl bg-white p-7 md:p-10 lg:p-12 shadow-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-[#121116]">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-[#6B6B6B]">
            Effective Date: {effectiveDate}
          </p>
          <p className="mt-6 text-[#121116] leading-7">
            This Privacy Policy explains how Hypecut collects, uses, and
            protects personal data when you visit our website, contact us, or
            use our video agency services.
          </p>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-[#121116]">
              1. Information We Collect
            </h2>
            <ul className="mt-2 list-disc pl-6 text-[#121116] leading-7">
              <li>
                Contact details (such as name, email, company, and phone).
              </li>
              <li>
                Project details, creative briefs, and files you share with us.
              </li>
              <li>
                Website usage data, device/browser information, and analytics
                events.
              </li>
              <li>Billing and transaction records from payment providers.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-[#121116]">
              2. How We Use Information
            </h2>
            <ul className="mt-2 list-disc pl-6 text-[#121116] leading-7">
              <li>Deliver and improve our editing and production services.</li>
              <li>Respond to inquiries, quotes, support, and account needs.</li>
              <li>Process payments, contracts, and internal operations.</li>
              <li>
                Send service updates and marketing communications (where
                permitted).
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-[#121116]">
              3. Legal Bases and Consent
            </h2>
            <p className="mt-2 text-[#121116] leading-7">
              We process information based on contract performance, legitimate
              business interests, legal obligations, and consent where required.
              You may withdraw consent for optional communications at any time.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-[#121116]">
              4. Sharing of Information
            </h2>
            <p className="mt-2 text-[#121116] leading-7">
              We may share data with trusted service providers (such as hosting,
              analytics, communication, and payment platforms) only as needed to
              operate our services and subject to confidentiality obligations. We
              do not sell personal information.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-[#121116]">
              5. Cookies and Tracking
            </h2>
            <p className="mt-2 text-[#121116] leading-7">
              We use cookies and similar technologies for site functionality,
              performance analytics, and user experience improvements. You can
              manage cookie preferences in your browser settings.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-[#121116]">
              6. Data Retention and Security
            </h2>
            <p className="mt-2 text-[#121116] leading-7">
              We retain personal data only as long as needed for business or
              legal purposes. We use reasonable technical and organizational
              safeguards, but no method of storage or transmission is fully
              guaranteed.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-[#121116]">
              7. Your Rights
            </h2>
            <p className="mt-2 text-[#121116] leading-7">
              Depending on your location, you may have rights to access, correct,
              delete, or restrict certain uses of your personal data. You may
              request assistance by contacting us at the email below.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-[#121116]">
              8. Contact
            </h2>
            <p className="mt-2 text-[#121116] leading-7">
              For privacy questions or requests, contact{" "}
              <a
                href="mailto:info@hypecut.com"
                className="text-[#750037] hover:underline"
              >
                info@hypecut.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
