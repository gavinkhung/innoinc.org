import { FC } from "react";

import Hero from "@components/Hero";

const IndexPage: FC = () => {
  return (
    <div className="space-y-6">
      <div className="px-8 sm:px-4">
        <div className="flex flex-col sm:flex-row max-w-4xl mx-auto">
          <div className="flex flex-col flex-1 space-y-4">
            <h1 className="text-6xl md:text-9xl text-primary-red font-extrabold">
              INNO
            </h1>
            <h2 className="text-md md:text-xl text-primary-red font-medium">
              A student run non profit organization that provides{" "}
              <span className="text-primary-blue-darker font-bold">
                COMPETITIVE OPPORTUNITIES
              </span>{" "}
              to introduce students to biotech concepts and the{" "}
              <span className="text-primary-blue-darker font-bold">
                INNOVATION
              </span>{" "}
              behind them.
            </h2>
            <div className="flex flex-row space-x-2">
              <button
                type="submit"
                className="text-lg bg-primary-blue border-gray-300 rounded-md shadow-sm py-2 px-4 font-medium text-gray-100 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-800"
              >
                Join
              </button>
              <button
                type="submit"
                className="text-lg bg-primary-blue-darker border-gray-300 rounded-md shadow-sm py-2 px-4 font-medium text-gray-100 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-800"
              >
                Donate
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-row justify-center">
            <img src="/img/home/home-1.png" alt="" />
          </div>
        </div>
      </div>

      <div className="px-8 sm:px-4">
        <div className="flex flex-col sm:flex-row max-w-4xl mx-auto bg-primary-blue py-4 sm:py-12 px-2">
          <p className="text-center text-gray-100 text-md font-normal md:text-2xl rounded">
            We are committed to providing our members with an{" "}
            <span className="uppercase text-white bg-primary-blue-darker px-1">
              ENRICHING
            </span>
            ,{" "}
            <span className="uppercase text-white bg-primary-blue-darker px-1">
              HOLISTIC
            </span>
            ,{" "}
            <span className="uppercase text-white bg-primary-blue-darker px-1">
              HANDS-ON EXPERIENCE
            </span>{" "}
            with biological and computational concepts, fostering creativity in
            all our members and allowing them to use their skills to make a{" "}
            <span className="uppercase text-white bg-primary-blue-darker px-1">
              real-world impact
            </span>
            .
          </p>
        </div>
      </div>

      <div className="px-8 sm:px-4 ">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
            <GridSquare
              title="Experience"
              body="Each member will be able to create a product directly applicable to real world fields"
              imageUrl="/img/home/home-2.png"
              textColor="text-gray-100"
              bgColor="bg-primary-red"
            />
            <GridSquare
              title="LEARNING"
              body="Robust curriculum and workshops will educate members about the innovation behind biotech"
              imageUrl="/img/home/home-3.png"
              textColor="text-gray-900"
              bgColor="bg-gray-100"
            />
            <GridSquare
              title="CONNECTIONS"
              body="We connect and allow members to foster relationships with industry professionals"
              imageUrl="/img/home/home-4.png"
              textColor="text-primary-red"
              bgColor="bg-primary-blue"
            />
            <GridSquare
              textColor="text-gray-100"
              bgColor="bg-primary-blue-darker"
              title="RESOURCES"
              body="We provide members with the resources and tools necessary to create impactful technology "
              imageUrl="/img/home/home-5.png"
            />
          </div>
        </div>
      </div>

      <div className="px-8 sm:px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <Hero
            title="Make An Impact"
            body="Create an Inno chapter at your school today to bring the innovation that is paving the world of tomorrow to your school and community. "
            imageUrl="/img/home/home-6.png"
            bgColor="bg-primary-red"
            titleColor="text-white"
            textColor="text-gray-100"
          />
        </div>
      </div>

      <div className="px-8 sm:px-4 py-4">
        <div className="flex flex-col space-y-2">
          <h2 className="text-center text-2xl md:text-4xl font-bold">
            SPONSORS
          </h2>
          <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            <Sponsor name="AoPS" imageUrl="/img/home/sponsor-1.png" />
            <Sponsor name="Magoosh" imageUrl="/img/home/sponsor-2.png" />
            <Sponsor name="Wolfram" imageUrl="/img/home/sponsor-3.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default IndexPage;

type GridSquareProp = {
  title: string;
  body: string;
  imageUrl: string;
  bgColor: string;
  textColor: string;
};

const GridSquare: FC<GridSquareProp> = ({
  title,
  body,
  imageUrl,
  bgColor,
  textColor,
}) => {
  return (
    <div
      className={`flex flex-col justify-center p-2 space-y-2 ${bgColor} rounded`}
    >
      <h3
        className={`text-center uppercase text-2xl md:text-4xl font-semibold ${textColor}`}
      >
        {title}
      </h3>
      <p className={`text-center text-md md:text-lg font-normal ${textColor}`}>
        {body}
      </p>
      <img src={imageUrl} />
    </div>
  );
};

type SponsorProp = {
  name: string;
  imageUrl: string;
};

const Sponsor: FC<SponsorProp> = ({ name, imageUrl }) => {
  return (
    <div className="flex flex-col">
      <img src={imageUrl} />
      <p className="text-center text-md md:text-xl">{name}</p>
    </div>
  );
};
