/**
 * Блок відображення навичок резюме
 */

import { Skills } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";

export class SkillsBlock implements IBlock {
  constructor(private d: Skills) {}

  /**
   * Рендеринг блоку навичок
   *
   * TODO: Реалізуйте метод для відображення категорій навичок
   * та їх списків у вигляді HTML елементів
   */
  render(): HTMLElement {
    // Створюємо секцію
    const sec = document.createElement("section");
    sec.className = "section skills";
    sec.innerHTML = "<h2>Skills</h2>";

    Object.entries(this.d).forEach(([category, items]) => {
      const ul = document.createElement("ul");
      ul.className = "skills-list";
      (items as string[]).forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });
      const p = document.createElement("p");
      p.innerHTML = `<strong>${category}</strong>`;
      sec.appendChild(p);
      sec.appendChild(ul);
    });
    return sec;
  }
}
