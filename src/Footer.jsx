import React from "react";

const Footer = (props) => {
  return (
    <footer>
      <div>
        <h1>{props.title}</h1>
        <p>@all right reserved</p>
      </div>

      <div>
        <h5>Follow Us</h5>
        <div>
          <a href="https://youtube.com/@bhupeshyadav0001" target={"blank"}>
            Youtube
          </a>
          <a href="https://instagram.com/ydv.bhupesh" target={"blank"}>
            Instagram
          </a>
          <a href="https://github.com/bhupesh003" target={"blank"}>
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;