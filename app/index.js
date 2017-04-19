/**
 * this is for website index
 */

import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import Users from './containers/Users';
import reducer from './reducers';
import FixedDataTable from './components/FixedDataTable'

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

const root = document.createElement("div");

render(
    <Provider store={store}>
      <div>
        {/*<Users />*/}
        <FixedDataTable />
      </div>
    </Provider>,
    document.body.appendChild(root)
)