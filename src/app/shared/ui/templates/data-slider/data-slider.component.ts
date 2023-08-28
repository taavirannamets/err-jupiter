import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-data-slider',
  templateUrl: './data-slider.component.html',
  styleUrls: ['./data-slider.component.scss'],
})
export class DataSliderComponent implements OnInit {
  @Input() frontPageData: any = {};
  frontPageHeader: string = ''; // Initialize as an empty string
  categoryData: any[] = []; // Initialize as an empty array

  @ViewChild('listSlider', { static: false }) listSlider!: ElementRef;

  ngOnInit(): void {
    const frontPage = this.frontPageData;
    this.frontPageHeader = frontPage.header || '';
    this.categoryData = frontPage.data || [];
  }

  ngAfterViewInit(): void {
    // Now we can access listWrapper without errors
  }

  scrollLeft() {
    const scrollAmount = window.innerWidth * 0.75;
    this.listSlider.nativeElement.scrollLeft -= scrollAmount;
    // console.log('scrolled left');
  }

  scrollRight() {
    const scrollAmount = window.innerWidth * 0.75;
    this.listSlider.nativeElement.scrollLeft += scrollAmount;
    // console.log('scrolled right');
  }
}
