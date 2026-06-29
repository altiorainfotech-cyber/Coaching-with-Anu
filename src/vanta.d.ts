declare module "vanta/dist/vanta.birds.min" {
  type VantaEffect = { destroy: () => void };
  const BIRDS: (options: Record<string, unknown>) => VantaEffect;
  export default BIRDS;
}
