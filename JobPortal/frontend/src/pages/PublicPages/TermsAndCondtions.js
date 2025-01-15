import { useLocation } from "react-router-dom";

const TermsAndConditions = () => {
  const { pathname } = useLocation();
  const url = "/client/terms-conditions";
  const url2 = "/freelancer/terms-conditions";

  return (
    <div>
      <div
        className={
          pathname.includes(url) || pathname.includes(url2)
            ? "bg-lightblue py-9 px-4"
            : "bg-lightblue py-40 lg:py-24 px-4"
        }
      >
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row ">
          <h2 className="mr-8 w-full md:w-1/3 text-3xl font-extrabold leading-9 mb-8">
            Terms And Conditions
          </h2>

          <dl className="w-full md:w-2/3">
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">1. Legal Notices</h3>
            </dt>
            <dd className="mb-16">
              <p>
                Running existing machine learning projects in Valohai is very
                simple! Integration only requires adding a valohai.yaml
                configuration file. Moving projects in and out of Valohai is
                easy – the integration is only the configuration file.
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                2. Permitted and Prohibited Uses
              </h3>
            </dt>
            <dd className="mb-16">
              <p>
                We don’t. Valohai isn’t a data science platform; it&#x27;s a
                Machine Learning Management Platform that handles the whole ML
                pipeline from feature extraction, to training of your model and
                to deploying it into production in a reproducible manner. Data
                science platforms offer hosted notebooks and AutoML solutions.
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">3. User Submissions</h3>
            </dt>
            <dd className="mb-16">
              <p>
                Depends. Most of our customers use their own cloud and thus pay
                for usage according to their own agreements. Valohai
                doesn&#x27;t charge anything on top of the per-user license fee.
                If you don&#x27;t have a cloud provider, you can use our AWS,
                GCP and Azure accounts, and we&#x27;ll only charge you for what
                you use.
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                4. User Discussion Lists and Forums
              </h3>
            </dt>
            <dd className="mb-16">
              <p>
                Depends. Most of our customers use their own cloud and thus pay
                for usage according to their own agreements. Valohai
                doesn&#x27;t charge anything on top of the per-user license fee.
                If you don&#x27;t have a cloud provider, you can use our AWS,
                GCP and Azure accounts, and we&#x27;ll only charge you for what
                you use.
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                5. Use of Personally Identifiable Information
              </h3>
            </dt>
            <dd className="mb-16">
              <p>
                Depends. Most of our customers use their own cloud and thus pay
                for usage according to their own agreements. Valohai
                doesn&#x27;t charge anything on top of the per-user license fee.
                If you don&#x27;t have a cloud provider, you can use our AWS,
                GCP and Azure accounts, and we&#x27;ll only charge you for what
                you use.
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">6. Indemnification</h3>
            </dt>
            <dd className="mb-16">
              <p>
                Depends. Most of our customers use their own cloud and thus pay
                for usage according to their own agreements. Valohai
                doesn&#x27;t charge anything on top of the per-user license fee.
                If you don&#x27;t have a cloud provider, you can use our AWS,
                GCP and Azure accounts, and we&#x27;ll only charge you for what
                you use.
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                10. Links to Other Materials
              </h3>
            </dt>
            <dd className="mb-16">
              <p>
                Depends. Most of our customers use their own cloud and thus pay
                for usage according to their own agreements. Valohai
                doesn&#x27;t charge anything on top of the per-user license fee.
                If you don&#x27;t have a cloud provider, you can use our AWS,
                GCP and Azure accounts, and we&#x27;ll only charge you for what
                you use.
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                11. Notification Of Possible Copyright Infringement
              </h3>
            </dt>
            <dd className="mb-16">
              <p>
                Depends. Most of our customers use their own cloud and thus pay
                for usage according to their own agreements. Valohai
                doesn&#x27;t charge anything on top of the per-user license fee.
                If you don&#x27;t have a cloud provider, you can use our AWS,
                GCP and Azure accounts, and we&#x27;ll only charge you for what
                you use.
              </p>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
