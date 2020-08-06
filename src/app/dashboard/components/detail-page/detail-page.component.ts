import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArtObjectService} from '../../../core/servises/art-object.service';
import {ArtObject} from '../../../shared/interface/art-object';
import { Location } from '@angular/common';
import {TilesDetailInfo} from '../../../shared/interface/art-object-detail';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  data: TilesDetailInfo;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private artObjectService: ArtObjectService) { }

  ngOnInit(): void {
    this.getArtObject();
  }

  getArtObject(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.artObjectService.getArtObject(id)
      .subscribe(data => this.data = data);
  }

  goBack(): void {
    this.location.back();
  }
}
