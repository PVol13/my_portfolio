import React from 'react';
import {
  VerticalTimeline, VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
      <VerticalTimelineElement className='vertical-timeline-element--education' 
      date="2018-2020"
      iconStyle={{background:"#3e497a", color:"#fff" }}
      icon={<SchoolIcon/>}
      >
        <h3 className="vertical-timeline-element-title">Freedom International School, Bengaluru</h3>
      <p>Senior Secondary school</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--education' 
      date="2020-Present"
      iconStyle={{background:"#3e497a", color:"#fff" }}
      icon={<SchoolIcon/>}
      >
        <h3 className="vertical-timeline-element-title">Dayananda Sagar University, Bengaluru</h3>
      <p>BTech, Computer Science and Engineering</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--education' 
      date="2021-2023"
      iconStyle={{background:"#e9d35b", color:"#fff" }}
      icon={<WorkIcon/>}
      >
        <h3 className="vertical-timeline-element-title">Wattpad, Toronto (Remote)</h3>
      <p>Data Ambassador</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--education' 
      date="2021-2022"
      iconStyle={{background:"#e9d35b", color:"#fff" }}
      icon={<WorkIcon/>}
      >
        <h3 className="vertical-timeline-element-title">The Artivists’ Mane, Bengaluru</h3>
      <p>Operations Manager</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--education' 
      date="2022-2023"
      iconStyle={{background:"#e9d35b", color:"#fff" }}
      icon={<WorkIcon/>}
      >
        <h3 className="vertical-timeline-element-title">Emproto Technologies, Bengaluru</h3>
      <p>Project Intern</p>
      </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience