import logo from './logo.svg';
import './App.css';
import AllJobs from './Jobs/AllJobs';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
    <Header/>
      <AllJobs />
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
         

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
