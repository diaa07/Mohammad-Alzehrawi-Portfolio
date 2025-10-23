import "./Contact.css";

import whatsappIcon from "../assets/icons/whatsappIcon.png";
import linkedinIcon from "../assets/icons/linkedInIcon.png";
import emailIcon from "../assets/icons/emailIcon.png";
import busIcon from "../assets/icons/whatsappBusIcon.png";

export default function ContactMe() {
  const contactList = [
    {
      id: "con0",
      image: emailIcon,
      url: "mailto:M.Zihrawe@gmail.com",
    },
    {
      id: "con1",
      image: linkedinIcon,
      url: "https://www.linkedin.com/in/mohammed-al-zihrawe/",
    },
    {
      id: "con2",
      image: busIcon,
      url: "https://wa.me/971504043860",
    },
    {
      id: "con3",
      image: whatsappIcon,
      url: "https://wa.me/963940438072",
    },
  ];

  return (
    <div className="contact-page" id="contact">
      <h1>Contact Me</h1>
      <div className="contact-grid">
        {contactList.map((cn) => {
          return (
            <div className="contact-link-container" key={cn.id}>
              <a href={cn.url}>
                <img src={cn.image} alt={cn.url} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
