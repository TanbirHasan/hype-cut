const effectiveDate = "February 15, 2026";

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-[#FAF4F8] py-14 lg:py-20">
      <div className="container-max">
        <div className="rounded-3xl bg-white p-7 md:p-10 lg:p-12 shadow-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-[#121116]">
            Terms & Conditions
          </h1>
          <p className="mt-3 text-sm text-[#6B6B6B]">
            Effective Date: {effectiveDate}
          </p>
          <p className="mt-6 text-[#121116] leading-7">
            These Terms & Conditions govern your use of Hypecut&apos;s website
            and video production services. By requesting services, paying an
            invoice, or using this website, you agree to these terms.
          </p>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-[#121116]">
              1. Services
            </h2>
            <p className="mt-2 text-[#121116] leading-7">
              Hypecut provides short-form and long-form video editing, creative
              strategy, content packaging, and related production support.
              Project scope, deliverables, and timelines are defined in your
              proposal, invoice, or statement of work.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-[#121116]">
              2. Client Responsibilities
            </h2>
            <ul className="mt-2 list-disc pl-6 text-[#121116] leading-7">
              <li>
                Provide accurate briefs, assets, brand guidelines, and feedback
                on time.
              </li>
              <li>
                Confirm you own or are licensed to use all submitted materials.
              </li>
              <li>
                Ensure content complies with platform rules and applicable law.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-[#121116]">
              3. Revisions and Delivery
            </h2>
            <p className="mt-2 text-[#121116] leading-7">
              Revision rounds are limited to what is stated in your package or
              agreement. Additional revisions, rush requests, or scope changes
              may require extra fees and updated timelines.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-[#121116]">
              4. Fees, Billing, and Refunds
            </h2>
            <p className="mt-2 text-[#121116] leading-7">
              Fees are due as described in your invoice. Late payments may pause
              production or delivery. Unless otherwise agreed in writing, paid
              work is non-refundable once production has started.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-[#121116]">
              5. Intellectual Property
            </h2>
            <p className="mt-2 text-[#121116] leading-7">
              You retain ownership of your pre-existing materials. Upon full
              payment, you receive rights to final deliverables for the intended
              business use described in your order. Hypecut retains rights to
              project files, templates, methods, and pre-existing tools unless
              otherwise agreed.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-[#121116]">
              6. Portfolio Use
            </h2>
            <p className="mt-2 text-[#121116] leading-7">
              Unless restricted in writing, Hypecut may display completed work
              for portfolio, case study, and promotional use.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-[#121116]">
              7. Limitation of Liability
            </h2>
            <p className="mt-2 text-[#121116] leading-7">
              Hypecut is not liable for indirect, incidental, or consequential
              damages, including platform-level performance outcomes (such as
              reach, engagement, or revenue). Our total liability is limited to
              the amount paid for the applicable service.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-[#121116]">
              8. Termination
            </h2>
            <p className="mt-2 text-[#121116] leading-7">
              Either party may terminate ongoing services with written notice.
              You remain responsible for payment of completed work, time spent,
              and approved expenses up to termination.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-[#121116]">
              9. Contact
            </h2>
            <p className="mt-2 text-[#121116] leading-7">
              Questions about these Terms can be sent to{" "}
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
