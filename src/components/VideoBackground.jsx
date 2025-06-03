const VideoBackground = () => {
    return (
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: -1,
        }}
        src="/src/assets/Ref.mp4"
        type="video/mp4"
      />
    );
  };
  
  export default VideoBackground;
  