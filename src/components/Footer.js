import React, { Component } from 'react'

export default class Footer extends Component {
        constructor(){
            super();
            this.state ={
                redirect: null
            }
        }
    render() {
        return (
            <div>
                
 <footer class="page-footer">
     <div class="container no-padding">
         <div class="row"><h3 class="white-text hungry">Recipe of The Day</h3>
                 <p class="grey-text text-lighten-4">Heirloom! One of a Kind! Generational Wealth!</p><br/><br/><br/>
             <div class="col l6 s12">
                 <img class="recipe" src="https://s23209.pcdn.co/wp-content/uploads/2019/10/Easy-Clam-ChowderIMG_1073-360x360.jpg" alt="clam freaking chowder"/>
             </div>
             <div class="col l4 offset-l1 s12">
                 <h5 class="white-text">INGREDIENTS</h5>
                 <ul>
                     <li><p>2 (6.5-ounce) cans chopped clams, juices reserved</p></li>
                     <li><p>2 russet potatoes, peeled and diced</p></li>
                     <li><p>1 cup milk</p></li>
                     <li><p>1 bay leaf</p></li>
                 </ul>
             </div>
             <div class="col l4 offset-l2 s12">
                 <h5 class="white-text">INSTRUCTIONS</h5>
                 <ol>
                     <li><p>Heat a large stockpot or Dutch oven over medium high heat.</p></li>
                     <li><p>Melt butter in the stockpot.</p></li>
                     <li><p>Gradually whisk in milk, vegetable stock, clam juice and bay leaf, and cook, whisking constantly.</p></li>
                     <li><p>Bring to a boil; reduce heat and simmer until potatoes are tender, about 12-15 minutes.</p></li>
                     <li><p>Serve immediately, garnished with clam and parsley, if desired.</p></li>
                 </ol>
             </div>
             {/* <div class="col 14 offset-l2 s12">
                 <h5 class="white-text">Social</h5>
                 <ul>
                     <li><a class="grey-text text-lighten-3" href="#!">Facebook</a></li>
                     <li><a class="grey-text text-lighten-3" href="#!">Linkedin</a></li>
                     <li><a class="grey-text text-lighten-3" href="#!">Google</a></li>
                     <li><a class="grey-text text-lighten-3" href="#!">Instagram</a></li>
                 </ul>
             </div> */}
         </div>
     </div>
 </footer>

            </div>
        )
    }
}
