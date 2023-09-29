import { IsNumber } from "class-validator";

export class TemperatureInformationDTO {
  @IsNumber()
  public value: number;
}
