import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Images } from "./Images";

const Worship = () => {
  const [audioData, setAudioData] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [dailyQuote, setDailyQuote] = useState("");
  const imageTimer = useRef();
  const quoteTimer = useRef();

  useEffect(() => {
    const fetchAudio = async () => {
      try {
        const response = await axios.get("http://localhost:8086/api/files/1", {
          responseType: "arraybuffer",
        });

        setAudioData(response.data);
      } catch (error) {
        console.error("Error fetching audio:", error);
      }
    };

    // Fetch audio initially
    fetchAudio();

    // Retrieve last stored image index from local storage
    const lastImageIndex = localStorage.getItem("lastImageIndex");
    if (lastImageIndex !== null) {
      setCurrentImageIndex(parseInt(lastImageIndex, 10));
    }

    // Set interval to change the background image every 30 seconds
    imageTimer.current = setInterval(() => {
    }, 30000); // 30 seconds in milliseconds

    // Set interval to update daily quote every 30 seconds
    quoteTimer.current = setInterval(() => {
    }, 30000); // 30 seconds in milliseconds

    return () => {
      clearInterval(imageTimer.current);
      clearInterval(quoteTimer.current);
    };
  }, []);

  useEffect(() => {
    // Store the current image index in local storage
    localStorage.setItem("lastImageIndex", currentImageIndex.toString());
  }, [currentImageIndex]);





  // Array of Jesus quotes



  return (

    <div className="container-admin" style={{ }}>
      <div className="" >
        <div
          className="glass-card audio-card"
          style={{ borderRadius: "2rem" }}
        >
          <h3 style={{ color: "black" }}> Pastor's Audio </h3>
          {audioData && (
            <audio controls>
              <source
                src={URL.createObjectURL(new Blob([audioData]))}
                type="audio/mpeg"
                style={{ width: "10%" }} />
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
      </div>

    </div>
  );
};

export default Worship;