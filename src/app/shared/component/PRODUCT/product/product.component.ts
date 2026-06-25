import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/Iproduct';
import { ProductService } from 'src/app/shared/service/productService';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../../GETCONFIRM/get-confirm/get-confirm.component';
import { SanckbarService } from 'src/app/shared/service/snackbar.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  productId!: number;
  productObj!: Iproduct;
  constructor(
    private _productService: ProductService,
    private _activeRoutes: ActivatedRoute,
    private _matDialog: MatDialog,
    private _snackbar: SanckbarService,
    private _router : Router
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.productId = +this._activeRoutes.snapshot.paramMap.get('productId')!;
    this._productService.fetchProductById(this.productId).subscribe({
      next: (data) => {
        this.productObj = data;
      },
    });
  }

  onRemove() {
    let matConfig = new MatDialogConfig();
    matConfig.width = '400px';
    matConfig.disableClose = true;
    matConfig.data = `Are you sure to remove the produixt with id ${this.productId}..?`;
    let _matref = this._matDialog.open(GetConfirmComponent, matConfig);
    _matref.afterClosed().subscribe((c) => {
      if (c) {
        this._productService.onRemoveProduct(this.productId).subscribe({
          next: (res) => {
            this._snackbar.openSnackBar(res.msg);
            this._router.navigate(['products'])
            
          },
        });
      }
    });
  }
}
