import React, { useState, useEffect } from 'react';
import { Button, Card, Divider, Header, Icon, Image, Placeholder } from 'semantic-ui-react'
import ReactPlaceholder from 'react-placeholder';
import {TextBlock, MediaBlock, TextRow, RectShape, RoundShape} from 'react-placeholder/lib/placeholders';
import "react-placeholder/lib/reactPlaceholder.css";
import Layout from '../components/Layout';
import { Link, Router } from '../routes';
import { toast } from 'react-toastify';
var axios = require('axios');

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getUsers, getUserSingle } from '../redux/action/user'

import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function App(){

  const [loading, setLoading] = useState(false);

  const users = useSelector((state) => state.user.users);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(()=>{
    fetch('https://reqres.in/api/users').then(response=> {
      return response.json();
    })
    .then(users=>{
      console.log(users.data);
      dispatch(getUsers(users.data));
    });  
  },[]);

  const onHandleClick = (id) => {

    setLoading(true);
    
    fetch(`https://reqres.in/api/users/${id}`).then(response=> {
      return response.json();
    })
    .then(user=>{
      console.log(user.data);
      dispatch(getUserSingle(user.data));
      setLoading(false);
    }); 
  }

    return (
      <Layout>
        <div>
        <br />
        <br />
        <h1 style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}>NIRMALYA SAHA</h1>
                  <br />

            {user === null ? (
              <ReactPlaceholder type='media' rows={7} ready={true}>
              <div className='my-awesome-placeholder' style={{width: "50%", display: "flex",
                    justifyContent: "center",
                    marginLeft: "25%",
                    alignItems: "center"}}>
                <TextBlock rows={3} color='grey'/>
              </div> 
              <div className='my-awesome-placeholder' style={{width: "50%", display: "flex",
                    justifyContent: "center",
                    marginLeft: "25%",
                    alignItems: "center"}}>
                <h1>Click on any button!!</h1>
              </div>  
              <div className='my-awesome-placeholder' style={{width: "50%", display: "flex",
                    justifyContent: "center",
                    marginLeft: "25%",
                    alignItems: "center"}}>
                <TextBlock rows={3} color='grey'/>
              </div>           
              </ReactPlaceholder>
            ) : (
              <Card centered>
              {user === null ? (
                <Placeholder style={{ height: 150, width: 150 }}>
                  <Placeholder.Image square />
                </Placeholder>
              ) : (
                <Image src={user.avatar} />
              )}
              <Card.Content>
                {user === null ? (
                  <>
                    {/* <Card.Header></Card.Header>
                    <Card.Meta>{user.email}</Card.Meta>
                    <Card.Description>{user.id}</Card.Description> */}
                  </>
                ) : (
                  <>
                    <Card.Header>{user.first_name} {user.last_name}</Card.Header>
                    <Card.Description>{user.email}</Card.Description>
                  </>
                )}
              </Card.Content>
            </Card>
            )}

            <br />

            <Divider horizontal>
            <Header as='h4'>
              <Icon name='tag' />
              USERS
            </Header>
          </Divider>
            
        <Button.Group style={{margin: "10px", display: "flex",
                    justifyContent: "center",
                    alignItems: "center"}}>
          {users.map((user)=>(
            <Button loading={loading} primary style={{margin: "10px"}} onClick={()=> onHandleClick(user.id)}>`User {user.id}`</Button>
          ))}
        </Button.Group>
        </div>
      </Layout>
    );
}

export default App;
