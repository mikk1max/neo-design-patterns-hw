/**
 * Патерн Composite (Компоновщик)
 *
 * Блок досвіду роботи, який містить дочірні блоки проєктів
 */

import { Experience } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";
import { ProjectBlock } from "./ProjectBlock";
import { HighlightDecorator } from "../decorators/HighlightDecorator";

export class ExperienceBlock implements IBlock {
  constructor(private d: Experience[]) {}

  render(): HTMLElement {
    const container = document.createElement("section");
    container.className = "section experience";
    container.innerHTML = "<h2>Experience</h2>";

    this.d.forEach(exp => {
      const item = document.createElement("div");
      item.className = "experience-item";
      item.innerHTML = `<strong>${exp.position}</strong> at ${exp.company} (${exp.start} – ${exp.end})`;

      exp.projects.forEach(project => {
        let block: IBlock = new ProjectBlock(project);
        if (project.isRecent) block = new HighlightDecorator(block);
        item.appendChild(block.render());
      });

      container.appendChild(item);
    });

    return container;
  }
}
