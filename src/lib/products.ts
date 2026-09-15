import barbedWire from "@/assets/product-barbed-wire.jpg";
import chainLink from "@/assets/product-chain-link.jpg";
import knottedFence from "@/assets/product-knotted-fence.jpg";
import poultryMesh from "@/assets/product-poultry-mesh.jpg";
import giWire from "@/assets/product-gi-wire.jpg";
import weldedMesh from "@/assets/product-welded-mesh.jpg";

export const products = [
  {
    slug: "barbed-wire",
    name: "Barbed Wire",
    image: barbedWire,
    description: "Strong galvanized barbed wire for dependable boundary protection across farms, plots and industrial sites.",
    uses: ["Agricultural boundaries", "Open plots", "Industrial perimeters"],
    features: ["Sharp, consistent barbs", "Galvanized finish", "Easy to install and maintain"],
  },
  {
    slug: "chain-link-fencing",
    name: "Chain Link Fencing",
    image: chainLink,
    description: "A versatile mesh fencing solution that combines clear visibility with reliable perimeter security.",
    uses: ["Homes and plots", "Sports grounds", "Farms and institutions"],
    features: ["Uniform diamond mesh", "Flexible installation", "Durable galvanized wire"],
  },
  {
    slug: "knotted-fence",
    name: "Knotted Fence",
    image: knottedFence,
    description: "Field fencing designed to protect crops, livestock and large agricultural boundaries efficiently.",
    uses: ["Crop protection", "Livestock enclosures", "Large farm boundaries"],
    features: ["Strong knotted joints", "Wide-area coverage", "Adaptable to uneven terrain"],
  },
  {
    slug: "poultry-mesh",
    name: "Poultry Mesh",
    image: poultryMesh,
    description: "Lightweight hexagonal wire mesh for safe, practical poultry and small-animal enclosures.",
    uses: ["Poultry sheds", "Animal enclosures", "Garden protection"],
    features: ["Consistent hexagonal weave", "Easy handling", "Practical everyday protection"],
  },
  {
    slug: "binding-gi-wire",
    name: "Binding & GI Wire",
    image: giWire,
    description: "Clean, versatile galvanized wire suited to binding, fabrication and general-purpose applications.",
    uses: ["Construction binding", "Fabrication", "General farm and workshop use"],
    features: ["Smooth finish", "Consistent gauge", "Convenient coiled supply"],
  },
  {
    slug: "3d-welded-mesh",
    name: "3D Welded Mesh",
    image: weldedMesh,
    description: "Modern rigid-panel fencing for clean, high-security boundaries around commercial properties.",
    uses: ["Factories and warehouses", "Commercial campuses", "Premium property boundaries"],
    features: ["Rigid welded construction", "Reinforced 3D bends", "Clean architectural appearance"],
  },
] as const;

export type Product = (typeof products)[number];