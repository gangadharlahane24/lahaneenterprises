import { ServiceCategory, ServiceItem, ProductItem } from './types';

export const APP_NAME = "SafeNet Solutions";

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: 'High-Tensile Invisible Grill',
    category: ServiceCategory.INVISIBLE_GRILL,
    description: 'Aesthetically pleasing safety grills made from 316 Marine Grade Stainless Steel. Does not obstruct views while providing maximum safety for balconies.',
    imageUrl: 'https://picsum.photos/seed/grill1/800/600',
    features: ['Rust Proof', 'Anti-Cut 316 SS', 'Zero Maintenance', 'Unobstructed View']
  },
  {
    id: 's2',
    title: 'Residential Bird Netting',
    category: ServiceCategory.BIRD_NETTING,
    description: 'Keep pigeons and other birds away from your balconies and windows without harming them using our durable HDPE nets.',
    imageUrl: 'https://picsum.photos/seed/net1/800/600',
    features: ['UV Resistant', 'High Durability', 'Available in Black/White', 'Professional Installation']
  },
  {
    id: 's3',
    title: 'General Pest Control',
    category: ServiceCategory.PEST_CONTROL,
    description: 'Comprehensive pest control solutions for cockroaches, ants, termites, and bed bugs using eco-friendly chemicals.',
    imageUrl: 'https://picsum.photos/seed/pest1/800/600',
    features: ['Odorless Treatment', 'Child Safe', 'Long-lasting Effect', 'Certified Experts']
  },
  {
    id: 's4',
    title: 'Industrial Bird Spikes',
    category: ServiceCategory.BIRD_NETTING,
    description: 'Installation of polycarbonate or stainless steel spikes on ledges, AC units, and pipes to prevent bird perching.',
    imageUrl: 'https://picsum.photos/seed/spikes1/800/600',
    features: ['Humane Solution', 'Weather Proof', 'Easy Installation', 'Transparent Base']
  }
];

export const PRODUCTS: ProductItem[] = [
  // Invisible Grill Materials
  {
    id: 'igm-1',
    name: 'Aluminum Track (Per Meter)',
    category: 'Invisible Grill Materials',
    price: 12,
    imageUrl: 'https://picsum.photos/seed/track/400/400',
    description: 'Powder-coated aluminum track housing for invisible grill cables.',
    inStock: true
  },
  {
    id: 'igm-2',
    name: 'SS Screws (Pack of 100)',
    category: 'Invisible Grill Materials',
    price: 8,
    imageUrl: 'https://picsum.photos/seed/screws/400/400',
    description: 'High-grade stainless steel screws for rust-free installation.',
    inStock: true
  },
  {
    id: 'igm-3',
    name: 'Nylon Wall Fisher (Pack of 100)',
    category: 'Invisible Grill Materials',
    price: 5,
    imageUrl: 'https://picsum.photos/seed/fisher/400/400',
    description: 'Heavy-duty wall anchors for securing tracks to concrete.',
    inStock: true
  },
  {
    id: 'igm-4',
    name: 'Steppner / Stiffener',
    category: 'Invisible Grill Materials',
    price: 3,
    imageUrl: 'https://picsum.photos/seed/steppner/400/400',
    description: 'Tensioning device to keep grill cables tight and straight.',
    inStock: true
  },
  {
    id: 'igm-5',
    name: 'Copper Ferrules (Pack of 100)',
    category: 'Invisible Grill Materials',
    price: 15,
    imageUrl: 'https://picsum.photos/seed/ferrules/400/400',
    description: 'Pure copper crimps for locking wire ends securely.',
    inStock: true
  },
  {
    id: 'igm-6',
    name: '316 SS Wire (1kg Roll)',
    category: 'Invisible Grill Materials',
    price: 45,
    imageUrl: 'https://picsum.photos/seed/sswire/400/400',
    description: '316 Marine Grade Stainless Steel cable with nylon coating.',
    inStock: true
  },
  {
    id: 'igm-7',
    name: 'SS I-Hooks (Pack of 50)',
    category: 'Invisible Grill Materials',
    price: 12,
    imageUrl: 'https://picsum.photos/seed/ihooks/400/400',
    description: 'Stainless steel eye-hooks for varied mounting needs.',
    inStock: true
  },

  // Bird Netting Materials
  {
    id: 'bnm-1',
    name: 'HDPE Bird Net (Per SqFt)',
    category: 'Bird Netting Materials',
    price: 2,
    imageUrl: 'https://picsum.photos/seed/birdnet/400/400',
    description: 'UV stabilized, knotted high-density polyethylene netting.',
    inStock: true
  },
  {
    id: 'bnm-2',
    name: 'SS J-Hooks (Pack of 50)',
    category: 'Bird Netting Materials',
    price: 10,
    imageUrl: 'https://picsum.photos/seed/jhooks/400/400',
    description: 'Stainless steel J-hooks for framing the net area.',
    inStock: true
  },
  {
    id: 'bnm-3',
    name: 'SS Wire for Net (100m)',
    category: 'Bird Netting Materials',
    price: 35,
    imageUrl: 'https://picsum.photos/seed/netwire/400/400',
    description: 'Braided stainless steel wire rope for creating the net frame.',
    inStock: true
  },
  {
    id: 'bnm-4',
    name: 'Safety Net (Construction/Fall Protection)',
    category: 'Bird Netting Materials',
    price: 60,
    imageUrl: 'https://picsum.photos/seed/safetynet/400/400',
    description: 'Double-layered heavy-duty safety net for construction or balconies.',
    inStock: true
  },
  {
    id: 'bnm-5',
    name: 'Screw Pins (Pack of 50)',
    category: 'Bird Netting Materials',
    price: 8,
    imageUrl: 'https://picsum.photos/seed/screwpins/400/400',
    description: 'Anchoring pins for securing wire ropes to walls.',
    inStock: true
  },
  {
    id: 'bnm-6',
    name: 'Turn Buckles (SS)',
    category: 'Bird Netting Materials',
    price: 5,
    imageUrl: 'https://picsum.photos/seed/turnbuckle/400/400',
    description: 'Stainless steel tensioners to tighten the main frame wire.',
    inStock: true
  },

  // Bird Spikes
  {
    id: 'bs-1',
    name: 'SS Bird Spikes (1 ft Strip)',
    category: 'Bird Spikes',
    price: 6,
    imageUrl: 'https://picsum.photos/seed/ssspikes/400/400',
    description: 'Durable stainless steel spikes on a flexible base.',
    inStock: true
  },
  {
    id: 'bs-2',
    name: 'Polycarbonate Bird Spikes (1 ft Strip)',
    category: 'Bird Spikes',
    price: 4,
    imageUrl: 'https://picsum.photos/seed/polyspikes/400/400',
    description: 'Transparent, weather-resistant polycarbonate spikes.',
    inStock: true
  },

  // Pleated Mosquito Net
  {
    id: 'pmn-1',
    name: 'Pleated Mosquito Net (Complete Setup)',
    category: 'Mosquito Net',
    price: 15,
    imageUrl: 'https://picsum.photos/seed/mosquitonet/400/400',
    description: 'Custom fit pleated mesh system. Price per square foot.',
    inStock: true
  }
];