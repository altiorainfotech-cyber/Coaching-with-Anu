"use client";

import { Component, type ReactNode } from "react";
import Spline from "@splinetool/react-spline";

const SCENE_URL = "https://prod.spline.design/dwSY49QIo-NLE7Q9/scene.splinecode";

/** Swallows Spline load/parse errors so a bad scene can't crash the page. */
class SplineBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    // On failure render nothing — the section's dark background shows through.
    return this.state.failed ? null : this.props.children;
  }
}

/**
 * Spline 3D scene used as a full-bleed section background.
 * Fills its positioned parent; the parent should be `relative` + `overflow-hidden`.
 */
export default function SplineScene() {
  return (
    <div aria-hidden="true" className="absolute inset-0 h-full w-full">
      <SplineBoundary>
        <Spline scene={SCENE_URL} className="!h-full !w-full" />
      </SplineBoundary>
    </div>
  );
}
