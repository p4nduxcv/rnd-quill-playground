import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  editform: FormGroup;

  ngOnInit() {
    this.editform = new FormGroup({
      editor: new FormControl(null),
    });
  }
}
