import React from "react";
import Working from "../assets/images/illustration-working.svg";
import iBrandRecognition from "../assets/images/icon-brand-recognition.svg";
import iDetailedRecords from "../assets/images/icon-detailed-records.svg";
import ifullyCustomizable from "../assets/images/icon-fully-customizable.svg";

function Home() {
  return (
    <article className="py-10 px-20">
      <header className="flex gap-10 items-center">
        <div>
          <h1 className="font-bold text-7xl text-dark-blue">
            More than just shorter links
          </h1>
          <p className="my-5 text-grayish-violet text-xl">
            Build your brand's recognition and get detailed <br /> insights on
            how your links are performing.
          </p>
          <div className="my-10">
            <a href="#" className="btn full">
              Get Started
            </a>
          </div>
        </div>
        <div>
          <img src={Working} alt="person working in a computer" />
        </div>
      </header>
      <section className="py-10">
        <form
          action=""
          className="flex gap-10 p-10 rounded bg-dark-violet md:bg-shorten bg-shorten-mobile bg-cover "
        >
          <input
            type="text"
            placeholder="Shorten a link here..."
            required
            className="flex-1 rounded px-4"
          />
          <button type="submit" className="btn rounded">
            Shorten It!
          </button>
        </form>
      </section>
      <section className="py-20 bg-[hsl(0,0%,90%)]">
        <h2 className="font-bold text-4xl text-dark-blue text-center">
          Advanced Statistics
        </h2>
        <p className="my-5 text-center text-dark-blue">
          Track how your links are performing across the web with <br /> our
          advanced statistics dashboard.
        </p>
        <div className="flex items-start gap-10 p-10">
          <article className="relative p-4 rounded bg-white">
            <div className="absolute top-[-38px] left-5 w-fit rounded-full bg-dark-violet">
              <img
                src={iBrandRecognition}
                alt="Brand Recognition"
                className="p-4"
              />
            </div>
            <h3 className="mt-10 font-bold text-xl text-dark-blue">
              Brand Recognition
            </h3>
            <p className="my-2 text-dark-blue">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </article>
          <article className="my-10 relative p-4 rounded bg-white">
            <div className="absolute top-[-38px] w-fit rounded-full bg-dark-violet">
              <img
                src={iDetailedRecords}
                alt="Brand Recognition"
                className="p-4"
              />
            </div>
            <h3 className="mt-10 font-bold text-xl text-dark-blue">
              Detailed Records
            </h3>
            <p className="my-2 text-dark-blue">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </article>
          <article className="my-20 relative p-4 rounded bg-white">
            <div className="absolute top-[-38px] w-fit rounded-full bg-dark-violet">
              <img
                src={ifullyCustomizable}
                alt="Brand Recognition"
                className="p-4"
              />
            </div>
            <h3 className="mt-10 font-bold text-xl text-dark-blue">
              Fully Customizable
            </h3>
            <p className="my-2 text-dark-blue">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </article>
        </div>
      </section>
      <section className="py-16 bg-boost-mobile md:bg-boost bg-dark-violet">
        <h2 className="py-4 font-bold text-4xl text-white text-center">
          Boost your links today
        </h2>
        <div className="">
          <a href="#" className="btn full block w-fit mx-auto">
            Get Started
          </a>
        </div>
      </section>
    </article>
  );
}

export default Home;
