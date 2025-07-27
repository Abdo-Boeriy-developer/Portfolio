import "./contact.css";

import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
const ContactData = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    title: "Email",
    info: "Eng.Abdo.Boeriy",
    link: "mailto:eng.abdoboeriy@gmail.com",
  },
  {
    id: 2,
    icon: <RiMessengerLine />,
    title: "Messenger",
    info: "عبدو برعي",
    link: "https://www.facebook.com/share/1DpacwrKtH/?mibextid=LQQJ4d ",
  },
  {
    id: 3,
    icon: <BsWhatsapp />,
    title: "WhatsApp",
    info: "Abdo",
    link: "http://wa.me/201033413696",
  },
];

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_kte8jar",
      "template_of42squ",
      form.current,
      "7pnNlLaSmoGaGWIP_"
    );
    e.target.reset();
  };

  return (
    <section className="contact" id="contact">
      <div className="top_section">
        <h5>Get In Touch</h5>
        <h2>Me Contact</h2>
      </div>

      <div className="container contact_container">
        <div className="contact_options ">
          {ContactData.map(({ id, icon, title, info, link }) => (
            <article
              key={id}
              className="contact_option bg-[#2c2c6c] dark:bg-gray-900"
            >
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a href={link} target="_blank">
                Send Message
              </a>
            </article>
          ))}
        </div>

        <form ref={form} onSubmit={sendEmail} action="">
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            className="border-[#4db5ff] border-1 border-solid dark:border-gray-900 "
          />
          <input
            type="email"
            placeholder="Your EMail"
            name="email"
            className="border-[#4db5ff] border-1 border-solid dark:border-gray-900 "
          />
          <textarea
            rows={10}
            name="message"
            id=""
            placeholder="Enter Your Message"
            className="border-[#4db5ff] border-1 border-solid dark:border-gray-900 "
          ></textarea>
          <button className="btn btn-primary bg-[#4db5ff] text-[#1f1f38] dark:bg-gray-900 dark:text-gray-500 ">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
