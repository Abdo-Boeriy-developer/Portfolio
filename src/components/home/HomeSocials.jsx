import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';
function HomeSocials() {
  const sociales = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/abdelrahman-boeriy1',
      icons: <FaLinkedin />,
    },
    {
      id: 2,
      link: 'https://github.com/Abdo-Boeriy-developer',
      icons: <FaGithub />,
    },
    {
      id: 3,
      link: '#',
      icons: <FaDribbble />,
    },
  ];

  return (
    <>
      <div className="home_socials">
        {sociales.map(({ id, link, icons }) => (
          <a key={id} href={link} target="_blank">
            {icons}
          </a>
        ))}
      </div>
    </>
  );
}

export default HomeSocials;

// <div className="home_socials">
//   <a href="#" target="_blank">
//     <FaLinkedin />
//   </a>
//   <a href="#" target="_blank">
//     <FaGithub />
//   </a>
//   <a href="#" target="_blank">
//     <FaDribbble />
//   </a>
// </div>;
