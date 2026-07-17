import ValueCard from "./ValueCard";

import stewardship from "../assets/values/stewardship.jpg";
import resilience from "../assets/values/resilience.jpeg";
import collaboration from "../assets/values/collaboration.jpg";
import learning from "../assets/values/learning.jpg";
import equity from "../assets/values/equity.png";
import advocacy from "../assets/values/advocacy.png";

const values = [
  {
    title: "Stewardship of Water & Biodiversity",
    icon: stewardship,
    description:
      "We recognise catchments as life-support systems and act to restore rivers, wetlands and landscapes for the benefit of people and nature.",
  },
  {
    title: "Resilience & Sustainability",
    icon: resilience,
    description:
      "We aim for long-term ecological and social resilience by mobilising resources and sustainable financial models that secure lasting change.",
  },
  {
    title: "Collaboration & Radical Partnership",
    icon: collaboration,
    description:
      "We work across boundaries, nurturing trust and embracing radical collaboration to overcome fragmentation and competition.",
  },
  {
    title: "Learning & Innovation",
    icon: learning,
    description:
      "We openly share knowledge, co-learn from experience and embrace new ideas that help scale impact from local projects to landscape transformation.",
  },
  {
    title: "Equity & Inclusion",
    icon: equity,
    description:
      "We value diversity, fairness and inclusion, ensuring all voices—especially local communities and youth—are heard and respected.",
  },
  {
    title: "Advocacy & Influence",
    icon: advocacy,
    description:
      "We use our collective voice to influence policy, mobilise resources and champion systemic change.",
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-white py-20 lg:py-28">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-4xl md:text-5xl font-bold text-[#074C82]">
            Our Values
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10">

          {values.map((value) => (
            <ValueCard
              key={value.title}
              {...value}
            />
          ))}

        </div>

      </div>
    </section>
  );
}