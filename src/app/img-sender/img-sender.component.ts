import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { nextTick } from 'process';
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-img-sender',
  templateUrl: './img-sender.component.html',
  styleUrls: ['./img-sender.component.css']
})
export class ImgSenderComponent implements OnInit {

  imgSelected: File;
  imgPreview;

  constructor(private service: FileService) { }

  ngOnInit(): void {
  }

  onFileChanged(event) {
    console.log(event);
    this.imgSelected = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL( this.imgSelected );
    reader.onload =  (event) => {this.imgPreview = reader.result};
  }

  onUpload(){
    if( this.imgSelected ){

      console.log(this.imgSelected)
      this.service.sendFile(this.imgSelected).subscribe((next) => console.log(next));

    }
  }

}
