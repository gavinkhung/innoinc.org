import { FC } from 'react';
type HeroProp = {
  title: string;
  body: string;
  imageUrl: string;
};

const Hero: FC<HeroProp> = ({ title, body, imageUrl }) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-center uppercase text-3xl">{title}</h2>
      <div className="flex flex-row">
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-left">{body}</p>
        </div>
        <div className="flex-1">
          <img src={imageUrl} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
