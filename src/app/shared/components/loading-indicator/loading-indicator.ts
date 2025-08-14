import { Component, ContentChild, inject, Input, model, OnInit, signal, TemplateRef } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoadingService } from '../../services/loading.service';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';

@Component({
  selector: 'app-loading-indicator',
  templateUrl: "./loading-indicator.html",
  styleUrls: ["./loading-indicator.css"],
  standalone: false
})
export class LoadingIndicatorComponent implements OnInit{
   @Input() detectRouteTransitions = false;
   loading$: Observable<boolean>;
   private loadingService: LoadingService = inject(LoadingService);
   private router: Router = inject(Router);
   
   @ContentChild("loading")
    customLoadingIndicator: TemplateRef<any> | null = null;

   constructor() {
      this.loading$ = this.loadingService.loading$;
   }

   ngOnInit() {
    if (this.detectRouteTransitions) {
      this.router.events
        .pipe(
          tap((event) => {
            if (event instanceof RouteConfigLoadStart) {
              this.loadingService.loadingOn();
            } else if (event instanceof RouteConfigLoadEnd) {
              this.loadingService.loadingOff();
            }
          })
        )
        .subscribe();
    }
  }
}

