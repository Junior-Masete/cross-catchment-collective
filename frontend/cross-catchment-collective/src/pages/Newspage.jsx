import { Link } from "react-router-dom";

import drakensbergImg from "../assets/news/drakensberg.jpg";
import umzimNews from "../assets/news/umzimvubunews.PNG";
import umzimNews2 from "../assets/news/umzimvuNews.PNG";

const cards = [
  {
    title: "The news",
    description:
      "dlsdgvjkl kjdfgklhjkj klhjdfjkhjjkl hjjdfh jhujeffhdkglbhjkh jkhdb",
    image: drakensbergImg,
    link: "https://www.ndrakcollab.org/post/farmer-exchange-cross-visit",
  },
  {
    title: "Farmer Exchange Cross Visits",
    description:
      "A cross visit took place to Emmaus on 8 August 2024 to visit Ezimbomvini and EStulwane communities.",
    image: drakensbergImg,
    link: "https://www.ndrakcollab.org/post/farmer-exchange-cross-visit",
  },
  {
    title: "Ecofutures update",
    description:
      `The Ecofutures programme is a pilot project in the upper uMzimvubu catchment, catalysed
        through Green Trust funding in early 2017, with further support from CITI Foundation, which
        aims to open opportunities for local youth with limited tertiary access...`,
    image: umzimNews,
    link: "https://umzimvubu.org/wp-content/uploads/2020/06/ucp-newsflash-18-ecofutures-update.pdf",
  },
  {
    title: "A framework for monitoring & evaluation of UCP projects",
    description:
      `Implementing partners involved in landscape restoration and livelihood enhancing activities in the uMzimvubu catchment
        are obliged to show developmental impact...`,
    image: umzimNews2,
    link: "https://umzimvubu.org/wp-content/uploads/2020/06/ucpp-newsflash-17-establishing-me-framework.pdf",
  },
];

export default function CommunitySection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-1xl font-bold text-[#074C82] sm:text-4xl lg:text-5xl">
            Cross Catchment Collective Insights
          </h2>

          <p className="mt-2 text-gray-600 text-base sm:text-lg">
            Impact across our Partnerships
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-7 text-left">
                <h3 className="mb-4 text-2xl font-bold text-[#074C82]">
                  {card.title}
                </h3>

                <p className="mb-6 text-gray-600 leading-relaxed">
                  {card.description}
                </p>

                <Link
                  to={card.link}
                  target="_blank"
                  className="inline-flex items-center rounded-lg bg-[#22613C] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#18492C]"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}