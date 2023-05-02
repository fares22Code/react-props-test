import Profile from '../Profile/Profile.js';
import pImg from '../../ProfilePic.jpg';

import "./app.css";
function App () {

  return (
    <div className="App">
      <Profile fullName="Fares Trojet" bio="About Me: Experienced HTML,CSS,JavaScript Developer with two years in the industry. Proficient with React. Used problem-solving aptitude to enhance applications performance. Created data visualization tools and integrated designs. Increased speed of product lifecycle and 100% of the time delivered projects within deadline. " profession="- Web Developer -"  >
     <img src={pImg} alt="img"/> 
     
      </Profile>
    </div>
    );
}

export default App;
