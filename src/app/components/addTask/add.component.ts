import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: "app-addTask",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"]
})
export class AddComponent implements OnDestroy{

  /*ngOnInit(): void {
    console.log("Creandose desde el ngOnInit");
  }
  constructor() {
    console.log("Creandose desde el constructor");
  }*/

  ngOnDestroy(): void {
    console.log("El componente ha sido destruido");
  }

}
