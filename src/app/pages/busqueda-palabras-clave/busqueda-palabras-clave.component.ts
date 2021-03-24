import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/Article.model';
import { ArticleService } from '../../services/article.service';
import { FilterService } from '../../services/filter.service';
import { ArticleResult } from '../../models/ArticleResult.model';

@Component({
  selector: 'app-busqueda-palabras-clave',
  templateUrl: './busqueda-palabras-clave.component.html',
  styleUrls: ['./busqueda-palabras-clave.component.css']
})
export class BusquedaPalabrasClaveComponent implements OnInit {
  articles: Array<Article> = new Array<Article>();

  constructor(
    private articleService: ArticleService,
    private filterService: FilterService
  ) { }

  ngOnInit(): void {
    this.articleService.getArticlesByKey().subscribe(
      (articles: ArticleResult) => {
        this.articles = articles.resultados;
        this.filterService.changeFilters(articles.filtros);
      }
    );
  }

  searchArticlesByKey(key: string): void {
  }

}
