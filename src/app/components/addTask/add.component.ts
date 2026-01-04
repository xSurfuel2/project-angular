import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-addTask",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"],
  standalone: true,
  imports: [FormsModule]
})
export class AddComponent {

  numberTasks: number = 10;
  titleTasks: string = "";
  activeButton: boolean = true; // true = deshabilitado

  sendTask(): void {
    const sizeTitleTask = this.titleTasks.trim().length;

    if (sizeTitleTask > 3) {
      this.activeButton = false; // habilita el botón
    } else {
      this.activeButton = true;  // deshabilita el botón
    }

    console.log(`Tarea enviada con éxito ${this.titleTasks}`);
  }
}
