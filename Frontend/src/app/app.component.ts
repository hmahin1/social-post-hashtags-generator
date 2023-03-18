import { Component } from '@angular/core';
import {AppService} from './app.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'social-hash-post-generator';
  postSearchInput: string = '';
  hashtagSearchInput: string = '';
  postSelection: string = '';
  hashtagSelection: string = '';
  socialNetworks = [
    'Linkedin',
    'Facebook',
    'Twitter'
  ]
  postResult: string = '';
  hashtagResult: string = '';
  constructor(private appService: AppService) { }
  postSearch() {
    const postSearchObj = {
      "postType":this.postSelection,
      "content":this.postSearchInput,
      "hashtags": true
    }
    this.appService.generatePost(postSearchObj).subscribe(resp=>{
      this.postResult = resp.data ? resp.data : 'No Data Found';
    })
  }

  hashtagSearch() {
    const hashtagSearchObj = {
      "postType":this.hashtagSelection,
      "content":this.hashtagSearchInput,
    }
    this.appService.generateHashtags(hashtagSearchObj).subscribe(resp=>{
      this.hashtagResult = resp.data ? resp.data : 'No Data Found';
    })
  }
}
