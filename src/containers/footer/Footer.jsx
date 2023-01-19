import logo from "./../../assets/logo.svg";
import "./footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="heading">
        <h1 className="gradient-text">
          Do you want to step in to the future before others
        </h1>
      </div>
      <p className="request">Request Early Access</p>
      <div className="container">
        <div className="box1">
          <img src={logo} />
          <p className="p-box1">
            Crechterwoord K12 182 DK<br /> Alknjkcb, All Rights Reserved
          </p>
        </div>
        <div className="box2">
          <ul>
            <li>Links</li>
            <li>Overons</li>
            <li>Social Media</li>
            <li>Counters</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="box3">
          <ul>
            <li>Company</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="box4">
          <ul>
            <li>Get in touch</li>
            <li>Crechterwoord K12 182 DK Alknjkcb</li>
            <li>085-132567</li>
            <li>info@payme.net</li>
          </ul>
        </div>
      </div>
      <p className="end">© 2021 GPT-3. All rights reserved.</p>
    </div>
  );
}
export default Footer;
