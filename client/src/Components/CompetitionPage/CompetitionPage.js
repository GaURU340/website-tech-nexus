import React from "react";
import { Carousel } from "3d-react-carousal";
import "./competitionPage.css";
import { bounceIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
const clicked = (id) => {
  console.log("Id " + id + " Clicked");
};

let slides = [
  <img
    src="https://previews.123rf.com/images/vasilyrosca/vasilyrosca1710/vasilyrosca171000084/88190043-electro-party-music-night-poster-template-electro-style-concert-disco-party-event-invitation-.jpg"
    alt="1"
  />,
  <img
    src="https://previews.123rf.com/images/vasilyrosca/vasilyrosca1710/vasilyrosca171000084/88190043-electro-party-music-night-poster-template-electro-style-concert-disco-party-event-invitation-.jpg"
    alt="2"
  />,
  <img
    src="https://previews.123rf.com/images/vasilyrosca/vasilyrosca1710/vasilyrosca171000084/88190043-electro-party-music-night-poster-template-electro-style-concert-disco-party-event-invitation-.jpg"
    alt="3"
  />,
  <img
    src="https://previews.123rf.com/images/vasilyrosca/vasilyrosca1710/vasilyrosca171000084/88190043-electro-party-music-night-poster-template-electro-style-concert-disco-party-event-invitation-.jpg"
    alt="4"
  />,
  <img
    src="https://previews.123rf.com/images/vasilyrosca/vasilyrosca1710/vasilyrosca171000084/88190043-electro-party-music-night-poster-template-electro-style-concert-disco-party-event-invitation-.jpg"
    alt="5"
  />,
];
const images = slides.map((slide) => {
  console.log(slide.props.src);
  return (
    <>
      <div key={slide.props.alt} className="competitionImage">
        <img
          src={slide.props.src}
          alt="An imag"
          onClick={() => clicked(slide.props.alt)}
        />
      </div>
    </>
  );
});

const CompetitionPage = () => {
  const styles = {
    bounceIn: {
      animation: 'x 1s',
      animationName: Radium.keyframes(bounceIn, 'bounceIn')
    }
  }
  return (
    <StyleRoot>
    <div id="competitions" style={styles.bounceIn}>
      <div className="headingLabel">COMPETITIONS</div>
      <Carousel slides={images} autoplay={false} />
    </div>
    </StyleRoot>
  );
};

export default CompetitionPage;
