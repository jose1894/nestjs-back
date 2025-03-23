import { IsString, MinLength } from "class-validator";

export class CreateTaskDto{
  id: number;

  @IsString()
  @MinLength(1)
  title: string;

  @IsString()
  @MinLength(1)
  description: string;
}