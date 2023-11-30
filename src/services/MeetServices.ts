import { HttpApiServices } from './HttpApiServices';

export class MeetServices extends HttpApiServices {
  baseUrl = '/meet';

  async getMeets() {
    return this.get(this.baseUrl);
  }

  async getMeetById(id: string) {
    return this.get(`${this.baseUrl}/${id}`);
  }

  async getObjectsById(id: string) {
    return this.get(`${this.baseUrl}/objects/${id}`);
  }

  async deleteMeetById(id: string) {
    return this.delete(`${this.baseUrl}/${id}`);
  }

  async addMeet(data: any) {
    return this.post(this.baseUrl, data);
  }
}
