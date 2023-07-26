import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App';
import * as serviceWorker from './registerServiceWorker';

// render micro frontend function
let root = null
console.log(root, "root");
window.renderFcuPortal = (containerId, history) => {
  root = ReactDOM.createRoot(document.getElementById(containerId))
  root.render(
    <App history={history}/>
  );
  serviceWorker.unregister();
};

// unmount micro frontend function
window.unmountFcuPortal = containerId => {
  // console.log(containerId, 'containerId', document.getElementById(containerId));
  console.log(root, 'root');
  root.unmount()
  // element.parentNode.childNodes[1].parentNode.removeChild(element.parentNode.childNodes[1])
  // ReactDOM.unmountComponentAtNode(element);
};

// Mount to root if it is not a micro frontend
if (!document.getElementById('FcuPortal-container')) {
  root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(
    <App/>
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();