import React from 'react';
import axios from 'axios';
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
      })
  }

  render() {
    return (
    <div className="job__wrapper">
        { this.state.jobs.map(job => 
        <ul>
            <img src={job.company_logo} alt="Job Logo" className="job__logo"/>


            <li>{job.company}</li>
            
            <li>{job.position}</li> 
            <li>{job.tags}</li> 
            <li>{job.date}</li>
            <a href={job.apply_url} target="_blank" rel="noreferrer" >Apply Here</a>
        </ul>
        )}
    </div>
    )
  }
}