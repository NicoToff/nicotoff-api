import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
  getApi(): string {
    return "You found the api :D";
  }
}
