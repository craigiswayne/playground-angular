import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class APIRequesterService {
  constructor(private readonly http: HttpClient) {}

  public request(url: string) {
    return this.http.get(url);
  }
}
