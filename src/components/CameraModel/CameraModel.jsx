import React from 'react'

export default function CameraModel() {
  return (
    <div>
        <div className="camera">
      <div className="camera-top">
        <div className="viewfinder"></div>
        <div className="flash"></div>
      </div>
      <div className="camera-body">
        <div className="lens">
          <div className="lens-inner"></div>
          <div className="lens-reflection"></div>
        </div>
        <div className="shutter-button"></div>
      </div>
    </div>
    </div>
  )
}
