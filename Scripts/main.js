import { Model } from "./model.js";
import { Controller } from "./controller.js";
import { View } from "./view.js";

function main() {
  const model = new Model();
  const controller = new Controller(model);
  const view = new View(controller);
}
main();
