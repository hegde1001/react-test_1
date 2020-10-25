import React from "react";

function DisplayDt() {
  const name = "vignesh";
  const last = "natarajan";
  const age = 20;
  var style = {
    color: "red"
  };
  const list = [
    { name: "eeyey", id: 1, age: 18 },
    { name: "yryr", id: 5, age: 10 },
    { name: "dd", id: 5, age: 10 },
    { name: "Hegddde", id: 65, age: 10 },
    { name: "gdrHegdggde", id: 95, age: 10 },
    { name: "Hgdegde", id: 695, age: 10 },
    { name: "hHegde", id: 85, age: 10 }
  ];
  const Detail = ({ item: i }) => (
    <tr key={"___" + i.id}>
      <td>{i.id}</td>
      <td>is {i.name}</td>
      <td>Age is {i.age}</td>
      <td>{i.age >= 18 ? <strong>Vote</strong> : <i>Not Vote</i>}</td>
    </tr>
  );

  const trList = list.map(i => {
    return <Detail item={i} />;
  });

  console.log(trList);
  return (
    <div>
      <br />
      dgdgfhdh dfhfdh
      <br />
      dfhdf
      <br />
      hdf hdfhdfhdf
      <br />
      <br />
      <div style={{ textAlign: "right", color: "blue", fontSize: 21 }}>
        Total Number of employess: <b>{list.length}</b>
      </div>
      <table border="3" width="100%">
        <thead>
          <tr>
            <th>
              <font color="red">ID</font>
            </th>
            <th>Name</th>
            <th>Age</th>
            <th>Vote</th>
          </tr>
        </thead>
        <tbody>{trList}</tbody>
      </table>
    </div>
  );
}
export default DisplayDt;
