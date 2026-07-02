function ValueCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center max-w-xs mx-auto group">

      <div className="w-24 h-24 rounded-full overflow-hidden shadow-md transition duration-300 group-hover:scale-110">
        <img
          src={icon}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="mt-5 text-2xl font-bold text-[#2D6A4F] leading-tight">
        {title}
      </h3>

      <p className="mt-4 text-gray-600 leading-7">
        {description}
      </p>

    </div>
  );
}

export default ValueCard;