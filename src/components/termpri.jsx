import React from "react";

const TermsAndPrivacy = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Terms and Conditions */}
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-4">
          Keyway-Dispatching LLC Terms and Conditions
        </h1>

        <h2 className="text-2xl font-semibold mt-8">1. Introduction</h2>
        <p className="mt-2">
          By accessing or using the services provided by Keyway-Dispatching LLC
          Company, we, us, our, you agree to comply with and be bound by the
          following terms and conditions. If you do not agree with these terms,
          please do not use our services.
        </p>

        <h2 className="text-2xl font-semibold mt-8">2. Services Provided</h2>
        <p className="mt-2">
          Keyway-Dispatching LLC provides dispatching services to carriers and
          owner-operators, including but not limited to route planning, load
          booking, and communication facilitation between shippers and drivers.
        </p>

        <h2 className="text-2xl font-semibold mt-8">3. Eligibility</h2>
        <p className="mt-2">
          Our services are available to businesses that have a valid operating
          authority and are in compliance with all applicable laws and
          regulations.
        </p>

        <h2 className="text-2xl font-semibold mt-8">4. Payment Terms</h2>
        <p className="mt-2">
          Payment for services must be made according to the invoicing schedule
          agreed upon at the start of the service. Late payments may incur
          additional fees. We reserve the right to suspend services for overdue
          accounts.
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          5. Cancellations and Refunds
        </h2>
        <p className="mt-2">
          Clients may cancel our services with a 1 hour notice period. Refunds
          will be issued on a case-by-case basis, depending on the nature of the
          service and the timing of the cancellation.
        </p>

        <h2 className="text-2xl font-semibold mt-8">6. Confidentiality</h2>
        <p className="mt-2">
          We are committed to maintaining the confidentiality of all client
          information. We will not disclose any client information to third
          parties without prior consent, except as required by law.
        </p>

        <h2 className="text-2xl font-semibold mt-8">7. Liability</h2>
        <p className="mt-2">
          Keyway-Dispatching LLC is not liable for any direct or indirect
          damages that may arise from the use of our services. Clients assume
          full responsibility for their operations and the results thereof.
        </p>

        <h2 className="text-2xl font-semibold mt-8">8. Amendments</h2>
        <p className="mt-2">
          We reserve the right to modify these terms at any time. Clients will
          be notified of any significant changes, and continued use of our
          services will constitute acceptance of the new terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8">9. Governing Law</h2>
        <p className="mt-2">
          These terms and conditions are governed by the laws of the state of
          california , without regard to its conflict of law provisions.
        </p>

        <h2 className="text-2xl font-semibold mt-8">10. Contact Information</h2>
        <p className="mt-2">
          If you have any questions or concerns about our privacy practices,
          please contact us at{" "}
          <a
            href="mailto:info@keyway-dispatch.com"
            className="text-blue-600 hover:underline"
          >
            info@keyway-dispatch.com
          </a>
          .
        </p>
      </section>

      {/* Privacy Policy */}
      <section>
        <h1 className="text-3xl font-bold mb-4">
          Keyway-Dispatching LLC Privacy Policy
        </h1>

        <h2 className="text-2xl font-semibold mt-8">
          1. Information We Collect
        </h2>
        <p className="mt-2">
          We collect information necessary to provide our services, including
          contact details, billing information, and operational data such as
          routes and load details.
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          2. How We Use Your Information
        </h2>
        <p className="mt-2">
          The information collected is used to facilitate our dispatching
          services, improve service delivery, and ensure compliance with legal
          and regulatory requirements.
        </p>

        <h2 className="text-2xl font-semibold mt-8">3. Data Sharing</h2>
        <p className="mt-2">
          We do not share your information with third parties except as required
          for service provision or as required by law. This includes your mobile
          information, which will not be shared for marketing/promotional
          purposes. Exception: Text messaging originator opt-in data and consent
          may be shared with third parties as required to facilitate SMS
          communication for service-related purposes. However, this data will
          not be used for marketing/promotional purposes. No mobile information
          will be shared with third parties/affiliates for marketing/promotional
          purposes. All other categories exclude text messaging originator
          opt-in data and consent; this information will not be shared with any
          third parties.
        </p>

        <p className=" mt-2">
          <span className=" font-bold">Privacy Policy Content: </span>
          Zoom recommended text: &quot;No mobile information will be shared with
          third parties/affiliates for marketing/promotional purposes. All other
          categories exclude text messaging originator opt-in data and consent;
          this information will not be shared with any third parties&quot;
        </p>

        <h2 className="text-2xl font-semibold mt-8">4. Data Security</h2>
        <p className="mt-2">
          We implement robust security measures to protect your data from
          unauthorized access, alteration, or destruction.
        </p>

        <h2 className="text-2xl font-semibold mt-8">5. Your Rights</h2>
        <p className="mt-2">
          You have the right to access, correct, or delete your personal data.
          To exercise these rights, please contact us at [Your Contact
          Information].
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          6. Changes to the Privacy Policy
        </h2>
        <p className="mt-2">
          We may update this Privacy Policy periodically. Clients will be
          notified of any changes, and continued use of our services will
          constitute acceptance of the updated policy.
        </p>
      </section>
    </div>
  );
};

export default TermsAndPrivacy;
