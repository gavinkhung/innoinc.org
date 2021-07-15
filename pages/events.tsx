import { FC } from "react";

import Hero from "@components/Hero";

const EventsPage: FC = () => {
  return (
    <div className="">
      <div className="px-8 sm:px-4">
        <div className="flex flex-col sm:flex-row max-w-4xl mx-auto">
          <div className="flex-1 space-y-4">
            <h1 className="text-6xl md:text-8xl">IDC</h1>
            <h2 className="text-md md:text-lg">
              The Innovation Development Conference is meant to be the
              culmination of the application-based, real-world education INNO
              provides.
            </h2>
            <div className="flex flex-row space-x-2">
              <button className="text-lg bg-blue-400 border-gray-300 rounded-md shadow-sm py-2 px-4 font-medium text-gray-900 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-800">
                2021 Finalists
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-row justify-center">
            <img src="/img/idc/idc-1.png" alt="" />
          </div>
        </div>
      </div>

      <div className="px-8 sm:px-4">
        <div className="flex flex-col sm:flex-row max-w-4xl mx-auto bg-primary-red py-4 sm:py-12 px-2">
          <p className="text-center text-gray-100 text-md font-normal md:text-2xl rounded">
            INNO members will present{" "}
            <span className="uppercase text-white bg-primary-blue-darker">
              self-designed biotech
            </span>{" "}
            products they have spent the year developing to{" "}
            <span className="uppercase text-white bg-primary-blue-darker">
              industry professionals
            </span>
            . Ranging from imaging tools to web apps to wearable devices, all
            products that INNO members create have the capacity to{" "}
            <span className="uppercase text-white bg-primary-blue-darker">
              create real social good
            </span>
            within biological fields.{" "}
          </p>
        </div>
      </div>

      <div className="px-8 sm:px-4 py-4">
        <div className="max-w-4xl mx-auto space-y-2">
          <Hero
            title="VIRTUAL"
            body="Provides asynchronous and synchronous competition. Easily accessible to all students. Simple submission with holistic review process."
            imageUrl="/img/idc/idc-2.png"
            bgColor="bg-primary-blue-darker"
            titleColor="text-primary-blue"
            textColor="text-gray-100"
          />
          <Hero
            title="Industry Experiences"
            body="Judged by industry experts. Mentorship and workshops provided by real-world professionals. All products created by members have industrial applications."
            imageUrl="/img/idc/idc-3.png"
            bgColor="bg-primary-blue"
            titleColor="text-primary-red"
            textColor="text-gray-100"
          />
          <Hero
            title="COMPETITION"
            body="Provides biotech opportunities to 100+ members. Inclusive of all students, regardless of background. Welcomes motivated high school students nation-wide."
            imageUrl="/img/idc/idc-4.png"
            bgColor="bg-primary-red"
            titleColor="text-white"
            textColor="text-gray-100"
          />
        </div>
      </div>
    </div>
  );
};
export default EventsPage;
