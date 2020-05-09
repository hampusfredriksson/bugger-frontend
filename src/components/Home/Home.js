import React, { useState, useEffect } from "react";
// import withAuthorization from "../Session/withAuthorization";
import { db } from "../Firebase/firebase";
import Button from "../Styles/Button";
import Spinner from "../Styles/Spinner";


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
    <div>
      <div>
        {isLoading ? (
          <span>
            <Spinner />
          </span>
        ) : (
          ""
          )}
      </div>
      {report && (
        <table className="tg">
          <tbody>
            <tr>
              <td className="tg-ycr8">App Build</td>
              <td className="tg-i81m">App Version</td>
              <td className="tg-a02x">Connectivity</td>
              <td className="tg-a02x">Date</td>
              <td className="tg-a02x">Device ID</td>
              <td className="tg-a02x">Device Locale</td>
              <td className="tg-a02x">Device Time</td>
              <td className="tg-a02x">Dpi</td>
              <td className="tg-a02x">Permission to GPS</td>
              <td className="tg-a02x">Resolution</td>
              <td className="tg-a02x">User ID</td>
              <td className="tg-6hdc">Crud</td>
            </tr>
          </tbody>
          <tbody key={report.id}>
            <tr>
              <td className="tg-ycr8">{report.app_build}</td>
              <td className="tg-ycr8">{report.app_version}</td>
              <td className="tg-i81m">{report.connectivity}</td>
              <td className="tg-a02x">{report.date}</td>
              <td className="tg-a02x">{report.device_id}</td>
              <td className="tg-a02x">{report.device_locale}</td>
              <td className="tg-a02x">{report.device_time}</td>
              <td className="tg-a02x">{report.dpi}</td>
              <td className="tg-a02x">{report.has_permission_to_gps}</td>
              <td className="tg-a02x">{report.resolution}</td>
              <td className="tg-a02x">{report.user_id}</td>
              <td className="tg-6hdc">
                <Button>Edit</Button>
                <Button>Delete</Button>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>

    // <div>
    //   {report && (
    //     <>
    //       <ul>
    //         App Build:
    //         <li>{report.app_build}</li>
    //         App Version:
    //         <li>{report.app_version}</li>
    //       </ul>
    //     </>
    //   )}
    // </div>
  );
};

export default Home;

// const condition = (authUser) => authUser != null;
// export default withAuthorization(condition)(Home);
