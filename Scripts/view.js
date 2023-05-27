class View {
  constructor(controller) {
    this.controller = controller;
    this.container = document.getElementById("root");
    this.render();
  }

  render() {
    this.container.innerHTML = "";
    this.sideImagesWrapper = document.createElement("div");
    this.sideImagesWrapper.classList.add("d-flex", "flex-column", "gap-2");
    this.container.classList.add(
      "d-flex",
      "gap-2",
      "align-items-center",
      "p-5"
    );
    for (const imageData of this.controller.modelImages) {
      const sideImages = `
      <img id="image-${imageData.id}" src="${imageData.Image}"/>

    `;

      this.sideImagesWrapper.innerHTML += sideImages;
    }

    this.container.append(this.sideImagesWrapper);

    for (const [index, image] of this.controller.modelImages.entries()) {
      const imageElement = document.getElementById(`image-${image.id}`);
      imageElement.addEventListener("click", () => {
        this.controller.handleImageOnClick(index);
        this.render();
      });
    }
    const fullImageDiv = document.createElement("div");
    fullImageDiv.innerHTML = `
    <img id="selectedImage" src="${
      this.controller.modelImages[this.controller.modelSelectedImage].Image
    }" />
    <p> ${
      this.controller.modelImages[this.controller.modelSelectedImage].name
    }</p>
    <p> Counter ${
      this.controller.modelImages[this.controller.modelSelectedImage].count
    }</p>
    `;
    this.container.append(fullImageDiv);
    const selectedImage = document.getElementById("selectedImage");
    selectedImage.addEventListener("click", () => {
      this.controller.counterIncrement();
      this.render();
    });
  }
}
export { View };
