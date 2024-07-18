import Button from "@/components/landing/general/Button";

interface Props {
  text1: string;
  text2: string;
}

export default function TwoButtons({ text1, text2 }: Props) {
  return (
    <div className="mt-10 mb-10 flex items-center justify-center gap-x-6 lg:justify-start">
      <Button
        className="bg-white hover:bg-gray-200 text-black border"
        children={<p>{text1}</p>}
      />
      <Button
        className="bg-purpleText hover:bg-hoverPurple text-white"
        children={<p>{text2}</p>}
      />
    </div>
  );
}
