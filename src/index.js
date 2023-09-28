import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localEnMessages from "./locales/en";

const userLocale = navigator.language.substring(0, 2) || 'en';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <IntlProvider locale={userLocale} messages= {userLocale === "es" ? localeEsMessages : localEnMessages}>
      <App userLocale={userLocale}/>
    </IntlProvider>, document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
