import React from 'react';

import { Route, Link, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import Box from '@material-ui/core/Box';

class Home extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        page : "",
      };
    }
    render(){
      
      return(
        <React.Fragment >
          <br></br>
          <br></br>
          <br></br>
          <p style = {{top: 100}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Mattis pellentesque id nibh tortor id aliquet lectus. 
            Lectus nulla at volutpat diam ut venenatis tellus. Mi ipsum faucibus vitae aliquet nec 
            ullamcorper sit. Egestas sed tempus urna et pharetra pharetra. Mi bibendum neque egestas 
            congue quisque egestas diam in arcu. Sit amet aliquam id diam maecenas ultricies mi eget 
            mauris. Morbi enim nunc faucibus a pellentesque sit amet. Sollicitudin aliquam ultrices 
            sagittis orci a scelerisque. Egestas pretium aenean pharetra magna ac placerat vestibulum 
            lectus. A iaculis at erat pellentesque adipiscing commodo elit at.
          </p>
          <p>
            Lacus sed viverra tellus in hac habitasse platea. Nunc vel risus commodo viverra maecenas 
            accumsan lacus vel facilisis. Pharetra vel turpis nunc eget. Iaculis at erat pellentesque 
            adipiscing commodo. Etiam non quam lacus suspendisse. Sit amet mauris commodo quis 
            imperdiet massa. Dui nunc mattis enim ut. At ultrices mi tempus imperdiet nulla malesuada. 
            Auctor augue mauris augue neque gravida. Auctor elit sed vulputate mi sit amet mauris 
            commodo quis. Tincidunt id aliquet risus feugiat in. Odio facilisis mauris sit amet massa 
            vitae tortor condimentum. Pulvinar mattis nunc sed blandit libero. Sit amet est placerat 
            in egestas erat. Scelerisque fermentum dui faucibus in. Ac felis donec et odio 
            pellentesque diam volutpat commodo sed. Facilisi nullam vehicula ipsum a. Adipiscing elit 
            ut aliquam purus sit amet luctus venenatis. Id velit ut tortor pretium viverra suspendisse 
            potenti nullam.
          </p>
          <p>
            Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. Sem integer vitae justo 
            eget. Ullamcorper velit sed ullamcorper morbi tincidunt. Pulvinar neque laoreet suspendisse 
            interdum consectetur libero id faucibus. Vestibulum rhoncus est pellentesque elit. 
            Ullamcorper malesuada proin libero nunc. Et netus et malesuada fames ac. Consectetur a erat 
            nam at lectus urna duis convallis. Tellus pellentesque eu tincidunt tortor aliquam. Pharetra 
            pharetra massa massa ultricies mi quis hendrerit dolor. Suspendisse interdum consectetur 
            libero id faucibus nisl tincidunt eget.
          </p>
          <p>
            Augue mauris augue neque gravida in fermentum. In eu mi bibendum neque egestas. Egestas 
            maecenas pharetra convallis posuere morbi leo urna. Quis risus sed vulputate odio ut enim. 
            Ornare aenean euismod elementum nisi quis. Id porta nibh venenatis cras sed. Non diam 
            phasellus vestibulum lorem sed risus ultricies tristique. Suspendisse interdum consectetur 
            libero id faucibus nisl. Libero nunc consequat interdum varius sit amet mattis vulputate. 
            Est sit amet facilisis magna etiam tempor. Quam elementum pulvinar etiam non. Velit 
            scelerisque in dictum non consectetur a. Ut placerat orci nulla pellentesque. Mattis 
            vulputate enim nulla aliquet porttitor lacus luctus accumsan.
          </p>
          <p>
            Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Et pharetra pharetra massa massa 
            ultricies mi quis hendrerit. Eu tincidunt tortor aliquam nulla facilisi cras fermentum
            odio. At in tellus integer feugiat scelerisque. Sapien pellentesque habitant morbi 
            tristique. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Massa 
            massa ultricies mi quis hendrerit. Sed tempus urna et pharetra pharetra massa massa 
            ultricies. Turpis cursus in hac habitasse platea. Quis hendrerit dolor magna eget est lorem 
            ipsum. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Morbi 
            tristique senectus et netus.
          </p>
      
        </React.Fragment>
      );
    }
  }

  export default Home;
  