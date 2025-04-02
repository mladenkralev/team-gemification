import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {KudosModel} from "../models/kudos.model";
import {LeaderboardEntry} from "../models/leaderboard-entry.model";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KudosService {

  constructor(private http: HttpClient) {}

  getKudos(): Observable<KudosModel[]> {
    return this.http.get<KudosModel[]>('/assets/kudos.mock.json');
  }

  getLeaderboard(by: string): Observable<LeaderboardEntry[]> {
    return this.http.get<LeaderboardEntry[]>(`/api/leaderboard?by=${by}`);
  }
}
