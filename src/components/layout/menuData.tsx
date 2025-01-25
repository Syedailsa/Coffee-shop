interface MenuI{
    id :number ;
    image: {
      src: string; 
      alt: string;
    };
    flavour: string;
    price: number;
    priceBefore: number;
  }
  
  export const menuData: MenuI[] = [
    {
      id :1 ,
      image: {
        src: "/IcedCaramelMacchiato.png",
        alt: 'coffee card',
      },
      flavour: 'Iced Caramel Macchiato',
      price: 16.00,
      priceBefore: 32.00
    },
    {
      id :2 ,
      image: {
        src: "/IcedMocha.png",
        alt: 'coffee card',
      },
      flavour: 'Iced Mocha',
      price: 16.00,
      priceBefore: 20.00
    },{
      id :3 ,
      image: {
        src: "/MochaSmoothie.png",
        alt: 'coffee card',
      },
      flavour: 'Mocha Smoothie',
      price: 16.00,
      priceBefore: 40.00
    },{
      id: 4,
      image: {
        src: "/VanillaIcedCoffe.png",
        alt: 'coffee card',
      },
      flavour: 'Vanilla Iced Coffee',
      price: 16.00,
      priceBefore: 40.00
    },{
      id:5,
      image: {
        src: "/VietnemeseCoconutCoffe.png",
        alt: 'coffee card',
      },
      flavour: 'Vietnemese Coconut Coffee',
      price: 16.00,
      priceBefore: 40.00
    },{
      id:6,
      image: {
        src: "/SaltedCaramelLatte.png",
        alt: 'coffee card',
      },
      flavour: 'Salted Caramel Latte',
      price: 20.00,
      priceBefore: 50.00
    }
  ]
  
  