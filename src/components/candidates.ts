export interface Candidate {
    id: number;
    name: string;
    photo: string;
    number: string;
    year: number;
  }
  
  export const candidates: Candidate[] = [
    {
      id: 1,
      name: "Park Jimin",
      photo: "/foto1.jpg",
      number: "01",
      year: 2024,
    },
    {
      id: 2,
      name: "Kim Taehyung",
      photo: "/foto2.jpg",
      number: "02",
      year: 2024,
    },
    {
        id: 3,
        name: "Kim Namjoon",
        photo: "/foto3.jpg",
        number: "03",
        year: 2024,
      },
  
  ];
  