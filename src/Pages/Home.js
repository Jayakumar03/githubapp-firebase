import React, { useState, useContext } from "react";
import Axios from "axios";

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  ListGroupItem
} from "reactstrap";

import UserCard from "../Components/UserCard";
import Repos from "../Components/Repos";
import { Navigate } from "react-router-dom";
import { Context } from "../Context/Context";
import { toast } from "react-toastify";
import { type } from "@testing-library/user-event/dist/type";

const Home = () => {

    const homeContext = useContext({Context})
    const [query, setQuery] = useState("")
    const [user, setUser] = useState(null)


    const fetchDetails = async () => {
        try {
            const {data} = await Axios.get (`https://api.github.com/users/${query}`)
            setUser(data)
            console.log({data})

        } catch (error) {
            toast ("not able to locate user", {type :"error"} )
        }
    }

// put any page behind login panel

// if (homeContext.user && ! homeContext.user.uid) {

//     return < Navigate to="/" />
    
// } 
    return (
        <Container>
          <Row className=" mt-3">
            <Col md="5">
              <InputGroup>
                <Input
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.travel.value)}
                  placeholder="Please provide the username"
                />
                <text addonType="append">
                  <Button onClick={fetchDetails}color="primary">Fetch User</Button>
                </text>
              </InputGroup>
              {
                user ? <UserCard user={user}/> : null
              }
            </Col>
            <Col md="7">
                {
                    user ? <Repos repos_url={user.repos_url} />: null
                }
            </Col>
          </Row>
        </Container>
      );
    }
    
export default Home;