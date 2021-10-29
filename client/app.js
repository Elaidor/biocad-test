import React,{Component} from "react";
import ReactDOM from "react-dom";
import Search from "./components/search.js";

// import "./style/fonts.css";
// import "./style/style.css";


class App extends Component{
       render(){
        return (      
                 <main className="container">
                        <Search/>
                 </main>
              )
       }
}

ReactDOM.render(<App/>, document.getElementById("app"));