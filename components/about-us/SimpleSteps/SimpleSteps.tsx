"use client";

const SimpleSteps = () => {
  const steps = [
    {
      stepNumber: "Step 1.",
      title: "Record Your Footage",
      description:
        "Spend just a few hours capturing your raw videos with ease.",
    },
    {
      stepNumber: "Step 2.",
      title: "Send It to Us",
      description:
        "Upload or share your clips, and our team takes it from there.",
    },
    {
      stepNumber: "Step 3.",
      title: "We Edit & Optimize",
      description:
        "We edit, caption, and refine your content to make it platform-ready.",
    },
    {
      stepNumber: "Step 4.",
      title: "Get Ready-to-Post Clips",
      description:
        "Receive polished, engaging videos ready to publish and grow your reach.",
    },
  ];

  return (
    <section className="w-full bg-[#F5F0F7] py-16 lg:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-[#1A1A1A] leading-tight">
              Simple Steps to
              <br />
              Stunning Results
            </h2>
          </div>
          <div className="lg:max-w-md lg:pt-4">
            <p className="text-base lg:text-2xl text-[#404040] leading-relaxed">
              A clear and proven process that makes video creation effortless.
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Step Number */}
              <div className="text-[28px] font-medium text-pink-800 mb-4">
                {step.stepNumber}
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-4xl font-semibold text-[#1A1A1A] leading-tight mb-4">
                {step.title}
              </h3>

              {/* Spacer to push description to bottom */}
              <div className="flex-1 min-h-20"></div>

              {/* Description */}
              <p className="text-lg text-[#404040] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleSteps;

