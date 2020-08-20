// Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

// Create a react component
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author ="Sam" 
                    timeAgo ="Today at 8:30pm" 
                    comment = "It's good" 
                    avatar ={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author ="Dat" 
                    timeAgo ="Today at 9:30pm" 
                    comment = "It's bad"
                    avatar ={faker.image.avatar()} 
                />
            </ApprovalCard> 
              
            <ApprovalCard>
                <CommentDetail 
                    author ="Nathan" 
                    timeAgo ="Yesterday at 1:30pm" 
                    comment = "I need to know" 
                    avatar ={faker.image.avatar()}
                />
            </ApprovalCard> 
        </div>
    );
;}


// Render 
ReactDOM.render(<App />, document.getElementById('root'));