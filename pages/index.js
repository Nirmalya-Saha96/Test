import React, { useState, useEffect } from 'react';
import { Card, Button, Icon, Divider, Grid, Image, Header, Search, Segment, Form, Input, } from 'semantic-ui-react';
import App from './app';
import { Link, Router } from '../routes';
import { toast } from 'react-toastify';
var axios = require('axios');
import {Provider} from 'react-redux'
import store from '../redux/store';

import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function Index(){

 
    return (
      <Provider store={store}>
        <App />
      </Provider>

    );
}

export default Index;
