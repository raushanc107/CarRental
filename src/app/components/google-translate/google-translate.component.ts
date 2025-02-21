import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var google: any;
@Component({
  selector: 'app-google-translate',
  imports: [],
  templateUrl: './google-translate.component.html',
  styleUrl: './google-translate.component.scss',
})
export class GoogleTranslateComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    this.loadGoogleTranslate();
  }

  loadGoogleTranslate() {
    // const script = document.createElement('script');
    // script.type = 'text/javascript';
    // script.src =
    //   '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    // document.head.appendChild(script);

    this.googleTranslateElementInit();
  }

  googleTranslateElementInit() {
    new google.translate.TranslateElement(
      {
        pageLanguage: 'hi',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      'google_translate_element'
    );
  }
}
