import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'angular-mahjongle';
  currentRoute: string;

  constructor(private http: HttpClient) {
    this.currentRoute = '\\';
  }

  ngOnInit() {

    const httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',
        'Authorization':'authkey',
        'userid':'1'
      })
    };

    this.http.get('/api/Tile/GetBambooTiles', httpOptions).subscribe({
      next: (r) => console.log(r),
      error: (e) => console.log(e),
      complete: () => console.log('complete!')  
    });
  }
}
