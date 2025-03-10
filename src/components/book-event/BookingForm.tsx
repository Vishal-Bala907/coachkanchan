"use client";
import { useState } from "react";
import {
  TextField,
  Button,
  Alert,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { createBookingRequest } from "../server/common/courseReview";
import { toast } from "react-toastify";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    guests: "",
    specialRequests: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validation Logic
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.eventDate) newErrors.eventDate = "Event date is required";
    if (!formData.guests || Number(formData.guests) < 1)
      newErrors.guests = "At least 1 guest is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    createBookingRequest(formData)
      .then((data) => {
        toast.success("Booking request sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          eventDate: "",
          guests: "",
          specialRequests: "",
        });
      })
      .catch((err) => {
        toast.error("Failed to send booking request!");
      });
  };

  return (
    <Container sx={{ backgroundColor: "white", color: "black" }}>
      <Grid container className="p-4" spacing={3}>
        <Grid item xs={12} sx={{ backgroundColor: "white", color: "black" }}>
          <Typography variant="h4" className="text-center mb-3 text-black">
            Event Booking Form
          </Typography>
        </Grid>

        {successMessage && (
          <Grid item xs={12}>
            <Alert severity="success">{successMessage}</Alert>
          </Grid>
        )}

        <Grid
          item
          xs={12}
          md={6}
          sx={{ backgroundColor: "white", color: "black" }}
        >
          <TextField
            fullWidth
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            variant="outlined"
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{ backgroundColor: "white", color: "black" }}
        >
          <TextField
            fullWidth
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            variant="outlined"
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{ backgroundColor: "white", color: "black" }}
        >
          <TextField
            fullWidth
            label="Phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={!!errors.phone}
            helperText={errors.phone}
            variant="outlined"
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{ backgroundColor: "white", color: "black" }}
        >
          <TextField
            fullWidth
            label="Event Date"
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            error={!!errors.eventDate}
            helperText={errors.eventDate}
            InputLabelProps={{ shrink: true }}
            variant="outlined"
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{ backgroundColor: "white", color: "black" }}
        >
          <TextField
            fullWidth
            label="Number of Guests"
            type="number"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            error={!!errors.guests}
            helperText={errors.guests}
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sx={{ backgroundColor: "white", color: "black" }}>
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Special Requests (Optional)"
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sx={{ backgroundColor: "white", color: "black" }}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Book Now
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BookingForm;
