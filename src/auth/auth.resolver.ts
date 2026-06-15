import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { SignupResponse, SignupInput ,LoginInput,LoginResponse} from 'src/graphql';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
        constructor(
                private userService: UsersService,
                private authService: AuthService,
        ) { }

        @Mutation('signup')
        signupUser(
                @Args('signupInput')
                signupInput: SignupInput,
        ): Promise<SignupResponse> {
                return this.userService.create(signupInput);
        }

        @Query("login")
        async loginUser(
                @Args("loginInput")
                loginInput: LoginInput
        ): Promise<LoginResponse> {
                return this.authService.login(loginInput);
        }
}
