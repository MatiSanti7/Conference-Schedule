export default function MainCodeCoduct() {
  return (
    <main className="relative w-9/12 mx-auto text-xl text-white my-14">
      <p className="mb-8">
        We are committed to providing a safe, welcoming, and inclusive
        environment for all participants, regardless of gender, gender identity
        and expression, age, sexual orientation, disability, physical
        appearance, body size, race, ethnicity, religion (or lack thereof), or
        technology choices.
      </p>
      <div className="grid grid-cols-2 gap-10">
        <div className="flex flex-col gap-4">
          <strong className="text-2xl">Expected Behavior:</strong>
          <ul className="pl-5 list-disc">
            <li>Treat all participants with respect and professionalism.</li>
            <li>Be considerate of differing perspectives and experiences.</li>
            <li>Use inclusive and respectful language at all times.</li>
            <li>
              Engage in constructive dialogue and offer feedback gracefully.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <strong className="text-2xl ">Unacceptable Behavior Includes:</strong>
          <ul className="pl-5 list-disc">
            <li>Harassment, intimidation, or discrimination in any form.</li>
            <li>
              Offensive comments, jokes, or imagery related to the above
              categories.
            </li>
            <li>
              Disruptive behavior that interferes with presentations, sessions,
              or networking opportunities.
            </li>
            <li>Unwelcome sexual attention or advances.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <strong className="text-2xl ">Consequences:</strong>
          <ul className="pl-5 list-disc">
            <li>
              Violations of this Code of Conduct may result in actions
              including, but not limited to:
            </li>
            <li>Warning from event organizers</li>
            <li>Expulsion from the conference without refund</li>
            <li>Reporting to relevant authorities if necessary</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <strong className="text-2xl ">Reporting:</strong>
          <p>
            If you experience or witness any behavior that violates this Code of
            Conduct, please contact our event staff immediately at{" "}
            <a
              href="mailto:"
              className="transition-all duration-500 hover:text-red-500"
            >
              conduct@conference.org
            </a>{" "}
            or visit the help desk.
            <br />
          </p>
        </div>
      </div>
      <p className="mt-8 text-center">
        We thank all participants for helping us create a respectful and
        positive conference experience for everyone.
      </p>
    </main>
  );
}
