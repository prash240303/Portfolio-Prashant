import Link from "next/link";
import React from "react";

const componentList = [
  {
    title: "Animated Button component",
    description: "CTA button with animation using pure js.",
    slug: "button",
  },
];

const Crafts = () => {
  return (
    <div className="view-container mt-12 md:mt-24 mb-12 md:mb-[100px] overflow-hidden">
      <section className="py-4 md:py-8 px-4 md:px-6 max-w-3xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">
          Components
        </h2>
        <div className="space-y-4">
          {componentList.map((component, index) => (
            <Link
              href={`/crafts/${component.slug}`}
              key={index}
              className="block hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 rounded-xl p-4 md:p-6 text-left transition-colors duration-200"
            >
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  {component.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                  {component.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Crafts;
