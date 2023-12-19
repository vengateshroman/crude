import AllFruits from "./Component/Allfruits";
import Crude from "./Component/Crude";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import AddFruit from "./Component/Addfruits";
import UpdateFruit from "./Component/Updatefruit";
function App() {
  return (
    
    <div>
      <Crude>
       <Routes>
            <Route path="/" element={ <AllFruits/>}></Route>
            <Route path="/Add-fruit" element={<AddFruit/>}></Route>
            <Route path="/update-fruit/:id" element={<UpdateFruit />}></Route>
          
          </Routes>
         </Crude>

    </div>
      );
}

export default App;
