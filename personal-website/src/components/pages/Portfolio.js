import React from 'react';
import projects from '../../data/projects';
import './Portfolio.css'; // Import the CSS file for styling
import { AiFillGithub } from 'react-icons/ai';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import AbstractFuturisticImage from '~/assets/futuristic-images/Abstract-futuristic-blue-background-Graphics-17251979-1.jpg';
import AnotherCityImage from '~/assets/futuristic-images/anothercity.jpeg';
import CityFuturisticImage from '~/assets/futuristic-images/city_futuristic.jpeg';
import CityPart5Image from '~/assets/futuristic-images/citypart5.jpeg';
import GreenStuffImage from '~/assets/futuristic-images/greenstuff.jpeg';
import LastCityImage from '~/assets/futuristic-images/lastcity.jpeg';
import MoreCitiesImage from '~/assets/futuristic-images/morecities.jpeg';
import SomeCityImage from '~/assets/futuristic-images/somecity.jpeg';
import WeirdThingImage from '~/assets/futuristic-images/weirdthing.jpeg';

const imagePaths = [
  AbstractFuturisticImage,
  AnotherCityImage,
  CityFuturisticImage,
  CityPart5Image,
  GreenStuffImage,
  LastCityImage,
  MoreCitiesImage,
  SomeCityImage,
  WeirdThingImage,
];

const Portfolio = () => {
  const theme = useTheme();

  return (
    <div className="portfolio">
      <div className="project-list">
        {projects.map((project, index) => (
          <Card className='project-card' sx={{ display: 'flex', width: 400, height: 250, background: "black" }} key={index}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto', color: "white" }}>
                <Typography component="div" variant="h5">
                  {project.name}
                </Typography>
                <Typography sx={{ color: "white" }} variant="subtitle1" color="text.secondary" component="div">
                  {project.start_date} - {project.end_date}
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <IconButton sx={{ color: "white" }} aria-label="previous">
                  {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                </IconButton>
                <IconButton aria-label="play/pause">
                  <a className="link" href={project.link} target="_blank" rel="noopener noreferrer">
                    <div className=''>
                      <AiFillGithub className='github' />
                    </div>
                  </a>
                </IconButton>
                <IconButton sx={{ color: "white" }} aria-label="next">
                  {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                </IconButton>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 300 }}
              image={project.name === "City Futuristic" ? '' : imagePaths[index]}
              alt="Future Image"
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

// import React from 'react';
// import projects from '../../data/projects';
// import './Portfolio.css'; // Import the CSS file for styling
// import Card from 'react-bootstrap/Card';
// import { AiFillGithub } from 'react-icons/ai';

// const Portfolio = () => {
//   return (
//     <div className="portfolio">
//       <div className="project-list">
//         {projects.map((project, index) => (
//           <Card className='project-card' key={index}>
//             <Card.Header as="h5" className='project-name'>{project.name}</Card.Header>
//             <Card.Body className='project-details'>
//               <Card.Text className='timeframe'><strong>{project.start_date} - {project.end_date}</strong></Card.Text>
//               <a className="link" href={project.link} target="_blank" rel="noopener noreferrer">
//                 <div className=''>
//                   <AiFillGithub className='github' />
//                 </div>
//               </a>
//               <div className='project-skills'>
//                 {project.technologies_used?.map((technology, techIndex) => (
//                   <Card className='skill-card'>
//                     <Card.Body><strong>{technology}</strong></Card.Body>
//                   </Card>
//                 ))}
//               </div>
//             </Card.Body>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Portfolio;
