import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Land } from '../../models/land';
import { LandsService } from '../../services/lands/lands.service';

@Component({
  selector: 'app-land-detail',
  standalone: false,
  templateUrl: './land-detail.component.html',
  styleUrl: './land-detail.component.css'
})
export class LandDetailComponent {
  land: Land = {} as Land;
  loading = true;
  error = '';
  url = 'http://localhost:8080';

  constructor(
    private route: ActivatedRoute,
    private landsService: LandsService
  ) {}

  ngOnInit(): void {
    this.loadLandDetails();
  }

  private loadLandDetails(): void {
    const trackingId = this.route.snapshot.paramMap.get('trackingId');
    if (trackingId) {
      this.landsService.findById(trackingId).subscribe({
        next: (response) => {
          this.land = response.data;
          this.loading = false;
          console.log('Terrain chargé:', this.land);
        },
        error: (error) => {
          this.error = 'Erreur lors du chargement du terrain';
          this.loading = false;
          console.error('Erreur:', error);
        }
      });
    }
  }
}
