import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Juego } from 'src/app/interfaces/juego';
import { VideojuegosService } from 'src/app/services/videojuegos.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  public closeResult! : any;
  public juego! : Juego;
  constructor( private modalService : NgbModal, private videoJuegoService : VideojuegosService ) { }

  ngOnInit(): void {
    
    this.juego = this.videoJuegoService.juego;

  }

  


}
