import React from 'react';
import { MdOutlineCastForEducation } from "react-icons/md";
import Pageheadcontainer from '../../Components/Pageheadcontainer/Index';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { data } from './utils';
import {MdWork} from 'react-icons/md'
import './index.scss'

const Index = () => {
  return (
    <div>
      <section id='resume' className='resume'>
        <Pageheadcontainer HeaderText='EXPERIENCE & EDUCTAION' icon={<MdOutlineCastForEducation size={40} />} />
        <div className='timeline'>
          <div className='timeline-experience'>
            <h3 className='timeline-experience-header'>Experience</h3>
            <VerticalTimeline layout='1-column' lineColor='var(--yellow-theme-main-color)'>
              {data.experience.map((item, i) => (
                <VerticalTimelineElement
                  key={i}
                  className='timeline-experience-vertical-timeline-element'
                  contentStyle={{
                    background:'none',
                    color:'var(--yellow--theme-main-color)',
                    border:'1.5px solid var(--yellow--theme-main-color)'
                  }}
                  icon={<MdWork />}
                  iconStyle={{
                    background:'#181818',
                    color:'var(--yellow--theme-main-color)'
                  }}
                >
                  <div className='vertical-timeline-element-wrapper'>
                    <h3 className='vertical-timeline-element-title'>{item.title}</h3>
                    <h4 className='vertical-timeline-element-subtitle'>{item.subtitle}</h4>
                  
                  </div>
                  <p>{item.description}</p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
          <div className='timeline-education'>
            <h3 className='timeline-education-header'>Education</h3>
            <VerticalTimeline layout='1-column' lineColor='var(--yellow--theme-main-color)'>
              {data.education.map((item, i) => (
                <VerticalTimelineElement
                  key={i}
                  className='timeline-education-vertical-timeline-element'
                  contentStyle={{
                    background:'none',
                    color:'var(--yellow--theme-main-color)',
                    border:'1.5px solid var(--yellow--theme-main-color)'
                  }}
                  icon={<MdWork />}
                  iconStyle={{
                    background:'#181818',
                    color:'var(--yellow--theme-main-color)'
                  }}
                >
                  <div className='vertical-timeline-element-wrapper'>
                    <h3 className='vertical-timeline-element-title'>{item.title}</h3>
                    <h4 className='vertical-timeline-element-subtitle'>{item.subtitle}</h4>
                  </div>
                  <p>{item.description}</p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
