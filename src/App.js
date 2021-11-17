import {Ind} from './ind.js';
import "./grid.css";
const data=require('./data.json');
function App() {
  return (
    <center className="grid-container">
       {Object.keys(data).map((item, index) => {
                return <Ind key={index} class="grid-item" img={item["ImageUrl"]} dec={item["ShortDesc"]} name={item["Name"]} />
            })}
    </center>
  );
}

export default App;
