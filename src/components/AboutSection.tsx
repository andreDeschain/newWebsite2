
const AboutSection = () => {
  return (
<section className="py-20 px-6 relative min-h-screen flex items-center">
  <div className="max-w-6xl mx-auto w-full">
    {/* Wider inner container */}
    <div className="w-full max-w-4xl">
      <h2 className="text-5xl md:text-6xl font-light text-white mb-12">
        about us
      </h2>

      <p className="text-gray-300 text-lg leading-relaxed mb-8">
        The tech world is moving fast, and not always in the right direction.
        With the AI wave, too many companies have chosen hype over substance.<br />
        At Lucano’s Co. we take a different path. We’re here to help you make sense of the technology market, cutting through complexity with lean processes and strategies that actually work.<br />
        Our approach is straightforward: focus on what drives value, strip away what doesn’t, and deliver results you can measure.<br />
        Whether you’re adopting new technologies, optimizing operations, or exploring the potential of AI, we bring clarity, efficiency, and a results-driven mindset to every step.<br />
        At Lucano’s Co. we don’t sell promises - we build outcomes.
      </p>

      {/*<button className="text-primary hover:text-accent transition-colors text-sm font-medium underline">
        more
      </button>*/}
    </div>
  </div>
</section>

  );
};

export default AboutSection;
