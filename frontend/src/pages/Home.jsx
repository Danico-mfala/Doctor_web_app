import React from "react";

const Home = () => {
  return (
    <>
      {/* ===========================Hero Section============================ */}
      <>
        <section className="hero_section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              {/* ================== Hero content ========================= */}

              <div className="lg:w-[570px]">
                <h1
                  className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px]
                md:leading-[70px]"
                >
                  We help patients live a healthy, longer life.
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem quos ullam mollitia ipsa reprehenderit iure, voluptatem
                  voluptates vel voluptatibus, quibusdam dicta a vero
                  exercitationem. Repellendus repudiandae earum maiores
                  asperiores corporis.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Home;
