import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [UsersModule, PassportModule.register({ session: true }), JwtModule.register(
        {
            secret: "Kopihitam645_",
            signOptions: {
                expiresIn: "60s"
            }
        }
    )],
    providers: [AuthService, LocalStrategy, SessionSerializer, JwtStrategy],
    exports: [AuthService]
})
export class AuthModule { }
