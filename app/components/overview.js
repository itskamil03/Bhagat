import { FaRegLightbulb, FaHandshake, FaCheckCircle } from "react-icons/fa";

export default function Overview() {
  return (
    <section className="w-full bg-[#f7eaea] mt-0 py-16 px-6">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 w-full items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-red-600 font-bold text-sm sm:text-base uppercase tracking-widest mb-3">
            OVERVIEW
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Bhagat Engineering <br />
            Works at a Glance
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Established in 1976, Bhagat Engineering Works has grown from a
            trusted electrical contractor into a multidisciplinary engineering
            organization delivering large-scale electrical, mechanical, and
            infrastructure solutions across India.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Driven by innovation, technical excellence, and customer
            satisfaction, we continue to build reliable infrastructure that
            powers industries, communities, and future generations.
          </p>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 mt-8 lg:mt-0">
          {/* CARD 1 */}
          <div className="bg-gray-300 backdrop-blur-md p-5 rounded-lg shadow-sm hover:shadow-md transition w-full h-full min-h-[200px]">
            <FaRegLightbulb className="text-red-500 text-xl mb-3" />
            <h3 className="font-semibold text-gray-800">Expertise</h3>
            <p className="text-sm text-gray-600 mt-2">
              Nearly five decades of engineering excellence in electrical
              infrastructure and industrial solutions.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-gray-300 backdrop-blur-md p-5 rounded-lg shadow-sm hover:shadow-md transition w-full h-full min-h-[200px]">
            <FaHandshake className="text-red-500 text-xl mb-3" />
            <h3 className="font-semibold text-gray-800">Commitment</h3>
            <p className="text-sm text-gray-600 mt-2">
              Dedicated to timely execution, technical precision, and long-term
              customer satisfaction.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-gray-300 backdrop-blur-md p-5 rounded-lg shadow-sm hover:shadow-md transition w-full h-full min-h-[200px]">
            <FaCheckCircle className="text-red-500 text-xl mb-3" />
            <h3 className="font-semibold text-gray-800">Quality</h3>
            <p className="text-sm text-gray-600 mt-2">
              ISO 9001:2015 certified processes delivering consistent quality,
              safety, and reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
