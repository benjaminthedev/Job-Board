import React from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';
import './Jobs.css';

export default class AllJobs extends React.Component {
  state = {
    jobs: []
  }

  componentDidMount() {
    axios.get(`https://remoteok.io/api`)
      .then(res => {
        const jobs = res.data;
        this.setState({ jobs });
        // console.log("all jobs:");
        // console.log(jobs);
      })
  }


  
  render() {
    return (
    <div className="job__wrapper">
        { this.state.jobs.map((job) => 
          <li key={job.id}>
              <img src={job.company_logo} alt="Job Logo" className="job__logo"/>
              <p>{job.company}</p>            
              <p>{job.position}</p> 
              <p>{job.tags}</p> 
              <p>{job.date}</p>
              <a href={job.apply_url} target="_blank" rel="noreferrer">Apply Here</a>

            <div className="job__desc">
                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(job.description)}} />
            </div>
          </li>
        )}
    </div>
    )
  }
        
}