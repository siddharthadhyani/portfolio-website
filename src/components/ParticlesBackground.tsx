import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-10"
      options={{
        particles: {
          number: {
            value: 100,
          },
          color: {
            value: "#ffffff",
          },
          move: {
            enable: true,
            speed: 0.5,
          },
          size: {
            value: 2,
          },
        },
      }}
    />
  );
}