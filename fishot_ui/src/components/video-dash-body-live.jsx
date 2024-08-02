import React, { useState, useRef, useEffect } from "react";
import video from "../assets/video-feed.png";
import feed1 from "../assets/icons/feed1.svg";
import feed2 from "../assets/icons/feed2.svg";
import feed3 from "../assets/icons/feed3.svg";
import feed4 from "../assets/icons/feed4.svg";
import "../styles/video.css";
import { Icon } from "@iconify/react";

const VideoDashBodyLive = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [recordedChunks, setRecordedChunks] = useState([]);
    const videoRef = useRef(null);

    useEffect(() => {
        const startCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                videoRef.current.srcObject = stream;
                
                const recorder = new MediaRecorder(stream);
                setMediaRecorder(recorder);

                recorder.ondataavailable = event => {
                    if (event.data.size > 0) {
                        setRecordedChunks(prev => [...prev, event.data]);
                    }
                };
            } catch (error) {
                console.error("Error accessing camera: ", error);
            }
        };

        startCamera();

        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                videoRef.current.srcObject.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
            if (mediaRecorder) mediaRecorder.stop();
        } else {
            videoRef.current.play();
            if (mediaRecorder) mediaRecorder.start();
        }
        setIsPlaying(!isPlaying);
    };

    const handleRewind = () => {
        videoRef.current.currentTime -= 10;
        setCurrentTime(videoRef.current.currentTime);
    };

    const handleForward = () => {
        videoRef.current.currentTime += 10;
        setCurrentTime(videoRef.current.currentTime);
    };

    const handleDownload = () => {
        const blob = new Blob(recordedChunks, { type: 'video/mp4' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'recorded-video.mp4';
        link.click();
        URL.revokeObjectURL(url);
    };

    const [isToggled, setIsToggled] = useState({ open: false, close: false });

    const handleToggle = (type) => {
        setIsToggled((prev) => ({ ...prev, [type]: !prev[type] }));
    };

    return (
        <div className="video-dash">
            <div className="video-control">
                <video 
                    ref={videoRef} 
                    width="900" 
                    autoPlay 
                    onTimeUpdate={() => setCurrentTime(videoRef.current.currentTime)}
                />
                <div>
                    <img src={feed1} alt="feed1" id="feed1" />
                    <img src={feed2} alt="feed2" id="feed2" />
                    <img src={feed3} alt="feed3" id="feed3" />
                    <img src={feed4} alt="feed4" id="feed4" />
                </div>
                <div className="video-live">
                    <p>REC</p>
                    <div className="record-on"></div>
                </div>
                <div className="video-navigate">
                    <div className="live-noti">
                        <div className="live-on"></div>
                        <p>Live</p>
                    </div>
                    <div className="control-icons">
                        <Icon 
                            id="video-icon" 
                            icon="material-symbols:fast-rewind-outline" 
                            style={{ cursor: "pointer" }} 
                            onClick={handleRewind} 
                        />
                        {isPlaying ? (
                            <Icon 
                                id="video-icon" 
                                icon="zondicons:pause-outline" 
                                style={{ cursor: "pointer" }} 
                                onClick={handlePlayPause} 
                            />
                        ) : (
                            <Icon 
                                id="video-icon" 
                                icon="octicon:play-16" 
                                style={{ cursor: "pointer" }} 
                                onClick={handlePlayPause} 
                            />
                        )}
                        <Icon 
                            id="video-icon" 
                            icon="material-symbols:fast-forward-outline" 
                            style={{ cursor: "pointer" }} 
                            onClick={handleForward} 
                        />
                    </div>
                    <div className="download-icon">
                        <Icon 
                            id="video-icon" 
                            icon="material-symbols:file-download" 
                            style={{ cursor: "pointer" }} 
                            onClick={handleDownload} 
                        />
                    </div>
                </div>
            </div>
            <div className="sensor-options">
                <p style={{ color: "#4E60FF", fontWeight: "600" }}>Options</p>
                <div style={{ display: "flex", justifyContent: "start", alignItems: "center", gap: "30px" }}>
                    <div className="icon-detection">
                        <div className="icon-open">
                            <div className={isToggled.open ? "icon-open-circle" : "icon-close-circle"}>
                                <div
                                    className={isToggled.open ? "icon-open-arrow" : "icon-close-arrow"}
                                    onClick={() => handleToggle('open')}
                                ></div>
                            </div>
                        </div>
                        <p style={{ color: "#4E60FF", fontWeight: "400", fontSize: "12.5px" }}>AI detection</p>
                    </div>
                    <div className="icon-sensors">
                        <div className="icon-close">
                            <div className={isToggled.close ? "icon-open-circle" : "icon-close-circle"}>
                                <div
                                    className={isToggled.close ? "icon-open-arrow" : "icon-close-arrow"}
                                    onClick={() => handleToggle('close')}
                                ></div>
                            </div>
                        </div>
                        <p style={{ color: "#4E60FF", fontWeight: "400", fontSize: "12.5px" }}>Thermal sensors</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoDashBodyLive;
