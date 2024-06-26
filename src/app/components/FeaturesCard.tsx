import Image, { StaticImageData } from "next/image";

type CardProps = {
  title: string;
  icon: string | StaticImageData;
  description: string;
};

export default function FeaturesCard({ title, icon, description }: CardProps) {
  return (
    <div className="m-auto my-4 flex h-64 w-8/12 flex-col items-center justify-between rounded border px-4 py-8 lg:mx-8 lg:h-96">
      <h2 className="font-bold lg:text-xl">{title}</h2>
      <Image height={50} width={50} src={icon} alt="icon" />
      <p className="text-center text-sm lg:text-base">{description}</p>
    </div>
  );
}
