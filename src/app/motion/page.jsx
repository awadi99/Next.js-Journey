"use client"
import { useEffect, useRef } from "react";

export default function ShaderHero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    // ===== VERTEX SHADER =====
    const vertexShaderSource = `
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
        vUv = position * 0.5 + 0.5;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // ===== FRAGMENT SHADER (MONSTER CORE) =====
    const fragmentShaderSource = `
      precision highp float;
      uniform float uTime;
      uniform vec2 uResolution;
      varying vec2 vUv;

      float wave(vec2 p) {
        return sin(p.x * 6.0 + uTime) * 0.12 +
               sin(p.y * 4.0 + uTime * 1.4) * 0.12;
      }

      void main() {
        vec2 uv = vUv;
        uv.y += wave(uv);

        vec2 center = uv - 0.5;
        float dist = length(center);

        vec3 purple = vec3(0.78, 0.2, 0.9);
        vec3 deep = vec3(0.05, 0.02, 0.1);

        float glow = smoothstep(0.65, 0.15, dist);
        vec3 color = mix(deep, purple, glow);

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const compile = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const vs = compile(gl.VERTEX_SHADER, vertexShaderSource);
    const fs = compile(gl.FRAGMENT_SHADER, fragmentShaderSource);

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    // Fullscreen quad
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "uTime");
    const uResolution = gl.getUniformLocation(program, "uResolution");

    let start = performance.now();

    const render = () => {
      const time = (performance.now() - start) * 0.001;
      gl.uniform1f(uTime, time);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(render);
    };

    render();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="relative h-screen w-screen bg-black overflow-hidden brightness-90 contrast-150">
      {/* GPU SHADER */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* TEXT OVERLAY */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center text-white">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Aditya Waghmare
          </h1>
          <p className="mt-2 text-sm text-white/70">
            Frontend & MERN Stack Developer
          </p>
          <p className="mt-1 text-xs text-white/50">
            React · Node · Express · MongoDB · Tailwind · WebGL
          </p>
        </div>
      </div>
    </div>
  );
}
