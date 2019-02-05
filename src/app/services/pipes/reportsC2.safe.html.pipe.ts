import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'reportsC2SafeHtml'})
export class ReportsC2SafeHtmlPipe {
  constructor(private sanitizer: DomSanitizer){}

  transform(html: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(html);
  }
}