import moment from "moment";
import React, {useEffect, useRef, useState} from "react";
import video from '../videos/hybrid-minds-inside.mp4';

const VideoComponent: React.FC = () => {
    const music = useRef<HTMLVideoElement>(null);
    const [togglePlay, setTogglePlay] = useState<boolean>(true);
    const [duration, setDuration] = useState<string>("0:00");
    const [currentTime, setCurrentTime] = useState<string>("0:00");

    const playMusic = () => {
        if (music.current) {
            setTogglePlay(!togglePlay);
            music.current.play();
        }
    }
    const pauseMusic = () => {
        if (music.current) {
            setTogglePlay(!togglePlay);
            music.current.pause();
        }
    }

    const backwardVideo = () => {
        if (music.current) {
            music.current.currentTime -= 10;
        }
    }

    const forwardVideo = () => {
        if (music.current) {
            music.current.currentTime += 10;
        }
    }

    const getCurrentDuration = () => {
        if(music.current?.duration != undefined)
        {

            //duration of video
            let durationMin: any = Math.floor(music.current.duration / 60);
            let durationSec: any = Math.round(music.current.duration - durationMin * 60);
            
            if(durationSec < 10)
            {
                durationSec = "0"+durationSec;
            }
            setDuration(durationMin + ":" + durationSec);
        }

    }

    const getCurrentTimeVideo = () => {
        if(music.current?.currentTime != undefined)
        {
            //current time video
            let currentMin: any = Math.floor(music.current.currentTime / 60);
            let currentSec: any = Math.round(music.current.currentTime - currentMin * 60);
            if(currentSec < 10)
            {
                currentSec = "0" + currentSec;
            }
            setCurrentTime(currentMin + ":" + currentSec);
        }
    }

    const getTimeRageState = (e: any) => {

        if (music.current) {
            const percentVolume = e.target.value / 100;
            music.current.volume = percentVolume;
        }
    }
    
    return (
        <>
            <div className="video-area">
                <div className="video-wrapper">
                    <video ref={music} 
                        onLoadedMetadata={getCurrentDuration}
                        onTimeUpdate={getCurrentTimeVideo}
                    >
                        <source src={video} type="video/mp4" />
                    </video>
                    <div className="controls-wrapper">
                        <div className="basic-controls">
                            <button className="btn-backwards-video" onClick={backwardVideo}></button>
                            {!togglePlay ? 
                                <button className="btn-pause-video" onClick={pauseMusic}></button> :
                                <button className="btn-play-video" onClick={playMusic}></button>
                            }
                            <button className="btn-forwards-video" onClick={forwardVideo}></button>
                        </div>
                        <div className="timer-area">
                            <span className="current-time">{currentTime}</span>/<span className="duration">{duration}</span>
                        </div>
                        <div className="volume-range">
                            <input type="range" onChange={getTimeRageState}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoComponent