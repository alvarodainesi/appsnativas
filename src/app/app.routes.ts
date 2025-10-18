import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { ContactsPage } from './pages/contact-page/contact-page';
import { ContactDetailsPage } from './pages/contact-details/contact-details';
import { LoggedLayout } from './layout/logged-layout/logged-layout';
import { Groups } from './pages/groups/groups';
export const routes: Routes = [
  {
    path: "login",
    component: LoginPage
  },
  {
    path: "",
    component: LoggedLayout,
    children: [
      {
        path: "",
        component: ContactsPage
      },
      {
        path: "contacts/:id",
        component: ContactDetailsPage
      },
    ]
  },

];