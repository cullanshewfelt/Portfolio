import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import { initializeData } from './actions/dataActions';

import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// fetch('http://localhost:4000/api/background-instrumentals/releasesBI/')
//   .then(response => response.json())
//   .then(response => {
//       response.data.unshift({rel_id: 9999, rel_num: "All", rel_num_only: "All"})
//     store.dispatch(initializeBIReleases(response.data))})
//   .catch(err => console.error(err));
//


// const modalReducerDeafultState = {
//   selectedComposer: [],
//   selectedCue: {},
//   selectedTrack: {},
//   selectedCueId: 0,
//   showCategories: false,
//   showInstruments: false,
//   showKeywords: false,
//   showModal: false,
//   showRating: false,
//   showStyles: false,
//   showTempos: false,
//   showText: false
// }
//
// store.dispatch(initializeModal(modalReducerDeafultState))

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);


ReactDOM.render(jsx, document.getElementById('root'));
