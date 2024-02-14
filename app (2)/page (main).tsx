import Link from "next/link";

export default function Page() {
  return (
    <div className="container mx-auto text-center mt-20 p-3">
      <h1 className="font-bold text-2xl mb-10 capitalize">
        SMC Fraud Alert Database
      </h1>

      <input
        type="search"
        name=""
        id=""
        placeholder="Search name, twitter handle, wallet address, phone number etc"
        className="w-[800px] p-4 border-0 outline-0 rounded-[50px] shadow-lg"
      />
      {/*remove outline-0 later */}

      <section className="py-1 bg-blueGray-50">
        <div className="w-full xl:w-10/12 mb-12 xl:mb-0 px-4 mx-auto mt-10">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="block w-full overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="pt-4 pb-3 align-middle border border-solid uppercase text-sm font-semibold">
                      Name
                    </th>

                    <th className="pt-4 pb-3 align-middle border border-solid uppercase text-sm font-semibold">
                      Wallet Address
                    </th>

                    <th className="pt-4 pb-3 align-middle border border-solid uppercase text-sm font-semibold">
                      Wallet Type
                    </th>

                    <th className="pt-4 pb-3 align-middle border border-solid uppercase text-sm font-semibold">
                      Phone Number
                    </th>

                    <th className="pt-4 pb-3 align-middle border border-solid uppercase text-sm font-semibold">
                      Email address
                    </th>

                    <th className="pt-4 pb-3 align-middle border border-solid uppercase text-sm font-semibold">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4">
                      Oyinkansola
                    </td>

                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4">
                      0x112233
                    </td>

                    <td className="border-t-0 px-6 align-center border-l-0 border-r-0 whitespace-nowrap p-4">
                      DEX
                    </td>

                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4">
                      +2348090231455
                    </td>

                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4">
                      yahayaoyinkansola@gmail.com
                    </td>

                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4">
                      <Link
                        href="/"
                        className="bg-black hover:bg-neutral-800 px-6 py-3 text-white font-semibold rounded-xl transition-all ease-in-out delay-150"
                      >
                        View Full Profile
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
