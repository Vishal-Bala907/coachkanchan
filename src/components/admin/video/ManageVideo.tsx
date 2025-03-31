"use client";

import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineUploadFile } from "react-icons/md";
import "./addvideo.css";
import VideoUpload from "./UploadVideo";
import { deleteVideoById, getAllVideos } from "@/components/server/admin/blog";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { toast } from "react-toastify";
const ManageVideo = () => {
  const [uploadVideo, setUploadVideo] = useState(false);
  const [videos, setVideos] = useState([]);
  const [videoCount, setVideoCount] = useState(0);
  useEffect(() => {
    getAllVideos()
      .then((res) => {
        setVideos(res);
        setVideoCount(res.length);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleVideoDelete = async (id: any) => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Delete the video",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            deleteVideoById(id)
              .then(() => {
                toast.success("Video Deleted Successfully!");
                setVideos(videos.filter((video: any) => video._id !== id));
              })
              .catch((err) => {
                console.error(err);

                toast.error("Internal server error!");
              });
          },
        },
        {
          label: "No",
          onClick: () => alert("Click No"),
        },
      ],
    });
  };
  return (
    <div className="position-relative">
      <section className=" mb-3">
        <h3>Uploaded Videos</h3>
        <div
          className="d-flex flex-lg-row flex-column gap-3 overflow-auto mx-3 mb-3 "
          style={{}}
        >
          {videos &&
            videos.length > 0 &&
            videos.map((video: any) => {
              return (
                <div
                  key={video._id}
                  className="d-flex flex-column justify-content-center align-items-center gap-3"
                >
                  <div
                    className="d-flex flex-row justify-content-between mx-4 "
                    style={{ width: "500px", height: "auto" }}
                  >
                    <span style={{ color: "white" }}>{video.title}</span>
                    <MdDeleteOutline
                      style={{
                        color: "red",
                        fontSize: "1.5rem",
                        cursor: "pointer",
                      }}
                      onClick={() => handleVideoDelete(video._id)}
                    />
                  </div>
                  <video
                    controls
                    autoPlay
                    loop
                    style={{ width: "500px", height: "500px" }}
                  >
                    <source src={video.url} />
                  </video>
                </div>
              );
            })}
        </div>
        <section className="d-flex justify-content-center ">
          <div
            className="d-flex bg-success flex-row gap-2 justify-content-center align-items-center rounded-3 px-4 add-video"
            style={{
              width: "fit-content",
              cursor: "pointer",
            }}
            onClick={() => setUploadVideo(true)}
          >
            <MdOutlineUploadFile
              style={{
                fontSize: "1.5rem",
                color: "white",
              }}
            />{" "}
            <span className="p-2 text-white">Upload Video</span>
          </div>
        </section>
      </section>
      <div
        className={`position-absolute top-0 left-0 ${
          uploadVideo ? "uploadVideoOn" : "uploadVideoOff"
        }`}
      >
        <VideoUpload setUploadVideo={setUploadVideo} videoCount={videoCount} />
      </div>
    </div>
  );
};

export default ManageVideo;
