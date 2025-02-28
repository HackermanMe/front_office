import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HousesService } from '../services/houses/houses.service';
import { LandsService } from '../services/lands/lands.service';
import { CarsService } from '../services/cars/cars.service';
import { House } from '../models/house';
import { Land } from '../models/land';
import { Car } from '../models/cars';

@Component({
  selector: 'app-body',
  standalone: false,
  
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent implements OnInit {
  houses: House[] = [];
  lands: Land[] = [];
  cars: Car[] = [];
  loading = true;
  error = '';
  url = 'http://localhost:8080';

  constructor(
    private housesService: HousesService,
    private landsService: LandsService,
    private carsService: CarsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAllData();
  }

  private loadAllData(): void {
    this.loading = true;
    
    // Charger les maisons
    this.housesService.findAll().subscribe({
      next: (response) => {
        this.houses = response.data.slice(0, 6); // Limiter à 6 éléments
        console.log('Maisons chargées:', this.houses);
      },
      error: (error) => {
        this.error = 'Erreur lors du chargement des maisons';
        console.error(error);
      }
    });

    // Charger les terrains
    this.landsService.findAll().subscribe({
      next: (response) => {
        this.lands = response.data.slice(0, 6); // Limiter à 6 éléments
        console.log('Terrains chargés:', this.lands);
      },
      error: (error) => {
        this.error = 'Erreur lors du chargement des terrains';
        console.error(error);
      }
    });

    // Charger les voitures
    this.carsService.findAll().subscribe({
      next: (response) => {
        this.cars = response.data.slice(0, 6); // Limiter à 6 éléments
        console.log('Voitures chargées:', this.cars);
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Erreur lors du chargement des voitures';
        console.error(error);
        this.loading = false;
      }
    });
  }

  // Navigation vers les détails
  viewHouseDetails(id: string): void {
    this.router.navigate(['houses', id]);
  }

  viewLandDetails(id: string): void {
    this.router.navigate(['lands', id]);
  }

  viewCarDetails(id: string): void {
    this.router.navigate(['cars', id]);
  }

  
}
