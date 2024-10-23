import {
  EffectComposer,
  Bloom,
  DepthOfField,
  Vignette,
} from "@react-three/postprocessing";

export const PostProcessing = () => {
  return (
    <EffectComposer>
      <Bloom
        intensity={1.5}
        luminanceThreshold={0.2}
        luminanceSmoothing={0.9}
        height={300}
      />
      <DepthOfField
        focusDistance={0.01}
        focalLength={0.08}
        bokehScale={10}
        height={480}
      />
      <Vignette eskil={false} offset={0.1} darkness={0.5} opacity={2} />
    </EffectComposer>
  );
};
