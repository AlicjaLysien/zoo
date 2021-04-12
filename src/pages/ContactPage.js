import React from 'react';
import { Prompt } from "react-router-dom";

class ContactPage extends React.Component {
    state = {
        value: "",
        placeholder: "Write a message...",
        button: "send"
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.setState({
            value: ""
        })
    }

    handleChange = (e) =>{
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <div className="contact">
                <form onSubmit={this.handleSubmit}>
                    <h2>Write to us</h2>
                    <textarea value={this.state.value}
                        placeholder={this.state.placeholder}
                        onChange={this.handleChange}></textarea>
                    <button>{this.state.button}</button>
                </form>
                <Prompt 
                    when={this.state.value}
                    message="Do you want to leave the page?"
                />
            </div>
        );
    }
}

export default ContactPage;