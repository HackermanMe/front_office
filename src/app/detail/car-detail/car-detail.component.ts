import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../../services/cars/cars.service';
import { Car } from '../../models/cars';

@Component({
  selector: 'app-car-detail',
  standalone: false,
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.css'
})
export class CarDetailComponent implements OnInit {
  car: Car = {} as Car;
  loading = true;
  error = '';
  url = 'http://localhost:8080';

  constructor(
    private route: ActivatedRoute,
    private carsService: CarsService
  ) {}

  ngOnInit(): void {
    this.loadCarDetails();
  }

  private loadCarDetails(): void {
    const trackingId = this.route.snapshot.paramMap.get('trackingId');
    if (trackingId) {
      this.carsService.findById(trackingId).subscribe({
        next: (response) => {
          this.car = response.data;
          this.loading = false;
          console.log('Voiture chargée:', this.car);
        },
        error: (error) => {
          this.error = 'Erreur lors du chargement de la voiture';
          this.loading = false;
          console.error('Erreur:', error);
        }
      });
    } else {
      this.error = 'Identifiant de la voiture non trouvé';
      this.loading = false;
    }
  }


}
