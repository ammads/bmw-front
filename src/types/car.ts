export interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    large?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    thumbnail?: ImageFormat;
  };
  url: string;
  ext: string;
  mime: string;
  size: number;
  provider: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Car {
  id: number;
  documentId: string;
  description: string;
  model: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  horsepower:  number;
  year: number;
  engine: string;
  motor: string;
  images: Image; // Define this as an object, not an array
}
