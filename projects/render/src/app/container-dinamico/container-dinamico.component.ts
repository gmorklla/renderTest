import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  Input
} from '@angular/core';
import { InputGeneralComponent } from 'projects/input-general/src/public_api';
import { FormGroup } from '@angular/forms';
import { InputBase } from '../input-base';

@Component({
  selector: 'app-container-dinamico',
  templateUrl: './container-dinamico.component.html',
  styleUrls: ['./container-dinamico.component.css']
})
export class ContainerDinamicoComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;
  @Input() control: InputBase<any>;
  @Input() form: FormGroup;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.createComponent();
  }

  createComponent() {
    const componentToRender = InputGeneralComponent;
    this.container.clear();
    const factory = this.resolver.resolveComponentFactory(componentToRender);
    const componentRef = this.container.createComponent(factory);
    componentRef.instance['control'] = this.control;
    componentRef.instance['form'] = this.form;
  }
}
