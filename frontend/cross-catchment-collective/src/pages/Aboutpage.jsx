import PartnershipsSection from "../components/PartnshipsSection";
import storyMap from "../assets/Catchments_Maps.png";

function AboutPage() {
    return (
        <>
        <section className="bg-[#7F99B1] py-16 lg:py-20">
            <div className="max-w-5xl mx-auto px-6 text-center">

                <p className="text-3xl lg:text-5xl font-bold text-white">
                Cross-Catchment Collective
                </p>

                <p className="mt-5 text-lg lg:text-2xl text-white/95 max-w-4xl  leading-tight mx-auto">
                We connect catchment partnerships across South Africa to
                collaborate, learn and scale impact.
                </p>

            </div>
        </section>

        <section className="bg-white py-20">

      <div className="max-w-7xl mx-auto px-6">

        <p className="text-3xl lg:text-4xl font-bold text-center text-[#074C82] pb-10 mb-14">
          Our Story
        </p>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Text */}

          <div className="order-2 lg:order-1">

            <p className="text-lg leading-tight text-gray-700 text-center lg:text-left">
              The Cross-Catchment Collective brings together seven
              catchment partnerships working across some of South
              Africa's most important water, biodiversity and livelihood
              landscapes.
              <br />
              <br />
              Each partnership is rooted in its own place, people and
              priorities, while all are working towards healthier
              catchments, stronger collaboration and more resilient
              communities.
              <br />
              <br />
              Through the CCC, these partnerships are able to connect,
              share practical learning, strengthen their work and build
              collective impact across catchments.
            </p>

          </div>

        {/* Image */}

          <div className="order-1 lg:order-2">

            <img
              src={storyMap}
              alt="Catchment partnerships map"
              className="w-full rounded-lg shadow-lg"
            />

          </div>

        </div>

      </div>

    </section>
    <PartnershipsSection />

    </>
    )
}

export default AboutPage;