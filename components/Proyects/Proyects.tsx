import Image from "next/image";
import React from "react";
import { SiGithub } from "react-icons/si";
import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { dataProyectos } from "../../data/dataProyects";
import Layout from "../Layout/Layout";
const Proyects = () => {
  return (
    <Layout>
      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-10 bg-black"
        id="#portfolio"
      >
        {dataProyectos.map(
          ({ id, name, imgs, tecnologys, git, link, type, desc }) => (
            <article
              key={id}
              className={`w-full rounded-md overflow-hidden shadow-2xl border ${"border-primary-500"}`}
            >
              <div className="relative overflow-hidden">
                <div className="hover:scale-125 transition-transform duration-500">
                  <Swiper
                    loop={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: true,
                    }}
                    slidesPerView={1}
                    centeredSlides={true}
                    spaceBetween={50}
                    speed={1000}
                    longSwipes={false}
                    simulateTouch={false}
                    effect={"fade"}
                    modules={[Autoplay, EffectFade]}
                    className="mySwiper"
                  >
                    {imgs.map((item) => (
                      <SwiperSlide key={item} className="flex">
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex"
                        >
                          <Image
                            loading="lazy"
                            alt={item}
                            width={750}
                            height={450}
                            src={item}
                          />
                        </a>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  {/* <div className="w-full h-full flex justify-center items-center absolute top-0 gap-5 z-20   bg-black/50 opacity-0 transition-opacity ease-in-out duration-300 hover:opacity-100">
                  {type === "Personal" && (
                    <button
                      className="z-50 text-white bg-gray-800 px-5 py-2 rounded flex justify-center gap-3"
                      onClick={() => window.open(git)}
                    >
                      <SiGithub size={25} />
                      Ver Codigo
                    </button>
                  )}

                  <button
                    className="z-50 text-white bg-gray-800 px-5 py-2 rounded flex justify-center gap-3"
                    onClick={() => window.open(link)}
                  >
                    <HiExternalLink size={25} />
                    Ver Pagina
                  </button>
                </div> */}
                </div>
              </div>
              <div className="p-3">
                <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
                <p className="pt-2 font-semibold text-gray-800 text-xs">
                  {desc}
                </p>
                <div className="flex gap-5 pt-4 text-gray-800">
                  {tecnologys.map((item) => item)}
                </div>
              </div>
            </article>
          )
        )}
      </div>
    </Layout>
  );
};

export default Proyects;
