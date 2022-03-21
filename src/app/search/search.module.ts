import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';

import { SearchComponent } from './components/search/search.component';
import { SharedModule } from '../shared/shared.module';
import { SearchResultComponent } from './components/search-result/search-result.component';

@NgModule({
  declarations: [SearchComponent, SearchResultComponent],
  imports: [CommonModule, SharedModule, SearchRoutingModule]
})
export class SearchModule {}
