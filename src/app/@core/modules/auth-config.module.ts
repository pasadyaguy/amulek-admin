import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    AuthModule.forRoot({
      config: {
        authority: environment.auth.authority,
        redirectUrl: window.location.origin + `/pages/callback`,
        postLogoutRedirectUri: window.location.origin + `/pages/logged-off`,
        clientId: environment.auth.clientID,
        secureRoutes: [
          'http://localhost/project',
          environment.auth.secureRoute,
        ],
        scope: `openid profile email ${environment.auth.scopes} offline_access`, // 'openid profile ' + your scopes
        responseType: 'code',
        useRefreshToken: true,
        silentRenew: true,
        renewTimeBeforeTokenExpiresInSeconds: 600,
        unauthorizedRoute: '/pages/unauthorized',
        logLevel: LogLevel.Debug,
      },
    }),
  ],
  exports: [AuthModule],
})
export class AuthConfigModule {}
