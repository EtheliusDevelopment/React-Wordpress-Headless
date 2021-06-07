import React, { Component } from 'react'



export class HomeComponentOne extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts : [],
            isLoading : true
        }
    }

    // fetch('http://micheled20.sg-host.com/wp-json/wp/v2/posts', {

    //     method: 'POST', 

        // headers: {
        // 'Content-Type': 'application/json',
        // 'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taWNoZWxlZDIwLnNnLWhvc3QuY29tIiwiaWF0IjoxNjIwODI0MDQ3LCJuYmYiOjE2MjA4MjQwNDcsImV4cCI6MTYyMTQyODg0NywiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.Y2Q04WwXVfRR0j3F6rDuRPChfQNYKQUAlmk9j-kHW7Y'
        // },

   
        componentDidMount(){
        fetch("http://micheled20.sg-host.com/wp-json/wp/v2/posts",{
            method: 'GET',

            
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taWNoZWxlZDIwLnNnLWhvc3QuY29tIiwiaWF0IjoxNjIwODI0MDQ3LCJuYmYiOjE2MjA4MjQwNDcsImV4cCI6MTYyMTQyODg0NywiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.Y2Q04WwXVfRR0j3F6rDuRPChfQNYKQUAlmk9j-kHW7Y'
            }
    


        })
        .then(res => res.json())
        .then(data => this.setState({
                    posts : data,
                    isLoading : false
                
                }));
    
    }

    render() {
        
        const posts = this.state.posts
        console.log(posts);



        return (
            <div>
                <h3> ciao sono componentOne </h3>

                {
                   posts.map(post => 
                      <div  style={{border:"solid 2px red"}} key={post.id}>
                           <h1 style={{color:"teal"}} >{post.title.rendered}</h1>
                           <p style={{color:"gray"}} >{post.content.rendered}</p>
                           <img src={post.featured_image_url} alt={post.title.rendered} />
                      </div>
                   )
                }
                
            </div>
        )
    }
}

export default HomeComponentOne
