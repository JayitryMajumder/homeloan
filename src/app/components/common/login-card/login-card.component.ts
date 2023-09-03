import { Component, Input } from '@angular/core';
import { IRoleLogin } from '../../../interface/roles'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LogInComponent } from '../log-in/log-in.component';


@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent {
  @Input() dataOnLoginCard : IRoleLogin | undefined;

  constructor(private modalService: NgbModal) {}

  openLoginModal() {
    const modalRef = this.modalService.open(LogInComponent);
  }

}
