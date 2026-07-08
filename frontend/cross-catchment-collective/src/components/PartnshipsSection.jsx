import PartnershipCard from "./PartnershipCard";

import umgeni from "../assets/partnerships/UEIP.jpg";
import abi from "../assets/partnerships/abii.png";
import umzimvubu from "../assets/partnerships/umzibu.jpg";
import drakensberg from "../assets/partnerships/northern.jpg";
import umkhomazi from "../assets/partnerships/umkhomazi.jpg";
import umhlathuze from "../assets/partnerships/umhlathaze.jpg";
import lowveld from "../assets/partnerships/lowveld.jpg"

const partnerships = [
  {
    title: "uMngeni Ecological Infrastructure Partnership",
    image: umgeni,
    description:
      `Established in 2013, the uMngeni Ecological Infrastructure Partnership works across the uMngeni catchment in KwaZulu-Natal 
      to support the integration of ecological infrastructure into water resource management. The partnership focuses on collaborative governance, 
      strategic investment and socio-ecological resilience to strengthen water security, biodiversity and community well-being.`,
    partnerLink: `https://amanziethunobuntu.co.za/`,
  },
  {
    title: "Agulhas Biodiversity Initiative",
    image: abi,
    description:
      `The Agulhas Biodiversity Initiative is a landscape initiative and conservation coordination hub for the Overberg region. It brings together 
      partners from civil society, government, landowners and the private sector to work collaboratively towards a productive, healthy natural
       environment that benefits people and nature.`,
    partnerLink: `https://www.agulhasbiodiversity.co.za/`,
  },
  {
    title: "uMzimvubu Catchment Partnership",
    image: umzimvubu,
    description:
      `The uMzimvubu Catchment Partnership is a long-standing multi-stakeholder platform working across the 2-million-hectare uMzimvubu catchment. 
      It brings together NGOs, traditional authorities, youth champions, landowners, government and research institutions around a shared vision of 
      resilient landscapes supporting thriving people.`,
    partnerLink: `https://umzimvubu.org/`,
  },
  {
    title: "Northern Drakensberg Collaborative",
    image: drakensberg,
    description:
      `The Northern Drakensberg Collaborative is a multi-stakeholder partnership focused on the Northern Drakensberg Strategic Water Source Area, 
      especially the upper uThukela Catchment. The partnership supports inclusive collaboration to protect healthy grasslands, strengthen catchment 
      stewardship and secure water, biodiversity and livelihood benefits across this critical landscape.`,
    partnerLink: `https://www.ndrakcollab.org/`,
  },
  {
    title: "uMkhomazi Catchment Working Group",
    image: umkhomazi,
    description:
      `The uMkhomazi Catchment Working Group was formed in 2021 in response to increasing pressure on the uMkhomazi catchment and the proposed 
      uMkhomazi Water Project. The partnership works to safeguard this important KwaZulu-Natal catchment through stakeholder engagement, ecological 
      best practice, sustainable land management and inclusive livelihood development.`,
    partnerLink: `https://www.wwf.org.za/?54822/umkhomazi-catchment-working-group`,
  },
  {
    title: "uMhlathuze Water Stewardship Partnership",
    image: umhlathuze,
    description:
      `The uMhlathuze Water Stewardship Partnership was formed after the 2016 drought in Richards Bay and surrounding areas. It is a multi-stakeholder 
      platform working in the water-stressed uMhlathuze catchment to address shared water risks, strengthen catchment stewardship and improve collaboration 
      between public, private and civil society actors.`,
    partnerLink: `https://www.wwf.org.za/?53063/Umhlathuze-Water-Stewardship-Partnership`,
  },
  {
    title: "Rivers of the Lowveld",
    image: lowveld,
    description:
      `Rivers of the Lowveld brings together partnerships and institutions working across six major Lowveld rivers: the Limpopo, Letaba, Olifants, Blyde,
       Sabie and Crocodile. These rivers sustain rural communities, agriculture, biodiversity and the Kruger National Park landscape, while facing pressure
        from climate variability, invasive plants, land-use change and growing water demand. The partnership supports improved water governance, shared
         basin stewardship, climate-smart land management and practical collaboration for people and ecosystems.`,
    partnerLink: `/`,
  },
];

export default function PartnershipsSection() {
  return (
    <section className="bg-[#FAFAFA] py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="text-5xl font-bold text-[#074C82]">
            Our Partnerships
          </p>

          <p className="mt-5 text-xl text-gray-600">
            Working together for resilient landscapes, thriving communities
            and a sustainable future.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

          {partnerships.map((partner) => (
            <PartnershipCard
              key={partner.title}
              {...partner}
            />
          ))}

        </div>

        {/* Bottom Banner */}

        <div className="mt-20">

          <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

            <div className="flex flex-col md:flex-row items-center gap-6">

              <div className="w-20 h-20 rounded-full bg-[#E7F2E7] flex items-center justify-center">

                <svg
                  className="w-10 h-10 text-[#2D6A4F]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3C13 4 8 8 7 14c2-2 5-3 8-3-2 2-5 4-8 5 2 2 5 3 8 2 5-2 8-8 4-15z" />
                </svg>

              </div>

              <div>

                <h3 className="text-2xl font-bold text-[#112A5C]">
                  Stronger together
                </h3>

                <p className="text-gray-600 mt-2">
                  Our partnerships are built on collaboration, trust and a
                  shared commitment to people and nature.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}