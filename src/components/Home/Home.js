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
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  border-radius: 3px;
  justify-items: center;
`;

const Item = styled.div`
  width: 50%;
  margin-bottom: 2%;
  border-radius: 10px;
  background-color: #a1cbfa;
  box-shadow: 0 2px 2px rgba(0, 90, 250, 0.05), 0 4px 4px rgba(0, 90, 250, 0.05),
    0 8px 8px rgba(0, 90, 250, 0.05), 0 16px 16px rgba(0, 90, 250, 0.05);
  color: #fff;
  padding: 15px;
  box-sizing: border-box;
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
      <h1>Bug Details</h1>
      {report && (
        <Container>
          <Item>
            <FaCode size={32} />
            <BugDetail title="App version" value={report.app_version} />
          </Item>
          <Item>
            <FaRegBuilding size={32} />
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
              value={report.has_permission_to_gps}
            />
          </Item>
          <Item>
            <BugDetail title="Device Resolution" value={report.resolution} />
          </Item>
          <Item>
            <BugDetail title="User ID" value={report.user_id} />
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
