import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, ActivatedRoute, Router} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MeshProductService } from '../_services/MeshProduct.service';
import { MeshProduct } from '../_models/meshProduct';

@Injectable()
export class MeshProductEditResolver implements Resolve<MeshProduct> {
    constructor(private meshProductService: MeshProductService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Observable<MeshProduct> {
        // tslint:disable-next-line:no-string-literal
        return this.meshProductService.getProduct(route.params['id']).pipe(
            catchError(error => {
                console.log('Problem retrieving your data');
                return of(null);
            })
        );
    }
}
