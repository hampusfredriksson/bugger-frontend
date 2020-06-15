import React, { useState, useEffect } from "react";
import withAuthorization from "../Session/withAuthorization";
import { db } from "../Firebase/firebase";
import Button from "../Styles/Button";

import Spinner from "../Styles/Spinner";
import styled from "styled-components";
import {
  FaCode,
  FaCogs,
  FaCog,
  FaReact,
  FaSlack,
  FaTrello,
  FaGithub,
} from "react-icons/fa";
import {
  BsWifi,
  BsBatteryHalf,
  BsPhoneLandscape,
  BsDisplay,
} from "react-icons/bs";
import {
  MdDevices,
  MdSmartphone,
  MdFlight,
  MdStorage,
  MdMemory,
  MdBuild,
  MdSimCard,
  MdGpsFixed,
} from "react-icons/md";
import { GoGlobe, GoPrimitiveDot } from "react-icons/go";
import { FiUser, FiCode, FiBluetooth, FiWifi, FiCpu } from "react-icons/fi";
import { DiJira } from "react-icons/di";

import BugDetail from "../BugDetail";
import ReactJson from "react-json-view";

const Container = styled.div`
  max-width: 960px;
  padding: 8%;
  margin: auto;
  font-family: "FiraCode-Retina";
`;

const Header = styled.div`
  width: fit-content;
  background: #e8e8e8;
`;

const SubHeader = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  color: black;
  display: flex;
  margin: auto -1rem 1rem;
`;

const Section = styled.section`
  background-color: #e8e8e8;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  padding: 1rem;
  flex: 4;
`;

const MainContent = styled.section`
  display: flex;
`;

const Icon = styled.div`
  width: 25%;
  width: fit-content;
  margin-right: 10px;
`;

const Sidebar = styled.aside`
  border: solid 1px #e8e8e8;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  padding: 1rem;
  flex: 1;
`;

const SidebarContent = styled.div`
  display: flex;
  justify-content: start;
  align-items: baseline;
`;

const H2 = styled.h2`
  margin-bottom: 0;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Dot = styled.div`
  margin-right: 10px;
  height: 15px;
  width: 15px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 50%;
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: left;
  text-transform: uppercase;
`;

const Home = ({ match }) => {
  const [report, setReport] = useState(null);
  const [fetchFailed, setFetchFailed] = useState(false);
  const [priority, setPriority] = useState("");

  // TODO Fix loading screen on Home position

  useEffect(() => {
    let docRef = db.collection("reports").doc(match.params.id);

    docRef
      .get()
      .then((doc) => {
        let data = doc.data();
        if (data) {
          setReport(data);
        } else {
          setFetchFailed(true);
        }
      })
      .catch((error) => {
        setFetchFailed(true);
        console.log(error);
      });
  }, [match]);

  const update_priority = (level) => {
    // TODO Add realtime subscribe from firestore with onSubscribe and
    db.collection("reports").doc(match.params.id).update({ priority: level });

    console.log(level);
  };

  const deleteReport = () => {
    db.collection("reports").doc(match.params.id).update({ done: true });
  };

  const my_json_object = {
    // TODO byt ut emot dynamisk data
    /* 
        user_state: String  <==  Behövs i db-modell. Exakt samma som resten (app-build, bluetooth etc)
        Det appen/utvecklaren sen skickar in är en JSON.stringify({hela:"app state", finns:123})
        I din app kör sen: JSON.parse(user_state) // För att få sträng till json-objekt (om det behövs)
        Den failar om det inte är en valid json men vi utgår från att det är valid
        Det är en till property i databasen/rapportmodelle. user_state. Det är en sträng
    */
    product: "Live JSON generator",
    version: 3.1,
    releaseDate: "2014-06-25T00:00:00.000Z",
    demo: true,
    person: {
      id: 12345,
      name: "John Doe",
      phones: {
        home: "800-123-4567",
        mobile: "877-123-1234",
      },
      email: ["jd@example.com", "jd@example.org"],
      dateOfBirth: "1980-01-02T00:00:00.000Z",
      registered: true,
      emergencyContacts: [
        {
          name: "Jane Doe",
          phone: "888-555-1212",
          relationship: "spouse",
        },
        {
          name: "Justin Doe",
          phone: "877-123-1212",
          relationship: "parent",
        },
      ],
    },
  };

  // TODO Change home to /reports and display 404 if no report
  return (
    <>
      {!report ? (
        fetchFailed ? (
          <p>Something is wacko here</p>
        ) : (
          <Spinner />
        )
      ) : (
        <Container>
          <Header>
            <h1>Bug report {match.params.id}</h1>
          </Header>
          <Wrapper>
            <Section>
              <SubHeader>
                <h2>App info</h2>
              </SubHeader>
              <hr />
              <MainContent>
                <Item>
                  <Icon>
                    <FaCode size={30} />
                  </Icon>
                  <BugDetail title="App version" value={report.app_version} />
                </Item>
                <Item>
                  <Icon>
                    <FaCogs size={30} />
                  </Icon>
                  <BugDetail title="App build" value={report.app_build} />
                </Item>
              </MainContent>
              <MainContent>
                <Item>
                  <Icon>
                    <BsWifi size={30} />
                  </Icon>
                  <BugDetail title="Connectivity" value={report.connectivity} />
                </Item>
                <Item>
                  <Icon>
                    <MdDevices size={30} />
                  </Icon>
                  <BugDetail title="Device ID" value={report.device_id} />
                </Item>
              </MainContent>
              <MainContent>
                <Item>
                  <Icon>
                    <GoGlobe size={30} />
                  </Icon>
                  <BugDetail
                    title="Device locale"
                    value={report.device_locale}
                  />
                </Item>
                <Item>
                  <Icon>
                    <GoPrimitiveDot size={30} />
                  </Icon>
                  <BugDetail title="Dots per inch" value={report.dpi} />
                </Item>
              </MainContent>
              <SubHeader>
                <h2>Device info</h2>
              </SubHeader>
              <hr />
              <MainContent>
                <Item>
                  <Icon>
                    <MdGpsFixed size={30} />
                  </Icon>
                  <BugDetail
                    title="Permission to gps"
                    value={String(report.has_permission_to_gps)}
                  />
                </Item>

                <Item>
                  <Icon>
                    <BsDisplay size={30} />
                  </Icon>
                  <BugDetail
                    title="Device Resolution"
                    value={report.resolution}
                  />
                </Item>
              </MainContent>
              <MainContent>
                <Item>
                  <Icon>
                    <FiUser size={30} />
                  </Icon>
                  <BugDetail title="User ID" value={report.user_id} />
                </Item>
                <Item>
                  <Icon>
                    <FaCog size={30} />
                  </Icon>
                  <BugDetail title="operating system" value={report.os} />
                </Item>
              </MainContent>
              <MainContent>
                <Item>
                  <Icon>
                    <FiCode size={30} />
                  </Icon>
                  <BugDetail title="OS Version" value={report.os_version} />
                </Item>
                <Item>
                  <Icon>
                    <BsBatteryHalf size={30} />
                  </Icon>
                  <BugDetail
                    title="Battery Level"
                    value={report.battery_level}
                  />
                </Item>
              </MainContent>
              <MainContent>
                <Item>
                  <Icon>
                    <MdSmartphone size={30} />
                  </Icon>
                  <BugDetail title="Name" value={report.device_name} />
                </Item>
                <Item>
                  <Icon>
                    <MdStorage size={30} />
                  </Icon>
                  <BugDetail
                    title="Available Storage"
                    value={report.device_available_storage}
                  />
                </Item>
              </MainContent>
              <MainContent>
                <Item>
                  <Icon>
                    <MdFlight size={30} />
                  </Icon>
                  <BugDetail
                    title="Flight mode"
                    value={String(report.device_flight_mode)}
                  />
                </Item>
                <Item>
                  <Icon>
                    <FiBluetooth size={30} />
                  </Icon>
                  <BugDetail
                    title="Bluetooth"
                    value={String(report.device_bluetooth)}
                  />
                </Item>
              </MainContent>
              <SubHeader>
                <h2>User info</h2>
              </SubHeader>
              <hr />
              <MainContent>
                <Item>
                  <Icon>
                    <BsPhoneLandscape size={30} />
                  </Icon>
                  <BugDetail
                    title="Display orientation"
                    value={report.device_orientation}
                  />
                </Item>
                <Item>
                  <Icon>
                    <FiWifi size={30} />
                  </Icon>
                  <BugDetail
                    title="Wifi Signal"
                    value={report.device_wifi_signal_strength}
                  />
                </Item>
              </MainContent>
              <MainContent>
                <Item>
                  <Icon>
                    <MdMemory size={30} />
                  </Icon>
                  <BugDetail
                    title="Available ram"
                    value={report.device_available_ram}
                  />
                </Item>
                <Item>
                  <Icon>
                    <FiCpu size={30} />
                  </Icon>
                  <BugDetail
                    title="Processor"
                    value={report.device_processor}
                  />
                </Item>
              </MainContent>
              <MainContent>
                <Item>
                  <Icon>
                    <MdBuild size={30} />
                  </Icon>
                  <BugDetail
                    title="Build number"
                    value={report.device_build_number}
                  />
                </Item>
                <Item>
                  <Icon>
                    <MdSimCard size={30} />
                  </Icon>
                  <BugDetail title="Sim card" value={report.device_sim} />
                </Item>
              </MainContent>
              <MainContent>
                <Item>
                  <Icon>
                    <FaReact size={30} />
                  </Icon>
                  <BugDetail
                    title="IP Address"
                    value={report.device_ip_address}
                  />
                </Item>
              </MainContent>
              <SubHeader>
                <h2>User state</h2>
              </SubHeader>
              <hr />
              <MainContent>
                {/* TODO Add dynamic json object from cloud function
                 */}
                <ReactJson src={my_json_object} />
              </MainContent>
            </Section>
            <Sidebar>
              <div>
                <H2>Actions</H2>
                <Actions>
                  <div>
                    <Button>
                      <span onClick={deleteReport}>Remove</span>
                    </Button>
                  </div>
                </Actions>
              </div>

              <div>
                <h2>Priority</h2>
                <SidebarContent>
                  <Dot
                    className={!report.priority && "green"}
                    onClick={() => {
                      update_priority("");
                    }}></Dot>
                  <Dot
                    className={report.priority === "warning" && "yellow"}
                    onClick={() => {
                      update_priority("warning");
                    }}></Dot>
                  <Dot
                    className={report.priority === "critical" && "red"}
                    onClick={() => {
                      setPriority(priority + "critical");
                    }}></Dot>
                </SidebarContent>
              </div>

              <div>
                <h2>Integrations</h2>
              </div>
              <p>
                {" "}
                <DiJira size={30} /> Jira
              </p>
              <p>
                {" "}
                <FaSlack size={30} /> Slack
              </p>
              <p>
                {""}
                <FaTrello size={30} /> Trello
              </p>
              <p>
                {""}
                <FaGithub size={30} /> Github
              </p>
            </Sidebar>
          </Wrapper>
        </Container>
      )}
    </>
  );
};

const condition = (authUser) => authUser != null;
export default withAuthorization(condition)(Home);
