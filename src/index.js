import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import App from './components/App';
import Hero from './components/Hero'
import notFound from './components/notFound'
import registerServiceWorker from './registerServiceWorker';
import './css/App.css';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
      <Match exactly pattern="/" component={Hero} />
      <Miss component={notFound} />
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
