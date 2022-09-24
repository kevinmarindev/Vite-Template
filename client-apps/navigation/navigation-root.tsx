import React from "react"
import { Route, Routes } from "react-router-dom"
import { observer } from "mobx-react-lite"


// Application Screen || App State
// =====================================================================================================================
// =====================================================================================================================
import { MSTContext } from "@MSTContext"
import { IAuthStore } from "@MSTInterfaces"


// Application Navigator || App Imports
// =====================================================================================================================
// ====================================================================================================================='
import { AppLayout } from "@src/routing-app/app-layout/app-layout"
import { AppIndexScreen } from "@src/routing-app/app-screen-index/index-screen"
import { AppAboutScreen } from "@src/routing-app/app-screen-about/about-screen"
import { AppContactScreen } from "@src/routing-app/app-screen-contact/contact-screen"


// Application Navigator || Auth Imports
// =====================================================================================================================
// =====================================================================================================================
import { AuthLayout } from "@src/routing-auth/auth-layout/auth-layout"
import { AuthLoginScreen } from "@src/routing-auth/auth-screen-login/login-screen"
import { AuthLogoutScreen } from "@src/routing-auth/auth-screen-logout/logout-screen"
import { AuthRegisterScreen } from "@src/routing-auth/auth-screen-register/register-screen"


// Application Navigator || Portal Imports
// =====================================================================================================================
// =====================================================================================================================
import { PortalLayout } from "@src/routing-portal/portal-layout/portal-layout"
import { PortalDashboardScreen } from "@src/routing-portal/portal-screen-dashboard/dashboard-screen"
import { PortalSettingsScreen } from "@src/routing-portal/portal-screen-settings/settings-screen"


// Application Navigator || Define Exports
// =====================================================================================================================
// =====================================================================================================================
// The Mobx `observer()` is used to reload the authentication wrapper for the 2 route types ============================
export const NavigationRoot = observer(() => {
  const AuthStore: IAuthStore = MSTContext().AuthStore

  return (
    <div className="wrapper">
      {!AuthStore.token ? (
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<AppIndexScreen />} />
            <Route path="about" element={<AppAboutScreen />} />
            <Route path="contact" element={<AppContactScreen />} />
            <Route path={"/*"} element={<AppIndexScreen />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="login" element={<AuthLoginScreen />} />
            <Route path="logout" element={<AuthLogoutScreen />} />
            <Route path="register" element={<AuthRegisterScreen />} />
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route element={<PortalLayout />}>
            <Route index element={<PortalDashboardScreen />} />
            <Route path="settings" element={<PortalSettingsScreen />} />
            <Route path="logout" element={<AuthLogoutScreen />} />
            <Route path={"/*"} element={<PortalDashboardScreen />} />
          </Route>
        </Routes>
      )}
    </div>
  )
})
