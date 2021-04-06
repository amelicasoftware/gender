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

  key: string;
  keyCopy: string;
  finalPositionPage: number;
  totalResults: number;
  positionPage = 1;
  view = true;
  results = true;
  imgTable = 'assets/img/icons/tabla-desactivada.png';
  imgList = 'assets/img/icons/lista-activada.png';

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

  changeView(state: boolean): void {
    this.view = state;
    if (state) {
      this.imgTable = 'assets/img/icons/tabla-desactivada.png';
      this.imgList = 'assets/img/icons/lista-activada.png';
    } else {
      this.imgTable = 'assets/img/icons/tabla-activada.png';
      this.imgList = 'assets/img/icons/lista-desactivada.png';
    }
  }

  goUp(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

}
