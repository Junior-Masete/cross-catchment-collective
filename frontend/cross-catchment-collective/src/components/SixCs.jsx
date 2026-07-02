import {
  Lightbulb,
  Users,
  GraduationCap,
  Megaphone,
  Database,
  HandCoins,
} from "lucide-react";

const collaborationItems = [
  {
    title: "CONCEPTUALISE",
    subtitle: "Shared understanding",
    icon: Lightbulb,
  },
  {
    title: "CONVENE",
    subtitle: "Collaboration and governance",
    icon: Users,
  },
  {
    title: "CAPACITATE",
    subtitle: "Skills and institutions",
    icon: GraduationCap,
  },
  {
    title: "COMMUNICATE",
    subtitle: "Accessible knowledge",
    icon: Megaphone,
  },
  {
    title: "COLLATE",
    subtitle: "Data and lessons",
    icon: Database,
  },
  {
    title: "CAPITALISE",
    subtitle: "Aligned resources",
    icon: HandCoins,
  },
];

function SixCSection() {
  return (
    <section className="bg-white py-20 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#2E613F]">
            The <span className="">‘Six C’s’</span> of Collaboration
          </p>
          <p className="mt-3 text-lg md:text-xl text-gray-600">
            that frame what we do
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {collaborationItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group flex items-start gap-5 rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2E613F] hover:shadow-xl"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#2E613F] text-white transition-colors group-hover:bg-[#2E613F]">
                  <Icon size={28} strokeWidth={2} />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl text-left font-bold uppercase tracking-wide text-[#2E613F]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-left text-gray-600 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SixCSection;