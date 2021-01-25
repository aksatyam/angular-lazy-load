import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

  constructor(public http: HttpClient) {
  
   }

  ngOnInit(): void {
    this.http.get('https://restcountries.eu/rest/v2/all')
    .subscribe(res => {
      console.log(res);
    })
  }

}
