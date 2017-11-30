import { Injectable } from '@angular/core';
import { ModalComponent } from '../components/modal/modal.component';

@Injectable()
export class ModalService {
  private modals: Array<ModalComponent>;

  constructor() {
    this.modals = [];
  }

  registerModal(modal: ModalComponent) {
    const cmodal = this.findModal(modal.modalId);
    if (cmodal) {
      this.modals.splice(this.modals.indexOf(cmodal));
    }

    this.modals.push(modal);
  }

  open(modalId: string): void {
    const modal = this.findModal(modalId);
    console.log('open', modal);
    console.log(this.modals);
    if (modal) {
      modal.isOpen = true;
    }
  }

  close(modalId: string): void {
    const modal = this.findModal(modalId);
    if (modal) {
      modal.isOpen = false;
    }
  }

  findModal(modalId): ModalComponent {
    for (const modal of this.modals) {
      if (modal.modalId === modalId) {
        return modal;
      }
    }
  }

}
