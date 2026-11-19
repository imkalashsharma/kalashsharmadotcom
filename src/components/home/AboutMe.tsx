import { Image } from "antd";
import { FlexContainer } from "../FlexContainer";

export const AboutMe = () => {
  const imgSrc: string = "/images/avatar/avatar_256.png";

  return (
    <FlexContainer>
      <div className="aboutMe flex items-center justify-between md:w-4/5">
        <div className="aboutMe__picture md:w-1/2">
          <FlexContainer>
            <Image
              height={200}
              width={200}
              src={imgSrc}
              alt="Kalash Sharma Picture"
            />
          </FlexContainer>
        </div>

        <div className="aboutMe__content text-sm md:text-md md:w-1/2">
          <p className="mb-3">
            Somewhere between writing code, solving problems, and going down
            unexpected technical rabbit holes, I found my thing — software
            engineering.
          </p>

          <p className="mb-3">
            I'm into building full-stack applications, understanding the systems
            that power them, and exploring how AI can make software more
            capable. I enjoy experimenting with ideas, learning by building, and
            occasionally spending way too much time figuring out how something
            works.
          </p>

          <p>
            There's always something interesting to build or learn. That's what
            keeps me going.
          </p>
        </div>
      </div>
    </FlexContainer>
  );
};
