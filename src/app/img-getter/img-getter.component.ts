import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-img-getter',
  templateUrl: './img-getter.component.html',
  styleUrls: ['./img-getter.component.css']
})
export class ImgGetterComponent implements OnInit {

  selectedId = 0;
  idList: number[] = [];
  base64data: any;
  filename: string;
  image: string;
  downloadUrl: SafeResourceUrl;

  constructor( private service: FileService, private sanitizer: DomSanitizer ) {}

  ngOnInit(): void {
    this.service.getIds().subscribe( (next) => {
      this.idList = next
    });
  }

  onGet() {
    this.service.getFile(this.selectedId).subscribe(response => {
      console.log(response);
      this.downloadUrl = /*this.sanitizer.bypassSecurityTrustResourceUrl(*/ 'data:' + response.body.type + ';base64,'+response.body.bytes// );

      if( response.status == 200 ){
        this.filename = response.body.name;
        if( response.body.type.startsWith('image/') ) {
          this.base64data = response.body.bytes;
          this.image = 'data:' + response.body.type + ';base64,'+this.base64data;
        }
        else
          this.image = undefined;
          
          
      } 
    });
  }

  onReload() {
    this.service.getIds().subscribe( (next) => {
      this.idList = next;
    })
  }

}
