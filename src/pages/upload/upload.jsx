import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { CSVReader } from "react-papaparse";

const Upload = () => {
  // state variables
  const [invoiceHeader, setInvoiceHeader] = useState(null);
  const [invoiceHeaderInfo, setInvoiceHeaderInfo] = useState(null);

  const [totalHead, setTotalHead] = useState(null);
  const [totalInfo, setTotalInfo] = useState(null);

  const [lineItemHead, setLineItemHead] = useState(null);
  const [lineItems, setLineItems] = useState(null);

  // csv upload function
  const handleOnDrop = (data) => {
    const getArr = data.map((el) =>
      el.data.map((el) => {
        return el.trim();
      })
    );
    const filter = getArr.filter((arr) => {
      return arr[0] !== "";
    });

    const findHeader = filter.map((arr) => {
      return arr.indexOf("date");
    });
    const headerLocation = findHeader.findIndex((el) => el > -1);
    setInvoiceHeader(filter[headerLocation]);
    setInvoiceHeaderInfo(filter[headerLocation + 1]);

    const findTotal = filter.map((arr) => {
      return arr.indexOf("total");
    });
    const totalLocation = findTotal.findIndex((el) => el > -1);

    setTotalHead(filter[totalLocation]);
    setTotalInfo(filter[totalLocation + 1]);

    setLineItemHead(filter.slice(headerLocation + 2, headerLocation + 3));
    setLineItems(filter.slice(headerLocation + 3, totalLocation));
  };

  // cancel button
  const handleCancel = () => {
    setLineItems(null);
  };

  // react maps for render
  let headHead;
  if (invoiceHeader) {
    const data = invoiceHeader;
    headHead = data.map((item) => <th key={item}>{item}</th>);
  }
  let headData;
  if (invoiceHeaderInfo) {
    headData = invoiceHeaderInfo.map((item) => <td key={item}>{item}</td>);
  }
  let tableHead;
  let quantityIndex;
  let priceIndex;
  let calculatedTotal = 1;
  if (lineItems) {
    tableHead = lineItemHead[0].map((item) => <th key={item}>{item}</th>);
    quantityIndex = lineItemHead[0].indexOf("quantity");
    priceIndex = lineItemHead[0].indexOf("price");

    lineItems.forEach((arr) => {
      return (calculatedTotal += arr[quantityIndex] * arr[priceIndex]);
    });
  }
  let tableInfo;

  if (lineItems) {
    tableInfo = lineItems.map((arr, idx) => (
      <tr key={idx}>
        {arr.map((item) => (
          <td key={item}>{item}</td>
        ))}
      </tr>
    ));
  }
  let totalData;
  let incomingTotal;
  if (totalInfo) {
    incomingTotal = +totalInfo[0];
    totalData = totalInfo.map((item) => (
      <td
        style={
          +incomingTotal === +calculatedTotal.toFixed(2)
            ? { color: "black" }
            : { color: "red" }
        }
        key={item}
      >
        {item}
      </td>
    ));
  }

  let totalHeading;
  if (totalHead) {
    totalHeading = totalHead.map((item) => (
      <th
        style={
          +incomingTotal === +calculatedTotal.toFixed(2)
            ? { color: "black" }
            : { color: "red" }
        }
        key={item}
      >
        {item}
      </th>
    ));
  }

  return (
    <div className="container text-center">
      <h1>File Upload</h1>
      <h2 className="m-top">Choose a .csv to upload</h2>
      <div className="row justify-content-sm-center">
        <div className="col col-md-4 m-top">
          <CSVReader onDrop={handleOnDrop} noDrag addRemoveButton>
            <span>Click to upload.</span>
          </CSVReader>
        </div>
      </div>
      {lineItems && (
        <>
          <div className="m-top row justify-content-sm-center">
            <div className="col-md">
              <Table striped bordered hover>
                <thead>
                  <tr className="cap">{headHead}</tr>
                </thead>
                <tbody>
                  <tr>{headData}</tr>
                </tbody>
              </Table>
            </div>
          </div>

          <div className="m-top row justify-content-s,-center">
            <div className="col-md">
              <Table striped bordered hover>
                <thead>
                  <tr className="cap">{tableHead}</tr>
                </thead>
                <tbody>{tableInfo}</tbody>
              </Table>
            </div>
          </div>

          <div className="m-top row justify-content-s,-center">
            <div className="col-md">
              <Table striped bordered hover>
                <thead>
                  <tr className="cap">{totalHeading}</tr>
                </thead>
                <tbody>
                  <tr>{totalData}</tr>
                </tbody>
              </Table>
            </div>
          </div>

          <div className="row clear justify-content-sm-center">
            <div className="col-sm">
              <Button variant="primary">Approve</Button>
            </div>
            <div className="col-sm">
              <Button variant="danger" onClick={handleCancel}>
                Cancel
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Upload;
