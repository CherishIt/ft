import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() modalId: string;
  isOpen = false;

  constructor(
    private modalService: ModalService,
  ) { }

  ngOnInit() {
    this.modalService.registerModal(this);
  }

  close() {
    this.modalService.close(this.modalId);
  }

}
