import React from "react";

const About: React.FC = () => {
  return (
    <div className="text-center">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-6/354062731_1024653715364409_4364067762953554265_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=4BXJr--UkzcAX-OQK4L&_nc_ht=scontent.fcgp17-1.fna&oh=00_AfBY0LA007FLUA65w8_Mx2wybtG-9zDOZjcHCoBHuKfnxg&oe=648F151E"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
