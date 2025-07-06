import { useEffect, useState, useMemo } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  type: 'white' | 'dark';
}

interface GalaxyParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

export default function SpaceBackground() {
  // Pre-generate data to avoid loading lag
  const initialStars = useMemo(() => 
    Array.from({ length: 400 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      type: Math.random() > 0.15 ? 'white' : 'dark' as 'white' | 'dark'
    })), []
  );

  const initialGalaxyParticles = useMemo(() => 
    Array.from({ length: 120 }, (_, i) => ({
      id: i + 400,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 0.5,
      delay: Math.random() * 20
    })), []
  );

  const [stars, setStars] = useState<Star[]>(initialStars);
  const [galaxyParticles, setGalaxyParticles] = useState<GalaxyParticle[]>(initialGalaxyParticles);

  useEffect(() => {
    // Create static twinkling stars (more white, fewer dark)
    const staticStars = Array.from({ length: 400 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      type: Math.random() > 0.15 ? 'white' : 'dark' as 'white' | 'dark'
    }));

    // Create galaxy particles that move across screen
    const particles = Array.from({ length: 120 }, (_, i) => ({
      id: i + 400,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 0.5,
      delay: Math.random() * 20
    }));

    setStars(staticStars);
    setGalaxyParticles(particles);
  }, []);

  return (
    <>
      <div className="space-background"></div>
      
      {/* Static twinkling stars */}
      <div className="galaxy-stars">
        {stars.map(star => (
          <div
            key={star.id}
            className={`star ${star.type === 'white' ? 'star-white' : 'star-dark'}`}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Moving galaxy particles */}
      <div className="moving-galaxy">
        {galaxyParticles.map(particle => (
          <div
            key={particle.id}
            className="galaxy-particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>
    </>
  );
}