import React, { useState, useEffect } from "react";
import { db } from "../Firebase/firebase";

const Home = ({ match }) => {
  const [report, setReport] = useState(null);

  useEffect(() => {
    var docRef = db.collection("testing").doc(match.params.id);

    docRef
      .get()
      .then((doc) => {
        console.log(doc.data());
        setReport(doc.data());
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {report && (
        <>
          {report.model}
          {report.original}
          {report.os}
          {report.osVersion}
        </>
      )}
    </div>
  );
};

export default Home;

// const Home = () => {

//   db.collection("cities").doc("LA").set({
//     name: "Los Angeles",
//     state: "CA",
//     country: "USA"
// })
// .then(function() {
//     console.log("Document successfully written!");
// })
// .catch(function(error) {
//     console.error("Error writing document: ", error);
// });
// //   const [cinemas, setCinemas] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       const db = Firebase.firestore()
// //       const data = await db.collection("cinemas").get();
// //       setCinemas(data.docs.map((doc) => doc.data()));
// //     };
// //     fetchData();
// //   }, []);

//   return (
//     <ul>
//    <p>testing</p>
//     </ul>
//   );
// };

// export default Home;
// const condition = (authUser) => authUser != null;
// export default withAuthorization(condition)(Home);
