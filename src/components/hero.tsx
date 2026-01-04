import randomImage from '../assets/random-image.jpeg';
import { GitHubIcon, TwitterIcon, BlogIcon, LinkedInIcon } from './icon';
import Section from "./section";

export default function Hero() {
  return (
    <Section id="home" className="flex items-center justify-center px-4">
      <div
        className="bg-cover bg-center bg-no-repeat relative flex items-center justify-center rounded-[2rem]"
        style={{
          backgroundImage: `url(${randomImage})`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70 rounded-[2rem]"></div>

        <div className="relative z-10 w-full px-4 sm:px-8 py-16">
          <div className="space-y-2">
            {/* Main Heading and Subtitle */}
            <div className="flex flex-wrap items-baseline gap-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                박성훈
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-100">
                Koderpark
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-200">
              개발자들이 개방적으로 지식을 공유하는 문화에 감명받아 <br />
              블로그에 지식을 정리하고, 동아리 운영진으로 활동하며, 컨퍼런스에
              참여하는등 적극적으로 활동해 왔습니다. <br />
              이러한 과정에서 시야를 넓혀왔고, 꾸준한 학습과 경험을 통해
              전문적인 SW Engineer가 되고자 합니다. <br />
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 items-start pt-4">
              <a
                href="https://github.com/koderpark"
                target="_blank"
                rel="noopener noreferrer"
                className="ps-3 pe-4 py-2 bg-black/80 text-white rounded-full font-medium hover:bg-black transition-colors text-base backdrop-blur-sm flex items-center gap-2"
              >
                <GitHubIcon className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://twitter.com/koderpark"
                target="_blank"
                rel="noopener noreferrer"
                className="ps-3 pe-4 py-2 bg-black/80 text-white rounded-full font-medium hover:bg-black transition-colors text-base backdrop-blur-sm flex items-center gap-2"
              >
                <TwitterIcon className="w-4 h-4" />
                Twitter
              </a>
              <a
                href="https://blog.koder.page"
                target="_blank"
                rel="noopener noreferrer"
                className="ps-3 pe-4 py-2 bg-blue-200/80 text-blue-800 rounded-full font-medium hover:bg-blue-300/80 transition-colors text-base backdrop-blur-sm flex items-center gap-2"
              >
                <BlogIcon className="w-4 h-4" />
                Blog
              </a>
              <a
                href="https://www.linkedin.com/in/koderpark"
                target="_blank"
                rel="noopener noreferrer"
                className="ps-3 pe-4 py-2 bg-blue-200/80 text-blue-800 rounded-full font-medium hover:bg-blue-300/80 transition-colors text-base backdrop-blur-sm flex items-center gap-2"
              >
                <LinkedInIcon className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

