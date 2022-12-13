import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

// Local Services
import { LocalStorageService, TitleService } from 'src/app/services';
import { CustomService } from '../custom.service';

@Component({
    selector: 'pages',
    templateUrl: './pages.component.html',
})
export class PagesComponent implements OnInit {

    @Input() slug!: string;

    title!: string;
    markdown!: string;
    loading: boolean = true;
    
    constructor(
        private route: ActivatedRoute,
        private http: CustomService,
        private tit: TitleService,
        private local: LocalStorageService
    ) { }

    ngOnInit() {
        if (!this.slug) {
            this.route.params.subscribe( 
                ({slug}) => {
                    this.getData(slug);
                }
            )
        }
        this.heritage();
    }

    heritage(){
        if (this.slug){
            this.getData(this.slug);
        }
    }

    getData(slug: string) {
        this.loading = true
        const projectId = this.local.get_item('site-uuid')
        this.http.get_page(slug, projectId)
            .subscribe( 
                (response: any) => {
                    this.tit.setTitle(response.title);
                    this.title = response.title;
                    this.markdown = response.content;
                    this.loading = false;
                },
                () => {
                    this.title = 'Not Fount';
                    this.markdown = '# 404 not found';
                    this.loading = false;
                }
            )
    }
}
