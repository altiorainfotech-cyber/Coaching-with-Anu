"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight raw-WebGL animated gradient-mesh background.
 * Domain-warped fbm noise mapped onto a blue/white palette — no external libs.
 * Falls back to a static frame when prefers-reduced-motion is set, and
 * silently no-ops if WebGL is unavailable.
 */
const FRAG = `
precision highp float;
uniform float u_time;
uniform vec2  u_resolution;

float hash(vec2 p){
  p = fract(p * vec2(123.34, 345.45));
  p += dot(p, p + 34.345);
  return fract(p.x * p.y);
}
float noise(vec2 p){
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0;
  float a = 0.5;
  for(int i = 0; i < 5; i++){
    v += a * noise(p);
    p *= 2.0;
    a *= 0.5;
  }
  return v;
}
void main(){
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec2 p  = uv * vec2(u_resolution.x / u_resolution.y, 1.0) * 1.7;
  float t = u_time * 0.045;

  vec2 q = vec2(fbm(p + vec2(0.0, t)), fbm(p + vec2(5.2, 1.3) - t));
  vec2 r = vec2(fbm(p + 4.0 * q + vec2(1.7, 9.2) + t),
                fbm(p + 4.0 * q + vec2(8.3, 2.8) - t));
  float f = fbm(p + 4.0 * r);

  vec3 base   = vec3(0.016, 0.027, 0.075); // deep navy-black
  vec3 mid    = vec3(0.063, 0.145, 0.420); // brand blue, dim
  vec3 glow   = vec3(0.231, 0.510, 0.965); // brand-500
  vec3 bright = vec3(0.486, 0.706, 1.000); // light blue highlight

  vec3 col = mix(base, mid, clamp(f * 1.7, 0.0, 1.0));
  col = mix(col, glow, clamp(r.x * 0.75, 0.0, 1.0));
  // glowing hotspots
  col += bright * pow(clamp(q.y, 0.0, 1.0), 3.0) * 0.7;
  col += glow * pow(clamp(f, 0.0, 1.0), 4.0) * 0.5;

  // soft spotlight beaming from top-center
  float d = distance(uv, vec2(0.5, 0.92));
  col += glow * smoothstep(1.05, 0.0, d) * 0.22;

  // vignette to keep edges dark and focus the center
  col *= 1.0 - 0.55 * pow(distance(uv, vec2(0.5, 0.5)) * 1.25, 2.0);

  gl_FragColor = vec4(col, 1.0);
}
`;

const VERT = `
attribute vec2 a_pos;
void main(){ gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const sh = gl.createShader(type)!;
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  return sh;
}

export default function WebGLBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl =
      (canvas.getContext("webgl") as WebGLRenderingContext) ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext);
    if (!gl) return;

    const program = gl.createProgram()!;
    gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, VERT));
    gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
    const aPos = gl.getAttribLocation(program, "a_pos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "u_time");
    const uRes = gl.getUniformLocation(program, "u_resolution");

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth * dpr;
      const h = canvas.clientHeight * dpr;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
      gl.uniform2f(uRes, w, h);
    };

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let raf = 0;
    const render = (ms: number) => {
      resize();
      gl.uniform1f(uTime, ms * 0.001);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (!reduced) raf = requestAnimationFrame(render);
    };

    window.addEventListener("resize", resize);
    render(0);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}
