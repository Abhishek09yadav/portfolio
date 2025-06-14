import Image from "next/image";

export const BannerImage = ({ bannerImage, heading}) => {
  return (
    <div className="w-full h-64 md:h-96 overflow-hidden relative">
      <Image
        src={bannerImage}
        heading
        alt={"banner image"}
        width={100}
        height={100}
        className="w-full h-full object-cover"
      />
      <div className=""></div>
    </div>
  );
};