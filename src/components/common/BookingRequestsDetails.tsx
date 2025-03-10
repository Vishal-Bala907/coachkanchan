"use client";
import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Grid,
  Box,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { getAllBookings } from "../server/common/courseReview";

interface Booking {
  _id: string;
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  guests: number;
  specialRequests?: string;
}

const BookingList = () => {
  const [bookings, setBookings] = React.useState<Booking[] | []>([]);
  useEffect(() => {
    getAllBookings()
      .then((data) => {
        setBookings(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (bookings.length === 0) {
    return (
      <Paper className="p-4 text-center">
        <Typography variant="h6" color="textSecondary">
          No bookings found!
        </Typography>
      </Paper>
    );
  }

  return (
    <TableContainer component={Paper} className="shadow-sm">
      <Table>
        {/* Table Head */}
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Name</strong>
            </TableCell>
            <TableCell>
              <strong>Email</strong>
            </TableCell>
            <TableCell>
              <strong>Phone</strong>
            </TableCell>
            <TableCell>
              <strong>Event Date</strong>
            </TableCell>
            <TableCell>
              <strong>Guests</strong>
            </TableCell>
            <TableCell>
              <strong>Special Requests</strong>
            </TableCell>
          </TableRow>
        </TableHead>

        {/* Table Body */}
        <TableBody>
          {bookings.map((booking) => (
            <TableRow key={booking._id}>
              <TableCell>{booking.name}</TableCell>
              <TableCell>{booking.email}</TableCell>
              <TableCell>{booking.phone}</TableCell>
              <TableCell>
                {new Date(booking.eventDate).toLocaleDateString()}
              </TableCell>
              <TableCell>{booking.guests}</TableCell>
              <TableCell>
                {booking.specialRequests || <em>No special requests</em>}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BookingList;
