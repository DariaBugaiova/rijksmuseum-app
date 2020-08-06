import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import { ArtObject } from '../../../shared/interface/art-object';
import { ArtObjectService } from '../../../core/servises/art-object.service';
import {Observable, Subscription} from 'rxjs';
import {Pagination} from '../../../shared/interface/pagination';
import {HttpParams} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {DialogTileInformationComponent} from '../dialog-tile-information/dialog-tile-information.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit, OnDestroy {
  subscription1$: Subscription = new Subscription();
  subscription2$: Subscription = new Subscription();

  artObjects$: Observable<ArtObject[]>;
  objectsCount$: Observable<number>;

  artObjectsSearch: ArtObject[] = [];
  searchActive = false;

  constructor(private artObjectService: ArtObjectService,
              private changeDetection: ChangeDetectorRef,
              private router: Router,
              private route: ActivatedRoute,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.artObjectService.getArtObjects();

    this.artObjects$ = this.artObjectService.artObjects;
    this.objectsCount$ = this.artObjectService.objectsCount;
  }

  public searchName(term: string): void {
    this.searchActive = true;
    this.artObjectService.searchArtObjects(term);
    this.subscription1$ = this.artObjects$
      .subscribe(val => {
        if (val) {
          this.artObjectsSearch = val;
          this.applyChanges();
        }
      });
  }

  public orderBy(type: string): void {
    this.searchActive = true;
    this.artObjectService.searchArtObjectsByType(type);
    this.subscription2$ = this.artObjects$
      .subscribe(val => {
        if (val) {
          this.artObjectsSearch = val;
          this.applyChanges();
        }
      });
  }

  public clearSearch(ev): void {
    this.searchActive = false;
    this.artObjectService.getArtObjects();
  }

  public showMessageNoResult(): boolean {
    return this.searchActive && !this.artObjectsSearch.length;
  }

  public applyChanges(): void {
    this.changeDetection.detectChanges();
  }

  public goToPage(pagination: Pagination): void {
    const params =  new HttpParams(
      {
        fromObject: {
          key: 'SPFrrQIf',
          involvedMaker: 'Rembrandt+van+Rijn',
          p: pagination.pages + '',
          ps: pagination.pageSize + ''
        }
      });
    // update current page of items
    this.artObjectService.getArtObjects(params);
  }

  openDialog(id: string): void {
      this.artObjectService.getArtObject(id)
        .subscribe( val => {
          if (!val) return;

          const dialogRef = this.dialog.open(
          DialogTileInformationComponent, {
            width: '500px',
            data: val.artObject,
            disableClose: true
          });

          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            if (result) {
              console.log(result);
              this.router.navigate([`/detail-page/${id}`]
              );
            }
          });
        });
  }

  ngOnDestroy(): void {
    this.subscription1$.unsubscribe();
    this.subscription2$.unsubscribe();
  }
}
