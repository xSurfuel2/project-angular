import { AfterContentInit, Component, OnDestroy, OnInit } from "@angular/core";
import { AppRoutingModule } from "../../app-routing-module";

@Component({
  selector: "app-addTask",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"],
  imports: [AppRoutingModule]
})
export class AddComponent implements OnDestroy, AfterContentInit{

  /*ngOnInit(): void {
    console.log("Creandose desde el ngOnInit");
  }
  constructor() {
    console.log("Creandose desde el constructor");
  }*/

  ngOnDestroy(): void {
    console.log("El componente ha sido destruido");
  }

  ngAfterContentInit(): void {
    console.log("El contenido proyectado ha sido inicializado");
  }
}
