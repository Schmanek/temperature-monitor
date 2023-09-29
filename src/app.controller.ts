import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { AppService } from "./app.service";
import { TemperatureInformationDTO } from "./temperature-information.dto";

@Controller()
@UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
export class AppController {
  /**
   * The Service is injected here to be use in the Controller.
   * @param appService
   */
  constructor(private readonly appService: AppService) {}

  /**
   * This Endpoint is used for testing purposes.
   * @returns {string} Hello World!
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /**
   * This Endpoint will return the temperature.
   * @returns {number} The temperature.
   */
  @Get("temperature/:id")
  getTemperature(@Param("id") id: number): number {
    return this.appService.getTemperature(id);
  }

  /**
   * This Endpoint will set the temperature.
   * @param temperature
   */
  @Patch("temperature/:id")
  setTemperature(
    @Param("id") id: number,
    @Body() temperature: TemperatureInformationDTO,
  ): void {
    this.appService.setTemperature(id, temperature.value);
  }
}
