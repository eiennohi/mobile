import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy } from '@angular/core';
import { CacheService } from '../../../common/services/cache/cache.service';



@Component({
  moduleId: 'module.id',
  selector: 'batch-activity',
  templateUrl: 'batch-activity.component.html',
  //styleUrls: ['activity.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
  ////styleUrls: ['activity.component.css']
})

export class BatchActivity {

  entity;


  constructor(public cache : CacheService){

  }

  @Input('entity') set _entity(entity){
    this.entity = entity;
    this.cache.set('channel:' + entity.ownerObj.guid, entity.ownerObj, false);
  }

  onLoaded(){
    console.log('fully loaded');
  }

}
