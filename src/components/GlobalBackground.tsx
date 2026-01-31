
import { FloatingShapes } from './FloatingShapes';
import { ParticleBackground } from './ParticleBackground';

export const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-background">
      {/* 3D Floating Shapes Background - Keeping opacity low for minimal look */}
      <div className="absolute inset-0 opacity-20">
        <FloatingShapes />
      </div>
      
      {/* Particle Background - Subtle */}
      <div className="absolute inset-0 opacity-40">
        <ParticleBackground />
      </div>
    </div>
  );
};
