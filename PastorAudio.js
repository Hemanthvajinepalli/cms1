
import React, { useState, useRef } from "react";

const PastorAuido = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const mediaRecorder = useRef(null);

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        mediaRecorder.current = new MediaRecorder(stream);
        const chunks = [];

        mediaRecorder.current.ondataavailable = e => {
          chunks.push(e.data);
        };

        mediaRecorder.current.onstop = () => {
          const audioBlob = new Blob(chunks, { type: "audio/wav" });
          setAudioBlob(audioBlob);
        };

        mediaRecorder.current.start();
        setIsRecording(true);
      })
      .catch(error => {
        console.error("Error accessing microphone:", error);
      });
  };

  const stopRecording = () => {
    if (mediaRecorder.current && mediaRecorder.current.state === "recording") {
      mediaRecorder.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <div>
      <div>
        <h4>Pastor's Audio</h4>
        {audioBlob ? (
          <div>
            <audio controls>
              <source src={URL.createObjectURL(audioBlob)} type="audio/wav" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ) : (
          <div>
            {isRecording ? (
              <button onClick={stopRecording}>Stop Recording</button>
            ) : (
              <button onClick={startRecording}>Start Recording</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PastorAuido;
