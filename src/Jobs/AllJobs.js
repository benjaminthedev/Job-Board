import React from 'react';
import axios from 'axios';

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
    <div className="job">
        { this.state.jobs.map(job => 
        <ul>
            <li>{job.id}</li>
            <li>{job.company}</li>
            <li>{job.position}</li> 
            <img src={job.company_logo} alt="Job Logo"/>
            <a href={job.apply_url} target="_blank" rel="noreferrer" >Apply Here</a>
        </ul>
        )}
    </div>
    )
  }
}