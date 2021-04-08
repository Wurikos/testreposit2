import React from "react";
import Index from "pages/index";
import Index1 from "pages/index1";
import Index11 from "pages/index11";
import Index111 from "pages/index111";
import Index1111 from "pages/index1111";
import Index12 from "pages/index12";
import Page2 from "pages/page2";
import Page21 from "pages/page21";
import Page22 from "pages/page22";
import Page23 from "pages/page23";
import Page24 from "pages/page24";
import Page241 from "pages/page241";
import Page2411 from "pages/page2411";
import Page404 from "pages/page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export default () => (
    <Router>
        <GlobalStyles />
        <Switch>
        			<Route exact path='/' component={Index}/>
			<Route exact path='/index' component={Index}/>
			<Route exact path='/index1' component={Index1}/>
			<Route exact path='/index1/index11' component={Index11}/>
			<Route exact path='/index1/index111' component={Index111}/>
			<Route exact path='/index1/index1111' component={Index1111}/>
			<Route exact path='/index12' component={Index12}/>
			<Route exact path='/page2' component={Page2}/>
			<Route exact path='/page2/page2-1' component={Page21}/>
			<Route exact path='/page2/page2-2' component={Page22}/>
			<Route exact path='/page2/page2-3' component={Page23}/>
			<Route exact path='/page2/page2-3/page2-4' component={Page24}/>
			<Route exact path='/page2/page2-3/page2-41' component={Page241}/>
			<Route exact path='/page2/page2-3/page2-411' component={Page2411}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);
