import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {ArtObject, TilesInfo} from '../../shared/interface/art-object';

import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {TilesDetailInfo} from '../../shared/interface/art-object-detail';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ArtObjectService {
  private _artObjects = new BehaviorSubject<ArtObject[]>([]);
  private _objectsCount = new BehaviorSubject<number>(0);

  private artObjectsUrl = 'https://www.rijksmuseum.nl/api/en/collection';
  private apiKey = 'SPFrrQIf';
  private params = new HttpParams(
    {
      fromObject: {
        key: this.apiKey,
        involvedMaker: 'Rembrandt+van+Rijn',
        p: '1',
        ps: '10'
      }
    });

  readonly artObjects = this._artObjects.asObservable();
  readonly objectsCount = this._objectsCount.asObservable();

  constructor(private http: HttpClient) {}

  public getArtObjects(params = this.params): void {
    this.http.get<TilesInfo>(this.artObjectsUrl, {params}).subscribe(
      val => {
        this._objectsCount.next(Object.assign({}, val).count);
        this._artObjects.next(Object.assign({}, val).artObjects);
      }
    );
  }

  // ToDo Search Art Item
  public searchArtObjects(term: string): void {
    const params = this.params.append('q', term);
    this.getArtObjects(params);
  }

  public searchArtObjectsByType(type: string): void {
    const params = this.params.append('s', type);
    this.getArtObjects(params);
  }

  public getArtObject(id: string): Observable<TilesDetailInfo> {
    const params = new HttpParams().set('key', this.apiKey);
    return this.http.get<any>(`https://www.rijksmuseum.nl/api/en/collection/${id}`, {params})
      .pipe( map(data => data as TilesDetailInfo));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console
      return of(result as T);
    };
  }
}
