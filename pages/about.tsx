import { FC } from 'react';

const AboutPage: FC = () => {
  return (
    <div className="space-y-2">
      <div className="px-8 sm:px-4 py-4 sm:py-16 bg-gray-400">
        <div className="flex flex-col max-w-4xl mx-auto space-y-2">
          <p className="text-center text-lg md:text-2xl">WE’RE HIRING</p>
          <p className="text-center text-lg md:text-2xl">
            Interested in joining a group of individuals passionate about
            BIOTECHNOLOGY and INNOVATION? Join our team today!
          </p>
          <div className="flex flex-row justify-center space-x-2">
            <button
              type="submit"
              className="text-lg bg-blue-400 border-gray-300 rounded-md shadow-sm py-2 px-4 font-medium text-gray-900 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-800"
            >
              Join
            </button>
            <button
              type="submit"
              className="text-lg bg-blue-400 border-gray-300 rounded-md shadow-sm py-2 px-4 font-medium text-gray-900 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-800"
            >
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="px-8 sm:px-4 py-4 sm:py-16 bg-gray-500">
        <div className="flex flex-col max-w-4xl mx-auto space-y-2">
          <p className="text-center text-lg md:text-2xl">SUMMER CAMP</p>
          <p className="text-center text-lg md:text-2xl">
            Want an IMMERSIVE BIOTECHNOLOGY EXPERIENCE from the comfort of your
            own bedroom this summer? Learn more about our summer camp
            opportunities for MIDDLE AND HIGH SCHOOLERS!
          </p>
          <div className="flex flex-row justify-center space-x-2">
            <button
              type="submit"
              className="text-lg bg-blue-400 border-gray-300 rounded-md shadow-sm py-2 px-4 font-medium text-gray-900 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-800"
            >
              Join
            </button>
            <button
              type="submit"
              className="text-lg bg-blue-400 border-gray-300 rounded-md shadow-sm py-2 px-4 font-medium text-gray-900 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-800"
            >
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
