import { Controller, Post, Body, ValidationPipe, UseGuards, Req } from "@nestjs/common";
import { GetUser } from "./get-user.decorator";
import { AuthGuard } from "@nestjs/passport";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { AuthService } from "./auth.service";
import { User } from "./user.entity";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/signup")
  signup(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto) {
    return this.authService.signUp(authCredentialsDto);
  }
  @Post("/signin")
  signin(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto) {
    return this.authService.signin(authCredentialsDto);
  }

  @Post("/test")
  @UseGuards(AuthGuard())
  test(@GetUser() user: User) {
    console.log(user);
  }
}
