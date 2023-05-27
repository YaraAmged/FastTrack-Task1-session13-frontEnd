class Model {
  constructor() {
    this.imageCounterData = [
      {
        id: 1,
        count: 0,
        name: "Captain America",
        Image: "/Images/captain-america-2012-version_marvel_square.jpg",
      },
      {
        id: 2,
        count: 0,
        name: "Doctor Strange",
        Image: "/Images/doctor-900x900.jpg",
      },
      {
        id: 3,
        count: 0,
        name: "Iron Man",
        Image: "/Images/marvavenim2019001_cov-900x900.jpg",
      },
    ];
    this.selectedImageIndex = 0;
  }
}
export { Model };
