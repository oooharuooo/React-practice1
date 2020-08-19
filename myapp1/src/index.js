// Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from "faker";
import CommentDetail from "./CommentDetail";


// Create a react component
const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
            author ="Sam" 
            timeAgo ="Today at 8:30pm" 
            comment = "It's good" 
            avatar ={faker.image.avatar()}
            />
            <CommentDetail 
            author ="Dat" 
            timeAgo ="Today at 9:30pm" 
            comment = "It's bad"
            avatar ={faker.image.avatar()} 
            />
            <CommentDetail 
            author ="Nathan" 
            timeAgo ="Yesterday at 1:30pm" 
            comment = "I need to know" 
            avatar ={faker.image.avatar()}
            />
        </div>
    );
;}


// Render 
ReactDOM.render(<App />, document.getElementById('root'));