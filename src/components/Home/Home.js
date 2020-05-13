import React, { useState, useEffect } from "react";
// import withAuthorization from "../Session/withAuthorization";
import { db } from "../Firebase/firebase";
import Button from "../Styles/Button";
import Spinner from "../Styles/Spinner";
import styled from "styled-components";
import { FaCode } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";
import BugDetail from "../BugDetail";

const Container = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  grid-gap: 1em;
  text-align: center;
  align-items: center;
  justify-items: center;
`;

const Content = styled.div`
  background: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Aside = styled.div`
  background: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div``;

const Item = styled.div`
  margin-bottom: 1%;
  text-transform: uppercase;
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: #a1cbfa;
  box-shadow: 0 2px 2px rgba(0, 90, 250, 0.05), 0 4px 4px rgba(0, 90, 250, 0.05),
    0 8px 8px rgba(0, 90, 250, 0.05), 0 16px 16px rgba(0, 90, 250, 0.05);
  color: #fff;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-basis: 34%;
  }

  @media (max-width: 320px) {
    flex-basis: 51%;
  }
`;

const Sidenav = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  top: 20px;
  left: 10px;
  background: #eee;
  overflow-x: hidden;
  padding: 8px 0;

  &:hover {
    color: #064579;
  }

  @media screen and (max-height: 450px) {
    padding-top: 15px;
  }
`;

const StyledLink = styled.a`
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #2196f3;
  display: block;
  @media screen and (max-height: 450px) {
    font-size: 18px;
  }
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
        <Container>
          <Aside>Left Sidebar</Aside>
          <Item>
            <FaCode size={30} />
            <BugDetail title="App version" value={report.app_version} />
          </Item>
          <Item>
            <FaRegBuilding size={30} />
            <BugDetail title="App build" value={report.app_build} />
          </Item>
          <Item>
            <BugDetail title="Connectivity" value={report.connectivity} />
          </Item>
          <Item>
            <BugDetail title="Device ID" value={report.device_id} />
          </Item>
          <Item>
            <BugDetail title="Device locale" value={report.device_locale} />
          </Item>
          <Item>
            <BugDetail title="Dpi" value={report.dpi} />
          </Item>
          <Item>
            <BugDetail
              title="Permission to gps"
              value={String(report.has_permission_to_gps)}
            />
          </Item>
          <Header>
            <h3>Device Info</h3>
          </Header>
          <Item>
            <BugDetail title="Device Resolution" value={report.resolution} />
          </Item>
          <Item>
            <BugDetail title="User ID" value={report.user_id} />
          </Item>
          <Item>
            <BugDetail title="OS" value={report.os} />
          </Item>
          <Item>
            <BugDetail title="OS Version" value={report.os_version} />
          </Item>
          <Item>
            <BugDetail title="Battery Level" value={report.battery_level} />
          </Item>
          <Header>
            <h3>User Info</h3>
          </Header>
          <Item>
            <BugDetail title="Name" value={report.device_name} />
          </Item>
          <Item>
            <BugDetail
              title="Available Storage"
              value={report.device_available_storage}
            />
          </Item>
          <Item>
            <BugDetail
              title="Flight mode"
              value={String(report.device_flight_mode)}
            />
          </Item>
          <Item>
            <BugDetail
              title="Bluetooth"
              value={String(report.device_bluetooth)}
            />
          </Item>
          <Item>
            <BugDetail
              title="Display orientation"
              value={report.device_orientation}
            />
          </Item>
          <Item>
            <BugDetail
              title="Wifi Signal"
              value={report.device_wifi_signal_strength}
            />
          </Item>
          <Item>
            <BugDetail
              title="Available ram"
              value={report.device_available_ram}
            />
          </Item>
          <Item>
            <BugDetail title="Processor" value={report.device_processor} />
          </Item>
          <Item>
            <BugDetail
              title="Build number"
              value={report.device_build_number}
            />
          </Item>
          <Item>
            <BugDetail title="Sim card" value={report.device_sim} />
          </Item>
          <Item>
            <BugDetail title="IP Address" value={report.device_ip_address} />
          </Item>

          {/* <ReportScreen>
       {isLoading ? (
         <span>
           <Spinner />
         </span>
       ) : (
         ""
       )}
        <h1>Bug Details</h1>
        {report && (
          <div>
            <ReportInfo>
              <Icons>
                <FaCode size={42} />
              </Icons>
              <h2>App version</h2>

              <span>{report.app_version}</span>

              <Icons>
                <FaRegBuilding size={42} />
              </Icons>
              <div>
                <h2>App build</h2>
              </div>
              <span>{report.app_build}</span>
            </ReportInfo>
          </div>
        )}
      </ReportScreen> */}
          <Aside>Right Sidebar</Aside>
        </Container>
      )}
    </>
  );
};

export default Home;

// const condition = (authUser) => authUser != null;
// export default withAuthorization(condition)(Home);

/* 
            <Icons>
              <FaCode size={42} />
            </Icons>
            <div>App version</div>
            <span>{report.app_version}</span>
            <Icons>
              <FaRegBuilding size={42} />
            </Icons>
            <div>App build</div>
            <span>{report.app_build}</span>
*/
