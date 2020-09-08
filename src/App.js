import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import'./custom.css'


class App extends Component {


  render(){
    
    return (
    

      <div> 


      


        <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top">
          <a class="navbar-brand" href="#">Twitter</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>




        <main role="main" class="container">

          <div class="starter-template">
            <div class="row">
              <div class="col-lg-4">
                  <div class="row">
                    <div class="col-lg-12">
                      
                      <div class="component text-center">
                        <select class="form-control" id="slc-usuario">
                          <option value="1">Lionel Messi</option>
                          <option value="2">Iker Casillas</option>
                        </select>
                        <div id="div-usuarioactual">
                            
                        </div>
                        
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="component text-left" >
                        <h2>Trends</h2>
                        <div id="div-trends">
                          
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              <div class="col-lg-8">
                <div class="component  text-left">
                  <textarea class="form-control" placeholder="What's happening" id="txt-texto"></textarea>
                  <input type="text" class="form-control hashtags-input" placeholder="Hashtags" id="txt-hash"/>
                  <button type="button" class="btn btn-primary" id="btn-nuevo">Tweet</button>
                </div>

                <div id="div-tweets">
                  
                  
                  </div>
              </div>

              
            </div>
          </div>

        </main>


      
      </div>

    

    );

  }



  
}

export default App;
