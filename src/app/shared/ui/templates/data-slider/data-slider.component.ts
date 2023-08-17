import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ContentDataService } from 'src/app/video/data-access/content-data.service';

@Component({
  selector: 'app-data-slider',
  templateUrl: './data-slider.component.html',
  styleUrls: ['./data-slider.component.scss'],
})
export class DataSliderComponent implements OnInit {
  @Input() frontPageIndex: number = 0; // Initialize with default value
  frontPageHeader: string = ''; // Initialize as an empty string
  categoryData: any[] = []; // Initialize as an empty array

  @ViewChild('listSlider', { static: false }) listSlider!: ElementRef;

  constructor(private contentDataService: ContentDataService) {}

  ngOnInit(): void {
    this.contentDataService.getData().subscribe((data) => {
      const frontPage = data.data.category.frontPage[this.frontPageIndex];
      this.frontPageHeader = frontPage.header;
      this.categoryData = frontPage.data;
    });
  }

  ngAfterViewInit(): void {
    // Now we can access listWrapper without errors
  }

  scrollLeft() {
    const scrollAmount = window.innerWidth * 0.75;
    this.listSlider.nativeElement.scrollLeft -= scrollAmount;
    console.log('scrolled left');
  }

  scrollRight() {
    const scrollAmount = window.innerWidth * 0.75;
    this.listSlider.nativeElement.scrollLeft += scrollAmount;
    console.log('scrolled right');
  }
}
