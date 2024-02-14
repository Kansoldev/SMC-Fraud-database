import Image from "next/image";

const Login = () => {
  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <div
        className="md:w-[500px] mx-auto rounded-lg"
        style={{
          boxShadow: "0 20px 40px rgba(61, 65, 84, 0.15)",
          backgroundColor: "#fff",
          padding: "48px 60px",
        }}
      >
        <Image
          src="/logo.png"
          alt="SMC logo"
          className="mx-auto"
          width={120}
          height={120}
        />
        <h1 className="font-bold text-2xl text-center mb-8">SMC DAO</h1>{" "}
        <form
          id="contact-form"
          className="contact-form mt-30 mb-30"
          method="post"
          action="/verify"
        >
          <div className="form-group flex items-center gap-2 mb-8">
            <label htmlFor="email" hidden>
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Johndoe@xyz.com"
              className="w-full h-[52px] bg-[#eee] px-5 outline-0"
            />
          </div>

          <button className="bg-black hover:bg-neutral-800 text-white px-4 py-3 shadow w-full text-lg">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
