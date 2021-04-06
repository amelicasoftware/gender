import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/Article.model';
import { ArticleResult } from '../../models/ArticleResult.model';
import { ArticleService } from '../../services/article.service';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-busqueda-general',
  templateUrl: './busqueda-general.component.html',
  styleUrls: ['./busqueda-general.component.css']
})
export class BusquedaGeneralComponent implements OnInit {
  articles: Array<Article> = new Array<Article>();

  search: string;
  searchCopy: string;
  finalPositionPage: number;
  totalResults: number;
  positionPage = 1;
  view = true;
  results = true;
  imgTable = 'assets/img/icons/table.png';
  imgList = 'assets/img/icons/list-act.png';

  constructor(
    private articleService: ArticleService,
    private filterService: FilterService
  ) { }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe(
      (articles: ArticleResult) => {
        this.articles = articles.resultados;
        this.filterService.changeFilters(articles.filtros);
      }
    );
  }

  public searchArticles(search: string): void {

  }

  changeView(state: boolean): void {
    this.view = state;
    if (state) {
      this.imgTable = 'assets/img/icons/table.png';
      this.imgList = 'assets/img/icons/list-act.png';
    } else {
      this.imgTable = 'assets/img/icons/table-act.png';
      this.imgList = 'assets/img/icons/list.png';
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
