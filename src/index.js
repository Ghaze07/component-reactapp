import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
   return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard >
            <CommentDetail 
            author="Bish" 
            timeAgo="Today at 4:50pm" 
            content="this is good" />
             </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
            author="Ghazi" 
            timeAgo="Today at 6:50pm" 
            content="nice though"/>
        </ApprovalCard>
            <ApprovalCard> 
            <CommentDetail 
            author="Khan" 
            timeAgo="Today at 7:50pm" 
            content="excellent"/>
            </ApprovalCard>
           <ApprovalCard> 
            <CommentDetail 
            author="Ali" 
            timeAgo="Today at 9:50pm" 
            content="beautiful"/>
            </ApprovalCard>
        </div>
   );
};

ReactDom.render(<App/>, document.querySelector('#root'));
