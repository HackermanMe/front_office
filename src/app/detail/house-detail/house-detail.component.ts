import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { House } from '../../models/house';
import { HousesService } from '../../services/houses/houses.service';

@Component({
  selector: 'app-house-detail',
  standalone: false,
  
  templateUrl: './house-detail.component.html',
  styleUrl: './house-detail.component.css'
})
export class HouseDetailComponent {
  house: House = {} as House;
  loading = true;
  error = '';
  url = 'http://localhost:8080';

  constructor(
    private route: ActivatedRoute,
    private housesService: HousesService
  ) {}

  ngOnInit(): void {
    this.loadHouseDetails();
  }

  private loadHouseDetails(): void {
    const trackingId = this.route.snapshot.paramMap.get('trackingId');
    if (trackingId) {
      this.housesService.findById(trackingId).subscribe({
        next: (response) => {
          this.house = response.data;
          this.loading = false;
          console.log('Maison chargée:', this.house);
        },
        error: (error) => {
          this.error = 'Erreur lors du chargement de la maison';
          this.loading = false;
          console.error('Erreur:', error);
        }
      });
    }
  }
}
