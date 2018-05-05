import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
    this.subscription = this.regresaObservable()
      .subscribe(
        (numero) => console.log('Subscripcion:', numero),
        (error) => console.error('Error en el observador', error),
        () => console.log('El observador termino!')
      );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable(
      (observer) => {
        let contador = 0;
        let intervalo = setInterval(
          () => {
            contador += 1;
            let salida = {
              valor: contador
            };

            //emite un contador cada segundo
            observer.next(salida);

            // if (contador === 3) {
            //   clearInterval(intervalo);
            //   observer.complete();
            // }
            // if (contador === 2) {
            //   observer.error('auxilio!');
            // }
          }, 500);

          return {
            unsubscribe() {
              console.log('unsubscribe!');
              clearInterval(intervalo);
            }
          };
      }
    ).pipe<any>(
      retry(2),
      map( (data:any) => data.valor),
      filter( (valor: number, index) => (valor % 2 === 1))
    );
  }

}
