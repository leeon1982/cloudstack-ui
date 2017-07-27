import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';


@Injectable()
export class LocalStorageService extends StorageService {
  constructor() {
    super();
  }

  protected init() {
    this.isStorage = localStorage;
    super.init();
  }
}
