/* tslint:disable */
import { Injectable } from '@angular/core';
import { UserPhoto } from '../../models/UserPhoto';
import { UserCredential } from '../../models/UserCredential';
import { StorageSimpleUpload } from '../../models/StorageSimpleUpload';
import { ProfileData } from '../../models/ProfileData';
import { Maps } from '../../models/Maps';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    UserPhoto: UserPhoto,
    UserCredential: UserCredential,
    StorageSimpleUpload: StorageSimpleUpload,
    ProfileData: ProfileData,
    Maps: Maps,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
