import React, { useState, useEffect } from "react";
import withAuthorization from "../Session/withAuthorization";
import { db } from "../Firebase/firebase";
import Button from "../Styles/Button";
import Spinner from "../Styles/Spinner";
import styled from "styled-components";
import { FaCode } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { BsWifi } from "react-icons/bs";
import { MdDevices } from "react-icons/md";
import { GoGlobe } from "react-icons/go";
import { GoPrimitiveDot } from "react-icons/go";
import { MdGpsFixed } from "react-icons/md";
import { BsDisplay } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { FaCog } from "react-icons/fa";
import { FiCode } from "react-icons/fi";
import { BsBatteryHalf } from "react-icons/bs";
import { MdSmartphone } from "react-icons/md";
import { MdFlight } from "react-icons/md";
import { MdStorage } from "react-icons/md";
import { FiBluetooth } from "react-icons/fi";
import { FiWifi } from "react-icons/fi";
import { FiCpu } from "react-icons/fi";
import { MdMemory } from "react-icons/md";
import { BsPhoneLandscape } from "react-icons/bs";
import { MdBuild } from "react-icons/md";
import { MdSimCard } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import BugDetail from "../BugDetail";

const TestContainer = styled.div`
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

const FlexGrid = styled.div`
  color: black;
  display: flex;
  margin: auto -1rem 1rem;
`;

const TestSection = styled.section`
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

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    let docRef = db.collection("reports").doc(match.params.id);

    docRef
      .get()
      .then((doc) => {
        console.log(doc.data());
        setReport(doc.data());
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [match]);

  return (
    <>
      {report && (
        <TestContainer>
          <Header>
            <h1>Bug report</h1>
          </Header>
          <FlexGrid>
            <TestSection>
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
                <h2>User Info</h2>
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
            </TestSection>
            <Sidebar>
              <div>
                <h2>
                  Actions <BsTrash size={20} />
                </h2>
              </div>
              <p>Priority</p>
              <div>
                <h2>Integrations</h2>
              </div>
              <p>Jira</p>
              <p>Forward</p>
            </Sidebar>
          </FlexGrid>
        </TestContainer>
      )}
    </>
  );
};

const condition = (authUser) => authUser != null;
export default withAuthorization(condition)(Home);
