import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { ServiceDoctores } from '../../services/service.doctores';

@Component({
  selector: 'app-doctores-component',
  standalone: false,
  styleUrl: './doctores-component.css',
  templateUrl: './doctores-component.html',
})
export class DoctoresComponent implements OnInit {
  arraydoctores: Doctor[] = []

  constructor(
    private _service: ServiceDoctores,
    private _cdr: ChangeDetectorRef
  ){}

  async ngOnInit(): Promise<void> {
    this.arraydoctores = await this._service.getDoctoresAsync()
    this._cdr.detectChanges()
  }
}
