import Image from "next/image";

export const BannerImage = ({ bannerImage, heading}) => {
  return (
    <div className="w-full h-64 md:h-72 overflow-hidden relative">
      <Image
        src={bannerImage}
        heading
        alt={"banner image"}
        width={1920}
        height={1080}
        quality={100}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 ">
        <h1 className="text-white text-2xl md:text-4xl font-bold text-center px-4">
          {heading}
        </h1>
      </div>
    </div>
  );
};