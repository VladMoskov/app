import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let contactItemData = [
    {id: 1, name: 'Nic'},
    {id: 2, name: 'Jon'},
    {id: 3, name: 'Alibaba'},
    {id: 4, name: 'Artur'},
    {id: 5, name: 'Josef'}
];

let messageItemData = [
    {id: 1, message: 'message 1'},
    {id: 2, message: 'message 2'},
    {id: 3, message: 'message 3'},
    {id: 4, message: 'message 4'},
    {id: 5, message: 'message 5'}
];

ReactDOM.render(

    <React.StrictMode>
        <App messageItemData={messageItemData} contactItemData={contactItemData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
