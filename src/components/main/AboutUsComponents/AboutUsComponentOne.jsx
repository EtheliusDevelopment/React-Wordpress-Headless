import React, { Component } from 'react'

export default class AboutUsComponentOne extends Component {
    constructor (props) {
        super(props);
        this.state = {
            users : [],
            isLoading : true
        }
    }

    componentDidMount(){
        fetch("http://micheled20.sg-host.com/wp-json/wp/v2/users", {
            method : "GET",

            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taWNoZWxlZDIwLnNnLWhvc3QuY29tIiwiaWF0IjoxNjIwODI0MDQ3LCJuYmYiOjE2MjA4MjQwNDcsImV4cCI6MTYyMTQyODg0NywiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.Y2Q04WwXVfRR0j3F6rDuRPChfQNYKQUAlmk9j-kHW7Y'
                }
        })
        .then(res => res.json())
        .then(data => this.setState({
                    users : data,
                    isLoading : false
                
                }));
    
    }


    render() {
        const users = this.state.users
        console.log(users)

        if ( this.state.isLoading ) {
            return (
                <img src="https://i.ibb.co/zbBSfZN/loader.gif" alt="" />
            )
        } else {

            return (

             <div>
                    {
                    users.map(user => <h1 key={user.id} style={{color : "blue"}}>{user.name}</h1>)
                }
               
             </div>
               
            )
        }
      
    }
}
