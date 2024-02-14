import Link from "next/link";
import TabList from "./TabList";

const profile = () => {
  const tabsData = [
    {
      title: "General",
      content: (
        <>
          <p className="text-gray-500">
            Full Name: <span className="text-black ml-3">Alyssa Tanner</span>
          </p>

          <p className="text-gray-500 mt-3">
            Date of Birth: <span className="text-black ml-3">03/08/1998</span>
          </p>

          <p className="text-gray-500 mt-3">
            Phone Number:{" "}
            <span className="text-black ml-3">+2348152116589</span>
          </p>

          <p className="text-gray-500 mt-3">
            Email Address:{" "}
            <span className="text-black ml-3">Alyssatanner@gmail.com</span>
          </p>
        </>
      ),
    },
    {
      title: "Wallet Info",
      content: (
        <>
          <p className="text-gray-500">
            Coins Holding:{" "}
            <span className="text-black ml-3">
              Shiba INU, Wikicat, Doge Coin, Solana
            </span>
          </p>

          <p className="text-gray-500 mt-3">
            Wallet Type: <span className="text-black ml-3">CEX</span>
          </p>

          <p className="text-gray-500 mt-3">
            Wallet Address: <span className="text-black ml-3">ad1967290x</span>
          </p>
        </>
      ),
    },
    {
      title: "Social Media",
      content: (
        <>
          <p className="text-gray-500">
            Telegram: <span className="text-black ml-3"></span>
          </p>

          <p className="text-gray-500 mt-3">
            Twitter: <span className="text-black ml-3"></span>
          </p>

          <p className="text-gray-500 mt-3">
            Discord: <span className="text-black ml-3"></span>
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="w-[900px] mx-auto">
        <Link href="/home" className="block mb-5 text-lg underline">
          &laquo; Back
        </Link>

        <div className="bg-white shadow-lg rounded-md">
          <div className="flex items-center justify-between p-5">
            <div className="flex items-center gap-5">
              <div className="profile-img">
                <img
                  src="/profile-agent.jpg"
                  className="object-cover rounded-full   w-[70px]"
                  alt="Profile image"
                />
              </div>

              <div className="profile-details">
                <h1 className="font-bold text-lg">Alyssa Tanner</h1>
                <p>Crypto Lover</p>
              </div>
            </div>

            <div>
              <button className="bg-slate-800 text-white px-5 py-2.5 rounded-md mr-5">
                Edit
              </button>

              <button className="bg-red-700 text-white px-5 py-2.5 rounded-md">
                Delete
              </button>
            </div>
          </div>

          <TabList tabsData={tabsData} />
        </div>
      </div>
    </div>
  );
};

export default profile;
