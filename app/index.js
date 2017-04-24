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
import Header from './containers/Header';
import reducer from './reducers';
import FixedDataTable from './components/FixedDataTable'
import ReactECharts from './components/EchartTest'

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

const root = document.createElement("div");

let myData = {
  xAxisData:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
  yAxisData:null,
  seriesData: [5, 20, 36, 10, 10, 20]
}
render(
    <Provider store={store}>
      <div style={{"minWidth": "1123px"}}>
        {/*<Users />*/}
        {/*<FixedDataTable />*/}
        <Header />
       <ReactECharts data={myData} />
      </div>
    </Provider>,
    document.body.appendChild(root)
)