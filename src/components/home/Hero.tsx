import { Button, Image } from "antd";
import { GitHub, Linkedin, Mail } from "react-feather";
import { Link } from "react-router";

import { social } from "@/data/social";

export const Hero = () => {
  return (
    <div className="hero md:flex w-full">
      <div className="hero__illustration__mobile md:hidden md:w-1/2 mb-6">
        <div className="hero__illustration__avatar flex items-center justify-center mb-4">
          <Image
            preview={false}
            width={180}
            height={180}
            src="/images/avatar/avatar_256.png"
          />
        </div>

        <div className="hero__illustration__social flex items-center justify-center gap-5">
          <a
            href={social.github}
            className="hero__illustration__social__github"
            target="_blank"
            aria-label="github"
          >
            <GitHub className="w-4 h-4" />
          </a>

          <a
            href={social.linkedin}
            className="hero__illustration__social__linkedin"
            target="_blank"
            aria-label="linkedin"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${social.mail}`}
            className="hero__illustration__social__mail"
            target="_blank"
            aria-label="mail"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="hero__content md:w-1/2">
        <div className="hero__content__text mb-5">
          {/* mobile view */}

          <div className="md:hidden font-bold text-xl text-center">
            Hi! I'm Kalash Sharma.
          </div>
          <div className="md:hidden font-bold text-xl text-center primary-text">
            I turn ideas into products.
          </div>
          <div className="md:hidden mt-5 text-sm text-center">
            Exploring how AI and engineering can solve meaningful real-world
            problems.
          </div>

          {/* medium to large screen */}
          <div className="hidden md:block text-4xl font-bold mb-2">
            Hi! I'm,
          </div>
          <div className="hidden md:block text-4xl font-bold">
            Kalash Sharma.
          </div>
          <div className="hidden md:block text-4xl font-bold primary-text">
            I turn ideas into products.
          </div>
          <div className="hidden md:block text-lg mt-5">
            Exploring how AI and engineering can solve meaningful real-world
            problems.
          </div>
        </div>

        <div className="hero__content__button_group mt-8 flex items-center justify-center md:items-start md:justify-start">
          <Button variant="solid" color="purple">
            <Link to={"/builds"}>Explore Builds</Link>
          </Button>

          <Button variant="solid" color="default" className="mx-3">
            <Link to={"/writings"}>Writings</Link>
          </Button>
        </div>
      </div>

      <div className="hero__illustration hidden md:block md:w-1/2">
        <div className="hero__illustration__avatar flex items-center justify-center mb-8">
          <Image
            preview={false}
            width={220}
            height={220}
            src="/images/avatar/avatar_256.png"
          />
        </div>

        <div className="hero__illustration__social flex items-center justify-center gap-5">
          <a
            href={social.github}
            className="hero__illustration__social__github"
            target="_blank"
            aria-label="github"
          >
            <GitHub className="w-5 h-5" />
          </a>

          <a
            href={social.linkedin}
            className="hero__illustration__social__linkedin"
            target="_blank"
            aria-label="linkedin"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href={`mailto:${social.mail}`}
            className="hero__illustration__social__mail"
            target="_blank"
            aria-label="mail"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};
