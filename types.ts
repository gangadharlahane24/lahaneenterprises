export enum ServiceCategory {
  INVISIBLE_GRILL = 'Invisible Grill',
  BIRD_NETTING = 'Bird Netting',
  PEST_CONTROL = 'Pest Control',
  INSTALLATION = 'Installation Services'
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: ServiceCategory;
  imageUrl: string;
  features: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
  description: string;
  inStock: boolean;
}

export interface CartItem extends ProductItem {
  quantity: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}