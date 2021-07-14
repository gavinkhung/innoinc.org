import { FC } from 'react';
const ContactPage: FC = () => {
  return (
    <div className="">
      <div className="px-8 sm:px-4">
        <div className="flex flex-col max-w-4xl mx-auto">
          <h1 className="text-center mb-4 text-xl md:text-3xl">Contact Us</h1>
          <form
            className="w-full space-y-3"
            action="https://formspree.io/f/mbjqgkbg"
            method="POST"
          >
            <div className="flex flex-col sm:flex-row justify-between sm:space-x-2">
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  autoComplete="off"
                  required
                  className="mt-1 block w-full rounded-md shadow-sm px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 transition duration-150 ease-in-out"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  placeholder="name@site.com"
                  autoComplete="off"
                  required
                  className="mt-1 block w-full rounded-md shadow-sm px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 transition duration-150 ease-in-out"
                />
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Hey!"
                required
                className="mt-1 block w-full h-48 rounded-md shadow-sm px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 transition duration-150 ease-in-out resize-none"
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="text-lg border border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center font-medium text-gray-900 hover:text-gray-500 focus:outline-none focus:ring-2 "
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
