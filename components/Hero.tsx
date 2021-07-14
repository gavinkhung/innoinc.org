import { FC } from "react";
type HeroProp = {
  title: string;
  body: string;
  imageUrl: string;
  bgColor: string;
  titleColor: string;
  textColor: string;
};

const Hero: FC<HeroProp> = ({
  title,
  body,
  imageUrl,
  bgColor,
  titleColor,
  textColor,
}) => {
  return (
    <div className={`flex flex-col py-2 ${bgColor} rounded`}>
      <h2
        className={`text-center uppercase text-2xl md:text-4xl font-bold ${titleColor}`}
      >
        {title}
      </h2>
      <div className="flex flex-row">
        <div className="flex-1 flex flex-col justify-center">
          <p className={`text-left text-xl ${textColor} px-2`}>{body}</p>
        </div>
        <div className="flex-1">
          <img src={imageUrl} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
