"use client";
import React, { useEffect, useState } from "react";
import {
  deleteCourseById,
  getCourseById,
  updateCourse,
} from "../../server/admin/courses";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Paper,
  Typography,
  ThemeProvider,
  createTheme,
  Box,
  Grid,
} from "@mui/material";
import Image from "next/image";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

// Dynamically import ReactQuill
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

type Props = {
  courseId?: string;
};

const CourseForm: React.FC<Props> = ({ courseId }) => {
  const { control, handleSubmit, reset, setValue, watch } =
    useForm<CourseFormData>({
      defaultValues: {
        title: "",
        shortDec: "",
        longDec: "",
        image: null,
        price: 0,
        offerPrice: 0,
      },
    });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [existingImage, setExistingImage] = useState<string | null>(null);
  const router = useRouter();

  // Fetch course details if courseId exists
  useEffect(() => {
    if (courseId) {
      const fetchCourseData = async () => {
        try {
          const course = await getCourseById(courseId);
          console.log(course.course);

          if (course) {
            setValue("title", course.course.title);
            setValue("shortDec", course.course.shortDec);
            setValue("price", course.course.price);
            setValue("offerPrice", course.course.offerPrice);
            setExistingImage(
              `${process.env.NEXT_PUBLIC_BASE_URL}${course.course.image}`
            );

            // Delay setting longDec to avoid Quill reactivity issues
            setTimeout(() => {
              setValue("longDec", course.course.longDec);
            }, 100);
          }
        } catch (error) {
          console.error("Error fetching course:", error);
        }
      };
      fetchCourseData();
    }
  }, [courseId, setValue]);

  const longDecValue = watch("longDec");

  const onSubmit = async (data: CourseFormData) => {
    confirmAlert({
      // title: "Confirm to Update",
      message: "Are you sure to Update this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            try {
              const formData = new FormData();
              formData.append("title", data.title);
              formData.append("shortDec", data.shortDec);
              formData.append("longDec", data.longDec);
              formData.append("price", data.price.toString());
              formData.append("offerPrice", data.offerPrice.toString());

              if (data.image) {
                formData.append("image", data.image);
              }

              updateCourse(courseId, formData)
                .then((data) => {
                  toast.success("Course updated successfully!");
                  router.push("/service");
                })
                .catch((err) => {
                  toast.success("Failed to Update course.!");
                });
            } catch (error) {
              console.error("Error submitting course:", error);
              toast.error("Failed to submit course.");
            }
          },
        },
        {
          label: "No",
          onClick: () => console.log("Click No"),
        },
      ],
    });
  };

  const deleteCourse = async () => {
    confirmAlert({
      // title: "Confirm to Update",
      message: "Are you sure to Delete this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            try {
              deleteCourseById(courseId)
                .then((data) => {
                  toast.success("Course Deleted successfully!");
                  router.push("/service");
                })
                .catch((err) => {
                  toast.error("Internal server error!");
                });
            } catch (error) {
              console.error("Error submitting course:", error);
              toast.error("Failed to submit course.");
            }
          },
        },
        {
          label: "No",
          onClick: () => console.log("Click No"),
        },
      ],
    });
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box className="container mt-4 my-5">
        <Paper elevation={5} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h5" sx={{ mb: 3, color: "primary.main" }}>
            {courseId ? "Update Course" : "Upload New Course"}
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              {/* Course Title */}
              <Grid item xs={12}>
                <Controller
                  name="title"
                  control={control}
                  rules={{ required: "Course title is required" }}
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      label="Course Title"
                      fullWidth
                      required
                      error={!!fieldState.error}
                      helperText={fieldState.error?.message}
                    />
                  )}
                />
              </Grid>

              {/* Price & Offer Price */}
              <Grid item xs={6}>
                <Controller
                  name="price"
                  control={control}
                  rules={{ required: "Price is required" }}
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      label="Price"
                      type="number"
                      fullWidth
                      required
                      error={!!fieldState.error}
                      helperText={fieldState.error?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="offerPrice"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Offer Price"
                      type="number"
                      fullWidth
                    />
                  )}
                />
              </Grid>

              {/* Short Description */}
              <Grid item xs={12}>
                <Controller
                  name="shortDec"
                  control={control}
                  rules={{ required: "Short description is required" }}
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      label="Short Description"
                      fullWidth
                      required
                      multiline
                      rows={2}
                      error={!!fieldState.error}
                      helperText={fieldState.error?.message}
                    />
                  )}
                />
              </Grid>

              {/* Long Description (Rich Text) */}
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  sx={{ color: "secondary.main", mb: 1 }}
                >
                  Long Description
                </Typography>
                <Controller
                  name="longDec"
                  control={control}
                  render={({ field }) => (
                    <ReactQuill
                      theme="snow"
                      value={longDecValue}
                      onChange={field.onChange}
                    />
                  )}
                />
              </Grid>

              {/* Image Upload */}
              <Grid item xs={12}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    if (file) {
                      setImagePreview(URL.createObjectURL(file));
                      setValue("image", file);
                    }
                  }}
                  className="form-control"
                />
              </Grid>

              {/* Image Preview */}
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                {existingImage && !imagePreview && (
                  <img
                    src={existingImage}
                    alt="Current Image"
                    width={200}
                    height={150}
                    style={{ borderRadius: "10px" }}
                  />
                )}
                {imagePreview && (
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    width={200}
                    height={150}
                    style={{ borderRadius: "10px" }}
                  />
                )}
              </Grid>

              {/* Submit Button */}
              <div className="d-flex flex-row gap-4 justify-content-center align-items-center w-100 my-4">
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  className="w-25"
                >
                  {courseId ? "Update" : "Upload Course"}
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={deleteCourse}
                  fullWidth
                  className="w-25"
                >
                  {"Delete"}
                </Button>
              </div>
            </Grid>
          </form>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default CourseForm;
