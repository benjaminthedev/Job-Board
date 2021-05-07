import './App.css';
import AllJobs from '../../Jobs/AllJobs';
import Header from '../Header/Header';

function App() {
  return (
    <div className="App">
    <Header />
      <ul className="all__jobs">
        <AllJobs />
      </ul>
      
      <div className="App-header">         
        <h1>Remote OK! MERN stack / NEXTJS/ GraphQL Build </h1>
        <em>Tech Used:</em>

        <ul>
          <li>Create React App</li>
          <li>Axios</li>
          <li>ReactJS</li>
          <li>MongoDB</li>
          <li>ExpressJS</li>
          <li>React Router</li>
          <li>NextJS</li>
          <li>GraphQL</li>
          <li>Stripe Payment Gateway</li>
        </ul>
    
        <h2>Task List</h2>

    <ul>
      <li>GET API data</li>
      <li>Display data</li>
      <li>react router or nextJS for end points</li>
      <li>End points for tags</li>
      <li>MERN</li>
      <li>Form POST req for new job post</li>
    </ul>
    


      </div>
    </div>
  );
}

export default App;
