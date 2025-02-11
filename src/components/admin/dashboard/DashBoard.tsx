"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
// import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap 5
import { fetchPayments } from "@/components/server/common/payment";

type Course = {
  _id: string;
  title: string;
  price: number;
  offerPrice: number;
  image: string;
};
type User = {
  _id: string;
  email: string;
  phone: string;
  name: string;
};

type Payment = {
  _id: string;
  paymentId: string;
  orderId: string;
  amount: number;
  userId: User;
  courseId: Course | null;
  createdAt: string;
};

const DashBoard = () => {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [totalPayments, setTotalPayments] = useState<number>(0);

  useEffect(() => {
    setLoading(true);
    fetchPayments(page, rowsPerPage)
      .then((data) => {
        console.log(data);

        setPayments(data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page, rowsPerPage]);

  const handleChangePage = (_: unknown, newPage: number) => setPage(newPage);
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="container-fluid mt-4">
      <h2 className="text-black text-center">Payment Details</h2>

      <TableContainer component={Paper} className="bg-dark text-light p-3">
        {loading ? (
          <div className="d-flex justify-content-center py-5">
            <CircularProgress color="info" />
          </div>
        ) : (
          <>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className="text-light">Email</TableCell>
                  <TableCell className="text-light">Phone</TableCell>
                  <TableCell className="text-light">Name</TableCell>
                  <TableCell className="text-light">Order ID</TableCell>
                  <TableCell className="text-light">Payment ID</TableCell>
                  <TableCell className="text-light">Amount</TableCell>
                  <TableCell className="text-light">Course</TableCell>
                  <TableCell className="text-light">Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {payments.map((payment) => (
                  <TableRow key={payment._id}>
                    <TableCell className="text-light">
                      {payment.userId.email}
                    </TableCell>
                    <TableCell className="text-light">
                      {payment.userId.phone}
                    </TableCell>
                    <TableCell className="text-light">
                      {payment.userId.name}
                    </TableCell>
                    <TableCell className="text-light">
                      {payment.orderId}
                    </TableCell>
                    <TableCell className="text-light">
                      {payment.paymentId}
                    </TableCell>
                    <TableCell className="text-light">
                      ₹{payment.amount}
                    </TableCell>
                    <TableCell className="text-light">
                      {payment.courseId ? (
                        <div className="d-flex align-items-center">
                          <img
                            src={
                              process.env.NEXT_PUBLIC_BASE_URL +
                              payment.courseId.image
                            }
                            alt={payment.courseId.title}
                            width={50}
                            height={50}
                            className="rounded me-2"
                          />
                          <div>
                            <strong>{payment.courseId.title}</strong>
                            <br />
                            <span className="text-success">
                              ₹{payment.courseId.offerPrice}{" "}
                              <del className="text-danger">
                                ₹{payment.courseId.price}
                              </del>
                            </span>
                          </div>
                        </div>
                      ) : (
                        "N/A"
                      )}
                    </TableCell>
                    <TableCell className="text-light">
                      {new Date(payment.createdAt).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <TablePagination
              component="div"
              count={totalPayments}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              sx={{
                backgroundColor: "#1e1e1e", // Dark theme background
                color: "#ffffff", // Light text for contrast
                "& .MuiTablePagination-toolbar": {
                  color: "#ffffff", // Text color for pagination toolbar
                },
                "& .MuiTablePagination-selectLabel, & .MuiTablePagination-input":
                  {
                    color: "#b0b0b0", // Slightly lighter text for readability
                  },
                "& .MuiSvgIcon-root": {
                  color: "#ffffff", // White arrows for next/previous page buttons
                },
                "& .MuiTablePagination-actions button": {
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)", // Subtle hover effect
                  },
                },
              }}
            />
          </>
        )}
      </TableContainer>
    </div>
  );
};

export default DashBoard;
