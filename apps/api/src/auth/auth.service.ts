import { ForbiddenException, Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto';
import * as argon from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private config: ConfigService, private jwt: JwtService) {}
  async login(loginDto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: loginDto.email,
      },
    });
    if (!user) {
      throw new ForbiddenException('Invalid credentials, email error');
    }
    const passwordMatches = await argon.verify(
      user.password,
      loginDto.password,
    );
    if (!passwordMatches) {
      throw new ForbiddenException('Invalid credentials, Password error');
    }
    return this.signToken(user.id, user.email);
  }

  async register(signUpDto: SignUpDto) {
    try {
      const { password } = signUpDto;
      const pwdhash = await argon.hash(password);

      const user = {
        ...signUpDto,
        password: pwdhash,
      };

      const createdUser = await this.prisma.user.create({
        data: user,
      });

      return this.signToken(createdUser.id, createdUser.email);
    } catch (error) {
      console.error('Error while registering user:', error);
      throw new Error('Error while registering user');
    }
  }

  async signToken(userId: string, email: string): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };
    const secret = this.config.get("JWT_SECRET");
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '1d',
      secret: secret,
    });
    return {
      access_token: token,
    };
  }
}
