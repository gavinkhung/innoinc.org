import Link from 'next/link';
import { ReactNode, FC } from 'react';

const IndexPage: FC = () => {
  return (
    <div className="space-y-2">
      <div className="flex flex-col sm:flex-row">
        <div className="flex-1">
          <h1 className="text-4xl">INNO</h1>
          <h2>
            A student run non profit organization that provides COMPETITIVE
            OPPORTUNITIES to introduce students to biotech concepts and the
            innovation behind them.
          </h2>
        </div>
        <div className="flex-1">Home 1</div>
      </div>
      <div className="">
        <p>
          We are committed to providing our members with an ENRICHING, HOLISTIC,
          HANDS-ON EXPERIENCE with biological and computational concepts,
          fostering creativity in all our members and allowing them to use their
          skills to make a real-world impact.
        </p>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
        <div className="flex flex-col justify-center bg-gray-400">
          <h3>EXPERIENCE</h3>
          <p>
            Each member will be able to create a product directly applicable to
            real world fields
          </p>
        </div>
        <div className="flex flex-col justify-center bg-gray-400">
          <h3>LEARNING</h3>
          <p>
            Robust curriculum and workshops will educate members about the
            innovation behind biotech
          </p>
        </div>
        <div className="flex flex-col justify-center bg-gray-400">
          <h3>CONNECTIONS</h3>
          <p>
            We connect and allow members to foster relationships with industry
            professionals
          </p>
        </div>
        <div className="flex flex-col justify-center bg-gray-400">
          <h3>RESOURCES</h3>
          <p>
            We provide members with the resources and tools necessary to create
            impactful technology
          </p>
        </div>
      </div>
      <div className="">
        <h2>MAKE AN IMAPCT</h2>
        <div className="flex flex-row">
          <div className="flex-1">
            Create an Inno chapter at your school today to bring the innovation
            that is paving the world of tomorrow to your school and community.{' '}
          </div>
          <div className="flex-1">img</div>
        </div>
      </div>
      <div className="">
        <h2>SPONSORS</h2>
        <div className="flex flex-col sm:flex-row justify-center">
          <div className="div">1</div>
          <div className="div">2</div>
          <div className="div">3</div>
        </div>
        <h3>WANT TO SUPPORT INNO?</h3>
      </div>
    </div>
  );
};
export default IndexPage;
