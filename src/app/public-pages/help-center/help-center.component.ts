import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.component.html',
  styleUrls: ['./help-center.component.scss'],
})
export class HelpCenterComponent implements OnInit {
  @ViewChild('searchStr') searchStrInput!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    // TODO
  }

  search(event: SubmitEvent) {
    event.preventDefault();
    console.log('TODO: implement search', this.searchStrInput.nativeElement.value);
    // TODO: implement search
  }
}
