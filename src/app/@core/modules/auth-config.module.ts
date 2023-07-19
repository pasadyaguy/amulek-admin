import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  AuthInterceptor,
  AuthModule,
  LogLevel,
  OpenIdConfiguration,
} from 'angular-auth-oidc-client';
import { environment } from 'src/environments/environment';

let x: OpenIdConfiguration;
@NgModule({
  imports: [
    AuthModule.forRoot({
      config: {
        authority: '{authority}',
        redirectUrl: window.location.origin + `/pages/callback`,
        postLogoutRedirectUri: window.location.origin + `/pages/logged-off`,
        clientId: environment.clientID,
        secureRoutes: ['http://localhost/project'],
        scope: 'openid profile email offline_access', // 'openid profile ' + your scopes
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
