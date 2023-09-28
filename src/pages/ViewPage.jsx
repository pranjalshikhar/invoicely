import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import ShowInvoiceModal from "../components/ShowInvoiceModal";
import "../App.css";
import { ImHome } from "react-icons/im";
import { BiSolidCommentEdit } from "react-icons/bi";

const ViewPage = () => {
  const { id } = useParams();
  const [invoice, setInvoice] = useState(null);
  const invoices = useSelector((state) => state.invoices);

  useEffect(() => {
    const targetInvoice = invoices.find((invoice) => invoice.id === id);
    if (targetInvoice) {
      setInvoice(targetInvoice);
    }
  }, [invoices, invoice, id]);

  return (
    <div className="container">
      <div className="mb-5">
        <Link to="/">
          <Button variant="outline-primary" size="sm">
            <span style={{ display: "flex", alignItems: "baseline" }}>
              <ImHome />
              <span style={{ paddingLeft: "5px", fontWeight: "bold" }}>
                HOME
              </span>
            </span>
          </Button>
        </Link>
        <Link to={`/invoice/edit/${id}`} style={{ paddingLeft: "10px" }}>
          <Button variant="outline-danger" size="sm">
            <span>
              <BiSolidCommentEdit />
              <span style={{ paddingLeft: "5px", fontWeight: "bold" }}>
                EDIT
              </span>
            </span>
          </Button>
        </Link>
      </div>
      {invoice ? (
        <ShowInvoiceModal invoice={invoice} />
      ) : (
        <div>
          <h1> No invoice found with ID: {id}</h1>
          <h2>
            To create a new invoice, click
            <Link to="/create"> Here.</Link>
          </h2>
        </div>
      )}
    </div>
  );
};

export default ViewPage;
