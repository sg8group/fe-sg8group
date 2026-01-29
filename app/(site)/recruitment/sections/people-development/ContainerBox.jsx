import Image from "next/image";

function ContainerBox({
  title,
  description,
  image,
  bgColor = "bg-[#0f2b5b]",
  textColor = "text-white",
}) {
  return (
    <div
      className={`${bgColor} ${textColor} rounded-xl p-8 flex flex-col  text-justify`}
    >
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-lg leading-relaxed my-2 ">{description}</p>
      </div>

      {image && (
        <div className="relative w-full h-70 mt-6 rounded-2xl overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      )}
    </div>
  );
}

export default ContainerBox;
