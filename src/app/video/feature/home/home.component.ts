import { Component, OnInit } from '@angular/core';

import { ContentDataService } from '../../data-access/content-data.service';

interface FrontPage {
  highTimeline: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  frontPageData: FrontPage[] = [];

  constructor(private contentDataService: ContentDataService) {}

  ngOnInit(): void {
    this.contentDataService.getData().subscribe((data) => {
      this.frontPageData = data.data.category.frontPage.filter(
        (frontPage: FrontPage) => frontPage.highTimeline === true
      );
    });
  }
}
