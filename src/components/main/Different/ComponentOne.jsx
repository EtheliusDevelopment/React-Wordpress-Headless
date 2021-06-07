// form Pubblicaaione post
// * salvare valori campi
// * inviare post
// * leggere risposta

import React, { Component } from 'react'

export class ComponentOne extends Component {

    constructor(props) {

        super(props);
        this.state = {
            title : "",
            content: "",
            status: ""
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

        
    onChange (e) {
        this.setState({ [e.target.name] : e.target.value })
        
    }

    onSubmit(e){
    e.preventDefault();
    const newPost = this.state;

        fetch('http://micheled20.sg-host.com/wp-json/wp/v2/posts', {

        method: 'POST', 

        headers: {
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taWNoZWxlZDIwLnNnLWhvc3QuY29tIiwiaWF0IjoxNjIwODI0MDQ3LCJuYmYiOjE2MjA4MjQwNDcsImV4cCI6MTYyMTQyODg0NywiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.Y2Q04WwXVfRR0j3F6rDuRPChfQNYKQUAlmk9j-kHW7Y'
        },

        body: JSON.stringify(newPost),
        })

        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });

    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
            <label htmlFor="title">TITLE</label>
            <input name="title"type="text" onChange={this.onChange}/>
            <br/>
            <label htmlFor="content">Content</label>
            <textarea name="content" onChange={this.onChange}/>
            <br/>
            <label htmlFor="status">Status</label>
            <input name="status" type="text" onChange={this.onChange} />
            <br/>
            <button type="submit">Aggiungi Post</button>
        </form>
        )
    }
}

export default ComponentOne





