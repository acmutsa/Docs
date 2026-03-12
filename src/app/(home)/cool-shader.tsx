"use client";
import { Ascii, FallingLines, Preview, Shader } from "shaders/react";

export default function CoolShader() {
  // return <Preview shader="e277b1bc-0d56-4350-8ca4-06a39f894b4a" />;
  return (
    <Shader>
      <Ascii characters=".">
        <FallingLines
          angle={135}
          strokeWidth={1.2}
          opacity={0.1}
          speed={0.2}
          speedVariance={0.5}
        />
      </Ascii>
    </Shader>
  );
}
