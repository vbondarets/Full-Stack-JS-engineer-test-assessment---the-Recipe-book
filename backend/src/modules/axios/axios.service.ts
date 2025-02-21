import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AxiosService {
  constructor() {}

  async sendGetRequest<T>(url: string): Promise<T | null> {
    const response = await axios.get(url);
    return response.data || null;
  }
}
