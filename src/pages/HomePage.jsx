import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import InvoiceList from "../components/InvoiceList";
import { IoMdCreate } from "react-icons/io";

const HomePage = () => {
  const invoices = useSelector((state) => state.invoices);

  return (
    <div className="d-flex flex-column align-items-center w-100">
      <Container className="mt-5 mb-5">
        <div className="d-flex justify-content-between">
          <div className="mb-3">
            <h1>INVOICELY</h1>
            <span>Total Invoices: {invoices?.length}</span>
          </div>
          <div className="mb-2">
            <Link to="/create">
              <Button variant="primary" size="sm">
                <IoMdCreate />
                <span style={{ paddingLeft: "5px" }}>Create Invoice</span>
              </Button>
            </Link>
          </div>
        </div>
        <InvoiceList invoices={invoices} />
      </Container>
    </div>
  );
};

export default HomePage;
