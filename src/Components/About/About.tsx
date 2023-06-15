import React from "react";

const About: React.FC = () => {
  return (
    <div className="text-center">
      <div className="hero min-h-[87vh]">
        <div className="hero-content flex-col lg:flex-row">
          <div className="max-w-md">
            <img
              src="https://scontent.fcgp17-1.fna.fbcdn.net/v/t39.30808-6/354062731_1024653715364409_4364067762953554265_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=4BXJr--UkzcAX-OQK4L&_nc_ht=scontent.fcgp17-1.fna&oh=00_AfBY0LA007FLUA65w8_Mx2wybtG-9zDOZjcHCoBHuKfnxg&oe=648F151E"
              className="rounded-lg shadow-2xl"
              width="100%"
              alt="about me"
            />
          </div>

          <div>
            <h1 className="text-5xl font-bold">About Me!</h1>
            <p className="py-6 font-bold">MD.Kamrul Hasan</p>
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              voluptas officia pariatur aliquam aperiam autem inventore sint!
              Consequatur omnis reiciendis aperiam! Vel quo expedita, quaerat
              quidem libero quae deleniti modi?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
