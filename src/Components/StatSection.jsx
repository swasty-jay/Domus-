import CountUp from "react-countup";
import { Link } from "react-router-dom";

const StatSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 bg-white">
      {/* Left Side - Text Content */}
      <div className="lg:w-1/2 space-y-4">
        <h2 className="text-lg md:text-xl font-bold">
          We Use Real Estate to Show Our Appreciation of The World
        </h2>
        <p className="text-gray-600">
          We connect buyers and sellers with the best real estate deals,
          ensuring secure transactions and valuable investments.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-bold">
              $<CountUp end={18} duration={3} />M
            </h3>
            <p className="text-gray-500 text-sm">
              Owned From Properties Transactions
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">
              <CountUp end={15000} duration={3} />+
            </h3>
            <p className="text-gray-500 text-sm">Properties For Sell</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">
              <CountUp end={26000} duration={3} />+
            </h3>
            <p className="text-gray-500 text-sm">Properties For Buy</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">
              <CountUp end={890} duration={3} />
            </h3>
            <p className="text-gray-500 text-sm">
              Daily Completed Transactions
            </p>
          </div>
        </div>

        {/* Button */}
        <Link to="/about">
          <button className="mt-6 px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition">
            Learn More →
          </button>
        </Link>
      </div>

      {/* Right Side - Image */}
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <img
          src="https://yujyiileosrvbcoddbzt.supabase.co/storage/v1/object/public/images//home-4856369_1280.jpg"
          alt="Modern House"
          className="rounded-lg shadow-lg w-full"
        />
      </div>
    </section>
  );
};

export default StatSection;
