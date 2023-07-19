import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  AuthInterceptor,
  AuthModule,
  LogLevel,
  OpenIdConfiguration,
} from 'angular-auth-oidc-client';

let x: OpenIdConfiguration;
@NgModule({
  imports: [
    AuthModule.forRoot({
      config: {
        authority: 'https://authdev.tgh.org/as',
        redirectUrl: window.location.origin + `/pages/callback`,
        postLogoutRedirectUri: window.location.origin + `/pages/logged-off`,
        clientId: 'd05a4aba-d84c-46da-b1fb-943f5234ec34',
        secureRoutes: ['http://localhost/project', 'https://api.pingone.com'],
        scope: 'openid profile email tgh:api:user offline_access', // 'openid profile ' + your scopes
        responseType: 'code',
        useRefreshToken: true,
        silentRenew: true,
        //renewTimeBeforeTokenExpiresInSeconds: 3540,
        unauthorizedRoute: '/pages/unauthorized',
        logLevel: LogLevel.Debug,
      },
    }),
  ],
  exports: [AuthModule],
})
export class AuthConfigModule {
  static forRoot(): ModuleWithProviders<AuthConfigModule> {
    return {
      ngModule: AuthConfigModule,
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
      ],
    };
  }
}
