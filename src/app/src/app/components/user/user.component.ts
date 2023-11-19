import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { OperatingSystem } from '../../interfaces/operating-system';
import { OperatingSystemService } from '../../core/operating-system.service';

@Component({
  selector: 'user-component',
  standalone: true,
  imports: [CommonModule, UpperCasePipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() ocuppation: string = 'user';
  @Output() greet: EventEmitter<string> = new EventEmitter<string>();
  OperatingSystemService: OperatingSystemService = inject(
    OperatingSystemService
  );
  OperatingSystems: OperatingSystem[] =
    this.OperatingSystemService.getOperatingSystem();
  username: string = 'zNenuko';
  doesUserExist: boolean = true;

  isEditable: boolean = true;

  onMouseOver(osname: string): void {
    console.log(osname);
  }

  emitToParent(): void {
    this.greet.emit('Hi! I am a Child!');
  }
}
