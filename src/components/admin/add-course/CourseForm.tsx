"use client";
import React, { useState } from "react";
import { addNewCourse } from "../../server/admin/courses";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Paper,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Image from "next/image";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import { log } from "console";
import { toast } from "react-toastify";
import "../blog/quil.css";
// Dynamically import react-quill-new to prevent SSR issues
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

interface CourseFormData {
  title: string;
  shortDec: string;
  longDec: string;
  image: File | null;
  price: number;
  offerPrice: number;
}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" },
    secondary: { main: "#f48fb1" },
    background: { default: "#121212", paper: "#1e1e1e" },
    text: { primary: "#ffffff", secondary: "#b0bec5" },
  },
});

const CourseForm: React.FC = () => {
  const { control, handleSubmit, reset, setValue } = useForm<CourseFormData>();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const onSubmit = async (data: CourseFormData) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("shortDec", data.shortDec);
      formData.append("longDec", data.longDec); // Rich text content
      formData.append("price", data.price.toString());
      formData.append("offerPrice", data.offerPrice.toString());

      if (data.image) {
        formData.append("image", data.image);
      }

      addNewCourse(formData)
        .then((data) => {
          console.log(data);
          reset();
          setImagePreview(null);
          toast("uploaded");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.error("Error uploading course:", error);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div
        className="container mt-4 my-5"
        style={{
          marginTop: "5em",
        }}
      >
        <Paper elevation={5} className="p-4 shadow-lg rounded">
          <Typography variant="h5" className="mb-3 text-primary">
            Upload New Course
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Title */}
            <div className="mb-3">
              <Controller
                name="title"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Course Title"
                    fullWidth
                    required
                    variant="outlined"
                  />
                )}
              />
            </div>

            {/* Price & Offer Price */}
            <div className="d-flex gap-3 mb-3">
              <Controller
                name="price"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Price"
                    type="number"
                    fullWidth
                    required
                    variant="outlined"
                  />
                )}
              />
              <Controller
                name="offerPrice"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Offer Price"
                    type="number"
                    fullWidth
                    required
                    variant="outlined"
                  />
                )}
              />
            </div>

            {/* Short Description */}
            <div className="mb-3">
              <Controller
                name="shortDec"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Short Description"
                    fullWidth
                    required
                    multiline
                    variant="outlined"
                  />
                )}
              />
            </div>

            {/* Long Description - Rich Text Editor */}
            <div className="mb-3">
              <Typography variant="body1" className="text-secondary mb-2">
                Long Description
              </Typography>
              <Controller
                name="longDec"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <ReactQuill
                    {...field}
                    theme="snow"
                    onChange={(value) => field.onChange(value)}
                    className="bg-white text-black rounded"
                    style={{ minHeight: "150px" }}
                  />
                )}
              />
            </div>

            {/* Image Upload */}
            <div className="mb-3">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  if (file) {
                    setImagePreview(URL.createObjectURL(file));
                  }
                  setValue("image", file);
                }}
                className="form-control"
              />
            </div>

            {/* Image Preview */}
            {imagePreview && (
              <div className="mb-3">
                <Image
                  src={imagePreview}
                  alt="Preview"
                  className="img-fluid rounded shadow"
                  width={200}
                  height={150}
                />
              </div>
            )}

            {/* Submit Button */}
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Upload Course
            </Button>
          </form>
        </Paper>
      </div>
    </ThemeProvider>
  );
};

export default CourseForm;
