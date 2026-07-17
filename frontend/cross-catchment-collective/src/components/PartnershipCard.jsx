export default function PartnershipCard({
  title,
  description,
  image,
  partnerLink
}) {
  return (
    <a
    href={partnerLink}
    target="_blank"
    >
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition duration-150 flex flex-col">

      <div className="p-8 flex-grow">

        <h3 className="text-2xl font-bold text-[#074C82] leading-none">
          {title}
        </h3>

        <p className="mt-6 text-gray-700 leading-tight">
          {description}
        </p>

      </div>

      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />

    </div>
    </a>
  );
}