import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  /**
   * This variable that will be used as a pseudo database to store temperature values by id.
   */
  private temperatureMap: Map<number, number> = new Map<number, number>();

  /**
   * This method will be called when a get request is made to the root path.
   * It is used for testing purposes.
   * @returns {string} Hello World!
   */
  getHello(): string {
    return "Hello World!";
  }

  /**
   * This method will be called when a get request is made to the /temperature path.
   * It gets the temperature by id.
   * @returns {number} The temperature.
   */
  getTemperature(id: number): number {
    return this.temperatureMap.get(id) ?? 0;
  }

  /**
   * This method will be called when a patch request is made to the /temperature path.
   * It sets the temperature by id.
   * @param temperature
   */
  setTemperature(id: number, temperature: number): void {
    this.temperatureMap.set(id, temperature);
  }
}
