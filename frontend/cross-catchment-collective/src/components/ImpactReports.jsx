import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import rolReportV10 from "../assets/resources/AWARD_RoL_CCC_BHNR_Case_study_REPORT_v10.pdf"
import rolReportV2 from "../assets/resources/AWARD_CCC_RoL_Wisdoms_Case_Study_V2.pdf"
import report2025 from "../assets/impact_banner.png";


const reports = [
  {
    year: "Impact Report",
    title: "Annual Report 2025 - 2026",
    image: report2025,
    link: "https://drive.google.com/file/d/1SLZScDLKSfcsAORg-D8xHhUZPPogUOZd/view?usp=drive_link",
  },
  {
    year: "Impact Report",
    title: "Rol Report",
    image: report2025,
    link: rolReportV10,
  },
  {
    year: "Impact Report",
    title: "Rol",
    image: report2025,
    link: "/",
  },
];

export default function ImpactReports() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-[#22613C]">
            Impact Reports
          </h2>

          <p className="mt-3 mx-auto max-w-2xl text-gray-400">
            Explore our annual impact reports and discover the
            milestones, progress, and stories that showcase the
            difference we are making together.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {reports.map((report) => (
            <a
              key={report.title}
              href={report.link}
              target="_blank"
              className="group relative overflow-hidden rounded-3xl"
            >
              {/* Background Image */}
              <img
                src={report.image}
                alt={report.title}
                className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#22613C]/90 via-[#22613C]/35 to-[#22613C]/10" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-8">

                <span className="text-lg text-white">
                  {report.year}
                </span>

                <div className="">

                  <div>
                    <h3 className="text-4xl font-bold leading-tight text-white">
                      {report.title}
                    </h3>
                  </div>
                    
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white transition group-hover:bg-[#22613C] group-hover:text-white">
                    <ArrowUpRight size={26} />
                  </div>

                </div>
              </div>

            </a>
          ))}

        </div>

      </div>
    </section>
  );
}