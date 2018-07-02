import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

@Injectable({
  providedIn: 'root'
})
export class GraphQLService {
  constructor(
    private apollo: Apollo,
    private httpLink: HttpLink
  ) {
    apollo.create({
      link: httpLink.create({ uri: '' }),
      cache: new InMemoryCache(),
    });
  }

}
