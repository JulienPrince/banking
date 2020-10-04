import React, { useState } from "react";
import {
  ArrowForward,
  ArrowRight,
  HeorH1,
  HeorP,
  HeroBg,
  HeroBtnWrapper,
  HeroContanaire,
  HeroContent,
  VideoBg,
} from "./HeroElement";
import Video from "../../videos/video.mp4";
import { Button } from "../BouttonElement";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContanaire>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeorH1>Bienvenu dans le future</HeorH1>
        <HeorP>
          Lorem ipsum dolor sit amet ullam nihil tenetur aut cumque voluptas
          enim quidem.
        </HeorP>
        <HeroBtnWrapper onMouseEnter={onHover} onMouseLeave={onHover}>
          <Button
            to="singup"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            primary="true"
            dark="true"
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContanaire>
  );
};

export default HeroSection;
