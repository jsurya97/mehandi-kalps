import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable()
export class CommonService {
  constructor(public deviceDetector :DeviceDetectorService){

  }

  isMobile(){
    return this.deviceDetector.isMobile()
  }
}