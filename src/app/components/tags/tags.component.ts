import { Component, OnInit, Input} from '@angular/core';
import { FoodService } from 'src/app/services/food/food.service';
import { Tag } from 'src/app/shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{

  @Input() foodPageTags?:string[]
  @Input() justifyContent?:string = 'center'

  tags:Tag[] = []

  constructor(private fs: FoodService){}

  ngOnInit(): void {
    if(!this.foodPageTags){
      this.fs.getAllTag().subscribe(servertags=>{
        this.tags = servertags
      })
    }
  }
}
