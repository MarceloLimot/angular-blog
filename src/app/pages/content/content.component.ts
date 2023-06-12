import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-2O8Dn0ZY83qZi4zZEqzE4ZnX41qh7iEDpg&usqp=CAU"
  contentTitle:string="TUDO SOBRE STAR WARS"
  contentDescription:string="Star Wars é uma franquia do tipo space opera estadunidense criada pelo cineasta George Lucas, que conta com uma série de nove filmes de fantasia científica e dois spin-offs."
  private id:string | null="0"


  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id =value.get("id")
    )
    this.setValuesToComponent(this.id)

  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(
                    article => article.id.toString() == id
    )[0]

    if(result!=null){
      this.contentTitle = result.title
      this.photoCover =result.photo
      this.contentDescription =result.description
    }

  }

}
