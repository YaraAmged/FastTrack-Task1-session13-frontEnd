class Controller {
  constructor(model) {
    this.model = model;
  }
  counterIncrement() {
    this.model.imageCounterData[this.model.selectedImageIndex].count++;
  }
  handleImageOnClick(index) {
    this.model.selectedImageIndex = index;
    console.log(this.model.selectedImageIndex);
  }
  get modelImages() {
    return this.model.imageCounterData;
  }
  get modelSelectedImage() {
    return this.model.selectedImageIndex;
  }
}

export { Controller };
