import { Routes } from '@angular/router';
import { SignupComponent } from 'src/app/components/auth/signup/signup.component';
import { SigninComponent } from 'src/app/components/auth/signin/signin.component';
import { BookListComponent } from 'src/app/components/book-list/book-list.component';
import { BookFormComponent } from 'src/app/components/book-list/book-form/book-form.component';
import { SingleBookComponent } from 'src/app/components/book-list/single-book/single-book.component';
import { FourOhFourComponent } from 'src/app/components/four-oh-four/four-oh-four.component';

import { AuthGuardService } from 'src/app/services/auth-guard.service';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'books', canActivate: [AuthGuardService], component: BookListComponent },
  { path: 'books/new', canActivate: [AuthGuardService], component: BookFormComponent },
  { path: 'books/view/:id', canActivate: [AuthGuardService], component: SingleBookComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];
