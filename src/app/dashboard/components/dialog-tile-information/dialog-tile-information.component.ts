import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ArtObject} from '../../../shared/interface/art-object';
import {ArtObjectDetail} from '../../../shared/interface/art-object-detail';

@Component({
  selector: 'app-dialog-tile-information',
  templateUrl: './dialog-tile-information.component.html',
  styleUrls: ['./dialog-tile-information.component.scss']
})
export class DialogTileInformationComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogTileInformationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ArtObjectDetail) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
