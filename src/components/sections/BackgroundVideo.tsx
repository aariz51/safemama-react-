import React, { useEffect, useRef } from 'react'

interface BackgroundVideoProps {
  videoUrl: string
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ videoUrl }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      // Ensure video plays on mobile devices
      video.addEventListener('loadeddata', () => {
        video.play().catch((error) => {
          console.log('Video autoplay failed:', error)
        })
      })

      // Handle video errors
      video.addEventListener('error', () => {
        console.log('Video failed to load')
      })
    }
  }, [])

  return (
    <>
      {/* Background Video */}
      <video 
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover z-0"
        autoPlay 
        muted 
        loop 
        playsInline
        preload="auto"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/20 z-0" />
    </>
  )
}

export default BackgroundVideo
