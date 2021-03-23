import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/Article.model';
import { Country } from '../../models/Country.model';
import { ArticleService } from '../../services/article.service';
import { ArticleResult } from '../../models/ArticleResult.model';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-busqueda-pais',
  templateUrl: './busqueda-pais.component.html',
  styleUrls: ['./busqueda-pais.component.css']
})
export class BusquedaPaisComponent implements OnInit {
  listCountries: Array<Country> = new Array<Country>();
  articles: Array<Article> = new Array<Article>();
  country: string;

  constructor(
    private articleService: ArticleService,
    private filterService: FilterService
  ) { }

  ngOnInit(): void {
    this.articleService.getArticlesByCountry().subscribe(
      (articles: ArticleResult) => {
        this.articles = articles.resultados;
        this.filterService.changeFilters(articles.filtros);
      }
    );
  }

  searchArticlesByCountry(countrySelected: string): void {
  }

}
