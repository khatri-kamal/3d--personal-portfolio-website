import { motion } from "framer-motion";
import { React } from "react";
import { styles } from "../styles";
import { github, springpod } from "../assets";
import { linkedin } from "../assets";
import { DownloadCV } from "../constants";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-o top-[120px] max-w-7x1 m-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#11998e]" />
          <div className="w-1 h-[371px] bg-[#11998e]" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi! I'm <span className="text-[#11998e]">Kamal</span>
          </h1>
          <p className={`${styles.heroSubText} mt-1 text-white-100 `}>
            and I'm a{" "}
            <span className="text-[#11998e] font-black">Aspiring Digital Craftsman</span>
          </p>
          <h3 className="text-xl font-normal leading-7 mt-3">
            Second Year Computing Science Student, seeking placement.
          </h3>
          {/* // Code below are for the social media icons and their links */}
          <div className="mt-7 flex gap-6 cursor-pointer">
            <div
              onClick={() =>
                window.open("https://github.com/khatri-kamal", "_blank")
              }
              className="relative bg-gray-500 text-white rounded-full px-4 py-2 opacity-80 hover:opacity-100"
            >
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-btn_colors rounded-full shadow-md shadow-secondary border-2 opacity-80 hover:opacity-100" />
              <div className="relative z-10 flex justify-center items-center">
                <img
                  src={github}
                  alt={"github"}
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>
            <div
              onClick={() => window.open("https://www.linkedin.com/", "_blank")}
              className="relative bg-gray-500 text-white rounded-full px-4 py-2 opacity-80 hover:opacity-100"
            >
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-btn_colors rounded-full shadow-md shadow-secondary border-2 opacity-80 hover:opacity-100" />
              <div className="relative z-10 flex justify-center items-center">
                <img
                  src={linkedin}
                  alt={"linkedin"}
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>
            <div
              onClick={() =>
                window.open("https://www.springpod.com/", "_blank")
              }
              className="relative bg-gray-500 text-white rounded-full px-4 py-2 opacity-80 hover:opacity-100"
            >
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-btn_colors rounded-full shadow-md shadow-secondary border-2 opacity-80 hover:opacity-100" />
              <div className="relative z-10 flex justify-center items-center">
                <img
                  src={springpod}
                  alt={"springpod"}
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>
          </div>
          {/* // The code below is to handle cv section, so when it's begin clicked
          it will download cv */}
          <div className="mt-10">
            {DownloadCV.map((cvItem, index) => (
              <a
                key={index}
                href={cvItem.download}
                download="CVTemplate.pdf"
                className="bg-btn_colors py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-secondary rounded-xl opacity-80 hover:opacity-100"
              >
                {cvItem.title}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* // This code is for the animated middle section. */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
          />
        </div>
      </div>
    </section>
  );
};
const handleDownload = (fileURL) => {
  const link = document.createElement("a");
  link.href = fileURL;
  link.download = "CVTemplate.pdf";
  link.click();
};

export default Hero;
