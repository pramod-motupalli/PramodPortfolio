/// <reference types="react" />

import { ReactNode } from 'react';

declare module '@react-three/fiber' {
  export interface CanvasProps {
    children?: ReactNode;
    camera?: any;
    [key: string]: any;
  }

  export function Canvas(props: CanvasProps): JSX.Element;
}

declare module '@react-three/drei' {
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

// Extend JSX namespace to include Three.js elements
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

export {};
