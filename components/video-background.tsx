export function VideoBackground() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="halloween-background-video fixed top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
      style={{
        animation: 'slowMotion 12s linear infinite',
      }}
    >
      <source src="/video-bg.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
