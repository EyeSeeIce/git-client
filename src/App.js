import {Navbar} from "./components/Navbar/Navbar";
import InfinityList from "./components/InfinityList/InfinityList";
import {Switch, Route, Redirect} from "react-router-dom";
import UserPage from "./components/UserPage/UserPage";
import RepoPage from "./components/Repo/RepoPage/RepoPage";
import FileRender from "./components/Repo/FileRender/FileRender";


function App() {

  return (
   <>
       <Navbar/>
       <Switch>
           <Route path="/main" component={InfinityList} />
           <Route path='/user/:id' component={UserPage} />
           <Route path='/repo/:user/:repo/' component={RepoPage} />
           <Route path='/file/:file' component={FileRender} />
           <Redirect to={'/main'}/>
       </Switch>
   </>
  );
}

export default App;
