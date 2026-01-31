declare module '@react-three/fiber' {
  import { ReactNode } from 'react';
  import * as THREE from 'three';

  export interface CanvasProps {
    children?: ReactNode;
    camera?: any;
    [key: string]: any;
  }

  export function Canvas(props: CanvasProps): JSX.Element;
  
  export interface ThreeElements {
    mesh: any;
    icosahedronGeometry: any;
    ambientLight: any;
    directionalLight: any;
    pointLight: any;
    [key: string]: any;
  }
}

declare module '@react-three/drei' {
  import { ReactNode } from 'react';

  export interface FloatProps {
    children?: ReactNode;
    speed?: number;
    rotationIntensity?: number;
    floatIntensity?: number;
    [key: string]: any;
  }

  export function Float(props: FloatProps): JSX.Element;

  export interface MeshDistortMaterialProps {
    color?: string;
    attach?: string;
    distort?: number;
    speed?: number;
    roughness?: number;
    metalness?: number;
    [key: string]: any;
  }

  export function MeshDistortMaterial(props: MeshDistortMaterialProps): JSX.Element;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      icosahedronGeometry: any;
      ambientLight: any;
      directionalLight: any;
      pointLight: any;
      group: any;
      [key: string]: any;
    }
  }
}
