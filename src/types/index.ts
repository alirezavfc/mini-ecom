export type Category = "mobile" | "laptop" | "tablet";

export type OperatingSystem =
  | "android"
  | "ios"
  | "windows"
  | "symbian"
  | "linux"
  | "macos";

export interface Product {
  id: number;
  name: string;
  brand: string;
  category: Category;
  price: number;
  year: number;
  screenSize: number; // Inch
  os: OperatingSystem;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
