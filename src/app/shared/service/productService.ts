import { Observable, of } from 'rxjs';
import { Iproduct } from '../model/Iproduct';
import { Injectable } from '@angular/core';
import { Ires } from '../model/Ires';




@Injectable({
  providedIn :'root'
})
export class ProductService {
  productsArray: Iproduct[] = [
    {
      productId: 1,
      productName: 'Laptop',
      productImage: 'https://imgs.search.brave.com/bjoHwiYXFXP6Di4axlbYQsDuJQPT4zBwtNI71qtW4cg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI0/MTQ5NjAwNy9waG90/by9hLWhwLXNwZWN0/cmUteDM2MC00ay1v/bGVkLWxhcHRvcC1j/b21wdXRlci10YWtl/bi1vbi1vY3RvYmVy/LTgtMjAyMS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9bVE3/WjNiclNybW9YSkhH/ZS1VaVlrRk9RMl8x/NFRsNDRoVXJfY0Qt/TFJqWT0',
      productDescription: 'Dell laptop with 8GB RAM and 512GB SSD',
      isAvailable: true,
      productPrice: 55000,
      warranty: '1 Year',

      reviews: [
        {
          customerName: 'Rahul',
          rating: 5,
          comment: 'Good Product',
        },
        {
          customerName: 'Amit',
          rating: 4,
          comment: 'Average Product',
        },
      ],
    },
    {
      productId: 2,
      productName: 'Mobile',
      productImage: 'https://imgs.search.brave.com/aczfOTpAc3pC-1uRf4fI1fg8BmatuLBEVmeU12uXmDk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFCcmhuNFdCSUwu/anBn',
      productDescription: 'Android smartphone with 128GB storage',
      isAvailable: true,
      productPrice: 25000,
      warranty: '1 Year',

      reviews: [
        {
          customerName: 'Riya',
          rating: 5,
          comment: 'Product Is Useful',
        },
        {
          customerName: 'Suresh',
          rating: 4,
          comment: 'Value For Money',
        },
      ],
    },
    {
      productId: 3,
      productName: 'Headphones',
      productImage: 'https://imgs.search.brave.com/6hNbNNnY6ZEVO2z1urr-KgkoxlEmfDSgiPz9vA-CH2A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2Nzc4Mzg4/NDc4MDQtNDA1NDE0/M2ZiOTFhP2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZhdXRvPWZvcm1h/dCZmaXQ9Y3JvcCZp/eGxpYj1yYi00LjEu/MCZpeGlkPU0zd3hN/akEzZkRCOE1IeHpa/V0Z5WTJoOE9YeDhh/R1ZoWkhCb2IyNWxj/M3hsYm53d2ZId3dm/SHg4TUE9PQ',
      productDescription: 'Wireless Bluetooth headphones',
      isAvailable: false,
      productPrice: 3000,
      warranty: '2 Year',

      reviews: [
        {
          customerName: 'Priya',
          rating: 4,
          comment: 'Not Good',
        },
      ],
    },
  ];

  fetchAll(): Observable<Iproduct[]> {
    return of(this.productsArray);
  }

  fetchProductById(id : number) : Observable<Iproduct>{
    let productObj = this.productsArray.find(p => p.productId === id)!;
    return of(productObj)
  }

  createNewProduct(productObj : Iproduct): Observable<Ires<Iproduct>>{
    this.productsArray.unshift(productObj);
    return of({
      msg : `New produxt with id ${productObj.productId} is added successfully..! `,
      data : productObj
    })
  }

  onUpdate(updateObj : Iproduct) : Observable<Ires<Iproduct>>{
    let GETINDEX = this.productsArray.findIndex(p =>p.productId === updateObj.productId);
    this.productsArray[GETINDEX]=updateObj;
    return of({
      msg : `Product with id ${updateObj.productId} is updated successfully...!`,
      data : updateObj
    })
  }

  onRemoveProduct(productId : number) : Observable<Ires<Iproduct>>{
    let GETINDEX = this.productsArray.findIndex(p => p.productId === productId);
    let array = this.productsArray.splice(GETINDEX,1);
    return of({
      msg : `The product with id ${productId} is removed successfully..!`,
      data : array[0]
    })
  }
}
