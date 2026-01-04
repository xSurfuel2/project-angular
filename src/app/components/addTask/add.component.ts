import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-addTask",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"]
})
export class AddComponent implements OnInit{
  constructor() {
    console.log("Creandose desde el constructor");
  }

ngOnInit(): void {
  console.log("Creandose desde el ngOnInit");
}

}
