import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loading: boolean = false;
  public lodingText: string = '';
  constructor() { }

  setLoading(loading: boolean, lodingText: string) {
    this.loading = loading;
    this.lodingText = lodingText;
  }

  getLoading(): boolean {
    return this.loading;
  }
}
