import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArtObjectService} from '../../../core/servises/art-object.service';
import { Location } from '@angular/common';
import {ArtObjectDetail, TilesDetailInfo} from '../../../shared/interface/art-object-detail';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  data: TilesDetailInfo;

  readonly types: Array<{name: string, link: string, prop_name: string}> = [
    {name: 'object type', link: 'type', prop_name: 'objectTypes'},
    {name: 'material', link: 'material', prop_name: 'materials'},
    {name: 'technique', link: 'technique', prop_name: 'techniques'}];

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

  getParam(t: {name: string, link: string, prop_name: string}): string {
    const params = new HttpParams();
    const url = '/dashboard';
    if (t.link) {
      params.append(t.link, t.prop_name);
    }
    return  url + params.toString();
  }

  get tags(): string[] {
    return this.data ? this.data.artObjectPage.tags : null;
  }

  get artObject(): ArtObjectDetail {
    return this.data ? this.data.artObject : null;
  }
}
