import { FC } from "react";

const AboutPage: FC = () => {
  return (
    <div className="space-y-2">
      <div className="px-8 sm:px-4 py-4 sm:py-8">
        <div className="flex flex-col justify-between max-w-4xl mx-auto bg-primary-blue-darker space-y-6 px-24 py-8 md:px-48 md:py-16 rounded">
          <p className="uppercase text-center text-3xl md:text-5xl text-white font-extrabold">
            WE’RE HIRING
          </p>
          <p className="text-center text-lg md:text-2xl text-gray-300 font-base">
            Interested in joining a group of individuals passionate about{" "}
            <span className="uppercase font-medium text-white font-semibold">
              BIOTECHNOLOGY
            </span>{" "}
            and{" "}
            <span className="uppercase font-bold text-white font-semibold">
              INNOVATION
            </span>
            ? Join our team today!
          </p>
          <div className="flex flex-row justify-center space-x-2">
            <button
              type="submit"
              className="text-lg bg-gray-100 border-gray-300 rounded-md shadow-sm py-2 px-4 font-medium text-primary-blue hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-800"
            >
              Apply To Board
            </button>
            <button
              type="submit"
              className="text-lg bg-primary-blue border-gray-300 rounded-md shadow-sm py-2 px-4 font-medium text-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-800"
            >
              Start a Chapter
            </button>
          </div>
        </div>
      </div>
      <div className="px-8 sm:px-4 py-4 sm:py-8">
        <div className="flex flex-col justify-between max-w-4xl mx-auto bg-primary-blue space-y-6 px-24 py-8 md:px-48 md:py-16 rounded">
          <p className="uppercase text-center text-3xl md:text-5xl text-white font-extrabold">
            Summer Camp
          </p>
          <p className="text-center text-lg md:text-2xl text-gray-700 font-base">
            Want an{" "}
            <span className="uppercase text-primary-red font-semibold">
              IMMERSIVE BIOTECHNOLOGY EXPERIENCE
            </span>{" "}
            from the comfort of your own bedroom this summer? Learn more about
            our summer camp opportunities for{" "}
            <span className="uppercase text-primary-red font-semibold">
              MIDDLE AND HIGH SCHOOLERS!
            </span>
            <span className="uppercase text-primary-red font-semibold">
              BIOTECHNOLOGY
            </span>{" "}
          </p>
          <div className="flex flex-row justify-center space-x-2">
            <button
              type="submit"
              className="text-lg bg-primary-red border-gray-300 rounded-md shadow-sm py-2 px-4 font-medium text-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-800"
            >
              Summer Camp 2021
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
