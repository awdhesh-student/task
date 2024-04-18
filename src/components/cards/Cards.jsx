import React from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';

const Cards = () => {
   const data = [
      {
         id: 1,
         icon: <AccessibilityNewIcon />,
         heading: "Threat Discovery",
         desc: "Freeze relentlessly scours the industry for companies selling data that puts your organization at risk"
      },
      {
         id: 2,
         icon: <CreateOutlinedIcon />,
         heading: "Threat Discovery",
         desc: "Freeze relentlessly scours the industry for companies selling data that puts your organization at risk"
      },
      {
         id: 3,
         icon: <RocketLaunchOutlinedIcon />,
         heading: "Threat Discovery",
         desc: "Freeze relentlessly scours the industry for companies selling data that puts your organization at risk"
      },
      {
         id: 4,
         icon: <RocketLaunchOutlinedIcon />,
         heading: "Threat Discovery",
         desc: "Freeze relentlessly scours the industry for companies selling data that puts your organization at risk"
      },
      {
         id: 5,
         icon: <RocketLaunchOutlinedIcon />,
         heading: "Threat Discovery",
         desc: "Freeze relentlessly scours the industry for companies selling data that puts your organization at risk"
      },
      {
         id: 6,
         icon: <RocketLaunchOutlinedIcon />,
         heading: "Threat Discovery",
         desc: "Freeze relentlessly scours the industry for companies selling data that puts your organization at risk"
      },
   ]
   return (
      <>
         <div className='card-header-content'>
            <h2 style={{ color: "#6900e4" }}>Security is personal</h2>
            <h1>Freeze protects your employees to defend your organization</h1>
            <p>Attackers don't just rely on data from the dark web. A massive, ever-growing set of personal data about your employees is legally available in an open market.</p>
         </div>
         <div className="cards">
            {data.map((item) => (
               <Card className='card' sx={{ maxWidth: 345, overflow: "visible", backgroundColor: "rgba(239, 239, 239, 0.866)"}} key={item.id}>
                  <span>{item.icon}</span>
                  <Typography gutterBottom variant="h5" component="div">
                     {item.heading}
                  </Typography>
                  <Typography variant="body2" style={{fontFamily: "none"}}>
                     {item.desc}
                  </Typography>
               </Card>))}
         </div>
      </>
   )
}

export default Cards
