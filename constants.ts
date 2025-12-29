import { ServiceCategory, ServiceItem, ProductItem } from './types';

export const APP_NAME = "SafeNet Solutions";

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: 'High-Tensile Invisible Grill',
    category: ServiceCategory.INVISIBLE_GRILL,
    description: 'Aesthetically pleasing safety grills made from 316 Marine Grade Stainless Steel. Does not obstruct views while providing maximum safety for balconies.',
    imageUrl: 'https://scontent.fblr22-2.fna.fbcdn.net/v/t39.30808-6/482959271_1190257523109080_8415173085419701164_n.jpg?stp=c159.0.963.963a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=714c7a&_nc_ohc=zOnjqfPH_dQQ7kNvwHiCF_7&_nc_oc=Adkxn3fZk_Y-1sapBqJ9fHCEYNvKIko4VnWMNWX5QlgmJACePr78Omsfa8U3gd8hYxZj08RvnD_CACkhGJ7n4kiU&_nc_zt=23&_nc_ht=scontent.fblr22-2.fna&_nc_gid=h9MELu0xX3zS8YsH4FAurQ&oh=00_AfkqkgdCRlsJFrcewvEqN4FSwxtu_wvXyCw0dT2qs6hseQ&oe=6958738E',
    features: ['Rust Proof', 'Anti-Cut 316 SS', 'Zero Maintenance', 'Unobstructed View']
  },
  {
    id: 's2',
    title: 'Residential Bird Netting',
    category: ServiceCategory.BIRD_NETTING,
    description: 'Keep pigeons and other birds away from your balconies and windows without harming them using our durable HDPE nets.',
    imageUrl: 'https://scontent.fblr22-1.fna.fbcdn.net/v/t39.30808-6/486611773_1200339078767591_8753691184154325481_n.jpg?stp=c0.20.750.750a_dst-jpg_s206x206_tt6&_nc_cat=108&ccb=1-7&_nc_sid=50ad20&_nc_ohc=SS7y3DnBGuwQ7kNvwGmWwcD&_nc_oc=AdmO4_aBSElrKL4PIll3aRANdG_plKVwb5z9suT5htNLXKccvTV_hkq_oJKWjZz_oWRCrOjnu7Jx0I9yng0eMO5r&_nc_zt=23&_nc_ht=scontent.fblr22-1.fna&_nc_gid=EvHwRwWLkwh1UZYPxGi65Q&oh=00_Afmv0_NHdQ5rZudmoC0-Y6zr8_VNlrlVVeCycMRUMzJc1Q&oe=69584F7A',
    features: ['UV Resistant', 'High Durability', 'Available in Black/White', 'Professional Installation']
  },
  {
    id: 's3',
    title: 'General Pest Control',
    category: ServiceCategory.PEST_CONTROL,
    description: 'Comprehensive pest control solutions for cockroaches, ants, termites, and bed bugs using eco-friendly chemicals.',
    imageUrl: 'https://scontent.fblr22-2.fna.fbcdn.net/v/t39.30808-6/494208440_1235474555254043_6335673686580052770_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=111&ccb=1-7&_nc_sid=714c7a&_nc_ohc=KoXzqTUSOTkQ7kNvwE4CdbF&_nc_oc=AdnX65PR1nwrtiTGGWVk44BpMWDwu5p3GRmxAW6R_5gsKPS5FCMUJseqedu6QpoOc7Mwv7qxXsQZZoWsAaRD8FzE&_nc_zt=23&_nc_ht=scontent.fblr22-2.fna&_nc_gid=Fvri5VdhbrpXMBnmgHVtNw&oh=00_AfkXRJgGqpiqpl0tK8qN6LMQteFN0LLx3qcvwS-ISli8Ww&oe=69586E8A',
    features: ['Odorless Treatment', 'Child Safe', 'Long-lasting Effect', 'Certified Experts']
  },
  {
    id: 's4',
    title: 'Industrial Bird Spikes',
    category: ServiceCategory.BIRD_NETTING,
    description: 'Installation of polycarbonate or stainless steel spikes on ledges, AC units, and pipes to prevent bird perching.',
    imageUrl: 'https://scontent.fblr22-2.fna.fbcdn.net/v/t39.30808-6/486521197_1200339092100923_6749316086928707732_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=105&ccb=1-7&_nc_sid=50ad20&_nc_ohc=NjBJEBIVhcsQ7kNvwHRixsm&_nc_oc=Adlhj_-7rp5dk1szFF5Adzj4EXAoHejyyk8MlM9NFwHkuohS79ygn4CvsjeMOdye6ti4yBHYWqXAdQY5WBRg2w1_&_nc_zt=23&_nc_ht=scontent.fblr22-2.fna&_nc_gid=EvHwRwWLkwh1UZYPxGi65Q&oh=00_AfnDZTIWm65fCkiLg6bCO5LOUMnUdqODWSjVxgo8mJ4law&oe=69586549',
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
    imageUrl: 'https://scontent.fblr22-2.fna.fbcdn.net/v/t39.30808-6/471256873_1130507522130442_3411640189630828070_n.jpg?stp=c33.0.194.194a_dst-jpg_s194x194_tt6&_nc_cat=111&ccb=1-7&_nc_sid=714c7a&_nc_ohc=q0X3Dv59d5EQ7kNvwFhQBbh&_nc_oc=AdmwFkNlhFTEmFnm2V8Qz1sPBJhxdlLErqDpqqP_B8Isrw2jvWqC99RY9hNjF6VszjRaBreIlSFfDWmxLD-ATLWI&_nc_zt=23&_nc_ht=scontent.fblr22-2.fna&_nc_gid=6-c9e8AwEFzQQA8YC_HfVw&oh=00_AfnDSn-YL9k71S7JB2mzHiyPMs8uXDzbsZu6YOmULQgVug&oe=69585B57',
    description: 'Powder-coated aluminum track housing for invisible grill cables.',
    inStock: true
  },
  {
    id: 'igm-2',
    name: 'SS Screws (Pack of 100)',
    category: 'Invisible Grill Materials',
    price: 8,
    imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.hEd0zW_IsgNEm87mZVVh9AHaFj?pid=Api&P=0&h=180',
    description: 'High-grade stainless steel screws for rust-free installation.',
    inStock: true
  },
  {
    id: 'igm-3',
    name: 'Nylon Wall Fisher (Pack of 100)',
    category: 'Invisible Grill Materials',
    price: 5,
    imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.y9O_epPJXWLTMLHLPuJQEAHaHa?pid=Api&P=0&h=180',
    description: 'Heavy-duty wall anchors for securing tracks to concrete.',
    inStock: true
  },
  {
    id: 'igm-4',
    name: 'Steppner / Stiffener',
    category: 'Invisible Grill Materials',
    price: 3,
    imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.Z9iTAluuu6Lcj9g_RYI4kAHaFj?pid=Api&P=0&h=180',
    description: 'Tensioning device to keep grill cables tight and straight.',
    inStock: true
  },
  {
    id: 'igm-5',
    name: 'Copper Ferrules (Pack of 100)',
    category: 'Invisible Grill Materials',
    price: 15,
    imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.XDREHjAQN8UUnD_aWTTuuQHaEE?pid=Api&P=0&h=180',
    description: 'Pure copper crimps for locking wire ends securely.',
    inStock: true
  },
  // {
  //   id: 'igm-6',
  //   name: '316 SS Wire (1kg Roll)',
  //   category: 'Invisible Grill Materials',
  //   price: 45,
  //   imageUrl: 'https://picsum.photos/seed/sswire/400/400',
  //   description: '316 Marine Grade Stainless Steel cable with nylon coating.',
  //   inStock: true
  // },
  // {
  //   id: 'igm-7',
  //   name: 'SS I-Hooks (Pack of 50)',
  //   category: 'Invisible Grill Materials',
  //   price: 12,
  //   imageUrl: 'https://picsum.photos/seed/ihooks/400/400',
  //   description: 'Stainless steel eye-hooks for varied mounting needs.',
  //   inStock: true
  // },

  // Bird Netting Materials
  {
    id: 'bnm-1',
    name: 'HDPE Bird Net (Per SqFt)',
    category: 'Bird Netting Materials',
    price: 2,
    imageUrl: 'https://scontent.fblr22-1.fna.fbcdn.net/v/t39.30808-6/486611773_1200339078767591_8753691184154325481_n.jpg?stp=c0.20.750.750a_dst-jpg_s206x206_tt6&_nc_cat=108&ccb=1-7&_nc_sid=50ad20&_nc_ohc=SS7y3DnBGuwQ7kNvwGmWwcD&_nc_oc=AdmO4_aBSElrKL4PIll3aRANdG_plKVwb5z9suT5htNLXKccvTV_hkq_oJKWjZz_oWRCrOjnu7Jx0I9yng0eMO5r&_nc_zt=23&_nc_ht=scontent.fblr22-1.fna&_nc_gid=EvHwRwWLkwh1UZYPxGi65Q&oh=00_Afmv0_NHdQ5rZudmoC0-Y6zr8_VNlrlVVeCycMRUMzJc1Q&oe=69584F7A',
    description: 'UV stabilized, knotted high-density polyethylene netting.',
    inStock: true
  },
  // {
  //   id: 'bnm-2',
  //   name: 'SS J-Hooks (Pack of 50)',
  //   category: 'Bird Netting Materials',
  //   price: 10,
  //   imageUrl: 'https://picsum.photos/seed/jhooks/400/400',
  //   description: 'Stainless steel J-hooks for framing the net area.',
  //   inStock: true
  // },
  // {
  //   id: 'bnm-3',
  //   name: 'SS Wire for Net (100m)',
  //   category: 'Bird Netting Materials',
  //   price: 35,
  //   imageUrl: 'https://picsum.photos/seed/netwire/400/400',
  //   description: 'Braided stainless steel wire rope for creating the net frame.',
  //   inStock: true
  // },
  // {
  //   id: 'bnm-4',
  //   name: 'Safety Net (Construction/Fall Protection)',
  //   category: 'Bird Netting Materials',
  //   price: 60,
  //   imageUrl: 'https://picsum.photos/seed/safetynet/400/400',
  //   description: 'Double-layered heavy-duty safety net for construction or balconies.',
  //   inStock: true
  // },
  // {
  //   id: 'bnm-5',
  //   name: 'Screw Pins (Pack of 50)',
  //   category: 'Bird Netting Materials',
  //   price: 8,
  //   imageUrl: 'https://picsum.photos/seed/screwpins/400/400',
  //   description: 'Anchoring pins for securing wire ropes to walls.',
  //   inStock: true
  // },
  // {
  //   id: 'bnm-6',
  //   name: 'Turn Buckles (SS)',
  //   category: 'Bird Netting Materials',
  //   price: 5,
  //   imageUrl: 'https://picsum.photos/seed/turnbuckle/400/400',
  //   description: 'Stainless steel tensioners to tighten the main frame wire.',
  //   inStock: true
  // },

  // Bird Spikes
  {
    id: 'bs-1',
    name: 'SS Bird Spikes (1 ft Strip)',
    category: 'Bird Spikes',
    price: 6,
    imageUrl: 'https://scontent.fblr22-2.fna.fbcdn.net/v/t39.30808-6/486521197_1200339092100923_6749316086928707732_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=105&ccb=1-7&_nc_sid=50ad20&_nc_ohc=NjBJEBIVhcsQ7kNvwHRixsm&_nc_oc=Adlhj_-7rp5dk1szFF5Adzj4EXAoHejyyk8MlM9NFwHkuohS79ygn4CvsjeMOdye6ti4yBHYWqXAdQY5WBRg2w1_&_nc_zt=23&_nc_ht=scontent.fblr22-2.fna&_nc_gid=EvHwRwWLkwh1UZYPxGi65Q&oh=00_AfnDZTIWm65fCkiLg6bCO5LOUMnUdqODWSjVxgo8mJ4law&oe=69586549',
    description: 'Durable stainless steel spikes on a flexible base.',
    inStock: true
  },
  {
    id: 'bs-2',
    name: 'Polycarbonate Bird Spikes (1 ft Strip)',
    category: 'Bird Spikes',
    price: 4,
    imageUrl: 'https://scontent.fblr22-1.fna.fbcdn.net/v/t39.30808-6/486611773_1200339078767591_8753691184154325481_n.jpg?stp=c0.20.750.750a_dst-jpg_s206x206_tt6&_nc_cat=108&ccb=1-7&_nc_sid=50ad20&_nc_ohc=SS7y3DnBGuwQ7kNvwGmWwcD&_nc_oc=AdmO4_aBSElrKL4PIll3aRANdG_plKVwb5z9suT5htNLXKccvTV_hkq_oJKWjZz_oWRCrOjnu7Jx0I9yng0eMO5r&_nc_zt=23&_nc_ht=scontent.fblr22-1.fna&_nc_gid=EvHwRwWLkwh1UZYPxGi65Q&oh=00_Afmv0_NHdQ5rZudmoC0-Y6zr8_VNlrlVVeCycMRUMzJc1Q&oe=69584F7A',
    description: 'Transparent, weather-resistant polycarbonate spikes.',
    inStock: true
  },

  // Pleated Mosquito Net
  // {
  //   id: 'pmn-1',
  //   name: 'Pleated Mosquito Net (Complete Setup)',
  //   category: 'Mosquito Net',
  //   price: 15,
  //   imageUrl: 'https://picsum.photos/seed/mosquitonet/400/400',
  //   description: 'Custom fit pleated mesh system. Price per square foot.',
  //   inStock: true
  // }
];